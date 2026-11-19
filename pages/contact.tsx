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
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [trackingNo, setTrackingNo] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <NextSeo
        title="Contact Us"
        description="Contact Cargo Lord Ltd. Birmingham: 0121 328 3232 | Manchester: 0161 820 5029 | London: 020 3627 3315. Email: info@cargolord.com."
        canonical="https://cargolord.co.uk/contact/"
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
            <p className="text-gray-500 text-sm mb-4">Tell us your tracking number and tap the issue below — it goes straight to our WhatsApp support line.</p>
            <input
              type="text"
              value={trackingNo}
              onChange={(e) => setTrackingNo(e.target.value)}
              placeholder="Tracking number (optional)"
              className="max-w-xs mx-auto block border border-gray-200 px-4 py-2 text-sm text-center mb-4 focus:outline-none focus:border-orange-500"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              {WA_ISSUES.map(([label, code]) => {
                const msg = `Hi, I have an issue with my shipment${trackingNo ? ' ' + trackingNo : ''}: ${code}`
                return (
                  <a
                    key={code}
                    href={`https://wa.me/${WA_ISSUE_NUMBER}?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-orange-300 text-orange-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-orange-100"
                  >
                    {label}
                  </a>
                )
              })}
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
                  <button type="submit" className="btn-primary w-full py-4">Send Message</button>
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
