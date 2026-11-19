import { useState } from 'react'
import { trackingStatuses } from '../data/content'

// Mock data — replace with real API call when backend is ready
const mockShipments: Record<string, { status: string; origin: string; destination: string; weight: string; service: string; updates: { date: string; time: string; status: string; location: string }[] }> = {
  'CL123456': {
    status: 'In Transit',
    origin: 'Birmingham, UK',
    destination: 'Lahore, Pakistan',
    weight: '45 kg',
    service: 'Door to Door Air Cargo',
    updates: [
      { date: '14 Mar 2026', time: '09:30', status: 'In Transit', location: 'Dubai Cargo Hub' },
      { date: '13 Mar 2026', time: '22:15', status: 'Dispatched', location: 'Heathrow Airport, London' },
      { date: '13 Mar 2026', time: '14:00', status: 'Warehouse Processing', location: 'Cargo Lord Birmingham Warehouse' },
      { date: '12 Mar 2026', time: '10:30', status: 'Shipment Received', location: 'Birmingham, UK (Collection)' },
    ],
  },
}

const statusColors: Record<string, string> = {
  'Shipment Received': 'bg-blue-500',
  'Warehouse Processing': 'bg-yellow-500',
  'Dispatched': 'bg-purple-500',
  'In Transit': 'bg-orange-500',
  'Arrived at Destination': 'bg-teal-500',
  'Out for Delivery': 'bg-indigo-500',
  'Delivered': 'bg-green-500',
}

export default function TrackingSearch({ initialNumber = '' }: { initialNumber?: string }) {
  const [number, setNumber] = useState(initialNumber)
  const [searched, setSearched] = useState(!!initialNumber)
  const [result, setResult] = useState<typeof mockShipments[string] | null>(
    initialNumber ? (mockShipments[initialNumber] || null) : null
  )
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!number.trim()) return
    setLoading(true)
    setNotFound(false)

    // Simulate API call — replace with real fetch to your CRM/backend
    setTimeout(() => {
      const found = mockShipments[number.trim().toUpperCase()]
      setResult(found || null)
      setSearched(true)
      setNotFound(!found)
      setLoading(false)
    }, 800)
  }

  const currentStatusIndex = result
    ? trackingStatuses.findIndex((s) => s === result.status)
    : -1

  return (
    <div>
      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-10">
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your tracking number (e.g. CL123456)"
          className="flex-1 border-2 border-gray-200 focus:border-orange-500 px-5 py-4 text-base font-body outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary px-8 py-4 text-base disabled:opacity-60"
        >
          {loading ? 'Searching...' : 'Track Shipment'}
        </button>
      </form>

      {/* Not found */}
      {notFound && (
        <div className="bg-red-50 border border-red-200 p-6 text-center">
          <p className="text-red-700 font-heading font-bold text-lg mb-1">Tracking number not found</p>
          <p className="text-red-500 text-sm">
            Please double-check the number or contact us on{' '}
            <a href="tel:+441213283232" className="underline">0121 328 3232</a>
          </p>
        </div>
      )}

      {/* Result */}
      {result && searched && (
        <div className="space-y-8">
          {/* Shipment summary */}
          <div className="bg-white border border-gray-200 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-body mb-1">Tracking Number</p>
                <p className="font-heading font-bold text-navy-800 text-2xl">{number.toUpperCase()}</p>
              </div>
              <span className={`${statusColors[result.status] || 'bg-gray-500'} text-white font-heading font-bold uppercase tracking-wider text-sm px-5 py-2 self-start md:self-auto`}>
                {result.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'From', value: result.origin },
                { label: 'To', value: result.destination },
                { label: 'Service', value: result.service },
                { label: 'Weight', value: result.weight },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{d.label}</p>
                  <p className="font-heading font-semibold text-navy-800 text-base">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-white border border-gray-200 p-6 md:p-8">
            <h3 className="font-heading font-bold text-navy-800 text-lg mb-6">Shipment Progress</h3>
            <div className="relative">
              {/* Track line */}
              <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-200 hidden md:block" />
              <div
                className="absolute top-4 left-4 h-0.5 bg-orange-500 hidden md:block transition-all duration-1000"
                style={{ width: `${Math.max(0, (currentStatusIndex / (trackingStatuses.length - 1)) * 100)}%` }}
              />

              <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-0 relative">
                {trackingStatuses.map((status, i) => {
                  const done = i <= currentStatusIndex
                  const current = i === currentStatusIndex
                  return (
                    <div key={status} className="flex flex-col items-center text-center">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 z-10 transition-all ${
                        done ? 'bg-orange-500 border-orange-500' : 'bg-white border-gray-300'
                      } ${current ? 'ring-4 ring-orange-200' : ''}`}>
                        {done && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <p className={`text-xs leading-tight font-body ${done ? 'text-navy-800 font-semibold' : 'text-gray-400'}`}>
                        {status}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-gray-200 p-6 md:p-8">
            <h3 className="font-heading font-bold text-navy-800 text-lg mb-6">Update History</h3>
            <div className="space-y-0">
              {result.updates.map((update, i) => (
                <div key={i} className="flex gap-4 pb-6 relative">
                  {/* Timeline line */}
                  {i < result.updates.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-200" />
                  )}
                  {/* Dot */}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center z-10 ${i === 0 ? 'bg-orange-500' : 'bg-gray-200'}`}>
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-gray-400'}`} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                      <p className="font-heading font-bold text-navy-800 text-base">{update.status}</p>
                      <span className="text-gray-400 text-xs">{update.date} at {update.time}</span>
                    </div>
                    <p className="text-gray-500 text-sm">📍 {update.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Help strip */}
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
      )}

      {/* Demo hint */}
      {!searched && (
        <div className="bg-blue-50 border border-blue-200 p-4 text-sm text-blue-700 text-center">
          💡 Demo mode: Try tracking number <strong>CL123456</strong> to see the tracking page in action.
        </div>
      )}
    </div>
  )
}
