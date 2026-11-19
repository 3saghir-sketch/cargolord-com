import { NextSeo } from 'next-seo'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

const sections = [
  {
    title: '1. Shipment Acceptance',
    content: `Cargo Lord Ltd ("the Company") accepts shipments on the condition that the sender ("the Customer") has read, understood, and agrees to these terms and conditions. By presenting a consignment for carriage, the Customer agrees to be bound by these terms. The Company reserves the right to refuse any consignment at its sole discretion, including but not limited to prohibited items, improperly packaged goods, or shipments where the declared contents are suspect.`,
  },
  {
    title: '2. Insurance & Liability',
    content: `The Company operates a freight liability insurance policy. Liability is limited to £50 per consignment unless the Customer has declared a higher value at the time of booking and paid the applicable insurance premium. Claims are subject to the conditions set out in Section 10. The Company is not liable for indirect or consequential losses, including but not limited to loss of income, loss of market, or consequential damage.`,
  },
  {
    title: '3. Liability Limitations',
    content: `The Company shall not be liable for loss or damage caused by: circumstances beyond the Company's reasonable control (force majeure), including but not limited to natural disasters, war, civil unrest, strike action, or government action; the acts or omissions of third parties including airlines, shipping lines, customs authorities, or ground handling agents; the Customer's failure to comply with these terms and conditions; inadequate packaging by the Customer; the inherent nature of the goods.`,
  },
  {
    title: '4. Fragile & High-Value Items',
    content: `Fragile items must be declared at the time of booking. The Company will not accept liability for damage to fragile or breakable items unless they have been professionally packed by the Company and insured at the full replacement value. Items such as glassware, ceramics, electronics, and artwork are accepted at the Customer's risk unless the Company has confirmed in writing that it accepts liability. High-value items including jewellery, cash, precious metals, negotiable instruments, and documents of title are excluded from standard carriage and must not be included in consignments without prior written agreement.`,
  },
  {
    title: '5. Delayed Shipments',
    content: `Quoted and estimated delivery times are indicative only and do not form a contractual commitment. The Company will not be liable for delays caused by: customs clearance procedures in the origin or destination country; airline or shipping line delays or schedule changes; adverse weather conditions; public holidays in the UK or Pakistan; incorrect or incomplete documentation provided by the Customer. In the event of a significant delay, the Company will make reasonable efforts to provide updates to the Customer.`,
  },
  {
    title: '6. Inspection Rights',
    content: `The Company and its agents reserve the right to open and inspect any consignment at any time without prior notice. This right may be exercised for security purposes, compliance with customs requirements, or where prohibited items are suspected. The Company may also be required to provide access to consignments to government authorities, customs officers, police, or other statutory bodies.`,
  },
  {
    title: '7. Claims Procedures',
    content: `All claims for loss or damage must be notified to the Company in writing within 7 days of delivery (or, in the case of non-delivery, within 30 days of the agreed delivery date). Claims must include the tracking number, a description of the loss or damage, photographic evidence where applicable, and the original booking confirmation. The Company will acknowledge claims within 5 working days and aim to resolve them within 28 working days. Compensation will not be paid where the Customer has failed to take reasonable steps to mitigate their loss.`,
  },
  {
    title: '8. Customs Clearance',
    content: `The Customer is responsible for ensuring that the consignment and all documentation comply with the customs regulations of both the origin and destination countries. The Company will, where agreed, assist with customs documentation as part of the door-to-door service; however, the Customer remains the importer/exporter of record and is legally responsible for the accuracy of all declarations. Any customs duties, taxes, fines, or charges levied by customs authorities in either country remain the sole responsibility of the Customer. The Company's door-to-door Pakistan service includes customs clearance at the Pakistan end; however, any duties assessed by Pakistani customs on commercial or dutiable goods remain the Customer's responsibility.`,
  },
  {
    title: '9. Prohibited Items',
    content: `The following items are not accepted under any circumstances: firearms, ammunition, and weapons; narcotics and controlled substances; counterfeit goods; live animals; human remains; hazardous materials including aerosols, flammable liquids, and compressed gases (unless IATA-compliant and pre-approved); cash and negotiable instruments; perishable goods unless pre-approved. The Customer warrants that their consignment does not contain prohibited items and indemnifies the Company against any losses, fines, or liability arising from a breach of this warranty.`,
  },
  {
    title: '10. Payment Terms',
    content: `Payment is due at the time of booking unless otherwise agreed in writing. The Company accepts payment by bank transfer, cash, or other agreed methods. Prices quoted are inclusive of standard handling but exclusive of customs duties, destination charges (where applicable), and insurance (unless stated). The Company reserves the right to place a lien on any consignment in respect of unpaid charges.`,
  },
  {
    title: '11. Governing Law',
    content: `These terms and conditions are governed by the laws of England and Wales. Any disputes arising from the provision of services under these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
]

export default function Terms() {
  return (
    <>
      <NextSeo
        title="Terms & Conditions"
        description="Cargo Lord Ltd terms and conditions covering shipment acceptance, insurance, liability, customs clearance, claims procedures, and prohibited items."
        canonical="https://cargolord.co.uk/terms/"
      />
      <Navbar />
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our cargo services."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* Last updated */}
          <div className="bg-orange-50 border border-orange-200 p-4 mb-8 text-sm text-orange-800">
            <strong>Last updated:</strong> January 2024. These terms apply to all shipments booked with Cargo Lord Ltd on or after this date.
          </div>

          <div className="bg-white border border-gray-200 p-8 md:p-12">
            <p className="text-gray-600 leading-relaxed mb-8">
              These Terms and Conditions govern the provision of cargo and freight services by <strong>Cargo Lord Ltd</strong>, a company registered in England and Wales, with its registered office at Unit 3, 3 Langton Road, Birmingham, B8 3DG. Please read these terms carefully. By booking a shipment with us, you agree to be bound by these terms.
            </p>

            {sections.map((section) => (
              <div key={section.title} className="mb-8 pb-8 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                <h2 className="font-heading font-bold text-navy-800 text-xl mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}

            <div className="mt-10 bg-navy-800 p-6 text-white">
              <p className="text-sm text-gray-300">
                For questions about these terms, please contact us at{' '}
                <a href="mailto:info@cargolord.com" className="text-orange-400 hover:underline">info@cargolord.com</a>
                {' '}or call <a href="tel:+441213283232" className="text-orange-400 hover:underline">0121 328 3232</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
