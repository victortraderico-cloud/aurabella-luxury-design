import { useEffect, useRef, useState } from "react";
import procBotox from "@/assets/proc-botox.jpg";
import procEmagrecimento from "@/assets/proc-emagrecimento.jpg";
import procGordura from "@/assets/proc-gordura.jpg";
import procLaser from "@/assets/proc-laser.jpg";

const services = [
  {
    image: procBotox,
    title: "Toxina Botulínica",
    description: "Aplicação precisa de botox para suavizar linhas de expressão com resultado natural e harmônico.",
  },
  {
    image: procEmagrecimento,
    title: "Emagrecimento",
    description: "Protocolos personalizados para perda de peso e bem-estar, com acompanhamento dedicado.",
  },
  {
    image: procGordura,
    title: "Gordura Localizada",
    description: "Tecnologia avançada para redução de medidas e contorno corporal definido.",
  },
  {
    image: procLaser,
    title: "Depilação a Laser",
    description: "Equipamentos de última geração compatíveis com todos os tipos e fototipos de pele.",
  },
  {
    image: procBotox,
    title: "Tratamentos Faciais",
    description: "Limpeza profunda, peeling, microagulhamento e protocolos sob medida para cada pele.",
  },
  {
    image: procEmagrecimento,
    title: "Tratamentos Corporais",
    description: "Drenagem linfática, modelagem corporal e protocolos para firmeza e redução.",
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Tratamentos que <span className="italic">transformam</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada protocolo é desenhado especialmente para você, combinando tecnologia
            avançada e cuidado humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group rounded-2xl overflow-hidden bg-card border border-border/50 hover-lift ${
                visible ? "animate-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
