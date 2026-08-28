// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const archivo = Archivo({ 
  subsets: ["latin"],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// JSON-LD para SEO — Andrade Renova
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Andrade Renova",
  "alternateName": "Andrade Renova — Remodelações Gerais",
  "description": "Remodelações gerais, cozinhas, casas de banho, pintura e instalação elétrica certificada. Equipa com experiência internacional (Suíça). Projetos chave na mão em Lisboa e arredores.",
  "url": "https://ntecheledom.netlify.app",
  "telephone": "+351939388057",
  "email": "neriasg24@gmail.com",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Praceta Vasco da Gama, Nº 15 RC Esq.",
    "postalCode": "2600-860",
    "addressLocality": "São João dos Montes",
    "addressRegion": "Lisboa",
    "addressCountry": "PT"
  },
  "areaServed": ["Lisboa", "Vila Franca de Xira", "Alverca"],
  "openingHours": "Mo-Fr 09:00-20:00",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Remodelações Gerais",
        "description": "Obras completas do início ao fim: demolição, alvenaria, pavimentos e acabamentos."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Cozinhas",
        "description": "Do desenho à instalação: móveis, bancadas, eletrodomésticos e instalações."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Casas de Banho",
        "description": "Renovação total ou parcial: impermeabilização, louças, azulejos e acabamentos."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pintura e Acabamentos",
        "description": "Pintura interior e exterior, paredes lisas, cantos perfeitos e trabalho limpo."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Instalação Elétrica Certificada",
        "description": "Segurança para a família e valorização do imóvel com certificado oficial."
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "6"
  }
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ntecheledom.netlify.app'),
  
  title: {
    default: 'Andrade Renova | Remodelações sem Dores de Cabeça',
    template: '%s | Andrade Renova'
  },
  
  description: 'Remodelações gerais, cozinhas, casas de banho, pintura e instalação elétrica certificada em Lisboa e arredores. Equipa com experiência internacional (Suíça). Projeto chave na mão.',
  
  keywords: [
    'remodelações gerais',
    'remodelação cozinha',
    'remodelação casa de banho',
    'pintura e acabamentos',
    'instalação elétrica certificada',
    'eletricista certificado',
    'projeto chave na mão',
    'Lisboa',
    'Vila Franca de Xira',
    'Alverca',
    'São João dos Montes',
    'remodelação',
    'obras',
    'experiência Suíça'
  ],
  
  authors: [{ 
    name: 'Andrade Renova',
    url: 'https://ntecheledom.netlify.app'
  }],
  
  openGraph: {
    title: 'Andrade Renova | Remodelações sem Dores de Cabeça',
    description: 'Cozinhas, casas de banho, pintura e elétrica certificada. Equipa com experiência na Suíça. Projeto chave na mão em Lisboa.',
    type: 'website',
    locale: 'pt_PT',
    url: 'https://ntecheledom.netlify.app',
    siteName: 'Andrade Renova',
    images: [
      {
        url: '/images/optimized/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Andrade Renova - Remodelações Gerais',
      }
    ]
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Andrade Renova | Remodelações sem Dores de Cabeça',
    description: 'Equipa com experiência internacional. Projeto chave na mão.',
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
  
  alternates: {
    canonical: 'https://ntecheledom.netlify.app',
  },
  
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
    <html lang="pt" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X1R7VZ72FD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X1R7VZ72FD');
            `,
          }}
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/icon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}