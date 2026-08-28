"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Hammer, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Início", ariaLabel: "Ir para o início" },
  { href: "#servicos", label: "Serviços", ariaLabel: "Ver serviços" },
  { href: "#projetos", label: "Projetos", ariaLabel: "Ver projetos" },
  { href: "#sobre", label: "Sobre Nós", ariaLabel: "Sobre a Andrade Renova" },
  { href: "#contato", label: "Contacto", ariaLabel: "Entrar em contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Número de telefone real da Andrade Renova
  const phoneNumber = "+351939388057"
  const phoneDisplay = "+351 939 388 057"

  // Detectar scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar seção ativa
      const sections = navLinks.map(link => link.href.replace("#", ""))
      let current = "inicio"
      
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = id
          }
        }
      })
      setActiveSection(current)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevenir scroll quando menu está aberto
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Fechar menu com ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }
    
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Focar no elemento após scroll
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) {
          (target as HTMLElement).focus()
        }
      }, 500)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Andrade Renova */}
          <Link 
            href="#inicio"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
            aria-label="Andrade Renova - Voltar ao início"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#inicio")
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-[#1A3C40] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Hammer className="w-5 h-5 text-[#E8A838]" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-lg text-[#1A3C40] block">
                Andrade Renova
              </span>
              <span className="text-xs text-gray-500 block">
                Remodelações Gerais
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#1A3C40]"
                    : "text-gray-500 hover:text-[#1A3C40]"
                }`}
                aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                aria-label={link.ariaLabel}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E8A838] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="border-[#1A3C40]/20 hover:bg-[#1A3C40]/5 text-[#1A3C40]"
            >
              <Link 
                href={`tel:${phoneNumber}`}
                aria-label={`Ligar para ${phoneDisplay}`}
              >
                <Phone className="w-4 h-4 mr-2" />
                {phoneDisplay}
              </Link>
            </Button>
            <Button 
              asChild 
              className="bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] shadow-md hover:shadow-lg transition-all font-semibold"
            >
              <Link 
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#contato")
                }}
              >
                Orçamento Gratuito
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1A3C40] hover:text-[#E8A838] transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm"
            role="navigation"
            aria-label="Menu mobile"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`text-sm font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#1A3C40] bg-gray-100"
                      : "text-gray-600 hover:text-[#1A3C40]"
                  }`}
                  aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-gray-200">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full justify-center border-[#1A3C40]/20 text-[#1A3C40]"
                >
                  <Link 
                    href={`tel:${phoneNumber}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {phoneDisplay}
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full justify-center bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] font-semibold"
                >
                  <Link 
                    href="#contato"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("#contato")
                    }}
                  >
                    Orçamento Gratuito
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}