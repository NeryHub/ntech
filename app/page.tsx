import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - Proposta de valor clara e direta */}
        <Hero />
        
        {/* TrustBar - Prova social imediata (logos, avaliações Google) */}
        <TrustBar />
        
        {/* Services - O que fazemos, com foco no resultado */}
        <Services />
        
        {/* Process - Como funciona, para eliminar o medo da obra */}
        <Process/>
        
        {/* Gallery - Projetos reais com antes/depois */}
        <Gallery />
        
        {/* Testimonials - O que os clientes dizem (Google Maps) */}
        <Testimonials />
        
        {/* About - Quem somos, história real, experiência Suíça */}
        <About />
        
        {/* FAQ - Respostas às objeções mais comuns  */}
        <FAQ />
        
        {/* Contact - CTA final para marcar visita  */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}