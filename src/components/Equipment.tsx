import { useEffect, useRef, useState } from "react";
import { Play, Sparkles, Cpu, ShieldCheck } from "lucide-react";
import equipImg from "@/assets/equipamentos.jpg";
import sala2 from "@/assets/clinica-sala2.png";

/**
 * Equipment showcase — minimalist & premium.
 * Layout: 3 video placeholders + 2 image stills, arranged in a cinematic asymmetric grid.
 * Replace the `videoSrc` strings with real .mp4 / poster URLs when assets arrive.
 */

type MediaTile = {
  type: "video" | "image";
  src: string;        // poster (image or video poster)
  videoSrc?: string;  // optional real video src
  label: string;
  aspect: string;     // tailwind aspect class
  span: string;       // tailwind col-span/row-span class
};

const tiles: MediaTile[] = [
  { type: "video", src: equipImg, label: "Laser de última geração", aspect: "aspect-[16/10]", span: "lg:col-span-7 lg:row-span-2" },
  { type: "video", src: sala2,    label: "Radiofrequência avançada", aspect: "aspect-square",  span: "lg:col-span-5" },
  { type: "image", src: equipImg, label: "Tecnologia inteligente",   aspect: "aspect-[4/3]",   span: "lg:col-span-3" },
  { type: "video", src: sala2,    label: "Ultrassom focalizado",      aspect: "aspect-[4/3]",   span: "lg:col-span-5" },
  { type: "image", src: sala2,    label: "Protocolos premium",        aspect: "aspect-[4/3]",   span: "lg:col-span-4" },
];

const features = [
  { icon: Cpu,         title: "Tecnologia de ponta", text: "Aparelhos de marcas líderes com calibragem precisa." },
  { icon: Sparkles,    title: "Todos os fototipos",  text: "Equipamentos compatíveis com todos os tipos de pele." },
  { icon: ShieldCheck, title: "Certificação ANVISA", text: "Segurança e eficácia comprovadas em cada protocolo." },
];

const Equipment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="equipamentos" ref={ref} className="relative section-padding bg-tobago text-fantasy overflow-hidden grain">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-vanilla/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className={`lg:col-span-6 ${visible ? "animate-reveal" : "opacity-0"}`}>
            <p className="eyebrow text-fantasy/60 mb-5">Tecnologia · Equipamentos</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              Aparelhos modernos para <span className="italic text-rose">resultados reais</span>
            </h2>
          </div>
          <div className={`lg:col-span-6 lg:pt-6 ${visible ? "animate-reveal animate-reveal-delay-1" : "opacity-0"}`}>
            <p className="text-fantasy/70 leading-relaxed text-base md:text-lg">
              Investimos em tecnologia premium para entregar o que há de mais avançado em
              estética. Cada equipamento é selecionado para oferecer segurança, conforto
              e resultados visíveis — para todos os tipos de pele.
            </p>
          </div>
        </div>

        {/* Media grid: 3 videos + 2 images */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 ${visible ? "animate-reveal animate-reveal-delay-2" : "opacity-0"}`}>
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`group relative ${t.span} ${t.aspect} rounded-2xl overflow-hidden bg-tobago-deep border border-fantasy/10`}
            >
              {t.type === "video" && t.videoSrc ? (
                <video
                  src={t.videoSrc}
                  poster={t.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
              ) : (
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                />
              )}
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-tobago-deep/80 via-tobago/20 to-transparent" />
              {/* play indicator for video tiles */}
              {t.type === "video" && (
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-fantasy/10 backdrop-blur-md border border-fantasy/20">
                  <Play className="w-3 h-3 fill-fantasy text-fantasy" />
                  <span className="text-[0.65rem] font-medium tracking-widest uppercase text-fantasy/90">Vídeo</span>
                </div>
              )}
              <figcaption className="absolute bottom-4 left-5 right-5 font-serif text-base md:text-lg text-fantasy/95">
                {t.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* feature strip */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-fantasy/10 rounded-2xl overflow-hidden border border-fantasy/10">
          {features.map((f) => (
            <div key={f.title} className="bg-tobago p-7 md:p-8">
              <f.icon className="w-5 h-5 text-rose mb-4" />
              <h3 className="font-serif text-lg text-fantasy mb-1.5">{f.title}</h3>
              <p className="text-sm text-fantasy/65 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
