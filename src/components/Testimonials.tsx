import { useEffect, useRef, useState } from "react";
import { Star, Quote, Instagram } from "lucide-react";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";
import c4 from "@/assets/client-4.jpg";

const testimonials = [
  { name: "Carolina M.", photo: c1, text: "Atendimento maravilhoso! Me senti acolhida desde o primeiro momento. Os resultados superaram todas as minhas expectativas.", rating: 5 },
  { name: "Fernanda S.", photo: c2, text: "Profissionais extremamente atenciosas e competentes. O cuidado com cada detalhe faz toda a diferença.", rating: 5 },
  { name: "Juliana R.",  photo: c3, text: "Ambiente agradável e confortável, com um clima de tranquilidade que nos faz relaxar. Recomendo de olhos fechados!", rating: 5 },
  { name: "Marcos L.",   photo: c4, text: "Resultados que aumentam a confiança. A equipe realmente se importa com o que é melhor para cada cliente.", rating: 5 },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="depoimentos" ref={ref} className="section-padding bg-fantasy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Depoimentos</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago leading-[1.1]">
              O que dizem sobre <span className="italic text-rose">nós</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end justify-between gap-4">
            <p className="text-tobago/65 leading-relaxed">
              A satisfação de nossos clientes é a nossa maior conquista.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`relative p-8 md:p-10 rounded-2xl bg-vanilla hover-lift ${visible ? "animate-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-tobago/10" />
              <p className="font-serif italic text-tobago/85 text-lg leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-tobago/10">
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover ring-2 ring-tobago/15" />
                  <div>
                    <span className="block font-medium text-tobago text-sm">{t.name}</span>
                    <span className="block text-[0.7rem] tracking-widest uppercase text-tobago/50 mt-0.5">Cliente Aurabella</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-rose fill-rose" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" className="btn-ghost-luxe">
            <Instagram className="w-4 h-4" /> Mais avaliações no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
