'use client'
import { useState, useEffect, useRef } from 'react'
import { FAQ, SITE } from '@/data/site'

export default function FaqSection() {
  const [open, setOpen] = useState(null)
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
    <section id="faq" ref={ref} className="py-28 bg-brand-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-brand-gold uppercase mb-4">
            ◆ Dúvidas Frequentes
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-brand-cream mb-5">
            Perguntas que todo cliente<br />
            <em className="shimmer-text not-italic">faz antes de contratar</em>
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>

        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${i * 100 + 100} border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-brand-gold/35 bg-brand-gold/5'
                  : 'border-brand-gold/10 bg-brand-dark-3 hover:border-brand-gold/20'
              }`}
            >
              <button
                className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-brand-cream text-base pr-4">{item.q}</span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? 'border-brand-gold bg-brand-gold text-brand-dark rotate-45'
                      : 'border-brand-gold/30 text-brand-gold/60'
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-6 text-brand-cream/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll delay-500">
          <p className="text-brand-cream/40 text-sm mb-4">Ainda tem dúvidas? Fale diretamente com nossa equipe.</p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Olá! Tenho algumas dúvidas sobre os serviços da Inamob.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Tirar Dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
