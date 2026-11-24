import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function QuoteForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', from: '', to: '', service: '', weight: '', message: '', cl_extra_ref: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  // Lets other pages (e.g. /rates) deep-link straight into a pre-selected
  // service, like ?service=Sea%20Cargo, instead of landing on a blank form.
  useEffect(() => {
    const service = router.query.service
    if (typeof service === 'string') {
      setForm((f) => ({ ...f, service }))
    }
  }, [router.query.service])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const description = [
      `Quote Request`,
      form.from ? `From: ${form.from}` : '',
      form.to ? `To: ${form.to}` : '',
      form.service ? `Service: ${form.service}` : '',
      form.weight ? `Approx. Weight: ${form.weight}kg` : '',
      form.message ? `Message: ${form.message}` : '',
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch('/api/submit-lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, description, company_website: form.cl_extra_ref }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'generate_lead', { form: 'quote' })
        }
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="py-20 bg-navy-800 relative overflow-hidden">
      {/* BG texture */}
      <div className="absolute inset-0 opacity-5 stripe-accent" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span className="section-tag">Free Quote</span>
            <h2 className="section-title-white mb-6">
              Get an Instant Cargo Quote
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Fill in the form and we'll get back to you within 1 hour during business hours. Alternatively, call or WhatsApp us for an instant quote.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📞', label: 'Birmingham', value: '+44 121 328 3232', href: 'tel:+441213283232' },
                { icon: '📞', label: 'Manchester', value: '+44 161 820 5029', href: 'tel:+441618205029' },
                { icon: '💬', label: 'WhatsApp', value: '+44 121 328 3232', href: 'https://wa.me/441213283232' },
                { icon: '✉️', label: 'Email', value: 'info@cargolord.com', href: 'mailto:info@cargolord.com' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-orange-500 transition-all">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{c.label}</p>
                    <p className="text-white font-heading font-semibold text-base group-hover:text-orange-400 transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white p-8 md:p-10">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                <h3 className="font-heading font-bold text-navy-800 text-2xl mb-2">Quote Request Sent!</h3>
                <p className="text-gray-500 text-sm">We'll be in touch within 1 hour. You can also WhatsApp us on 0121 328 3232 for an instant response.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading font-bold text-navy-800 text-2xl mb-6 border-b border-gray-100 pb-4">Request a Quote</h3>

                {/* Honeypot -- hidden from real visitors, bots that auto-fill every field catch themselves here.
                    BUG FIX: this used to be named/labelled "company_website", which Chrome's autofill
                    heuristics recognise and will silently fill in for real visitors with saved company
                    info -- submission still "succeeds" visually but silently gets dropped as a bot. Renamed
                    to something no autofill heuristic matches. */}
                <div style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="cl_extra_ref">Leave this field blank</label>
                  <input
                    id="cl_extra_ref"
                    name="cl_extra_ref"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.cl_extra_ref}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Phone *</label>
                    <input name="phone" required value={form.phone} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="07..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="you@example.com" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">From (UK Postcode)</label>
                    <input name="from" value={form.from} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="B8 3DG" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">To (Destination City)</label>
                    <input name="to" value={form.to} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="Lahore, Karachi..." />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors bg-white">
                      <option value="">Select service</option>
                      <option>Door to Door Air Cargo</option>
                      <option>Sea Cargo</option>
                      <option>Port to Port</option>
                      <option>Excess Baggage</option>
                      <option>Cargo from Pakistan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Approx. Weight (kg)</label>
                    <input name="weight" type="number" min="1" value={form.weight} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors" placeholder="50" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Message / Contents</label>
                  <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Brief description of goods..." />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
                    Something went wrong sending your request — please call or WhatsApp us instead, or try again.
                  </p>
                )}

                <button type="submit" disabled={sending} className="btn-primary w-full text-center py-4 disabled:opacity-60">
                  {sending ? 'Sending...' : 'Send Quote Request'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Or call us: <a href="tel:+441213283232" className="text-orange-500 hover:underline">0121 328 3232</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
