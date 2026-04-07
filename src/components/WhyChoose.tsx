import { useEffect, useRef, useState } from "react";
import { Star, UserCheck, Heart, Gem, Building } from "lucide-react";

const reasons = [
  {
    icon: Star,
    title: "Alta Satisfação",
    description: "Nota 4.9 com mais de 500 avaliações positivas no Google.",
  },
  {
    icon: UserCheck,
    title: "Planos Personalizados",
    description: "Cada tratamento é desenvolvido sob medida para suas necessidades.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Escuta ativa, acolhimento e respeito em cada consulta.",
  },
  {
    icon: Gem,
    title: "Produtos Premium",
    description: "Utilizamos apenas dermocosméticos e técnicas de referência no mercado.",
  },
  {
    icon: Building,
    title: "Ambiente Sofisticado",
    description: "Espaço projetado para seu conforto, elegância e bem-estar.",
  },
];

const WhyChoose = () => {
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
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Diferenciais
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Por que escolher a <span className="italic">Aurabella</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`text-center p-6 rounded-2xl bg-background/60 border border-border/30 hover-lift ${
                visible ? "animate-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-base font-medium text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
