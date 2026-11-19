import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import ChatWidget from '../../components/ChatWidget'
import { blogPosts } from '../../data/content'

export default function BlogPost({ post }: { post: typeof blogPosts[0] }) {
  if (!post) return null

  // Simple markdown-ish render for **bold** and newlines
  const renderContent = (text: string) =>
    text.split('\n\n').map((para, i) => {
      const withBold = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      if (para.startsWith('**') && para.trim().endsWith('**')) {
        return <h3 key={i} className="font-heading font-bold text-navy-800 text-xl mt-6 mb-2" dangerouslySetInnerHTML={{ __html: withBold }} />
      }
      return <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: withBold }} />
    })

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://cargolord.co.uk/blog/${post.slug}/`}
        openGraph={{ images: [{ url: post.image }] }}
      />
      <Navbar />
      <PageHeader
        title={post.title}
        breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
        image={post.image}
      />
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-gray-200 p-8 md:p-12">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <span className="bg-orange-500 text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1">{post.category}</span>
              <span className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="text-gray-400 text-sm">By Cargo Lord Team</span>
            </div>

            {/* Hero img */}
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-8" />

            {/* Content */}
            <div className="prose-cargo">
              {renderContent(post.content)}
            </div>

            {/* CTA */}
            <div className="mt-10 bg-navy-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-heading font-bold text-lg">Ready to ship?</p>
                <p className="text-gray-400 text-sm">Get a free quote — door-to-door from £1.50/kg to Pakistan.</p>
              </div>
              <Link href="/quote" className="btn-primary flex-shrink-0">Get a Quote</Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-6">
            <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-heading font-semibold text-sm">← Back to Blog</Link>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug) || null
  return { props: { post } }
}
