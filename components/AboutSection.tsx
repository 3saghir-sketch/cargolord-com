import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80"
                alt="Cargo Lord warehouse operations"
                className="w-full h-[460px] object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 z-20 w-36 text-center">
              <span className="font-heading font-extrabold text-5xl block leading-none">12+</span>
              <span className="font-body text-xs uppercase tracking-wider leading-tight block mt-1">Years of Experience</span>
            </div>

            {/* Background block */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-500/30 z-0" />

            {/* Small feature image */}
            <div className="absolute -bottom-8 left-8 z-20 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=240&q=80"
                alt="Shipment processing"
                className="w-36 h-28 object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>

          {/* Content side */}
          <div className="lg:pl-4">
            <span className="section-tag">About Cargo Lord</span>
            <h2 className="section-title mb-6">
              Trusted Cargo & Freight Services Since 2012
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Cargo Lord Ltd was founded in Birmingham in 2012 by Saghir Bukhari with a simple mission: to give the British Pakistani community access to affordable, reliable, and transparent cargo services. What started as a single operation in Birmingham has grown into a national network with offices across Birmingham, Manchester, London, and Bolton.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We offer door-to-door cargo to Pakistan from just £1.50/kg, with no hidden customs charges at destination.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8">
              {[
                'Door-to-door air and sea cargo from £1.50/kg',
                'No hidden customs charges at destination',
                'Offices in Birmingham, Manchester, London & Bolton',
                'Air, sea, and excess baggage services',
                'Dedicated customer support team',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <a href="tel:+441213283232" className="inline-flex items-center gap-2 text-navy-800 font-heading font-semibold uppercase tracking-wider text-sm border-b-2 border-orange-500 pb-0.5 hover:text-orange-600 transition-colors">
                📞 0121 328 3232
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
