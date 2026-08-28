"use client"

import { useState } from "react"
import { ChevronDown, Phone, MessageCircle, ShieldCheck, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    pergunta: "Quanto custa uma remodelação?",
    resposta: "Depende do estado do espaço, dos materiais escolhidos e da área a renovar. Por isso fazemos uma visita técnica gratuita. Só depois enviamos um orçamento detalhado, sem compromisso e sem surpresas."
  },
  {
    pergunta: "Trabalham com subempreiteiros?",
    resposta: "Sim, trabalhamos com parceiros de confiança que conhecemos bem e que seguem os nossos padrões de qualidade. Isto permite-nos dar resposta rápida a projetos maiores sem atrasar a obra. Mas fique descansado: a Andrade Renova é o único responsável. Quem coordena, fiscaliza e responde por tudo somos nós.",
    icon: Handshake,
    destaque: true
  },
  {
    pergunta: "A instalação elétrica é certificada?",
    resposta: "Sim. Emitimos o certificado de instalação elétrica para sua total segurança e valorização do imóvel. É um documento oficial que comprova que tudo foi feito segundo as normas.",
    icon: ShieldCheck
  },
  {
    pergunta: "Fazem a limpeza no final da obra?",
    resposta: "Sim. Entregamos o espaço pronto a usar. A limpeza final está incluída no serviço. Você só entra e vive."
  },
  {
    pergunta: "Trabalham em que zonas?",
    resposta: "Atuamos em Lisboa e arredores, incluindo Vila Franca de Xira e Alverca. Se tiver dúvidas sobre a sua zona, ligue-nos ou envie WhatsApp."
  },
  {
    pergunta: "Fazem projeto chave na mão?",
    resposta: "Sim. Tratamos de tudo: demolição, alvenaria, instalações, acabamentos e limpeza final. Você acompanha o progresso com fotos no WhatsApp, mas não se preocupa com nada."
  },
  {
    pergunta: "Como funciona o orçamento?",
    resposta: "Após a visita técnica, enviamos um documento claro com preços, prazos e materiais em até 48h. Sem letras pequenas, sem custos escondidos. O orçamento é gratuito."
  },
  {
    pergunta: "Oferecem garantia do serviço?",
    resposta: "Sim. Todos os nossos trabalhos têm garantia. Se algo não estiver bem, voltamos e corrigimos. A nossa reputação depende da sua satisfação.",
    icon: ShieldCheck
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1) // Abre a pergunta dos parceiros por padrão

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq"
      className="py-20 lg:py-28 bg-[#F4F4F2]"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#E8A838] text-[#1A3C40] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Dúvidas Frequentes
          </span>
          <h2 
            id="faq-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A3C40]"
          >
            Perguntas que todos fazem.
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Respostas diretas, sem rodeios. Se a sua dúvida não estiver aqui, 
            ligue-nos ou envie WhatsApp.
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow ${
                openIndex === index 
                  ? "border-[#E8A838]" 
                  : "border-gray-200"
              }`}
            >
              {/* Botão da Pergunta */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-resposta-${index}`}
              >
                <span className="flex items-center gap-3">
                  {faq.icon && (
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      openIndex === index 
                        ? "bg-[#E8A838]/20" 
                        : "bg-gray-100"
                    }`}>
                      <faq.icon className={`w-4 h-4 ${
                        openIndex === index ? "text-[#E8A838]" : "text-gray-500"
                      }`} />
                    </span>
                  )}
                  <span className={`font-semibold transition-colors ${
                    openIndex === index ? "text-[#1A3C40]" : "text-gray-700"
                  }`}>
                    {faq.pergunta}
                  </span>
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-[#E8A838] rotate-180" 
                    : "bg-gray-100"
                }`}>
                  <ChevronDown className={`w-4 h-4 ${
                    openIndex === index ? "text-[#1A3C40]" : "text-gray-500"
                  }`} />
                </span>
              </button>

              {/* Resposta */}
              <div
                id={`faq-resposta-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? "grid-rows-[1fr] opacity-100" 
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.resposta}
                  </p>
                  
                  {/* Destaque para a resposta dos parceiros */}
                  {faq.destaque && (
                    <div className="mx-5 mb-5 p-4 rounded-lg bg-[#E8A838]/10 border border-[#E8A838]/30">
                      <p className="text-sm text-[#1A3C40] flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#E8A838] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Compromisso:</strong> Mesmo com parceiros, a 
                          Andrade Renova é o único responsável. Quem coordena, 
                          fiscaliza e responde por tudo somos nós.
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-10 text-center p-8 rounded-xl bg-[#1A3C40] relative overflow-hidden">
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

          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-white/70 mb-6">
              Fale diretamente connosco. Resposta rápida, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] font-semibold"
                onClick={() => window.location.href = "tel:+351939388057"}
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
              <Button 
  variant="outline"
  className="border-2 border-[#25D366]/60 text-white bg-white/10 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white font-semibold transition-all"
  onClick={() => window.open("https://wa.me/351939388057?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20vossos%20servi%C3%A7os.", "_blank")}
>
  <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" fill="#25D366" />
  WhatsApp
</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}