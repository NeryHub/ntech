// components/trust-bar.tsx
export function TrustBar() {
  const items = [
    {
      icon: "★",
      title: "4.9 no Google Maps",
      subtext: "Avaliações reais de clientes",
    },
    {
      icon: "✚",
      title: "Rigor Suíço",
      subtext: "Experiência internacional",
    },
    {
      icon: "🤝",
      title: "Equipa e Parceiros",
      subtext: "Qualidade garantida",
    },
    {
      icon: "⚡",
      title: "Eletricidade Certificada",
      subtext: "Documentação oficial incluída",
    },
  ];

  return (
    <section className="bg-[#1A3C40] border-y-4 border-[#E8A838]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center md:border-r md:border-white/10 md:last:border-r-0 px-4"
            >
              <span className="text-3xl md:text-4xl mb-3" aria-hidden="true">
                {item.icon}
              </span>
              <p className="text-white font-bold text-sm md:text-base uppercase tracking-wider">
                {item.title}
              </p>
              <p className="text-white/60 text-xs md:text-sm mt-1">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}