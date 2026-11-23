import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'
import { cargoRates } from '../data/content'

function RateCard({
  data,
  accent,
}: {
  data: typeof cargoRates.sea | typeof cargoRates.air
  accent: 'orange' | 'blue'
}) {
  const headerBg = accent === 'orange' ? 'bg-orange-500' : 'bg-blue-500'
  const priceColor = accent === 'orange' ? 'text-orange-600' : 'text-blue-600'
  const icon = accent === 'orange' ? '🚢' : '✈️'

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className={`${headerBg} px-6 py-5 flex items-center gap-3`}>
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-white font-heading font-bold text-xl leading-tight">{data.title}</h3>
          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mt-0.5">{data.delivery}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="divide-y divide-gray-100">
          {data.items.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 py-3">
              <div>
                <p className="font-heading font-semibold text-navy-800 text-base leading-snug">{item.label}</p>
                {item.note && <p className="text-gray-400 text-xs mt-0.5">{item.note}</p>}
              </div>
              <p className={`font-heading font-extrabold text-lg whitespace-nowrap ${priceColor}`}>{item.price}</p>
            </div>
          ))}
        </div>

        {data.footnote && (
          <div className="mt-4 bg-blue-50 border border-blue-100 rounded-md px-4 py-3">
            <p className="text-xs text-gray-600 leading-relaxed">{data.footnote}</p>
          </div>
        )}

        <Link
          href={`/quote?service=${encodeURIComponent(data.quoteService)}`}
          className="btn-primary w-full text-center mt-6 block"
        >
          Get a Quote for {data.title.replace(' Rates', '')} →
        </Link>
      </div>
    </div>
  )
}

export default function Rates() {
  return (
    <>
      <NextSeo
        title="UK to Pakistan Cargo Rates"
        description="See our transparent sea and air cargo rates for shipping from the UK to Pakistan — from £1.50/kg by sea, £7.50/kg by air. No hidden charges."
        canonical="https://cargolord.com/rates/"
      />
      <Navbar />
      <PageHeader
        title="UK to Pakistan Cargo Rates"
        subtitle="Clear, published pricing — no hidden charges, no surprises at delivery."
        breadcrumbs={[{ label: 'Rates' }]}
      />

      <main className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RateCard data={cargoRates.sea} accent="orange" />
            <RateCard data={cargoRates.air} accent="blue" />
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-xs mb-6">
              Rates last reviewed {new Date(cargoRates.lastReviewed).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}. Subject to change — contact us to confirm your exact quote before booking.
            </p>
            <p className="text-gray-500 text-sm">
              Not sure which service fits what you're sending?{' '}
              <Link href="/services/excess-baggage/" className="text-orange-500 font-semibold hover:underline">
                See our Excess Baggage rates
              </Link>{' '}
              or{' '}
              <a href="https://wa.me/441213283232" className="text-orange-500 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>{' '}
              and we'll point you in the right direction.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <ChatWidget />
    </>
  )
}
