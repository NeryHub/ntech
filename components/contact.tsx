"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Home,
  Clock,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    tipoObra: "",
    mensagem: ""
  })
  const formRef = useRef<HTMLFormElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  // Dados reais da Andrade Renova
  const phoneNumber = "+351939388057"
  const phoneDisplay = "+351 939 388 057"
  const whatsappNumber = "351939388057"
  const email = "neriasg24@gmail.com"
  const morada = "Praceta Vasco da Gama, Nº 15 RC Esq."
  const codigoPostal = "2600-860 São João dos Montes"
  const horario = "Segunda a Sexta: 9h-20h"

  // Link real do Google Maps
  const googleMapsLink = "https://www.google.com/maps/place/Ntech+%E2%80%94+Remodela%C3%A7%C3%B5es+e+Solu%C3%A7%C3%B5es+Tecnol%C3%B3gicas/@38.9570031,-9.0416694,17z/data=!3m1!4b1!4m6!3m5!1s0x8e1675f14bc76887:0x52feb92365a24345!8m2!3d38.9570031!4d-9.0390945!16s%2Fg%2F11z2dby7jp?authuser=0&entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D"

  // Tipos de obra para dropdown
  const tiposObra = [
    "Remodelação Geral",
    "Cozinha",
    "Casa de Banho",
    "Pintura e Acabamentos",
    "Instalação Elétrica",
    "Outro / Não sei ainda"
  ]

  // Atualizar dados do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Enviar formulário — abre WhatsApp e email SEM fechar o site
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validação simples: nome e telefone obrigatórios
    if (!formData.nome.trim() || !formData.telefone.trim()) {
      setFormState("error")
      setTimeout(() => setFormState("idle"), 3000)
      return
    }
    
    setFormState("loading")
    
    // Construir mensagem para WhatsApp
    const mensagemWhatsApp = encodeURIComponent(
      `*NOVO PEDIDO DE ORÇAMENTO — SITE*\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `📞 *Telefone:* ${formData.telefone}\n` +
      `🔨 *Tipo de Obra:* ${formData.tipoObra || "Não especificado"}\n` +
      `💬 *Mensagem:* ${formData.mensagem || "Sem mensagem adicional"}`
    )
    
    // Construir email (mailto)
    const assuntoEmail = encodeURIComponent(`Pedido de Orçamento — ${formData.nome}`)
    const corpoEmail = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `Telefone: ${formData.telefone}\n` +
      `Tipo de Obra: ${formData.tipoObra || "Não especificado"}\n` +
      `Mensagem: ${formData.mensagem || "Sem mensagem adicional"}`
    )
    
    // Abrir WhatsApp numa nova aba
    window.open(`https://wa.me/${whatsappNumber}?text=${mensagemWhatsApp}`, "_blank")
    
    // Abrir email numa nova aba (não fecha o site)
    window.open(`mailto:${email}?subject=${assuntoEmail}&body=${corpoEmail}`, "_blank")
    
    setFormState("success")
    
    // Reset do formulário
    setFormData({
      nome: "",
      telefone: "",
      tipoObra: "",
      mensagem: ""
    })
    
    // Reset após 5 segundos
    setTimeout(() => setFormState("idle"), 5000)
    
    // Focar no primeiro campo
    setTimeout(() => nameInputRef.current?.focus(), 100)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Telemóvel / WhatsApp",
      value: phoneDisplay,
      href: `tel:${phoneNumber}`,
      ariaLabel: `Ligar para ${phoneDisplay}`
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Direto",
      value: "Enviar mensagem agora",
      href: `https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento.`,
      ariaLabel: "Enviar mensagem WhatsApp"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: email,
      href: `mailto:${email}`,
      ariaLabel: `Enviar e-mail para ${email}`
    },
    {
      icon: MapPin,
      label: "Localização",
      value: `${morada}, ${codigoPostal}`,
      href: googleMapsLink,
      ariaLabel: "Ver localização no Google Maps"
    },
  ]

  return (
    <section 
      id="contato" 
      className="py-20 lg:py-28 bg-[#F4F4F2]"
      aria-labelledby="contato-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Coluna esquerda - Informações */}
          <div>
            <span className="inline-block bg-[#E8A838] text-[#1A3C40] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Contacto
            </span>

            <h2 
              id="contato-title"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A3C40]"
            >
              Vamos renovar o seu espaço?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Visita técnica gratuita. Orçamento detalhado em 48h. 
              Sem compromisso, sem letras pequenas.
            </p>

            {/* Botões de contacto rápido */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] text-base px-6 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[#1A3C40]/20 text-[#1A3C40] hover:bg-[#1A3C40]/5 hover:border-[#1A3C40]/40 text-base px-6 py-6 h-auto font-semibold transition-all"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento.`, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="mt-10 space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-[#E8A838] transition-colors">
                    <item.icon className="w-5 h-5 text-[#1A3C40] group-hover:text-[#E8A838] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    {item.href ? (
                      <Link 
                        href={item.href}
                        className="font-semibold text-[#1A3C40] hover:text-[#E8A838] transition-colors"
                        aria-label={item.ariaLabel}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <span className="font-semibold text-[#1A3C40]">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horário de atendimento */}
            <div className="mt-8 p-4 rounded-xl bg-white border border-gray-200">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#E8A838]" />
                <div>
                  <p className="text-sm font-semibold text-[#1A3C40]">
                    Horário de Atendimento
                  </p>
                  <p className="text-sm text-gray-600">
                    {horario}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita - Formulário */}
          <div className="p-6 lg:p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold text-[#1A3C40] mb-2 flex items-center gap-2">
              <Home className="w-5 h-5 text-[#E8A838]" />
              Pedir Orçamento Gratuito
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Preencha o formulário e entraremos em contacto consigo em até 24h.
            </p>

            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-4"
              noValidate
            >
              <div className="space-y-1">
                <Input
                  ref={nameInputRef}
                  name="nome"
                  placeholder="Nome *"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="h-12 bg-white border-gray-300 focus:ring-2 focus:ring-[#E8A838]/50 focus:border-[#E8A838]"
                  aria-label="Seu nome completo"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-1">
                <Input
                  name="telefone"
                  type="tel"
                  placeholder="Telemóvel *"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="h-12 bg-white border-gray-300 focus:ring-2 focus:ring-[#E8A838]/50 focus:border-[#E8A838]"
                  aria-label="Seu número de telefone"
                  autoComplete="tel"
                />
              </div>

              <div className="space-y-1">
                <select
                  name="tipoObra"
                  value={formData.tipoObra}
                  onChange={handleInputChange}
                  className="w-full h-12 px-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-[#E8A838]/50 focus:border-[#E8A838] transition-all"
                  aria-label="Tipo de obra"
                >
                  <option value="">Tipo de obra (opcional)</option>
                  {tiposObra.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <Textarea
                  name="mensagem"
                  placeholder="Descreva o que precisa renovar (opcional)"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="resize-none bg-white border-gray-300 focus:ring-2 focus:ring-[#E8A838]/50 focus:border-[#E8A838] min-h-[100px]"
                  aria-label="Descrição do projeto de renovação"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-base font-semibold bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] transition-all duration-200 shadow-md hover:shadow-lg"
                disabled={formState === "loading"}
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    A abrir WhatsApp...
                  </>
                ) : formState === "success" ? (
                  <>
                    <CheckCircle className="mr-2 w-4 h-4" />
                    Mensagem Preparada!
                  </>
                ) : formState === "error" ? (
                  <>
                    <AlertCircle className="mr-2 w-4 h-4" />
                    Preencha nome e telefone
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Pedir Orçamento
                  </>
                )}
              </Button>

              {/* Status messages */}
              {formState === "success" && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-center text-sm text-green-700 font-medium flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    WhatsApp aberto! Confirme o envio da mensagem.
                  </p>
                </div>
              )}

              {formState === "error" && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-center text-sm text-red-700 font-medium flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Preencha nome e telefone para continuar.
                  </p>
                </div>
              )}
            </form>

            {/* Garantia */}
            <div className="mt-4 text-center text-xs text-gray-500">
              <span>🔒 Seus dados estão seguros.</span>
              <span className="mx-2">•</span>
              <span>⏱️ Resposta em até 24h</span>
              <span className="mx-2">•</span>
              <span>📋 Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}