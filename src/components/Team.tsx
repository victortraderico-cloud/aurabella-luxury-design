import { useEffect, useRef, useState } from "react";
import { Award, GraduationCap, Heart } from "lucide-react";
import sala3 from "@/assets/clinica-sala3.png";

const Team = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-fantasy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`order-2 lg:order-1 ${visible ? "animate-reveal" : "opacity-0"}`}>
            <div className="space-y-3">
              {[
                { icon: GraduationCap, title: "Equipe profissionalizada", text: "Profissionais com formação contínua nas técnicas mais avançadas do mercado estético." },
                { icon: Award,         title: "Experiência comprovada",   text: "Anos de prática e centenas de clientes atendidos com excelência e resultados reais." },
                { icon: Heart,         title: "Cuidado humanizado",       text: "Escuta ativa, acolhimento e protocolos sob medida para cada necessidade." },
              ].map((item) => (
                <div key={item.title} className="group flex gap-6 p-6 md:p-7 rounded-2xl bg-vanilla hover:bg-warm-cream transition-colors duration-500">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-tobago text-fantasy flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-medium text-tobago mb-1.5">{item.title}</h3>
                    <p className="text-sm text-tobago/65 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`order-1 lg:order-2 ${visible ? "animate-reveal animate-reveal-delay-1" : "opacity-0"}`}>
            <p className="eyebrow mb-5">Nossa Equipe</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago mb-6 leading-[1.1]">
              Profissionais que <span className="italic text-rose">cuidam</span> de verdade
            </h2>
            <p className="text-tobago/65 leading-relaxed mb-4">
              Uma equipe experiente e dedicada, com domínio das técnicas mais modernas
              e compromisso genuíno com o bem-estar de cada cliente.
            </p>
            <p className="text-tobago/65 leading-relaxed mb-7">
              Aqui você não é apenas um número — é uma pessoa única, com necessidades
              que respeitamos em cada atendimento.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-[5/3] border border-tobago/10">
              <img src={sala3} alt="Sala da clínica Aurabella" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
