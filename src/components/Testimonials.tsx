import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";
import c4 from "@/assets/client-4.jpg";

const testimonials = [
  { name: "Carolina M.", photo: c1, text: "Atendimento maravilhoso! Me senti acolhida desde o primeiro momento. Os resultados superaram todas as minhas expectativas.", rating: 5 },
  { name: "Fernanda S.", photo: c2, text: "Profissionais extremamente atenciosas e competentes. O cuidado com cada detalhe faz toda a diferença.", rating: 5 },
  { name: "Juliana R.", photo: c3, text: "Ambiente agradável e confortável, com um clima de tranquilidade que nos faz relaxar. Recomendo de olhos fechados!", rating: 5 },
  { name: "Marcos L.", photo: c4, text: "Resultados que aumentam a confiança. A equipe realmente se importa com o que é melhor para cada cliente.", rating: 5 },
];

const Testimonials = () => {
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
    <section id="depoimentos" className="section-padding bg-card/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            O que dizem sobre <span className="italic">nós</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A satisfação de nossos clientes é a nossa maior conquista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`p-8 rounded-2xl bg-background border border-border/50 hover-lift ${visible ? "animate-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover border-2 border-primary/30" />
                  <span className="font-medium text-foreground text-sm">{t.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
