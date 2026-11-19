import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import TrackingSearch from '../components/TrackingSearch'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function TrackingPage() {
  const router = useRouter()
  const initialNumber = (router.query.number as string) || ''

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
