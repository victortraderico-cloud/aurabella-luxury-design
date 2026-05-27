import { ArrowRight, Instagram, Star } from "lucide-react";
import heroImage from "@/assets/clinica-recepcao.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-end md:items-center overflow-hidden bg-tobago">
      {/* image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Recepção da Aurabella Clínica de Estética"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-90"
        />
        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-tobago/95 via-tobago/65 to-tobago/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-tobago via-tobago/30 to-transparent" />
      </div>

      {/* corner ornaments */}
      <div className="hidden lg:block absolute top-28 right-12 z-10 text-fantasy/40 text-[0.65rem] tracking-[0.35em] uppercase rotate-90 origin-top-right">
        Tatuapé · São Paulo · Est. Aurabella
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="animate-reveal eyebrow text-fantasy/60 mb-7">
            Clínica de Estética Avançada · Tatuapé
          </p>
          <h1 className="animate-reveal animate-reveal-delay-1 font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.02] tracking-tight text-fantasy mb-8">
            A beleza que{" "}
            <span className="italic text-rose">revela</span>
            <br className="hidden sm:inline" /> quem você é
          </h1>
          <p className="animate-reveal animate-reveal-delay-2 text-base md:text-lg text-fantasy/70 leading-relaxed max-w-xl mb-10">
            Tratamentos estéticos personalizados, equipamentos modernos e atendimento
            em salas individuais. Uma experiência exclusiva, pensada para o seu bem-estar.
          </p>

          <div className="animate-reveal animate-reveal-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511915966932?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-rose text-tobago font-medium rounded-full hover:bg-fantasy transition-all duration-500 group"
            >
              Agendar Avaliação
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="https://instagram.com/aurabellaoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-fantasy/25 text-fantasy font-medium rounded-full hover:bg-fantasy/10 transition-all duration-500"
            >
              <Instagram className="w-4 h-4" /> @aurabellaoficial
            </a>
          </div>

          {/* trust strip */}
          <div className="animate-reveal animate-reveal-delay-4 mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-rose fill-rose" />
                ))}
              </div>
              <span className="text-sm font-semibold text-fantasy">4.9</span>
              <span className="text-sm text-fantasy/60">· +500 avaliações Google</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-fantasy/20" />
            <span className="text-sm text-fantasy/60">Equipamentos de última geração</span>
            <div className="hidden md:block w-px h-5 bg-fantasy/20" />
            <span className="text-sm text-fantasy/60">Atendimento humanizado</span>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-fantasy/40">
        <span className="text-[0.6rem] tracking-[0.35em] uppercase">Role</span>
        <div className="w-px h-10 bg-gradient-to-b from-fantasy/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
