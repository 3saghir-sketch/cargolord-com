import { useState, useEffect } from 'react'
import Link from 'next/link'
import { company } from '../data/content'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services', href: '/services',
    sub: [
      { label: 'Air Cargo', href: '/services/air-cargo' },
      { label: 'Sea Cargo', href: '/services/sea-cargo' },
      { label: 'Excess Baggage', href: '/services/excess-baggage' },
      { label: 'Import & Export', href: '/services/import-export' },
    ],
  },
  { label: 'Tracking', href: '/tracking' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-950 text-gray-400 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span>📞 Birmingham: <a href={`tel:${company.phone.birmingham}`} className="text-white hover:text-orange-400">{company.phone.birmingham}</a></span>
            <span>📞 Manchester: <a href={`tel:${company.phone.manchester}`} className="text-white hover:text-orange-400">{company.phone.manchester}</a></span>
            <span>📞 London: <a href={`tel:${company.phone.london}`} className="text-white hover:text-orange-400">{company.phone.london}</a></span>
          </div>
          <div className="flex gap-4">
            <span>✉️ <a href={`mailto:${company.email}`} className="text-white hover:text-orange-400">{company.email}</a></span>
            <span>{company.hours}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-800 shadow-2xl' : 'bg-navy-800'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <span className="text-white font-heading font-extrabold text-2xl md:text-3xl tracking-tight leading-none">
                  CARGO<span className="text-orange-500">LORD</span>
                </span>
                <span className="block text-orange-400 text-xs font-body tracking-widest uppercase leading-none mt-0.5">
                  Ltd — Est. 2012
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.sub ? (
                  <div key={link.label} className="relative group">
                    <button className="text-gray-200 hover:text-orange-400 font-heading font-semibold uppercase tracking-wider text-sm px-4 py-2 flex items-center gap-1 transition-colors">
                      {link.label}
                      <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 w-56 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-orange-500">
                      {link.sub.map((s) => (
                        <Link key={s.href} href={s.href} className="block px-4 py-3 text-navy-800 hover:bg-orange-500 hover:text-white font-body text-sm border-b border-gray-100 last:border-0 transition-colors">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className="text-gray-200 hover:text-orange-400 font-heading font-semibold uppercase tracking-wider text-sm px-4 py-2 transition-colors">
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={company.agentPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 font-heading font-semibold uppercase tracking-wider text-xs px-3 py-2 transition-colors border border-navy-600 rounded ml-2"
              >
                Agent Login
              </a>
              <Link href="/quote" className="ml-2 btn-primary">
                Get a Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-900 border-t border-navy-700">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.sub ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left text-gray-200 font-heading font-semibold uppercase tracking-wider text-sm px-6 py-3 flex justify-between"
                    >
                      {link.label} <span>{servicesOpen ? '−' : '+'}</span>
                    </button>
                    {servicesOpen && link.sub.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block text-gray-400 hover:text-white font-body text-sm px-10 py-2 border-l-2 border-orange-500 ml-6">
                        {s.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="block text-gray-200 font-heading font-semibold uppercase tracking-wider text-sm px-6 py-3 border-b border-navy-700">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="p-4 flex flex-col gap-3">
              <Link href="/quote" onClick={() => setMobileOpen(false)} className="btn-primary block text-center">
                Get a Quote
              </Link>
              <a
                href={company.agentPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-gray-300 border border-navy-600 rounded py-2 font-heading font-semibold uppercase tracking-wider text-sm"
              >
                Agent Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
