import { NextSeo } from 'next-seo'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ImpactBanner from '../components/ImpactBanner'
import ServicesGrid from '../components/ServicesGrid'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import WhyUsSection from '../components/WhyUsSection'
import Testimonials from '../components/Testimonials'
import BlogCards from '../components/BlogCards'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Cargo Lord Ltd — Cheap Cargo to Pakistan from the UK, from £1.50/kg"
        description="Door-to-door air cargo to Pakistan from just £1.50/kg. No hidden customs charges. Sea cargo, excess baggage, air freight to Pakistan, India and Europe. Offices in Birmingham, Manchester, London & Bolton. Est. 2012."
        canonical="https://cargolord.com/"
        additionalMetaTags={[
          { name: 'keywords', content: 'cargo to pakistan, cheap cargo uk to pakistan, door to door cargo pakistan, air cargo pakistan, excess baggage pakistan, sea cargo pakistan, Birmingham cargo' },
        ]}
      />
      <Navbar />
      <main>
        <Hero />
        <ImpactBanner />
        <ServicesGrid />
        <AboutSection />
        <StatsSection />
        <WhyUsSection />
        <Testimonials />
        <BlogCards />
        <QuoteForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
