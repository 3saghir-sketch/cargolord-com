import Link from 'next/link'
import { services } from '../data/content'

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Cargo Services Tailored to Your Needs</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
            From express air cargo to budget sea freight, Cargo Lord provides the full range of shipping solutions from the UK to Pakistan and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="group relative bg-white border-b border-r border-gray-200 overflow-hidden hover:z-10"
            >
              {/* Image overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-navy-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-navy-800 group-hover:bg-orange-500 flex items-center justify-center text-2xl mb-5 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Number */}
                <span className="absolute top-6 right-6 text-gray-100 group-hover:text-white/20 font-heading font-extrabold text-5xl leading-none transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="text-navy-800 group-hover:text-white font-heading font-bold text-xl mb-1 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-orange-500 group-hover:text-orange-400 font-heading text-sm uppercase tracking-wider mb-3 transition-colors duration-300">
                  {service.subtitle}
                </p>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed mb-5 transition-colors duration-300">
                  {service.shortDesc}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-orange-500 group-hover:text-white font-heading font-semibold uppercase tracking-wider text-xs transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
