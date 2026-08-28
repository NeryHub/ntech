"use client"

import { 
  Home,
  Bath,
  ChefHat,
  Zap,
  PaintRoller,
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Remodelações Gerais",
    description: "Obras completas do início ao fim. Coordenamos tudo: demolição, alvenaria, pavimentos e acabamentos.",
    icon: Home,
    link: "#contato",
    linkLabel: "Pedir orçamento"
  },
  {
    title: "Cozinhas",
    description: "Do desenho à instalação. Cozinhas funcionais, bonitas e prontas a usar — móveis, bancadas e eletrodomésticos.",
    icon: ChefHat,
    link: "#contato",
    linkLabel: "Pedir orçamento"
  },
  {
    title: "Casas de Banho",
    description: "Renovação total ou parcial. Impermeabilização correta, louças, azulejos e acabamentos impecáveis.",
    icon: Bath,
    link: "#contato",
    linkLabel: "Pedir orçamento"
  },
  {
    title: "Pintura e Acabamentos",
    description: "Paredes lisas, cantos perfeitos. Trabalho limpo, sem salpicos, sem stress. Interior e exterior.",
    icon: PaintRoller,
    link: "#contato",
    linkLabel: "Pedir orçamento"
  },
  {
    title: "Instalação Elétrica Certificada",
    description: "Segurança para a sua família e valorização do imóvel. Quadros, circuitos e iluminação com certificado oficial.",
    icon: Zap,
    link: "#contato",
    linkLabel: "Pedir orçamento",
    highlight: true
  }
]

export function Services() {
  const handleServiceClick = (link: string) => {
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      id="servicos" 
      className="py-20 lg:py-28 bg-[#F4F4F2]"
      aria-labelledby="servicos-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block bg-[#E8A838] text-[#1A3C40] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            O que fazemos
          </span>
          <h2 
            id="servicos-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A3C40]"
          >
            Especialistas em transformar casas.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Uma equipa com experiência internacional, focada no que faz 
            a diferença numa remodelação: qualidade, prazos e transparência.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`p-8 rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 group cursor-pointer transition-all duration-300 ${
                service.highlight 
                  ? "bg-[#1A3C40] border-[#1A3C40]" 
                  : "bg-white border-gray-200 hover:border-[#E8A838]"
              }`}
              onClick={() => handleServiceClick(service.link)}
            >
              {/* Ícone */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                service.highlight 
                  ? "bg-[#E8A838]/20" 
                  : "bg-gray-100 group-hover:bg-[#E8A838]/10"
              }`}>
                <service.icon className={`w-6 h-6 ${
                  service.highlight 
                    ? "text-[#E8A838]" 
                    : "text-[#1A3C40] group-hover:text-[#E8A838]"
                }`} />
              </div>

              {/* Título */}
              <h3 className={`text-lg font-bold mb-3 ${
                service.highlight ? "text-white" : "text-[#1A3C40]"
              }`}>
                {service.title}
                {service.highlight && (
                  <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium bg-[#E8A838]/20 text-[#E8A838] px-2 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    Certificado
                  </span>
                )}
              </h3>

              {/* Descrição */}
              <p className={`text-sm leading-relaxed mb-6 ${
                service.highlight ? "text-white/70" : "text-gray-600"
              }`}>
                {service.description}
              </p>

              {/* Link */}
              <span className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                service.highlight 
                  ? "text-[#E8A838] group-hover:text-[#D4942F]" 
                  : "text-[#1A3C40] group-hover:text-[#E8A838]"
              }`}>
                {service.linkLabel}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          ))}

          {/* Card de CTA */}
          <div className="p-8 rounded-xl border-2 border-dashed border-[#E8A838]/40 bg-white/50 flex flex-col justify-center items-center text-center hover:border-[#E8A838] hover:bg-white transition-colors">
            <h3 className="text-lg font-bold text-[#1A3C40] mb-3">
              Não sabe por onde começar?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Visita técnica gratuita. Avaliamos o seu espaço e damos um orçamento claro em 48h.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Button 
                className="w-full bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] font-semibold"
                onClick={() => window.location.href = "tel:+351939388057"}
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
              <Button 
                variant="outline"
                className="w-full border-[#1A3C40]/20 text-[#1A3C40] hover:bg-[#1A3C40]/5 font-semibold"
                onClick={() => window.open("https://wa.me/351939388057?text=Ol%C3%A1!%20Gostaria%20de%20combinar%20uma%20visita%20t%C3%A9cnica%20gratuita.", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}