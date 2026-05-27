import { useEffect, useRef, useState } from "react";
import { Star, UserCheck, Heart, Gem, Building } from "lucide-react";

const reasons = [
  { icon: Star,      title: "Alta Satisfação",         description: "Nota 4.9 com mais de 500 avaliações positivas no Google." },
  { icon: UserCheck, title: "Planos Personalizados",   description: "Cada tratamento é desenvolvido sob medida para suas necessidades." },
  { icon: Heart,     title: "Atendimento Humanizado",  description: "Escuta ativa, acolhimento e respeito em cada consulta." },
  { icon: Gem,       title: "Produtos Premium",        description: "Utilizamos apenas dermocosméticos e técnicas de referência no mercado." },
  { icon: Building,  title: "Ambiente Sofisticado",    description: "Espaço projetado para seu conforto, elegância e bem-estar." },
];

const WhyChoose = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-tobago text-fantasy relative overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-rose/8 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-fantasy/55 mb-5">Diferenciais</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1]">
            Por que escolher a <span className="italic text-rose">Aurabella</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-fantasy/10 rounded-2xl overflow-hidden border border-fantasy/10">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-7 bg-tobago hover:bg-tobago-deep transition-colors duration-500 ${visible ? "animate-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-fantasy/10 border border-fantasy/15 flex items-center justify-center mb-5">
                <reason.icon className="w-4 h-4 text-rose" />
              </div>
              <h3 className="font-serif text-base font-medium text-fantasy mb-2">
                {reason.title}
              </h3>
              <p className="text-xs text-fantasy/55 leading-relaxed">
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
