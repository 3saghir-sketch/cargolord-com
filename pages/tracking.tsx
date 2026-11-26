import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import TrackingSearch from '../components/TrackingSearch'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function TrackingPage() {
  const router = useRouter()
  // Old emails/receipts link here with ?tracking_number= or ?tn=; this page's
  // own search form used ?number=. Accept all three so links already sent to
  // real customers keep working, not just new ones.
  const initialNumber = (
    (router.query.number as string) ||
    (router.query.tracking_number as string) ||
    (router.query.tn as string) ||
    ''
  )

  // This page used to show mock/demo data with no real backend behind it --
  // a real tracking number always came back "not found". Real tracking data
  // lives on the CRM's own working tracking page, so a number arriving via
  // the URL (i.e. someone followed a tracking link) goes straight there
  // instead of ever rendering the old fake result here.
  useEffect(() => {
    if (initialNumber) {
      window.location.replace('https://crm.cargolord.co.uk/track/' + encodeURIComponent(initialNumber))
    }
  }, [initialNumber])

  return (
    <>
      <NextSeo
        title="Track Your Shipment"
        description="Track your Cargo Lord shipment in real time. Enter your tracking number to see the latest status and full update history."
        canonical="https://cargolord.com/tracking/"
      />
      <Navbar />
      <PageHeader
        title="Track Your Shipment"
        subtitle="Enter your tracking number below for real-time status updates."
        breadcrumbs={[{ label: 'Tracking' }]}
        image="https://images.unsplash.com/photo-1570615570135-e8c8c2e6e12d?w=1600&q=80"
      />
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <TrackingSearch initialNumber={initialNumber} />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
