// app/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
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

// Canonical da página inicial (o layout já não define canonical global).
export const metadata: Metadata = {
  alternates: {
    canonical: "https://andradepro.pt",
  },
}

// Zonas servidas. Só as que já têm página própria levam link.
// Quando criares /eletricista-carregado, por exemplo, acrescenta o caminho aqui.
const zonas: { nome: string; href?: string }[] = [
  { nome: "Alverca do Ribatejo", href: "/eletricista-alverca" },
  { nome: "Vila Franca de Xira" },
  { nome: "Alhandra" },
  { nome: "Póvoa de Santa Iria" },
  { nome: "Vialonga" },
  { nome: "Loures" },
  { nome: "Carregado" },
  { nome: "Azambuja" },
  { nome: "Alenquer" },
  { nome: "Samora Correia" },
  { nome: "Benavente" },
  { nome: "Lisboa" },
]

function ServiceAreas() {
  return (
    <section
      id="zonas"
      aria-labelledby="zonas-titulo"
      className="mx-auto max-w-5xl px-4 py-16"
    >
      <h2 id="zonas-titulo" className="text-2xl font-bold md:text-3xl">
        Remodelações e eletricista em Alverca, Carregado, Samora Correia e Lisboa
      </h2>
      <p className="mt-4 max-w-3xl text-lg">
        Fazemos remodelação completa com garantia e instalação elétrica
        certificada em apartamentos e moradias, num raio de cerca de 30 km.
        Projeto chave na mão, com um único responsável do início ao fim da obra.
      </p>
      <ul className="mt-6 flex flex-wrap gap-3">
        {zonas.map((zona) => (
          <li
            key={zona.nome}
            className="rounded-full border px-4 py-2 text-sm font-medium"
          >
            {zona.href ? (
              <Link href={zona.href} className="underline">
                {zona.nome}
              </Link>
            ) : (
              zona.nome
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - Proposta de valor clara e direta (o h1 deve ter a zona: ver nota) */}
        <Hero />

        {/* TrustBar - Prova social imediata (logos, avaliações Google) */}
        <TrustBar />

        {/* Services - O que fazemos, com foco no resultado */}
        <Services />

        {/* ServiceAreas - Zonas servidas: texto real para pesquisas locais */}
        <ServiceAreas />

        {/* Process - Como funciona, para eliminar o medo da obra */}
        <Process />

        {/* Gallery - Projetos reais com antes/depois */}
        <Gallery />

        {/* Testimonials - O que os clientes dizem (Google Maps) */}
        <Testimonials />

        {/* About - Quem somos, história real, experiência Suíça */}
        <About />

        {/* FAQ - Respostas às objeções mais comuns */}
        <FAQ />

        {/* Contact - CTA final para marcar visita */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
