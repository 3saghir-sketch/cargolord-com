import { NextSeo } from 'next-seo'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function Quote() {
  return (
    <>
      <NextSeo
        title="Get a Free Cargo Quote"
        description="Request a free, no-obligation cargo quote from Cargo Lord. Door-to-door cargo to Pakistan, India and Europe. Call 0121 328 3232 or fill in the form."
        canonical="https://cargolord.com/quote/"
      />
      <Navbar />
      <PageHeader
        title="Get a Free Quote"
        subtitle="Tell us about your shipment and we'll get back to you within 1 hour."
        breadcrumbs={[{ label: 'Get a Quote' }]}
      />
      <main>
        <QuoteForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
