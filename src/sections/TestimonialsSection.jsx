'use client'
import { useEffect, useRef } from 'react'
import { TESTIMONIALS, CLIENTS, SITE } from '@/data/site'

export default function TestimonialsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="depoimentos" ref={ref} className="py-28 bg-brand-dark relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-brand-gold/5 top-0 left-[-200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-brand-gold uppercase mb-4">
            ◆ Clientes & Resultados
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-brand-cream mb-5">
            Empresas que cresceram<br />
            <em className="shimmer-text not-italic">com a Inamob</em>
          </h2>
          <p className="text-brand-cream/50 text-lg max-w-xl mx-auto">
            Mais de 180 empreendimentos lançados e comercializados com nossas estratégias digitais.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`animate-on-scroll delay-${i * 150 + 100} testimonial-card p-7`}>
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(t.stars).fill(0).map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <div className="text-3xl text-brand-gold/30 font-display leading-none mb-3">"</div>
              <p className="text-brand-cream/70 text-sm leading-relaxed mb-6 italic">
                {t.text}
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 border-t border-brand-gold/10 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center text-brand-dark font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-cream text-sm">{t.name}</p>
                  <p className="text-xs text-brand-cream/40">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos strip */}
        <div className="animate-on-scroll delay-400">
          <p className="text-center text-xs text-brand-cream/30 tracking-widest uppercase font-mono mb-8">
            Alguns dos nossos parceiros
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="px-5 py-3 bg-brand-dark-3 border border-brand-gold/10 rounded-xl text-brand-cream/40 text-sm font-medium hover:border-brand-gold/25 hover:text-brand-cream/60 transition-all duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
