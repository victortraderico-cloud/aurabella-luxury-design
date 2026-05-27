import { useEffect, useRef, useState } from "react";
import { Instagram, ArrowRight } from "lucide-react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="section-padding bg-warm-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className={`lg:col-span-7 ${visible ? "animate-reveal" : "opacity-0"}`}>
            <p className="eyebrow mb-5">Sobre a Clínica</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago mb-7 leading-[1.1]">
              Um espaço onde a <span className="italic text-rose">beleza</span> encontra o{" "}
              <span className="italic text-rose">cuidado</span>
            </h2>
            <div className="space-y-5 text-tobago/70 leading-relaxed text-base md:text-lg">
              <p>
                A Aurabella nasceu do desejo de criar um espaço onde cada pessoa se sinta
                acolhida, valorizada e cuidada. Mais do que uma clínica de estética, somos
                um lugar de transformação e autoconfiança.
              </p>
              <p>
                Nosso ambiente foi pensado para proporcionar conforto e tranquilidade desde
                o primeiro momento. Aqui, cada detalhe importa — dos produtos premium aos
                equipamentos de última geração.
              </p>
              <p>
                Somos uma clínica inclusiva e LGBTQ+ friendly, comprometida com o respeito
                e a diversidade.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="https://wa.me/5511915966932" target="_blank" rel="noopener noreferrer" className="btn-luxe">
                Agendar avaliação <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" className="btn-ghost-luxe">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>

          <div className={`lg:col-span-5 ${visible ? "animate-reveal animate-reveal-delay-2" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-px bg-tobago/10 rounded-2xl overflow-hidden border border-tobago/10">
              {[
                { number: "4.9",  label: "Avaliação Google" },
                { number: "500+", label: "Avaliações positivas" },
                { number: "100%", label: "Atendimento humanizado" },
                { number: "∞",    label: "Dedicação a você" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 bg-fantasy hover:bg-vanilla transition-colors duration-500 text-center"
                >
                  <div className="font-serif text-4xl md:text-5xl font-medium text-tobago mb-2">
                    {stat.number}
                  </div>
                  <p className="text-xs tracking-widest uppercase text-tobago/55">{stat.label}</p>
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
