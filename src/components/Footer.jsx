import { SITE, SERVICES, NAV_LINKS } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/10 relative overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="40" height="40" rx="8" fill="url(#foot-logo-grad)" />
                  <path d="M8 28V14L20 8L32 14V28" stroke="#0A0A0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 28V21H24V28" stroke="#0A0A0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="foot-logo-grad" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stopColor="#E8C96A"/>
                      <stop offset="100%" stopColor="#A07830"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-brand-cream">Inamob</span>
                <span className="block text-[10px] tracking-[0.2em] text-brand-gold/60 uppercase font-mono leading-none -mt-0.5">
                  Negócios Digitais
                </span>
              </div>
            </a>
            <p className="text-brand-cream/45 text-sm leading-relaxed mb-6">
              Agência especializada em marketing digital para o mercado imobiliário. Resultados reais para incorporadoras, construtoras e imobiliárias no Rio de Janeiro.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  label: 'Instagram',
                  href: SITE.instagram,
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: SITE.linkedin,
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: 'WhatsApp',
                  href: whatsappUrl,
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-brand-gold/15 text-brand-cream/40 hover:border-brand-gold/40 hover:text-brand-gold transition-all duration-300"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-brand-cream font-semibold text-sm mb-5 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicos"
                    className="text-brand-cream/45 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-brand-cream font-semibold text-sm mb-5 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-cream/45 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-cream font-semibold text-sm mb-5 uppercase tracking-wider">Contato</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-brand-cream/30 uppercase tracking-wider mb-1">Rio de Janeiro</p>
                <p className="text-brand-cream/60 text-sm">Rio de Janeiro, RJ</p>
              </div>
              <div>
                <p className="text-xs text-brand-cream/30 uppercase tracking-wider mb-1">E-mail</p>
                <a href={`mailto:${SITE.email}`} className="text-brand-cream/60 hover:text-brand-gold text-sm transition-colors">
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-brand-cream/30 uppercase tracking-wider mb-1">Atendimento</p>
                <p className="text-brand-cream/60 text-sm">Seg–Sex, 9h às 18h</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2 bg-green-600/15 hover:bg-green-600/25 border border-green-600/25 text-green-400 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gold/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream/30 text-xs text-center md:text-left">
            © {year} Inamob Negócios Digitais. Todos os direitos reservados.
            {SITE.cnpj && (
              <span className="ml-2 opacity-60">CNPJ: {SITE.cnpj}</span>
            )}
          </p>
          <div className="flex gap-6">
            {['Política de Privacidade', 'Termos de Uso'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-brand-cream/25 hover:text-brand-gold text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
