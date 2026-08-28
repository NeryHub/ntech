"use client"

import { 
  MapPin, 
  FileText, 
  Camera, 
  KeyRound,
  Phone,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Visita Técnica Gratuita",
    description: "Vamos à sua casa, ouvimos o que precisa e avaliamos o espaço. Sem compromisso, sem custos.",
    time: "1-2 dias úteis",
    highlight: false
  },
  {
    number: "02",
    icon: FileText,
    title: "Orçamento Detalhado",
    description: "Recebe um documento claro com preços, prazos e materiais. Nada escondido, nada de surpresas.",
    time: "48 horas após visita",
    highlight: false
  },
  {
    number: "03",
    icon: Camera,
    title: "Execução com Acompanhamento",
    description: "A nossa equipa executa a obra. Enviamos fotos e updates regulares no WhatsApp para si.",
    time: "Prazo definido no contrato",
    highlight: true
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Entrega da Chave — e Limpeza",
    description: "Entregamos o espaço pronto a usar. Fazemos a limpeza final. Você só entra e vive.",
    time: "Sem atrasos",
    highlight: false
  }
]

export function Process() {
  return (
    <section 
      id="processo" 
      className="py-20 lg:py-28 bg-[#1A3C40] relative overflow-hidden"
      aria-labelledby="processo-title"
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
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block bg-[#E8A838] text-[#1A3C40] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Como Funciona
          </span>
          <h2 
            id="processo-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Sem surpresas. Sem atrasos.
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            A nossa equipa veio de grandes empresas de construção na Suíça. 
            Trouxemos a organização e o rigor. Veja como é simples:
          </p>
        </div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-xl p-8 border transition-all duration-300 ${
                step.highlight 
                  ? "bg-[#E8A838] border-[#E8A838] hover:shadow-lg hover:-translate-y-1" 
                  : "bg-white/5 border-white/10 hover:border-[#E8A838]/50 hover:bg-white/10"
              }`}
            >
              {/* Número do Passo */}
              <span className={`text-5xl font-bold block mb-6 ${
                step.highlight ? "text-[#1A3C40]" : "text-white/20"
              }`}>
                {step.number}
              </span>

              {/* Ícone */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                step.highlight 
                  ? "bg-[#1A3C40]" 
                  : "bg-white/10"
              }`}>
                <step.icon className={`w-6 h-6 ${
                  step.highlight ? "text-[#1A3C40]" : "text-[#E8A838]"
                }`} />
              </div>

              {/* Título */}
              <h3 className={`text-lg font-bold mb-3 ${
                step.highlight ? "text-[#1A3C40]" : "text-white"
              }`}>
                {step.title}
              </h3>

              {/* Descrição */}
              <p className={`text-sm leading-relaxed mb-4 ${
                step.highlight ? "text-[#1A3C40]/80" : "text-white/60"
              }`}>
                {step.description}
              </p>

              {/* Tempo estimado */}
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${
                step.highlight 
                  ? "bg-[#1A3C40]/10 text-[#1A3C40]" 
                  : "bg-white/10 text-white/50"
              }`}>
                <ClockMini className="w-3.5 h-3.5" />
                {step.time}
              </span>
            </div>
          ))}
        </div>

        {/* Linha conectora (desktop) */}
        <div className="hidden lg:block mt-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${
                  step.highlight ? "bg-[#E8A838]" : "bg-white/20"
                }`} />
                {index < steps.length - 1 && (
                  <span className="w-24 h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6 text-lg">
            Pronto para começar? O primeiro passo é uma conversa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] text-base px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              onClick={() => window.location.href = "tel:+351939388057"}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar para Orçamento
            </Button>
            <Button 
  variant="outline"
  className="border-2 border-[#25D366]/60 text-white bg-white/10 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white text-base px-8 py-6 h-auto font-semibold transition-all"
  onClick={() => window.open("https://wa.me/351939388057?text=Ol%C3%A1!%20Gostaria%20de%20combinar%20uma%20visita%20t%C3%A9cnica%20gratuita.", "_blank")}
>
  <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" fill="#25D366" />
  WhatsApp
</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Ícone de relógio inline (evita import extra)
function ClockMini({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  )
}