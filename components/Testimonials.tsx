import { useState } from 'react'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag">Customer Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Genuine customer reviews coming soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-tag">Customer Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Trusted by thousands of customers shipping between the UK and Pakistan every year.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-7 border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all group relative">
              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-6xl text-orange-100 font-heading font-extrabold leading-none group-hover:text-orange-200 transition-colors">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array(t.rating).fill(0).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10">"{t.text}"</p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-navy-800 flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-navy-800 text-sm">{t.name}</p>
                  <p className="text-orange-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="bg-white p-7 border border-gray-200 relative">
            <div className="absolute top-5 right-6 text-6xl text-orange-100 font-heading font-extrabold leading-none">"</div>
            <div className="flex gap-0.5 mb-4">
              {Array(testimonials[active].rating).fill(0).map((_, s) => (
                <svg key={s} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">"{testimonials[active].text}"</p>
            <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
              <div className="w-10 h-10 bg-navy-800 flex items-center justify-center text-white font-heading font-bold text-sm">{testimonials[active].name.charAt(0)}</div>
              <div>
                <p className="font-heading font-bold text-navy-800 text-sm">{testimonials[active].name}</p>
                <p className="text-orange-500 text-xs">{testimonials[active].location}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-orange-500 w-6' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
