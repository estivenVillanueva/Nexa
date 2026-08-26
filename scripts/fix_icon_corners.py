from PIL import Image

path = r"c:\Users\estiv\OneDrive\Escritorio\nexa\public\brand\nexa-icon-stitch.png"
im = Image.open(path).convert("RGBA")
px = im.load()
w, h = im.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r < 40 and g < 40 and b < 40:
            px[x, y] = (r, g, b, 0)

im.save(path, optimize=True)
print("fixed", path)
