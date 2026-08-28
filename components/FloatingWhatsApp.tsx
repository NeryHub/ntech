"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Phone } from "lucide-react"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Dados de contacto
  const whatsappNumber = "351939388057"
  const phoneNumber = "+351939388057"
  const phoneDisplay = "+351 939 388 057"

  // Mensagem padrão do WhatsApp
  const mensagemPadrao = encodeURIComponent(
    "Olá! Vi o site da Andrade Renova e gostaria de pedir informações."
  )

  // Mostrar o botão após scroll (para não aparecer imediatamente)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fechar o popup ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popup = document.getElementById("whatsapp-popup")
      const button = document.getElementById("whatsapp-button")
      
      if (
        popup && 
        button &&
        !popup.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Fechar com ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  return (
    <>
      {/* Botão Principal */}
      <button
        id="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1EA851] text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat de contacto"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
        
        {/* Indicador de status */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" aria-hidden="true" />
      </button>

      {/* Popup de Contacto */}
      {isOpen && (
        <div
          id="whatsapp-popup"
          className="fixed bottom-24 right-6 z-50 w-[320px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300"
          role="dialog"
          aria-label="Opções de contacto"
        >
          {/* Cabeçalho do Popup */}
          <div className="bg-[#1A3C40] p-4 relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8A838] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#1A3C40]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  Andrade Renova
                </p>
                <p className="text-white/60 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Disponível para conversar
                </p>
              </div>
            </div>
          </div>

          {/* Mensagem de Boas-vindas */}
          <div className="p-4 bg-[#F4F4F2]">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-700">
                Olá! 👋
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Precisa de uma remodelação? Fale connosco — orçamento gratuito e sem compromisso.
              </p>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="p-4 space-y-3">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${mensagemPadrao}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-3 rounded-xl bg-[#25D366] hover:bg-[#1EA851] text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Enviar WhatsApp</span>
            </a>

            {/* Ligar */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 w-full p-3 rounded-xl bg-[#E8A838] hover:bg-[#D4942F] text-[#1A3C40] font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Ligar {phoneDisplay}</span>
            </a>

            {/* Nota */}
            <p className="text-xs text-gray-500 text-center pt-1">
              ⏱️ Resposta rápida em horário de trabalho
            </p>
          </div>
        </div>
      )}

      {/* Overlay mobile (opcional - para fechar ao tocar fora) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}