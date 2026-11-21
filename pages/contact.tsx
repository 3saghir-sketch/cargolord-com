import { NextSeo } from 'next-seo'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'
import { company } from '../data/content'

// Goes to the WhatsApp number wired into WhatsApp Hub (0121 790 0700), a
// different number from the general WhatsApp Support line above, so a tap
// here auto-creates/updates a support ticket.
const WA_ISSUE_NUMBER = '441217900700'
const WA_ISSUES: [string, string][] = [
  ['Delayed', 'DELAYED'],
  ['Not Delivered', 'NOT DELIVERED'],
  ['Missing Items', 'MISSING ITEMS'],
  ['Damaged', 'DAMAGED'],
  ['Other Issue', 'OTHER'],
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', company_website: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [trackingNo, setTrackingNo] = useState('')
  const [issuePin, setIssuePin] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [verifyError, setVerifyError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleIssueClick = async (code: string) => {
    setVerifyError('')

    if (!trackingNo.trim() || !issuePin.trim()) {
      setVerifyError('Please enter both your tracking number and PIN — both are on your receipt or confirmation email.')
      return
    }

    setVerifying(true)
    try {
      const res = await fetch('/api/verify-pin/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber: trackingNo.trim(), pin: issuePin.trim() }),
      })
      const data = await res.json()
      if (data.success) {
        const msg = `Hi, I have an issue with my shipment ${trackingNo.trim()}: ${code}`
        window.open(`https://wa.me/${WA_ISSUE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
      } else {
        setVerifyError(data.message || "That tracking number and PIN don't match our records.")
      }
    } catch {
      setVerifyError('Something went wrong — please try again or call us.')
    } finally {
      setVerifying(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const description = [
      `Contact Form Message`,
      form.subject ? `Subject: ${form.subject}` : '',
      `Message: ${form.message}`,
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch('/api/submit-lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, description, company_website: form.company_website }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'generate_lead', { form: 'contact' })
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
    <>
      <NextSeo
        title="Contact Us"
        description="Contact Cargo Lord Ltd. Birmingham: 0121 328 3232 | Manchester: 0161 820 5029 | London: 020 3627 3315. Email: info@cargolord.com."
        canonical="https://cargolord.com/contact/"
      />
      <Navbar />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch — we're happy to help with quotes, tracking, and any cargo enquiries."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <main className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-orange-50 border border-orange-200 p-6 mb-10 text-center">
            <h3 className="font-heading font-bold text-navy-800 text-lg mb-1">Have an issue with an existing shipment?</h3>
            <p className="text-gray-500 text-sm mb-4">Enter your tracking number and PIN — both are on your receipt or confirmation email — then tap the issue below. We verify it's your shipment before it goes to our WhatsApp support line.</p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <input
                type="text"
                value={trackingNo}
                onChange={(e) => setTrackingNo(e.target.value)}
                placeholder="Tracking number"
                className="w-full max-w-[220px] border border-gray-200 px-4 py-2 text-sm text-center focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                value={issuePin}
                onChange={(e) => setIssuePin(e.target.value)}
                placeholder="PIN"
                className="w-full max-w-[120px] border border-gray-200 px-4 py-2 text-sm text-center focus:outline-none focus:border-orange-500"
              />
            </div>
            {verifyError && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-2 mb-4 max-w-md mx-auto">
                {verifyError}
              </p>
            )}
            <div className="flex flex-wrap gap-2 justify-center">
              {WA_ISSUES.map(([label, code]) => (
                <button
                  key={code}
                  type="button"
                  disabled={verifying}
                  onClick={() => handleIssueClick(code)}
                  className="bg-white border border-orange-300 text-orange-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-orange-100 disabled:opacity-60"
                >
                  {verifying ? 'Checking...' : label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading font-bold text-navy-800 text-2xl mb-6">Get In Touch</h2>
              <div className="space-y-5">
                {[
                  { icon: '📍', title: 'Head Office', lines: ['Unit 3, 3 Langton Road', 'Birmingham, B8 3DG'] },
                  { icon: '📞', title: 'Birmingham', lines: [company.phone.birmingham] },
                  { icon: '📞', title: 'Manchester', lines: [company.phone.manchester] },
                  { icon: '📞', title: 'London', lines: [company.phone.london] },
                  { icon: '📞', title: 'Bolton', lines: [company.phone.bolton] },
                  { icon: '✉️', title: 'Email', lines: [company.email] },
                  { icon: '💬', title: 'WhatsApp', lines: [company.whatsapp] },
                  { icon: '🕐', title: 'Office Hours', lines: ['Mon–Fri: 10:00–18:00', 'Sat: 10:00–14:00'] },
                ].map((c) => (
                  <div key={c.title} className="flex gap-4 bg-white border border-gray-200 p-4">
                    <span className="text-2xl flex-shrink-0">{c.icon}</span>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-body">{c.title}</p>
                      {c.lines.map((l) => (
                        <p key={l} className="font-heading font-semibold text-navy-800 text-sm">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white border border-gray-200 p-8">
              {sent ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading font-bold text-navy-800 text-2xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500">We'll get back to you within a few hours. For urgent queries, please call 0121 328 3232.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-heading font-bold text-navy-800 text-2xl mb-6">Send a Message</h2>

                  {/* Honeypot -- hidden from real visitors, bots that auto-fill every field catch themselves here */}
                  <div style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                    <label htmlFor="company_website">Company Website</label>
                    <input
                      id="company_website"
                      name="company_website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company_website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500" placeholder="07..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Message *</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 resize-none" placeholder="Your message..." />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
                      Something went wrong sending your message — please call us instead, or try again.
                    </p>
                  )}
                  <button type="submit" disabled={sending} className="btn-primary w-full py-4 disabled:opacity-60">
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
