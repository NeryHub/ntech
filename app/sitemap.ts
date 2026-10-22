// app/sitemap.ts
import type { MetadataRoute } from 'next'

const SITE_URL = 'https://andradepro.pt'

// Adiciona aqui cada nova página de zona que criares.
const paginas = [
  '/eletricista-alverca',
  // '/eletricista-carregado',
  // '/remodelacoes-samora-correia',
  // '/remodelacoes-vila-franca-de-xira',
  // '/remodelacoes-lisboa',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date()

  return [
    {
      url: SITE_URL,
      lastModified: agora,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...paginas.map((caminho) => ({
      url: `${SITE_URL}${caminho}`,
      lastModified: agora,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
