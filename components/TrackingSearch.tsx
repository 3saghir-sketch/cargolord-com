import { useState } from 'react'

// Real tracking data lives on the CRM's own tracking page -- this form just
// collects the number and hands off there, rather than duplicating that
// display logic (and the data it depends on) in a second place.
export default function TrackingSearch({ initialNumber = '' }: { initialNumber?: string }) {
  const [number, setNumber] = useState(initialNumber)
  const [redirecting, setRedirecting] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!number.trim()) return
    setRedirecting(true)
    window.location.href = 'https://crm.cargolord.co.uk/track/' + encodeURIComponent(number.trim())
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your tracking number (e.g. CL123456)"
          className="flex-1 border-2 border-gray-200 focus:border-orange-500 px-5 py-4 text-base font-body outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={redirecting}
          className="btn-primary px-8 py-4 text-base disabled:opacity-60"
        >
          {redirecting ? 'Opening tracking page...' : 'Track Shipment'}
        </button>
      </form>

      <div className="bg-orange-50 border border-orange-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-navy-800 text-sm font-body">
          <strong>Need help with your shipment?</strong> Contact us and quote your tracking number.
        </p>
        <div className="flex gap-3">
          <a href="tel:+441213283232" className="btn-primary text-xs px-5 py-2">Call 0121 328 3232</a>
          <a href="https://wa.me/441213283232" className="bg-green-600 hover:bg-green-700 text-white font-heading font-semibold uppercase tracking-wider text-xs px-5 py-2 transition-all">WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
