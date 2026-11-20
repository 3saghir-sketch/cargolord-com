export default function WhyUsSection() {
  const steps = [
    { num: '01', title: 'Request a Quote', desc: 'Call, WhatsApp, or email us. Tell us your destination, weight and collection address and we\'ll get back to you with a price.' },
    { num: '02', title: 'We Collect', desc: 'We arrange collection from your door anywhere in the UK at a time that suits you.' },
    { num: '03', title: 'We Ship', desc: 'Your goods are securely packed, documented and dispatched via our trusted air or sea freight partners.' },
    { num: '04', title: 'Door Delivery', desc: 'Our Pakistan partners clear customs and deliver straight to the recipient\'s door. No extra charges.' },
  ]

  const reasons = [
    { icon: '💰', title: 'Competitive Rates', desc: 'Door-to-door cargo from just £1.50/kg — no hidden fees or surprise charges.' },
    { icon: '🛡️', title: 'Careful Handling', desc: 'Your consignment is packed, documented and handled with care from collection to delivery.' },
    { icon: '📍', title: 'UK-Wide Coverage', desc: 'Offices in Birmingham, Manchester, London and Bolton. We collect anywhere in the UK.' },
    { icon: '📦', title: 'No Customs Surprises', desc: 'We handle all customs paperwork. Recipients in Pakistan pay nothing extra on arrival.' },
    { icon: '📡', title: 'Live Tracking', desc: 'Track your shipment from collection to delivery with our real-time tracking system.' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'Real humans answer your calls. Our team speaks English, Urdu, and Punjabi.' },
  ]

  return (
    <>
      {/* How it works */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Simple Process</span>
            <h2 className="section-title-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative bg-navy-700/50 border border-navy-600 p-8 hover:bg-navy-700 transition-colors group">
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute top-10 -right-3 w-6 h-6 bg-orange-500 z-10 hidden lg:flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <span className="font-heading font-extrabold text-6xl text-white/10 group-hover:text-orange-500/20 leading-none block mb-4 transition-colors">{step.num}</span>
                <h3 className="text-white font-heading font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title mb-6">
                A Trusted Cargo Service to Pakistan
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 12 years of experience and thousands of customers across the UK and Pakistan, Cargo Lord has built a reputation for reliability, transparency, and value. Here's what sets us apart:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-50 flex items-center justify-center text-2xl flex-shrink-0">
                      {r.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-navy-800 text-base">{r.title}</h4>
                      <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80"
                alt="Cargo warehouse"
                className="w-full h-[500px] object-cover"
              />
              {/* Price callout */}
              <div className="absolute bottom-8 left-8 right-8 bg-orange-500 p-6">
                <p className="text-white font-heading font-extrabold text-3xl leading-tight">
                  From £1.50/kg
                </p>
                <p className="text-orange-100 text-sm mt-1">Door-to-door air cargo to Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
