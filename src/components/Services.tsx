import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import procBotox from "@/assets/proc-botox.jpg";
import procEmagrecimento from "@/assets/proc-emagrecimento.jpg";
import procGordura from "@/assets/proc-gordura.jpg";
import procLaser from "@/assets/proc-laser.jpg";

const services = [
  { image: procBotox,        title: "Toxina Botulínica",   description: "Aplicação precisa para suavizar linhas de expressão com resultado natural e harmônico." },
  { image: procEmagrecimento,title: "Emagrecimento",       description: "Protocolos personalizados para perda de peso e bem-estar, com acompanhamento dedicado." },
  { image: procGordura,      title: "Gordura Localizada",  description: "Tecnologia avançada para redução de medidas e contorno corporal definido." },
  { image: procLaser,        title: "Depilação a Laser",   description: "Equipamentos de última geração compatíveis com todos os tipos e fototipos de pele." },
  { image: procBotox,        title: "Tratamentos Faciais", description: "Limpeza profunda, peeling, microagulhamento e protocolos sob medida para cada pele." },
  { image: procEmagrecimento,title: "Tratamentos Corporais",description:"Drenagem linfática, modelagem corporal e protocolos para firmeza e redução." },
];

const wppLink = (treatment: string) =>
  `https://wa.me/5511915966932?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta para: ${treatment}.`)}`;

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="section-padding bg-warm-cream" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Nossos Serviços</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago mb-4 leading-[1.1]">
            Tratamentos que <span className="italic text-rose">transformam</span>
          </h2>
          <p className="text-tobago/60 leading-relaxed">
            Cada protocolo é desenhado especialmente para você, combinando tecnologia
            avançada e cuidado humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group card-luxe rounded-2xl overflow-hidden flex flex-col hover-lift ${visible ? "animate-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tobago/55 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-fantasy/80 backdrop-blur-md text-[0.65rem] font-medium tracking-[0.22em] uppercase text-tobago">
                  Aurabella
                </span>
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-1">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-tobago mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-tobago/65 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <a
                  href={wppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-between gap-3 w-full px-5 py-3.5 rounded-full bg-tobago text-fantasy text-sm font-medium tracking-wide transition-all duration-500 hover:bg-tobago-deep"
                >
                  <span>Agende sua consulta</span>
                  <span className="w-7 h-7 rounded-full bg-fantasy/15 flex items-center justify-center group-hover/btn:bg-rose group-hover/btn:text-tobago transition-all duration-500">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
