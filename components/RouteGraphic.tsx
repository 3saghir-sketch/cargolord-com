type FlagProps = { x: number; y: number; w: number; h: number }

// Small flat-shape flags (no emoji) so they render identically on every
// device/browser instead of depending on OS emoji-font support.

function FlagPakistan({ x, y, w, h }: FlagProps) {
  const stripeW = w * 0.25
  const cx = stripeW + (w - stripeW) * 0.52
  const cy = h * 0.5
  const r = h * 0.3
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`}>
      <rect width={w} height={h} fill="#01411c" />
      <rect width={stripeW} height={h} fill="#ffffff" />
      <circle cx={cx} cy={cy} r={r} fill="#ffffff" />
      <circle cx={cx + r * 0.38} cy={cy} r={r * 0.82} fill="#01411c" />
      <polygon
        points="0,-10 2.35,-3.09 9.51,-3.09 3.82,1.18 5.88,8.09 0,3.82 -5.88,8.09 -3.82,1.18 -9.51,-3.09 -2.35,-3.09"
        fill="#ffffff"
        transform={`translate(${cx + r * 0.95}, ${cy}) scale(${h / 220})`}
      />
    </g>
  )
}

function FlagIndia({ x, y, w, h }: FlagProps) {
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`}>
      <rect width={w} height={h / 3} fill="#ff9933" />
      <rect y={h / 3} width={w} height={h / 3} fill="#ffffff" />
      <rect y={(h * 2) / 3} width={w} height={h / 3} fill="#138808" />
      <circle cx={w / 2} cy={h / 2} r={h * 0.09} fill="#000080" />
    </g>
  )
}

function FlagSaudi({ x, y, w, h }: FlagProps) {
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`}>
      <rect width={w} height={h} fill="#006c35" />
      <rect width={w} height={h * 0.1} y={h * 0.9} fill="#ffffff" />
    </g>
  )
}

function FlagUAE({ x, y, w, h }: FlagProps) {
  const stripeW = w * 0.25
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`}>
      <rect x={stripeW} width={w - stripeW} height={h / 3} fill="#00732f" />
      <rect x={stripeW} y={h / 3} width={w - stripeW} height={h / 3} fill="#ffffff" />
      <rect x={stripeW} y={(h * 2) / 3} width={w - stripeW} height={h / 3} fill="#000000" />
      <rect width={stripeW} height={h} fill="#ff0000" />
    </g>
  )
}

function FlagUSA({ x, y, w, h }: FlagProps) {
  const stripeH = h / 5
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`}>
      <rect width={w} height={h} fill="#ffffff" />
      {[0, 2, 4].map((i) => (
        <rect key={i} y={i * stripeH} width={w} height={stripeH} fill="#b22234" />
      ))}
      <rect width={w * 0.42} height={stripeH * 3} fill="#3c3b6e" />
    </g>
  )
}

function Destination({
  x,
  y,
  label,
  flag,
  prominent = false,
}: {
  x: number
  y: number
  label: string
  flag: React.ReactNode
  prominent?: boolean
}) {
  const labelY = prominent ? -42 : -24
  return (
    <g transform={`translate(${x}, ${y})`}>
      {prominent && <circle r="18" fill="#fb923c" opacity="0.3" className="animate-pulse" />}
      <circle r={prominent ? 7 : 4} fill={prominent ? '#fb923c' : '#64748b'} />
      <circle r={prominent ? 7 : 4} fill="none" stroke="#fff" strokeWidth="1.2" opacity={prominent ? 0.6 : 0.35} />
      {flag}
      <text
        x="0"
        y={labelY}
        textAnchor="middle"
        fill={prominent ? '#fb923c' : '#94a3b8'}
        fontSize={prominent ? 26 : 14}
        fontWeight={prominent ? 800 : 600}
        fontFamily="'Barlow Condensed', sans-serif"
        letterSpacing={prominent ? 2 : 1}
      >
        {label}
      </text>
    </g>
  )
}

export default function RouteGraphic() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dotGrid" width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="#1e3a5f" opacity="0.35" />
        </pattern>
        <linearGradient id="pathFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#f97316" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="#0a1628" />
      <rect width="1600" height="900" fill="url(#dotGrid)" />

      {/* Secondary routes -- muted, no plane, drawn first so the Pakistan route sits on top */}
      <path d="M 260 560 C 520 240, 760 180, 950 175" fill="none" stroke="#2d4a6b" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.6" />
      <path d="M 260 560 C 520 660, 780 720, 1045 700" fill="none" stroke="#2d4a6b" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.6" />
      <path d="M 260 560 C 560 700, 900 790, 1205 760" fill="none" stroke="#2d4a6b" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.6" />
      <path d="M 260 560 C 620 540, 1150 600, 1475 600" fill="none" stroke="#2d4a6b" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.6" />

      {/* Main route: Birmingham -> Pakistan (kept prominent) */}
      <path
        d="M 260 560 C 560 300, 980 760, 1360 420"
        fill="none"
        stroke="url(#pathFade)"
        strokeWidth="4"
        strokeDasharray="10 12"
        strokeLinecap="round"
      />

      {/* Plane icon on the Pakistan route only */}
      <g transform="translate(1170, 525) rotate(-26)">
        <path
          d="M0 0 L34 6 L46 0 L34 -6 Z M20 -2 L28 -22 L34 -22 L30 -2 Z M20 2 L28 22 L34 22 L30 2 Z"
          fill="#fb923c"
        />
      </g>

      {/* Origin marker: Birmingham, UK */}
      <g transform="translate(260, 560)">
        <circle r="14" fill="#f97316" opacity="0.25" className="animate-pulse" />
        <circle r="6" fill="#f97316" />
        <circle r="6" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
        <text
          x="0"
          y="-26"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="20"
          fontWeight="700"
          fontFamily="'Barlow Condensed', sans-serif"
          letterSpacing="1.5"
        >
          BIRMINGHAM, UK
        </text>
      </g>

      {/* Secondary destinations -- small, muted */}
      <Destination x={950} y={175} label="USA" flag={<FlagUSA x={0} y={26} w={34} h={22} />} />
      <Destination x={1045} y={700} label="SAUDI ARABIA" flag={<FlagSaudi x={0} y={26} w={34} h={22} />} />
      <Destination x={1205} y={760} label="UAE" flag={<FlagUAE x={0} y={26} w={34} h={22} />} />
      <Destination x={1475} y={600} label="INDIA" flag={<FlagIndia x={0} y={26} w={34} h={22} />} />

      {/* Primary destination: Pakistan -- the hero route, kept visually dominant */}
      <Destination
        x={1360}
        y={420}
        label="PAKISTAN"
        prominent
        flag={<FlagPakistan x={0} y={-78} w={62} h={40} />}
      />
    </svg>
  )
}
