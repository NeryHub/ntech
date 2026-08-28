"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, Star, Hammer, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden bg-[#1A3C40]">
      {/* Background Image - Usar foto real da vossa obra */}
      <div className="absolute inset-0">
        <Image
          src="/images/optimized/hero-bg.webp" // SUBSTITUIR por foto real de uma obra vossa concluída
          alt="Cozinha renovada pela Andrade Renova em Lisboa"
          fill
          className="object-cover opacity-40"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Overlay escuro para legibilidade - mais natural */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F282B] via-[#1A3C40]/85 to-[#1A3C40]/50" />
      </div>

      {/* Textura de linhas (planta baixa) - dá personalidade, foge do design de IA */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge de Prova Social - Google Maps */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Star className="w-4 h-4 text-[#E8A838]" fill="#E8A838" />
            <span className="text-sm font-medium text-white">
              4.9 no Google Maps
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-sm text-white/80">
              Experiência Internacional (Suíça)
            </span>
          </div>

          {/* Main Title - Fala a dor real do cliente */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Remodelações sem{' '}
            <span className="text-[#E8A838]">dores de cabeça</span>.
            <br />
            Do projeto à entrega da chave.
          </h1>

          {/* Description - O que fazemos + resultado para o cliente */}
          <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
            Somos a <strong className="text-white">Andrade Renova</strong>. 
            Fazemos cozinhas, casas de banho, pintura e instalação elétrica 
            certificada. Você acompanha tudo, mas{' '}
            <span className="text-[#E8A838] font-semibold">não se preocupa com nada</span>.
          </p>

          {/* CTA Buttons - Dois caminhos para contacto imediato */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-8 text-base font-semibold bg-[#E8A838] text-[#1A3C40] hover:bg-[#D4942F] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Link href="tel:+351939388057">
                <Phone className="mr-2 w-4 h-4" />
                Ligar para Orçamento
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-base font-semibold bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 transition-all"
            >
              <Link 
                href="https://wa.me/351939388057?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Andrade%20Renova%20e%20gostaria%20de%20combinar%20uma%20visita%20para%20or%C3%A7amento%20gratuito."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp
              </Link>
            </Button>
          </div>

          {/* Trust bar - Os 3 pilares que realmente importam */}
          <div className="mt-14 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8A838]/20 flex items-center justify-center">
                  <Hammer className="w-5 h-5 text-[#E8A838]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Equipa Própria</div>
                  <div className="text-sm text-white/60">Com parceiros de confiança</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8A838]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#E8A838]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Lisboa e Arredores</div>
                  <div className="text-sm text-white/60">Visita técnica gratuita</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8A838]/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#E8A838]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Eletricidade Certificada</div>
                  <div className="text-sm text-white/60">Documentação oficial</div>
                </div>
              </div>
            </div>
          </div>

          {/* Selos de serviços - compactos e com ícones de obra */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              Cozinhas
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              Casas de Banho
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              Pintura
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              Elétrica Certificada
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}