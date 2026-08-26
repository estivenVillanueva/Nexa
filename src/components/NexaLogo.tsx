type Props = {
  size?: 'sm' | 'md' | 'lg'
  showWordmark?: boolean
  className?: string
}

const PX = { sm: 36, md: 48, lg: 64 } as const

export function NexaLogo({
  size = 'md',
  showWordmark = true,
  className = '',
}: Props) {
  const px = PX[size]

  return (
    <div className={`nexa-logo nexa-logo--${size} ${className}`.trim()}>
      <span className="nexa-logo__mark-wrap">
        <img
          className="nexa-logo__mark"
          src="/brand/nexa-icon-stitch.png"
          alt={showWordmark ? '' : 'Nexa'}
          width={px}
          height={px}
        />
      </span>
      {showWordmark ? <span className="nexa-logo__word">Nexa</span> : null}
    </div>
  )
}
