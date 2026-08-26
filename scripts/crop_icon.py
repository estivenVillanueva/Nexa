from PIL import Image

path = r"c:\Users\estiv\OneDrive\Escritorio\nexa\public\brand\nexa-icon-stitch.png"
im = Image.open(path).convert("RGB")
px = im.load()
w, h = im.size


def is_bg(rgb: tuple[int, int, int]) -> bool:
    return all(c > 245 for c in rgb)


ys = [y for y in range(h) for x in range(w) if not is_bg(px[x, y])]
xs = [x for x in range(w) for y in range(h) if not is_bg(px[x, y])]
print("bbox", min(xs), min(ys), max(xs), max(ys))
print("corner", px[0, 0], "center", px[w // 2, h // 2])

x0, y0, x1, y1 = min(xs), min(ys), max(xs), max(ys)
pad = 12
x0 = max(0, x0 - pad)
y0 = max(0, y0 - pad)
x1 = min(w - 1, x1 + pad)
y1 = min(h - 1, y1 + pad)
crop = im.crop((x0, y0, x1 + 1, y1 + 1))
side = max(crop.size)
sq = Image.new("RGB", (side, side), (250, 250, 252))
sq.paste(crop, ((side - crop.size[0]) // 2, (side - crop.size[1]) // 2))
out = r"c:\Users\estiv\OneDrive\Escritorio\nexa\public\brand\nexa-icon.png"
sq.resize((512, 512), Image.Resampling.LANCZOS).save(out, optimize=True)
print("saved", out, side)
