import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/content'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const step = Math.ceil(value / (duration / 16))
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + step, value)
            setCount(current)
            if (current >= value) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="font-heading font-extrabold text-5xl md:text-6xl text-white leading-none">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1570615570135-e8c8c2e6e12d?w=1600&q=80)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-navy-900/90" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-tag">Our Track Record</span>
          <h2 className="section-title-white">Numbers That Speak for Themselves</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="counter-box p-8 md:p-10 border-b border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 font-body text-sm mt-2 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
