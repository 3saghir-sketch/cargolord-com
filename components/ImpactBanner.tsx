import { useEffect, useRef, useState } from 'react'
import { impactStats } from '../data/content'

function BigCounter({ value, suffix }: { value: number; suffix: string }) {
  // Animates on mount rather than waiting for scroll-into-view - see
  // StatsSection.tsx's Counter for why (crawlers/screenshots catching 0).
  const [count, setCount] = useState(value)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const duration = 1800
    const step = Math.ceil(value / (duration / 16))
    let current = 0
    setCount(0)
    const timer = setInterval(() => {
      current = Math.min(current + step, value)
      setCount(current)
      if (current >= value) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [value])

  return (
    <div ref={ref} className="font-heading font-extrabold text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight">
      {count.toLocaleString()}
      <span className="text-orange-300">{suffix}</span>
    </div>
  )
}

export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 py-16 md:py-20">
      {/* subtle dot-grid texture, matching the brand's navy sections */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
        }}
      />
      {/* oversized faded cargo-plane silhouette for visual interest */}
      <svg
        className="absolute -right-10 -top-10 w-72 h-72 md:w-96 md:h-96 opacity-10 pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path d="M10 50 L70 56 L92 50 L70 44 Z M55 46 L62 20 L68 20 L62 46 Z M55 54 L62 80 L68 80 L62 54 Z" fill="#ffffff" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <span className="inline-block bg-white/15 border border-white/30 text-white font-heading font-semibold uppercase tracking-widest text-xs px-4 py-2 mb-6">
          Real Numbers, Not Marketing Estimates
        </span>
        <h2 className="text-white font-heading font-extrabold text-2xl md:text-4xl mb-12 max-w-3xl mx-auto leading-tight">
          Pulled directly from our own shipment records
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-6 max-w-3xl mx-auto">
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <BigCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white font-heading font-bold uppercase tracking-wider text-sm md:text-base mt-3">
                {stat.label}
              </p>
              <p className="text-orange-100 text-xs md:text-sm mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
