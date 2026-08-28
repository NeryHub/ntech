"use client"

import { 
  Globe, 
  Users, 
  KeyRound, 
  Phone,
  MessageCircle,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"

const valores = [
  {
    icon: Globe,
    title: "Experiência Internacional",
    description: "Trabalhámos em grandes empresas de construção na Suíça. Trouxemos o rigor, a pontualidade e a organização."
  },
  {
    icon: Users,
    title: "Equipa e Parceiros de Confiança",
    description: "Quem fala consigo é quem coordena a obra. Trabalhamos com parceiros que seguem os nossos padrões de qualidade."
  },
  {
    icon: KeyRound,
    title: "Projeto Chave na Mão",
    description: "Do primeiro esboço à limpeza final. Você acompanha tudo, mas não se preocupa com nada."
  }
]

const stats = [
  { numero: "4.9★", label: "Avaliação no Google Maps" },
  { numero: "48h", label: "Orçamento após visita" },
  { numero: "100%", label: "Responsabilidade nossa" }
]

export function About() {
  return (
    <section 
      id="sobre" 
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="sobre-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda - História */}
          <div>
            <span className="inline-block bg-[#E8A838] text-[#1A3C40] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Quem Somos
            </span>

            <h2 
              id="sobre-title"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A3C40]"
            >
              Somos a Andrade Renova.
              <br />
              E temos orgulho no que fazemos.
            </h2>

            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                A Andrade Renova nasceu de uma decisão simples:{' '}
                <strong className="text-[#1A3C40]">juntar a experiência que ganhámos 
                a trabalhar em grandes empresas de construção — na Suíça e em Portugal — 
                e trazer esse rigor para o cliente de remodelações.</strong>
              </p>
              <p>
                Sabemos o que é cumprir prazos. Sabemos o que é respeitar o espaço 
                do cliente. E sabemos o que é entregar um trabalho bem feito, 
                sem desculpas.
              </p>
              <p>
                Coordenamos tudo — equipa própria e parceiros de confiança — 
                para garantir que cada detalhe é tratado com o mesmo rigor. 
                A responsabilidade é sempre nossa.
              </p>
            </div>

            {/* Valores */}
            <div className="mt-8 space-y-4">
              {valores.map((valor) => (
                <div 
                  key={valor.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#F4F4F2] border border-gray-200 hover:border-[#E8A838] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1A3C40] flex items-center justify-center flex-shrink-0">
                    <valor.icon className="w-5 h-5 text-[#E8A838]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A3C40]">
                      {valor.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {valor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita - Card de Confiança + Stats */}
          <div className="space-y-6">
            {/* Card principal */}
            <div className="p-8 lg:p-10 rounded-2xl bg-[#1A3C40] shadow-lg relative overflow-hidden">
              {/* Textura de linhas */}
              <div 
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-4">
                  Porquê escolher a Andrade Renova?
                </h3>
                
                <ul className="space-y-3">
                  {[
                    "Equipa com experiência internacional (Suíça)",
                    "Projeto chave na mão — tratamos de tudo",
                    "Coordenação total com parceiros de confiança",
                    "Eletricidade certificada com documentação",
                    "Cumprimento de prazos e limpeza final",
                    "Acompanhamento com fotos no WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/80">
                      <span className="w-5 h-5 rounded-full bg-[#E8A838]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-[#E8A838]" />
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-[#E8A838]">
                        {stat.numero}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card de CTA */}
            <div className="p-6 rounded-xl bg-[#E8A838]/10 border-2 border-dashed border-[#E8A838]/40 text-center">
              <p className="text-[#1A3C40] font-semibold mb-2">
                Quer saber como podemos ajudar no seu projeto?
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Fale connosco. Visita técnica gratuita e sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] font-semibold"
                  onClick={() => window.location.href = "tel:+351939388057"}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#1A3C40]/20 text-[#1A3C40] hover:bg-[#1A3C40]/5 font-semibold"
                  onClick={() => window.open("https://wa.me/351939388057?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Andrade%20Renova.", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Prova social rápida */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F4F4F2] border border-gray-200">
              <div className="flex -space-x-2">
                {["P", "D", "T", "T", "T"].map((letra, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 rounded-full bg-[#1A3C40] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#E8A838]"
                  >
                    {letra}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#E8A838]" fill="#E8A838" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-0.5">
                  Clientes reais no Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}