// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Quando o domínio próprio estiver ativo (ex.: andradepro.pt), muda só aqui.
const SITE_URL = 'https://ntecheledom.netlify.app'

const ZONAS = [
  'Alverca do Ribatejo',
  'Vila Franca de Xira',
  'Alhandra',
  'Póvoa de Santa Iria',
  'Vialonga',
  'Loures',
  'Carregado',
  'Azambuja',
  'Alenquer',
  'Arruda dos Vinhos',
  'Samora Correia',
  'Benavente',
  'Salvaterra de Magos',
  'Lisboa',
]

// JSON-LD para SEO local — Andrade Renova
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Andrade Renova',
  alternateName: 'Andrade Renova — Eletricidade Certificada e Remodelações',
  description:
    'Instalação elétrica certificada e remodelação completa com garantia, projeto chave na mão, para apartamentos e moradias em Alverca, Vila Franca de Xira, Carregado, Samora Correia e Lisboa.',
  url: SITE_URL,
  image: `${SITE_URL}/images/optimized/hero-bg.webp`,
  telephone: '+351939388057',
  email: 'neriasg24@gmail.com',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Praceta Vasco da Gama, Nº 15 RC Esq.',
    postalCode: '2600-860',
    addressLocality: 'São João dos Montes',
    addressRegion: 'Lisboa',
    addressCountry: 'PT',
  },
  areaServed: ZONAS.map((nome) => ({ '@type': 'City', name: nome })),
  openingHours: 'Mo-Fr 09:00-20:00',
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Remodelação Completa de Apartamentos e Moradias',
        description:
          'Obras completas chave na mão, do início ao fim: demolição, alvenaria, pavimentos, elétrica, canalização e acabamentos, com garantia.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Remodelação de Cozinhas',
        description:
          'Do desenho à instalação: móveis, bancadas, eletrodomésticos e instalações elétricas.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Remodelação de Casas de Banho',
        description:
          'Renovação total ou parcial: impermeabilização, louças, azulejos e acabamentos.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Pintura e Acabamentos',
        description:
          'Pintura interior e exterior, paredes lisas e trabalho limpo.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Instalação Elétrica Certificada',
        description:
          'Instalações elétricas, quadros e certificação, executadas por técnico certificado, com seguro de responsabilidade civil.',
      },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Remodelações e Eletricista em Alverca e Carregado | Andrade Renova',
    template: '%s | Andrade Renova',
  },

  description:
    'Remodelação completa com garantia e instalação elétrica certificada. Projeto chave na mão para apartamentos e moradias em Alverca, Vila Franca de Xira, Carregado, Samora Correia e Lisboa. Peça orçamento.',

  authors: [{ name: 'Andrade Renova', url: SITE_URL }],

  openGraph: {
    title: 'Andrade Renova | Remodelação Completa e Eletricidade Certificada',
    description:
      'Apartamentos e moradias: remodelação chave na mão com garantia e elétrica certificada. Alverca, Carregado, Samora Correia, Vila Franca de Xira e Lisboa.',
    type: 'website',
    locale: 'pt_PT',
    url: SITE_URL,
    siteName: 'Andrade Renova',
    images: [
      {
        url: '/images/optimized/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Andrade Renova - Remodelações e Eletricidade Certificada',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Andrade Renova | Remodelação Completa e Eletricidade Certificada',
    description:
      'Remodelação chave na mão com garantia. Alverca, Carregado, Samora Correia e Lisboa.',
    images: ['/images/optimized/hero-bg.webp'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Sem canonical global: cada página define o seu em generateMetadata / metadata.
  category: 'Remodelações',
}

export const viewport: Viewport = {
  themeColor: '#1A3C40',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Favicon */}
        <link rel="icon" href="/icon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-sans antialiased">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X1R7VZ72FD"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X1R7VZ72FD');
          `}
        </Script>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
