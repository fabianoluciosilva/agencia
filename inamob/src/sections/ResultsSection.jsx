'use client'
import { useEffect, useRef } from 'react'
import { SITE } from '@/data/site'

const COMPARISON = [
  {
    topic: 'Especialização',
    generic: 'Agências genéricas que atendem qualquer cliente, sem expertise imobiliária.',
    inamob: 'Foco 100% no mercado imobiliário. Conhecemos ciclos de venda, jornada do comprador e legislação do setor.',
  },
  {
    topic: 'Qualidade dos Leads',
    generic: 'Leads frios, sem intenção de compra, que desperdiçam o tempo da sua equipe de vendas.',
    inamob: 'Leads com interesse real, segmentados por faixa de renda, localização e estágio da jornada de compra.',
  },
  {
    topic: 'Relatórios',
    generic: 'Relatórios mensais genéricos com métricas de vaidade (curtidas, alcance).',
    inamob: 'Dashboard em tempo real com CPL, ROI, conversões e oportunidades. Reunião quinzenal estratégica.',
  },
  {
    topic: 'Integração com Vendas',
    generic: 'Marketing e vendas funcionam separados. O lead se perde no caminho.',
    inamob: 'Integração com CRM, automações de follow-up e nutrição. Cada lead é acompanhado até a venda.',
  },
  {
    topic: 'Atendimento',
    generic: 'Gerente de conta genérico que cuida de 30+ clientes simultaneamente.',
    inamob: 'Equipe dedicada com especialista em imobiliário, diretor de mídia e analista de SEO exclusivos.',
  },
]

export default function ResultsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultados" ref={ref} className="py-28 bg-brand-dark relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-brand-gold/6 bottom-0 left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-brand-gold uppercase mb-4">
            ◆ Por que a Inamob
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-brand-cream mb-5">
            Chega de agência que não<br />
            <em className="shimmer-text not-italic">entende o mercado imobiliário</em>
          </h2>
          <p className="text-brand-cream/50 text-lg max-w-xl mx-auto">
            Veja a diferença real entre contratar uma agência genérica e ter um parceiro especializado.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Comparison table header */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-4 px-4 animate-on-scroll">
          <div className="col-span-1" />
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-red-400/70 text-sm font-semibold bg-red-400/8 border border-red-400/15 px-4 py-2 rounded-full">
              ❌ Agência Comum
            </span>
          </div>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold bg-brand-gold/10 border border-brand-gold/25 px-4 py-2 rounded-full">
              ✅ Inamob
            </span>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-3">
          {COMPARISON.map((item, i) => (
            <div
              key={item.topic}
              className={`animate-on-scroll delay-${i * 100 + 100} grid md:grid-cols-3 gap-4 rounded-2xl overflow-hidden border border-brand-gold/8`}
            >
              {/* Topic */}
              <div className="bg-brand-dark-3 flex items-center px-6 py-5">
                <span className="font-semibold text-brand-cream text-sm">{item.topic}</span>
              </div>
              {/* Generic */}
              <div className="bg-red-950/20 border-l border-red-500/10 flex items-center px-6 py-5">
                <p className="text-red-400/70 text-sm leading-relaxed">{item.generic}</p>
              </div>
              {/* Inamob */}
              <div className="bg-brand-gold/5 border-l border-brand-gold/15 flex items-center px-6 py-5">
                <p className="text-brand-cream/80 text-sm leading-relaxed">{item.inamob}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll delay-500">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Olá! Vi a comparação no site da Inamob e quero saber como vocês podem transformar o marketing da minha empresa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-8 py-4 rounded-full transition-all duration-300 btn-primary"
          >
            Quero uma Parceria de Verdade
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
