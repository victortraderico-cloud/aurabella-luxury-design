import { useEffect, useRef, useState } from "react";
import { Award, GraduationCap, Heart } from "lucide-react";

const Team = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`order-2 lg:order-1 ${visible ? "animate-reveal" : "opacity-0"}`}>
            <div className="space-y-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Formação Especializada",
                  text: "Equipe com formação contínua nas melhores técnicas e protocolos do mercado estético.",
                },
                {
                  icon: Award,
                  title: "Excelência Reconhecida",
                  text: "Nota 4.9 no Google com centenas de avaliações positivas que comprovam nossa qualidade.",
                },
                {
                  icon: Heart,
                  title: "Atendimento Humanizado",
                  text: "Cada paciente é único. Ouvimos, entendemos e criamos protocolos feitos sob medida.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-5 rounded-2xl bg-background/50 hover-lift">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`order-1 lg:order-2 ${visible ? "animate-reveal animate-reveal-delay-1" : "opacity-0"}`}>
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
              Nossa Equipe
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Profissionais que <span className="italic">cuidam</span> de verdade
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa equipe é formada por profissionais apaixonadas pelo que fazem, 
              com experiência, empatia e dedicação genuína ao bem-estar de cada paciente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aqui você não é apenas um número. É uma pessoa com necessidades, desejos e 
              uma história que respeitamos e valorizamos em cada atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
