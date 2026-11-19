import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-32 text-center">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-9xl font-heading font-extrabold text-navy-800/10 leading-none">404</div>
          <h1 className="font-heading font-bold text-navy-800 text-4xl mt-4 mb-3">Page Not Found</h1>
          <p className="text-gray-500 mb-8">This page doesn't exist or has been moved. Let us help you find what you need.</p>
          <div className="flex justify-center gap-4">
            <Link href="/" className="btn-primary">Go Home</Link>
            <Link href="/tracking" className="btn-outline bg-navy-800">Track Shipment</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
