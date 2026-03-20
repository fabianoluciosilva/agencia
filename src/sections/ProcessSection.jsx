'use client'
import { useEffect, useRef } from 'react'
import { PROCESS, SITE } from '@/data/site'

export default function ProcessSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="processo" ref={ref} className="py-28 bg-brand-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-30" />
      <div className="orb w-[450px] h-[450px] bg-brand-gold/7 top-[-50px] right-[-150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-18 animate-on-scroll">
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-brand-gold uppercase mb-4">
            ◆ Nossa Metodologia
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-brand-cream mb-5">
            Do diagnóstico ao resultado<br />
            <em className="shimmer-text not-italic">em 4 etapas</em>
          </h2>
          <p className="text-brand-cream/50 text-lg max-w-xl mx-auto">
            Um processo claro, transparente e orientado a resultados. Você sabe exatamente o que está acontecendo em cada fase.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

          {PROCESS.map((step, i) => (
            <div key={step.step} className={`animate-on-scroll delay-${i * 150 + 100} relative`}>
              {/* Step number */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 border border-brand-gold/25" />
                <div className="absolute inset-2 rounded-full bg-brand-dark-3 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-brand-gold">{step.step}</span>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-brand-gold/10 filter blur-xl" />
              </div>

              <div className="text-center">
                <h3 className="font-display text-xl text-brand-cream mb-3">{step.title}</h3>
                <p className="text-brand-cream/50 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow between steps (mobile) */}
              {i < PROCESS.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6 text-brand-gold/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee block */}
        <div className="animate-on-scroll delay-500 mt-20">
          <div className="border-gold-animated rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <div className="text-5xl mb-6">🛡️</div>
            <h3 className="font-display text-3xl text-brand-cream mb-4">
              Garantia de Resultado
            </h3>
            <p className="text-brand-cream/60 text-lg leading-relaxed mb-8">
              Nos comprometemos com metas claras desde o início. Se não atingirmos os KPIs acordados no primeiro trimestre, trabalhamos de graça no mês seguinte.
              <strong className="text-brand-cream/80"> Nossa confiança é o nosso contrato.</strong>
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Olá! Quero conhecer mais sobre a garantia de resultado da Inamob.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              Falar com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
