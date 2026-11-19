import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import ChatWidget from '../../components/ChatWidget'
import { blogPosts } from '../../data/content'

export default function Blog() {
  return (
    <>
      <NextSeo
        title="Cargo Tips & Guides Blog"
        description="Helpful guides on shipping cargo to Pakistan from the UK. Tips on air cargo, sea freight, excess baggage, customs, and saving money on UK to Pakistan delivery."
        canonical="https://cargolord.co.uk/blog/"
      />
      <Navbar />
      <PageHeader
        title="Cargo Tips & Guides"
        subtitle="Expert advice on shipping, customs, and getting the best value on UK to Pakistan cargo."
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <main className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group bg-white border border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="relative overflow-hidden h-52">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs mb-3">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <h2 className="font-heading font-bold text-navy-800 text-xl leading-snug mb-3 group-hover:text-orange-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-heading font-semibold uppercase tracking-wider text-xs transition-colors">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
