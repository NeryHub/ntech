'use client'

import Link from "next/link"
import { Hammer, Phone, Mail, MapPin, ArrowUp, Star, Clock, Home, Bath, ChefHat, Zap, PaintRoller } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#projetos", label: "Projetos" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#contato", label: "Contacto" },
  ]

  const servicesLinks = [
    { href: "#servicos", label: "Remodelações Gerais", icon: Home },
    { href: "#servicos", label: "Cozinhas", icon: ChefHat },
    { href: "#servicos", label: "Casas de Banho", icon: Bath },
    { href: "#servicos", label: "Pintura e Acabamentos", icon: PaintRoller },
    { href: "#servicos", label: "Instalação Elétrica", icon: Zap },
  ]

  // Dados reais da Andrade Renova
  const phoneNumber = "+351939388057"
  const phoneDisplay = "+351 939 388 057"
  const email = "neriasg24@gmail.com"
  const morada = "Praceta Vasco da Gama, Nº 15 RC Esq."
  const codigoPostal = "2600-860 São João dos Montes"
  const horario = "Segunda a Sexta: 9h-20h"
  const whatsappNumber = "351939388057"

  return (
    <footer 
      className="py-12 lg:py-16 bg-[#1A3C40] text-white relative overflow-hidden"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      {/* Textura de linhas (planta baixa) */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Coluna 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8A838] flex items-center justify-center shadow-md">
                <Hammer className="w-5 h-5 text-[#1A3C40]" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">Andrade Renova</span>
                <p className="text-xs text-white/60">Remodelações Gerais</p>
              </div>
            </div>
            
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Remodelações sem dores de cabeça. Do projeto à entrega da chave, 
              com rigor suíço e equipa própria.
            </p>

            {/* Prova social */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#E8A838]" fill="#E8A838" />
                ))}
              </div>
              <span className="text-xs text-white/60">
                4.9 no Google Maps
              </span>
            </div>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#E8A838] transition-colors hover:translate-x-1 inline-block"
                    aria-label={`Ir para ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#E8A838] transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <link.icon className="w-3.5 h-3.5 text-[#E8A838]/60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#E8A838] transition-colors group"
                  aria-label={`Ligar para ${phoneDisplay}`}
                >
                  <Phone className="w-4 h-4 text-white/50 group-hover:text-[#E8A838] transition-colors flex-shrink-0" />
                  <span>{phoneDisplay}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#E8A838] transition-colors group"
                  aria-label={`Enviar e-mail para ${email}`}
                >
                  <Mail className="w-4 h-4 text-white/50 group-hover:text-[#E8A838] transition-colors flex-shrink-0" />
                  <span className="break-all">{email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-[#E8A838] transition-colors group"
                  aria-label="Ver localização no Google Maps"
                >
                  <MapPin className="w-4 h-4 text-white/50 group-hover:text-[#E8A838] transition-colors flex-shrink-0 mt-0.5" />
                  <span>
                    {morada}
                    <br />
                    {codigoPostal}
                  </span>
                </Link>
              </li>
            </ul>

            {/* Horário */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Clock className="w-3.5 h-3.5 text-[#E8A838]" />
                <span>{horario}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-sm text-white/60">
            © {currentYear} Andrade Renova — Remodelações Gerais
            <span className="hidden sm:inline mx-2">•</span>
            <span className="text-xs text-white/40">
              Equipa com experiência internacional (Suíça)
            </span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="block sm:inline text-xs text-white/40">
              Todos os direitos reservados
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Selo de garantia */}
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span>✅</span>
              <span>Orçamento gratuito</span>
            </div>

            {/* Botão voltar ao topo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-[#E8A838] transition-all duration-200 text-sm"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>
        </div>

        {/* Dados estruturados para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Andrade Renova",
              "description": "Remodelações gerais, cozinhas, casas de banho, pintura e instalação elétrica certificada. Equipa com experiência internacional (Suíça).",
              "telephone": "+351939388057",
              "email": "neriasg24@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Praceta Vasco da Gama, Nº 15 RC Esq.",
                "postalCode": "2600-860",
                "addressLocality": "São João dos Montes",
                "addressCountry": "PT"
              },
              "areaServed": ["Lisboa", "Vila Franca de Xira", "Alverca"],
              "openingHours": "Mo-Fr 09:00-20:00",
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "6"
              },
              "serviceType": [
                "Remodelações Gerais",
                "Cozinhas",
                "Casas de Banho",
                "Pintura",
                "Instalação Elétrica Certificada"
              ]
            })
          }}
        />
      </div>
    </footer>
  )
}