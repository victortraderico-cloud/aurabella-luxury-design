const items = [
  "Tecnologia avançada",
  "Estética premium",
  "Resultados naturais",
  "Clínica especializada",
  "Procedimentos modernos",
  "Alto padrão em harmonização facial",
  "Sofisticação e excelência",
];

const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-tobago py-5 md:py-6 border-y border-tobago-deep">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {row.map((t, i) => (
          <div key={i} className="flex items-center mx-8 md:mx-12">
            <span className="font-serif italic text-fantasy/90 text-lg md:text-2xl tracking-wide">
              {t}
            </span>
            <span className="ml-8 md:ml-12 w-1.5 h-1.5 rounded-full bg-rose" />
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-tobago to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-tobago to-transparent" />
    </div>
  );
};

export default Marquee;
