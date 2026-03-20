'use client'
import { useEffect, useRef } from 'react'
import { SERVICES, SITE } from '@/data/site'

export default function ServicesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={ref} className="py-28 bg-brand-dark-2 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 geo-pattern opacity-50" />
      <div className="orb w-[500px] h-[500px] bg-brand-gold/5 top-[-150px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-18 animate-on-scroll">
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-brand-gold uppercase mb-4">
            ◆ Soluções Especializadas
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-brand-cream mb-5">
            Tudo que sua marca imobiliária<br />
            <em className="shimmer-text not-italic">precisa para crescer</em>
          </h2>
          <p className="text-brand-cream/50 text-lg max-w-xl mx-auto">
            Estratégias integradas, do tráfego pago ao SEO, da identidade visual ao CRM. Um ecossistema completo para vender mais.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll delay-${(i % 3) * 100 + 100} card-lift group relative rounded-2xl p-7 border transition-all duration-300 ${
                service.highlight
                  ? 'bg-gradient-to-br from-brand-gold/12 to-brand-gold/4 border-brand-gold/30 hover:border-brand-gold/50'
                  : 'bg-brand-dark-3 border-brand-gold/10 hover:border-brand-gold/25'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-brand-gold bg-brand-gold/15 px-2.5 py-1 rounded-full uppercase">
                  Popular
                </div>
              )}

              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="font-display text-xl text-brand-cream mb-1">{service.title}</h3>
              <p className="text-xs text-brand-gold/80 font-mono tracking-wide mb-4">{service.subtitle}</p>
              <p className="text-brand-cream/55 text-sm leading-relaxed mb-6">{service.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-brand-gold/70 bg-brand-gold/8 border border-brand-gold/15 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 animate-on-scroll delay-400">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Inamob para minha empresa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-8 py-4 rounded-full transition-all duration-300 text-base btn-primary"
          >
            Quero uma Proposta Personalizada
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <p className="text-brand-cream/35 text-sm mt-3">Diagnóstico gratuito · Sem compromisso</p>
        </div>
      </div>
    </section>
  )
}
