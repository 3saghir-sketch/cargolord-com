import Link from 'next/link'
import { useState } from 'react'
import RouteGraphic from './RouteGraphic'


export default function Hero() {
  const [tracking, setTracking] = useState('')
  const [waOpen, setWaOpen] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (tracking.trim()) window.location.href = `/tracking/index.php?number=${encodeURIComponent(tracking.trim())}`
  }

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background: UK -> Pakistan route graphic */}
      <RouteGraphic />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-800/45" />

      {/* Diagonal accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-5">
        <div className="stripe-accent w-full h-full" />
      </div>

      {/* Orange side accent bar */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-0 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 font-heading font-semibold uppercase tracking-widest text-xs">
              UK's International Cargo Specialists
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-heading font-extrabold leading-none mb-4">
            <span className="block text-4xl md:text-6xl lg:text-7xl">CARGO TO PAKISTAN,</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-orange-500">INDIA &amp; EUROPE</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 font-body leading-relaxed max-w-xl">
            Air and sea freight, collected anywhere in the UK and delivered door to door or port to port, from just <span className="text-orange-400 font-semibold">£1.50/kg</span>. Our flagship route runs to Pakistan every week, with our own customer offices in Islamabad, Karachi and Multan.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/quote" className="btn-primary text-base px-8 py-4">
              Get a Free Quote
            </Link>
            <Link href="/services" className="btn-outline text-base px-8 py-4">
              Our Services
            </Link>
            <div className="relative">
              <button
                type="button"
                onClick={() => setWaOpen((v) => !v)}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-semibold uppercase tracking-wider text-sm px-6 py-4 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </button>
              {waOpen && (
                <div className="absolute left-0 top-full mt-2 z-50 flex flex-col gap-2 w-72 max-w-[85vw]">
                  <a
                    href="https://wa.me/441217900700?text=Hi%2C%20I%20have%20an%20issue%20with%20my%20shipment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-5 py-4 shadow-2xl rounded-lg font-heading font-bold text-base transition-all"
                  >
                    <span className="text-2xl">📦</span>
                    Existing Shipment Issue
                  </a>
                  <a
                    href="https://wa.me/441213283232?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20cargo%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-4 shadow-2xl rounded-lg font-heading font-bold text-base transition-all"
                  >
                    <span className="text-2xl">💬</span>
                    New Enquiry / Quote
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Tracking form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 max-w-lg">
            <p className="text-white font-heading font-semibold uppercase tracking-wider text-xs mb-3">Track Your Shipment</p>
            <form onSubmit={handleTrack} className="flex gap-2">
              <input
                type="text"
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
                placeholder="Enter tracking number..."
                className="flex-1 bg-white/10 border border-white/30 text-white placeholder-gray-400 px-4 py-3 text-sm font-body focus:outline-none focus:border-orange-500"
              />
              <button type="submit" className="btn-primary px-5 py-3 text-sm">
                Track
              </button>
            </form>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[['✓', 'From £1.50/kg'], ['✓', 'No Hidden Fees'], ['✓', 'Door-to-Door'], ['✓', 'Insured Shipments'], ['✓', 'Since 2012']].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-orange-500 font-bold">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
