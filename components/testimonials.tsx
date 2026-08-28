"use client"

import { useState, useEffect } from "react"

export function Testimonials() {
  const [rotations, setRotations] = useState<number[]>([])

  // Gerar rotações apenas uma vez no cliente
  useEffect(() => {
    const novasRotacoes = Array.from({ length: 6 }, () => Math.random() * 2 - 1)
    setRotations(novasRotacoes)
  }, [])

  const testimonials = [
    {
      name: "Pedro Madeira",
      reviews: "7 críticas",
      rating: 5,
      text: "Excellent work, highly recommend.",
      time: "há 4 meses",
    },
    {
      name: "David Barrento",
      reviews: "9 críticas · 2 fotos",
      rating: 5,
      text: "Profissional experiente cumpridor, algo raro de se encontrar hoje em dia. Recomendo e voltarei a contratar para serviços posteriores.",
      time: "há 4 meses",
    },
    {
      name: "Tomás Martins",
      reviews: "Guia local · 13 críticas · 3 fotos",
      rating: 5,
      text: "Chamado ao local de obra para resolver uma situação de emergência, com a maior disponibilidade e agilidade, com uma resolução profissional do problema. Irei contratar novamente!",
      time: "há 4 meses",
    },
    {
      name: "Teles",
      reviews: "2 críticas",
      rating: 5,
      text: "Trabalho top, recomendo 👍🏼",
      time: "há 4 meses",
    },
    {
      name: "Tiago Henriques",
      reviews: "1 crítica",
      rating: 5,
      text: "Excelente profissional !! Recomendo !!",
      time: "há 4 meses",
    },
    {
      name: "Tânia Petisca",
      reviews: "3 críticas",
      rating: 5,
      text: "Bastante prestativo.",
      time: "há 4 meses",
    },
  ];

  // Link real do Google Maps da Andrade Renova
  const googleMapsLink = "https://www.google.com/maps/place/Ntech+%E2%80%94+Remodela%C3%A7%C3%B5es+e+Solu%C3%A7%C3%B5es+Tecnol%C3%B3gicas/@38.9570031,-9.0416694,17z/data=!3m1!4b1!4m6!3m5!1s0x8e1675f14bc76887:0x52feb92365a24345!8m2!3d38.9570031!4d-9.0390945!16s%2Fg%2F11z2dby7jp?authuser=0&entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D"

  return (
    <section className="bg-[#F4F4F2] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#E8A838] text-[#1A3C40] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C40]">
            Quem contratou, recomenda.
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Estes são comentários reais do nosso Google Maps. Sem filtros, sem
            invenções.
          </p>
        </div>

        {/* Grid de Testemunhos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              style={{ transform: `rotate(${rotations[index] || 0}deg)` }}
            >
              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 mb-4" aria-label={`${item.rating} estrelas`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-[#E8A838] text-lg" aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>

                {/* Texto do Cliente */}
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Rodapé do Testemunho */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar com Inicial */}
                  <div className="w-10 h-10 rounded-full bg-[#1A3C40] text-[#E8A838] flex items-center justify-center font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.reviews} · {item.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link para Google Maps */}
        <div className="text-center mt-10">
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1A3C40] font-semibold hover:underline"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5c0 6.37 8.5 15.5 8.5 15.5s8.5-9.13 8.5-15.5C20.5 3.81 16.69 0 12 0zm0 11.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            Ver todas as avaliações no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}