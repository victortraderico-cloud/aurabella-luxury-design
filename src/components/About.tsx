import { useEffect, useRef, useState } from "react";

const About = () => {
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
    <section id="sobre" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={visible ? "animate-reveal" : "opacity-0"}>
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
              Sobre a Clínica
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Um espaço onde a <span className="italic">beleza</span> encontra o{" "}
              <span className="italic">cuidado</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Aurabella nasceu do desejo de criar um espaço onde cada pessoa se sinta 
                acolhida, valorizada e cuidada. Mais do que uma clínica de estética, somos 
                um lugar de transformação e autoconfiança.
              </p>
              <p>
                Nosso ambiente foi pensado para proporcionar conforto e tranquilidade desde 
                o primeiro momento. Aqui, cada detalhe importa — dos produtos premium que 
                utilizamos ao atendimento personalizado que oferecemos.
              </p>
              <p>
                Somos uma clínica inclusiva e LGBTQ+ friendly, comprometida com o respeito 
                e a diversidade. Acreditamos que todos merecem se sentir bem consigo mesmos.
              </p>
            </div>
          </div>

          <div className={`${visible ? "animate-reveal animate-reveal-delay-2" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "4.9", label: "Avaliação no Google" },
                { number: "500+", label: "Avaliações positivas" },
                { number: "100%", label: "Atendimento humanizado" },
                { number: "∞", label: "Dedicação a você" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center hover-lift"
                >
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
