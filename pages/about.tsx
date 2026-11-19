import { NextSeo } from 'next-seo'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'
import { company } from '../data/content'

export default function About() {
  const offices = [
    { city: 'Birmingham (Head Office)', address: 'Unit 3, 3 Langton Road, Birmingham, B8 3DG', phone: company.phone.birmingham },
    { city: 'Manchester', address: 'Manchester, UK', phone: company.phone.manchester },
    { city: 'London', address: 'London, UK', phone: company.phone.london },
    { city: 'Bolton', address: 'Bolton, UK', phone: company.phone.bolton },
    { city: 'Islamabad', address: 'Islamabad, Pakistan', phone: '—' },
    { city: 'Karachi', address: 'Karachi, Pakistan', phone: '—' },
    { city: 'Multan', address: 'Multan, Pakistan', phone: '—' },
  ]

  return (
    <>
      <NextSeo
        title="About Cargo Lord Ltd"
        description="Cargo Lord Ltd was founded in Birmingham in 2012 by Saghir Bukhari. Learn about our story, our team, and our mission to deliver affordable cargo between the UK and Pakistan."
        canonical="https://cargolord.com/about/"
      />
      <Navbar />
      <PageHeader
        title="About Cargo Lord Ltd"
        subtitle="From Birmingham to the World — trusted cargo services since 2012."
        breadcrumbs={[{ label: 'About' }]}
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
      />

      <main>
        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-tag">Our Story</span>
                <h2 className="section-title mb-6">Founded in Birmingham, Trusted Worldwide</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cargo Lord Ltd was founded in 2012 by Saghir Bukhari in Birmingham, UK. Saghir identified a clear gap in the market: the British Pakistani community needed access to affordable, transparent, and truly reliable cargo services — and the existing options were falling short.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Starting from a single office in Birmingham, Cargo Lord grew through word of mouth. Our commitment to competitive, transparent pricing — combined with genuine customer service — quickly built a loyal customer base across the UK.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Today we operate from offices in Birmingham, Manchester, London, and Bolton in the UK, with trusted partner operations in Islamabad, Karachi, Lahore, and Multan in Pakistan. We handle thousands of shipments every year — from personal parcels and excess baggage to commercial freight and sea containers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What hasn't changed is our founding promise: transparent pricing, no hidden customs charges, and a team that genuinely cares about getting your goods there safely and on time.
                </p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80"
                  alt="Cargo Lord operations"
                  className="w-full h-[420px] object-cover mb-6"
                />
                {/* Key facts */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Founded', value: '2012' },
                    { label: 'Founder', value: 'Saghir Bukhari' },
                    { label: 'UK Offices', value: '4' },
                    { label: 'Pakistan Partners', value: '3+ Cities' },
                  ].map((f) => (
                    <div key={f.label} className="bg-gray-50 border border-gray-200 p-4">
                      <p className="text-gray-400 text-xs uppercase tracking-wider">{f.label}</p>
                      <p className="font-heading font-bold text-navy-800 text-xl">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="section-tag">Our Network</span>
              <h2 className="section-title">UK & Pakistan Offices</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {offices.map((o) => (
                <div key={o.city} className="bg-white border border-gray-200 hover:border-orange-400 p-6 transition-all group">
                  <div className="w-10 h-10 bg-navy-800 group-hover:bg-orange-500 flex items-center justify-center text-white text-lg mb-4 transition-colors">📍</div>
                  <h3 className="font-heading font-bold text-navy-800 text-base mb-1">{o.city}</h3>
                  <p className="text-gray-500 text-sm mb-2">{o.address}</p>
                  {o.phone !== '—' && (
                    <a href={`tel:${o.phone}`} className="text-orange-500 hover:text-orange-600 text-sm font-semibold">{o.phone}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="section-tag">What We Stand For</span>
              <h2 className="section-title-white">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
              {[
                { icon: '🔒', title: 'Transparency', desc: 'No hidden fees. No surprise charges at destination. The price we quote is the price you pay.' },
                { icon: '⚡', title: 'Reliability', desc: 'Over a decade of consistent, on-time deliveries. When we say 5 days, we mean 5 days.' },
                { icon: '❤️', title: 'Community', desc: 'We exist to serve the British Pakistani community. Your family matters to us as much as it does to you.' },
              ].map((v) => (
                <div key={v.title} className="p-10 border-r border-b border-white/10 text-center hover:bg-white/5 transition-colors">
                  <div className="text-5xl mb-5">{v.icon}</div>
                  <h3 className="text-white font-heading font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </>
  )
}
