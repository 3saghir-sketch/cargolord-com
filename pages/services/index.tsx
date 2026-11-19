import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import ChatWidget from '../../components/ChatWidget'
import { services } from '../../data/content'

export default function Services() {
  return (
    <>
      <NextSeo
        title="Our Services — UK to Pakistan Cargo"
        description="Cargo Lord offers door-to-door cargo, sea freight, air cargo, port-to-port shipping, excess baggage, and cargo from Pakistan. Competitive UK rates since 2012."
        canonical="https://cargolord.co.uk/services/"
      />
      <Navbar />
      <PageHeader
        title="Our Services"
        subtitle="A full range of cargo and freight solutions from the UK to Pakistan and worldwide."
        breadcrumbs={[{ label: 'Services' }]}
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1600&q=80"
      />
      <main className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white border border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all overflow-hidden block">
                <div className="relative overflow-hidden h-48">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-3xl">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading font-bold text-navy-800 text-xl mb-1 group-hover:text-orange-600 transition-colors">{service.title}</h2>
                  <p className="text-orange-500 text-xs font-heading uppercase tracking-wider mb-3">{service.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-orange-500 font-heading font-semibold uppercase tracking-wider text-xs">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
