import { Sparkles, Leaf, Sun, Heart, Droplets, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Sparkles,
    title: "Tratamentos Faciais",
    description: "Limpeza de pele, peeling, microagulhamento e protocolos personalizados para cada tipo de pele.",
  },
  {
    icon: Leaf,
    title: "Tratamentos Corporais",
    description: "Modelagem corporal, drenagem linfática e protocolos para redução de medidas e firmeza.",
  },
  {
    icon: Sun,
    title: "Rejuvenescimento",
    description: "Bioestimuladores, toxina botulínica e ácido hialurônico para resultados naturais e harmônicos.",
  },
  {
    icon: Heart,
    title: "Cuidados com a Pele",
    description: "Protocolos para acne, manchas, rosácea e hidratação profunda com dermocosméticos premium.",
  },
  {
    icon: Droplets,
    title: "Skincare Avançado",
    description: "Avaliação personalizada e protocolos home care com os melhores ativos do mercado.",
  },
  {
    icon: Zap,
    title: "Tecnologias de Ponta",
    description: "Laser, luz pulsada, radiofrequência e equipamentos de última geração para resultados superiores.",
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
            Cada protocolo é desenhado especialmente para você, combinando ciência, 
            tecnologia e cuidado humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl bg-card/50 border border-border/50 hover-lift cursor-default ${
                visible ? "animate-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
