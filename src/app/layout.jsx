import { SITE } from '@/data/site'
import '@/styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://inamob.com.br'),
  title: {
    default: 'Inamob Negócios Digitais | Marketing Digital Imobiliário no Rio de Janeiro',
    template: '%s | Inamob Negócios Digitais',
  },
  description:
    'Agência de marketing digital especializada no mercado imobiliário no Rio de Janeiro. Geração de leads qualificados, tráfego pago, SEO e sites para incorporadoras, construtoras e imobiliárias.',
  keywords: [
    'marketing digital imobiliário',
    'agência marketing imobiliário RJ',
    'marketing para incorporadoras Rio de Janeiro',
    'geração de leads imobiliários',
    'tráfego pago imobiliário',
    'SEO imobiliário',
    'marketing para construtoras RJ',
    'lançamentos imobiliários marketing',
    'agência imobiliária digital',
    'Inamob',
    'marketing imobiliário Rio de Janeiro',
  ],
  authors: [{ name: 'Inamob Negócios Digitais', url: 'https://inamob.com.br' }],
  creator: 'Inamob Negócios Digitais',
  publisher: 'Inamob Negócios Digitais',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://inamob.com.br',
    siteName: 'Inamob Negócios Digitais',
    title: 'Inamob | Marketing Digital Imobiliário no Rio de Janeiro',
    description:
      'Geração de leads qualificados, tráfego pago e SEO especializado para incorporadoras, construtoras e imobiliárias no RJ.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inamob Negócios Digitais - Marketing Imobiliário RJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inamob | Marketing Digital Imobiliário no Rio de Janeiro',
    description:
      'Geração de leads qualificados, tráfego pago e SEO especializado para incorporadoras, construtoras e imobiliárias no RJ.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://inamob.com.br',
  },
  verification: {
    google: 'SEU_GOOGLE_VERIFICATION_CODE', // Adicionar código do Search Console
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://inamob.com.br/#organization',
      name: 'Inamob Negócios Digitais',
      url: 'https://inamob.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://inamob.com.br/logo.png',
      },
      description:
        'Agência de marketing digital especializada no mercado imobiliário no Rio de Janeiro.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rio de Janeiro',
        addressRegion: 'RJ',
        addressCountry: 'BR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
      sameAs: [SITE.instagram, SITE.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://inamob.com.br/#website',
      url: 'https://inamob.com.br',
      name: 'Inamob Negócios Digitais',
      publisher: { '@id': 'https://inamob.com.br/#organization' },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://inamob.com.br/#localbusiness',
      name: 'Inamob Negócios Digitais',
      image: 'https://inamob.com.br/og-image.jpg',
      url: 'https://inamob.com.br',
      '@context': 'https://schema.org',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rio de Janeiro',
        addressRegion: 'RJ',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -22.9068,
        longitude: -43.1729,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0A0A0F" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
