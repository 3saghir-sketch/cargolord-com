import Link from 'next/link'
import { company, services } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-400">
      {/* CTA strip */}
      <div className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-heading font-bold text-2xl md:text-3xl">Ready to Ship? Get a Free Quote Today</p>
            <p className="text-orange-100 text-sm mt-1">Fast, affordable cargo from the UK to Pakistan & worldwide.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/quote" className="bg-white text-orange-600 font-heading font-bold uppercase tracking-wider px-6 py-3 text-sm hover:bg-navy-800 hover:text-white transition-all">Get a Quote</Link>
            <a href={`tel:${company.phone.birmingham}`} className="border-2 border-white text-white font-heading font-bold uppercase tracking-wider px-6 py-3 text-sm hover:bg-white hover:text-orange-600 transition-all">
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-white font-heading font-extrabold text-2xl tracking-tight">
                CARGO<span className="text-orange-500">LORD</span>
              </span>
              <span className="block text-orange-400 text-xs tracking-widest uppercase mt-0.5">Ltd — Est. 2012</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              From Birmingham to the World. Trusted cargo and freight services since 2012, specialising in UK to Pakistan door-to-door delivery.
            </p>
            <div className="flex gap-3">
              {[['F', company.social.facebook], ['T', 'https://twitter.com/cargolord']].map(([label, href]) => (
                <a key={label} href={href as string} className="w-8 h-8 bg-navy-700 hover:bg-orange-500 text-white flex items-center justify-center text-xs font-bold transition-all">
                  {label}
                </a>
              ))}
              <a href={`https://wa.me/${company.whatsapp.replace(/\D/g,'')}`} className="w-8 h-8 bg-navy-700 hover:bg-green-500 text-white flex items-center justify-center text-xs font-bold transition-all">
                W
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider text-sm mb-5 border-b border-navy-700 pb-3">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider text-sm mb-5 border-b border-navy-700 pb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['About Us', '/about'], ['Track Shipment', '/tracking'], ['Blog', '/blog'], ['Get a Quote', '/quote'], ['Contact Us', '/contact'], ['Terms & Conditions', '/terms']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-orange-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider text-sm mb-5 border-b border-navy-700 pb-3">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-orange-500 mt-0.5">📍</span>
                <span>{company.address.line1}, {company.address.city}, {company.address.postcode}</span>
              </li>
              <li><a href={`tel:${company.phone.birmingham}`} className="flex gap-3 hover:text-orange-400 transition-colors"><span className="text-orange-500">📞</span> Birmingham: {company.phone.birmingham}</a></li>
              <li><a href={`tel:${company.phone.manchester}`} className="flex gap-3 hover:text-orange-400 transition-colors"><span className="text-orange-500">📞</span> Manchester: {company.phone.manchester}</a></li>
              <li><a href={`tel:${company.phone.london}`} className="flex gap-3 hover:text-orange-400 transition-colors"><span className="text-orange-500">📞</span> London: {company.phone.london}</a></li>
              <li><a href={`tel:${company.phone.bolton}`} className="flex gap-3 hover:text-orange-400 transition-colors"><span className="text-orange-500">📞</span> Bolton: {company.phone.bolton}</a></li>
              <li><a href={`mailto:${company.email}`} className="flex gap-3 hover:text-orange-400 transition-colors"><span className="text-orange-500">✉️</span> {company.email}</a></li>
              <li><a href={`https://wa.me/${company.whatsapp.replace(/\D/g,'')}`} className="flex gap-3 hover:text-green-400 transition-colors"><span className="text-green-500">💬</span> WhatsApp Us</a></li>
              <li className="flex gap-3"><span className="text-orange-500">🕐</span><span>{company.hours}</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>© {new Date().getFullYear()} {company.fullName}. All Rights Reserved. Company Registered in England & Wales.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
