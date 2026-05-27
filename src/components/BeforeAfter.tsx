import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import proc1 from "@/assets/proc-botox.jpg";
import proc2 from "@/assets/proc-emagrecimento.jpg";
import proc3 from "@/assets/proc-gordura.jpg";
import proc4 from "@/assets/proc-laser.jpg";

/**
 * Before / After gallery — minimalist, editorial.
 * Replace placeholder pairs with real client photos when available.
 */

const cases = [
  { title: "Harmonização facial",   before: proc1, after: proc1, tag: "Toxina + Preenchimento" },
  { title: "Redução de medidas",     before: proc2, after: proc2, tag: "Protocolo corporal" },
  { title: "Contorno definido",      before: proc3, after: proc3, tag: "Gordura localizada" },
  { title: "Pele renovada",          before: proc4, after: proc4, tag: "Depilação a laser" },
];

const BeforeAfter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="antes-depois" ref={ref} className="section-padding bg-fantasy">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Resultados Reais</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago leading-[1.1]">
              Antes & <span className="italic text-rose">Depois</span>
            </h2>
            <p className="mt-5 text-tobago/65 leading-relaxed max-w-lg">
              Transformações sutis e naturais. Cada resultado é fruto de um protocolo
              personalizado, executado com tecnologia premium e cuidado humano.
            </p>
          </div>
          <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" className="btn-ghost-luxe self-start">
            Ver mais no Instagram <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`card-luxe rounded-2xl overflow-hidden hover-lift ${visible ? "animate-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="grid grid-cols-2 gap-px bg-tobago/10">
                <figure className="relative aspect-[4/5] bg-vanilla">
                  <img src={c.before} alt={`${c.title} — antes`} loading="lazy" className="w-full h-full object-cover" />
                  <figcaption className="absolute top-3 left-3 px-3 py-1 rounded-full bg-tobago/85 backdrop-blur-md text-fantasy text-[0.65rem] font-medium tracking-[0.18em] uppercase">
                    Antes
                  </figcaption>
                </figure>
                <figure className="relative aspect-[4/5] bg-vanilla">
                  <img src={c.after} alt={`${c.title} — depois`} loading="lazy" className="w-full h-full object-cover" />
                  <figcaption className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose text-tobago text-[0.65rem] font-medium tracking-[0.18em] uppercase">
                    Depois
                  </figcaption>
                </figure>
              </div>
              <div className="p-6 md:p-7 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-tobago">{c.title}</h3>
                  <p className="text-xs tracking-wider uppercase text-tobago/55 mt-1">{c.tag}</p>
                </div>
                <a
                  href="https://wa.me/5511915966932?text=Olá! Gostaria de saber mais sobre esse procedimento."
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs font-medium text-tobago underline-offset-4 hover:underline shrink-0"
                >
                  Quero esse resultado
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-tobago/50 italic">
          *Resultados podem variar conforme características individuais e adesão ao protocolo.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
