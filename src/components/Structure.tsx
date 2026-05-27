import { useEffect, useRef, useState } from "react";
import { DoorClosed, Wind, ShieldCheck, Sparkles } from "lucide-react";
import recepcao from "@/assets/clinica-recepcao.png";
import sala1 from "@/assets/clinica-sala1.png";
import sala2 from "@/assets/clinica-sala2.png";
import sala3 from "@/assets/clinica-sala3.png";
import equipamentos from "@/assets/equipamentos.jpg";

const features = [
  { icon: DoorClosed,  title: "Salas individuais",     text: "Espaço exclusivo e privado para cada cliente." },
  { icon: Wind,        title: "Ambiente climatizado",  text: "Conforto térmico em todas as salas de atendimento." },
  { icon: ShieldCheck, title: "Privacidade total",     text: "Atendimento reservado, com bem-estar em primeiro lugar." },
  { icon: Sparkles,    title: "Equipamentos modernos", text: "Tecnologia de ponta compatível com todos os tipos de pele." },
];

const Structure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="estrutura" ref={ref} className="section-padding bg-vanilla">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Nossa Estrutura</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago leading-[1.1]">
              Um espaço <span className="italic text-rose">exclusivo</span> para você
            </h2>
          </div>
          <p className="lg:col-span-5 text-tobago/65 leading-relaxed">
            Cada detalhe foi pensado para oferecer privacidade, conforto e uma
            experiência verdadeiramente premium.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 mb-16">
          <div className={`col-span-12 md:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] ${visible ? "animate-reveal" : "opacity-0"}`}>
            <img src={recepcao} alt="Recepção da clínica Aurabella" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className={`col-span-6 md:col-span-5 rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto ${visible ? "animate-reveal animate-reveal-delay-1" : "opacity-0"}`}>
            <img src={sala1} alt="Sala individual de atendimento" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className={`col-span-6 md:col-span-4 rounded-2xl overflow-hidden aspect-square ${visible ? "animate-reveal animate-reveal-delay-2" : "opacity-0"}`}>
            <img src={sala2} alt="Sala de procedimentos" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className={`col-span-12 md:col-span-4 rounded-2xl overflow-hidden aspect-square ${visible ? "animate-reveal animate-reveal-delay-3" : "opacity-0"}`}>
            <img src={sala3} alt="Sala com equipamentos modernos" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className={`col-span-12 md:col-span-4 rounded-2xl overflow-hidden aspect-square ${visible ? "animate-reveal animate-reveal-delay-4" : "opacity-0"}`}>
            <img src={equipamentos} alt="Equipamentos avançados de estética" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-tobago/10 rounded-2xl overflow-hidden border border-tobago/10">
          {features.map((f) => (
            <div key={f.title} className="p-6 md:p-7 bg-fantasy hover:bg-warm-cream transition-colors duration-500">
              <div className="w-10 h-10 rounded-xl bg-tobago text-fantasy flex items-center justify-center mb-4">
                <f.icon className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-medium text-tobago mb-1.5">{f.title}</h3>
              <p className="text-xs text-tobago/60 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;
