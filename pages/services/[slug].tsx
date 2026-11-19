import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import ChatWidget from '../../components/ChatWidget'
import { services } from '../../data/content'

export default function ServiceDetail({ service }: { service: typeof services[0] }) {
  if (!service) return null

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <NextSeo
        title={`${service.title} — ${service.subtitle}`}
        description={service.shortDesc}
        canonical={`https://cargolord.com/services/${service.slug}/`}
      />
      <Navbar />
      <PageHeader
        title={service.title}
        subtitle={service.subtitle}
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
        image={service.image}
      />

      <main>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <img src={service.image} alt={service.title} className="w-full h-72 object-cover mb-8" />

                <h2 className="font-heading font-bold text-navy-800 text-3xl mb-4">{service.title} — {service.subtitle}</h2>
                {service.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}

                {/* Features */}
                <div className="bg-gray-50 border border-gray-200 p-6 mt-6">
                  <h3 className="font-heading font-bold text-navy-800 text-xl mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                        <span className="w-5 h-5 bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* CTA */}
                <div className="bg-navy-800 p-6 text-white">
                  <h3 className="font-heading font-bold text-xl mb-3">Get a Quote</h3>
                  <p className="text-gray-300 text-sm mb-5">Ready to ship? Contact us now for a fast, no-obligation quote.</p>
                  <div className="space-y-3">
                    <Link href="/quote" className="btn-primary block text-center">Request a Quote</Link>
                    <a href="tel:+441213283232" className="btn-outline block text-center text-sm">📞 0121 328 3232</a>
                    <a href="https://wa.me/441213283232" className="block text-center bg-green-600 hover:bg-green-700 text-white font-heading font-semibold uppercase tracking-wider text-sm px-6 py-3 transition-all">💬 WhatsApp Us</a>
                  </div>
                </div>

                {/* Other services */}
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <h3 className="font-heading font-bold text-navy-800 text-lg mb-4">Other Services</h3>
                  <div className="space-y-3">
                    {others.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-orange-500 transition-colors group">
                        <span className="w-8 h-8 bg-navy-800 group-hover:bg-orange-500 flex items-center justify-center text-base transition-colors">{s.icon}</span>
                        <span className="font-semibold">{s.title}</span>
                      </Link>
                    ))}
                    <Link href="/services" className="text-orange-500 hover:text-orange-600 text-sm font-heading font-semibold mt-2 block">
                      View All Services →
                    </Link>
                  </div>
                </div>

                {/* Contact box */}
                <div className="bg-orange-500 p-6 text-white">
                  <div className="text-3xl mb-3">📞</div>
                  <p className="font-heading font-bold text-xl mb-1">Need Help?</p>
                  <p className="text-orange-100 text-sm mb-4">Our team speaks English, Urdu and Punjabi.</p>
                  <div className="space-y-1 text-sm">
                    <p>Birmingham: <a href="tel:+441213283232" className="font-bold underline">0121 328 3232</a></p>
                    <p>Manchester: <a href="tel:+441618205029" className="font-bold underline">0161 820 5029</a></p>
                    <p>Email: <a href="mailto:info@cargolord.com" className="font-bold underline">info@cargolord.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: services.map((s) => ({ params: { slug: s.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = services.find((s) => s.slug === params?.slug) || null
  return { props: { service } }
}
