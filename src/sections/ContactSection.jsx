'use client'
import { useState, useEffect, useRef } from 'react'
import { SITE } from '@/data/site'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Simula envio — integre com seu backend/formspree/etc
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
  }

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    'Olá! Estou no site da Inamob e gostaria de uma proposta de marketing imobiliário para minha empresa.'
  )}`

  return (
    <section id="contato" ref={ref} className="py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-30" />
      <div className="orb w-[500px] h-[500px] bg-brand-gold/7 top-[-100px] right-[-150px]" />
      <div className="orb w-[350px] h-[350px] bg-brand-gold/5 bottom-0 left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-brand-gold uppercase mb-4">
            ◆ Fale Conosco
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-brand-cream mb-5">
            Pronto para transformar<br />
            <em className="shimmer-text not-italic">seu marketing imobiliário?</em>
          </h2>
          <p className="text-brand-cream/50 text-lg max-w-xl mx-auto">
            Atendimento exclusivo para incorporadoras, construtoras e imobiliárias no Rio de Janeiro.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp card */}
            <div className="animate-on-scroll delay-100 border-gold-animated rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#22c55e">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-cream">Resposta Imediata</p>
                  <p className="text-xs text-brand-cream/40">Seg–Sex, 9h–18h</p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                Chamar no WhatsApp Agora
              </a>
            </div>

            {/* Info items */}
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'E-mail',
                value: SITE.email,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Localização',
                value: 'Rio de Janeiro, RJ',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                label: 'Atendimento',
                value: 'Segunda a Sexta, 9h–18h',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="animate-on-scroll delay-200 flex items-center gap-4 bg-brand-dark-3 border border-brand-gold/10 rounded-xl px-5 py-4"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-brand-cream/40 uppercase tracking-wider">{item.label}</p>
                  <p className="text-brand-cream/80 text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="animate-on-scroll delay-300 flex gap-3">
              {[
                {
                  label: 'Instagram',
                  href: SITE.instagram,
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: SITE.linkedin,
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-cream/50 hover:text-brand-gold border border-brand-gold/15 hover:border-brand-gold/35 bg-brand-dark-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 animate-on-scroll delay-200">
            <div className="bg-brand-dark-3 border border-brand-gold/12 rounded-3xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="font-display text-2xl text-brand-cream mb-3">Mensagem enviada!</h3>
                  <p className="text-brand-cream/50 mb-6">
                    Nossa equipe entrará em contato em breve. Ou se preferir, fale agora pelo WhatsApp.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold px-6 py-3 rounded-full"
                  >
                    Falar pelo WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-brand-cream/40 uppercase tracking-wider mb-2">Nome *</label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Seu nome completo"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-brand-cream/40 uppercase tracking-wider mb-2">Empresa *</label>
                      <input
                        className="form-input"
                        type="text"
                        name="company"
                        placeholder="Nome da empresa"
                        value={form.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-brand-cream/40 uppercase tracking-wider mb-2">E-mail *</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-brand-cream/40 uppercase tracking-wider mb-2">WhatsApp *</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="(21) 9 9999-9999"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-brand-cream/40 uppercase tracking-wider mb-2">Serviço de interesse</label>
                    <select
                      className="form-input"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Selecione uma opção</option>
                      <option>Marketing para Lançamentos</option>
                      <option>Geração de Leads Qualificados</option>
                      <option>Sites & Landing Pages</option>
                      <option>Gestão de Redes Sociais</option>
                      <option>SEO & Conteúdo Imobiliário</option>
                      <option>Inteligência & Analytics</option>
                      <option>Pacote Completo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-brand-cream/40 uppercase tracking-wider mb-2">Como podemos ajudar?</label>
                    <textarea
                      className="form-input resize-none"
                      name="message"
                      placeholder="Conte brevemente sobre seu negócio e seus objetivos de marketing..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-light disabled:opacity-70 text-brand-dark font-bold py-4 rounded-xl transition-all duration-300 btn-primary text-base"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Quero uma Proposta em 24h
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-brand-cream/30">
                    Atendimento exclusivo para empresas · Sem spam · 100% confidencial
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
