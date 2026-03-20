'use client'
import { useEffect, useState } from 'react'
import { SITE, STATS } from '@/data/site'

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    'Olá! Estou no site da Inamob e gostaria de falar com um especialista em marketing imobiliário.'
  )}`

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geo-pattern noise-overlay">
      {/* Orbs */}
      <div className="orb w-[600px] h-[600px] bg-brand-gold/10 top-[-100px] right-[-200px]" />
      <div className="orb w-[400px] h-[400px] bg-brand-gold/6 bottom-[0px] left-[-150px]" />
      <div className="orb w-[300px] h-[300px] bg-blue-500/5 top-[200px] left-[100px]" />

      {/* Decorative city silhouette */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-32">
          <path
            d="M0 200V120L60 100V80L100 75V60L140 55V40L180 38V55L220 50V30L260 28V45L300 40V60L360 55V45L400 40V25L440 22V40L480 35V50L520 45V35L560 30V15L600 12V30L640 28V40L700 35V50L760 45V30L800 25V10L840 8V25L880 20V35L920 30V45L960 40V55L1020 50V35L1060 30V20L1100 18V35L1140 30V45L1180 40V55L1220 50V65L1260 60V75L1300 70V85L1360 80V95L1400 90V110L1440 105V200Z"
            fill="#C9A84C"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Agência Especializada em Mercado Imobiliário
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="text-brand-cream">Marketing Digital</span>
              <br />
              <span className="shimmer-text">que Vende Imóveis</span>
              <br />
              <span className="text-brand-cream/70 italic text-4xl lg:text-5xl xl:text-6xl">
                de Verdade
              </span>
            </h1>

            {/* Sub */}
            <p
              className={`text-brand-cream/60 text-lg leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Incorporadoras, construtoras e imobiliárias no Rio de Janeiro que precisam de{' '}
              <strong className="text-brand-cream/80">leads qualificados</strong>,{' '}
              <strong className="text-brand-cream/80">presença digital premium</strong> e{' '}
              <strong className="text-brand-cream/80">ROI comprovado</strong>.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-7 py-4 rounded-full transition-all duration-300 btn-primary text-base"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Diagnóstico Gratuito
              </a>
              <a
                href="#servicos"
                className="flex items-center gap-2.5 border border-brand-gold/30 text-brand-cream hover:border-brand-gold hover:text-brand-gold px-7 py-4 rounded-full transition-all duration-300 text-base"
              >
                Ver Soluções
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Trust bar */}
            <div
              className={`flex flex-wrap items-center gap-6 transition-all duration-700 delay-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                'Especialistas em Imobiliário',
                'Atendimento no RJ',
                'ROI Comprovado',
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-brand-cream/50">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats card */}
          <div
            className={`hidden lg:block transition-all duration-900 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="border-gold-animated rounded-3xl p-8 bg-brand-dark-3">
                {/* Top accent */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                      <path d="M13 13l6 6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-cream">Performance em Tempo Real</p>
                    <p className="text-xs text-brand-cream/40">Resultados dos últimos 30 dias</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                    Ao Vivo
                  </span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {STATS.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="bg-brand-dark-2/60 rounded-2xl p-4 border border-brand-gold/8"
                    >
                      <p className="stat-number text-2xl font-bold text-brand-gold mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm font-medium text-brand-cream/80 leading-tight">
                        {stat.label}
                      </p>
                      <p className="text-xs text-brand-cream/40 mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA mini */}
                <a
                  href="#contato"
                  className="flex items-center justify-center gap-2 w-full bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/20 text-brand-gold text-sm font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Quero esses resultados
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-2 rounded-xl shadow-lg rotate-3 animate-float">
                🏆 Top Agência Imobiliária RJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
