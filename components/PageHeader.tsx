import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href?: string }[]
  image?: string
}

export default function PageHeader({ title, subtitle, breadcrumbs, image }: PageHeaderProps) {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1600&q=80'})` }}
    >
      <div className="absolute inset-0 bg-navy-900/85" />
      <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500" />

      <div className="relative max-w-7xl mx-auto px-4">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-body">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {b.href ? (
                  <Link href={b.href} className="hover:text-orange-400 transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-orange-400">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 mt-3 text-base md:text-lg max-w-2xl font-body">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
