import Link from 'next/link'
import { blogPosts } from '../data/content'

export default function BlogCards() {
  if (blogPosts.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-tag">Latest News</span>
            <h2 className="section-title">Cargo Tips &amp; Guides</h2>
          </div>
          <Link href="/blog/" className="text-orange-500 hover:text-orange-600 font-heading font-semibold uppercase tracking-wider text-sm flex items-center gap-2 transition-colors">
            View All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group border border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all overflow-hidden">
              <div className="relative overflow-hidden h-52">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-xs mb-3 font-body">{post.date}</p>
                <h3 className="font-heading font-bold text-navy-800 text-lg leading-snug mb-3 group-hover:text-orange-600 transition-colors">
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}/`} className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-heading font-semibold uppercase tracking-wider text-xs transition-colors">
                  Read More
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
