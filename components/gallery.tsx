"use client"

import Image from "next/image"
import { Zap, Home, PaintRoller, Shield, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Projetos reais da Andrade Renova
// SUBSTITUIR pelos caminhos reais das vossas fotos
const projetos = [
  {
    src: "/images/projetos/quinta-eletrica-1.jpg", // SUBSTITUIR
    alt: "Instalação elétrica certificada em quinta de eventos",
    titulo: "Instalação Elétrica — Quinta de Eventos",
    descricao: "Projeto elétrico completo com certificação",
    icon: Zap,
    categoria: "Elétrica Certificada",
    destaque: true
  },
  {
    src: "/images/projetos/quinta-eletrica-2.jpg", // SUBSTITUIR
    alt: "Quadro elétrico profissional",
    titulo: "Quadro Elétrico Profissional",
    descricao: "Organização e segurança em cada detalhe",
    icon: Shield,
    categoria: "Elétrica Certificada",
    destaque: true
  },
  {
    src: "/images/projetos/pintura-sala-1.jpg", // SUBSTITUIR
    alt: "Pintura de interiores com acabamento profissional",
    titulo: "Pintura de Interiores",
    descricao: "Paredes lisas, cantos perfeitos, trabalho limpo",
    icon: PaintRoller,
    categoria: "Acabamentos",
    destaque: false
  },
  {
    src: "/images/projetos/pintura-corredor-1.jpg", // SUBSTITUIR
    alt: "Pintura de corredor com preparação de paredes",
    titulo: "Preparação e Pintura",
    descricao: "Do remendo ao acabamento final",
    icon: PaintRoller,
    categoria: "Acabamentos",
    destaque: false
  }
]

export function Gallery() {
  return (
    <section 
      id="projetos"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="projetos-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block bg-[#E8A838] text-[#1A3C40] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Trabalhos Reais
          </span>
          <h2 
            id="projetos-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A3C40]"
          >
            O rigor suíço em cada detalhe.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Veja o tipo de trabalho que fazemos. Organização, limpeza e 
            profissionalismo — seja numa instalação elétrica ou numa pintura.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <div
              key={projeto.titulo}
              className={`group relative aspect-[16/9] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                projeto.destaque ? "border-2 border-[#E8A838]" : "border border-gray-200"
              }`}
            >
              <Image
                src={projeto.src}
                alt={projeto.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Badge de categoria */}
              <div className="absolute top-3 left-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
                  projeto.destaque 
                    ? "bg-[#E8A838] text-[#1A3C40]" 
                    : "bg-black/40 text-white"
                }`}>
                  {projeto.categoria}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <projeto.icon className="w-4 h-4 text-[#E8A838]" />
                  <h3 className="text-white font-semibold text-base">
                    {projeto.titulo}
                  </h3>
                </div>
                <p className="text-white/70 text-sm">
                  {projeto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem estratégica */}
        <div className="mt-10 p-6 rounded-xl bg-[#1A3C40] relative overflow-hidden">
          {/* Textura */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
            aria-hidden="true"
          />
          
          <div className="relative text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              O que ainda não vê aqui: as vossas futuras cozinhas e casas de banho.
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              A nossa equipa vem de grandes empresas de construção na Suíça. 
              Sabemos fazer remodelações completas — e queremos prová-lo no seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
        className="bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] text-base px-6 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
        onClick={() => window.location.href = "tel:+351939388057"}
      >
        <Phone className="w-5 h-5 mr-2 text-[#1A3C40]" />
        Ligar e Falar com a Equipa
      </Button>
              <Button 
        variant="outline"
        className="border-2 border-[#25D366]/60 text-white bg-white/10 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white text-base px-6 py-6 h-auto font-semibold transition-all"
        onClick={() => window.open("https://wa.me/351939388057?text=Ol%C3%A1!%20Gostaria%20de%20ver%20mais%20exemplos%20do%20vosso%20trabalho.", "_blank")}
      >
        <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" fill="#25D366" />
        Pedir Fotos no WhatsApp
      </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}