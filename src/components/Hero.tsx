import heroImage from "@/assets/clinica-recepcao.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Recepção da Aurabella Clínica de Estética"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-32">
        <div className="max-w-2xl">
          <p className="animate-reveal text-sm md:text-base font-medium tracking-[0.25em] uppercase text-foreground/70 mb-6">
            Clínica de Estética Avançada · Tatuapé
          </p>
          <h1 className="animate-reveal animate-reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-6">
            A beleza que{" "}
            <span className="italic text-primary">revela</span>{" "}
            quem você é
          </h1>
          <p className="animate-reveal animate-reveal-delay-2 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
            Tratamentos estéticos personalizados, equipamentos modernos e
            atendimento em salas individuais. Uma experiência exclusiva, pensada
            para o seu bem-estar.
          </p>
          <div className="animate-reveal animate-reveal-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511915966932?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-foreground text-primary-foreground font-medium rounded-full text-center hover:bg-foreground/90 transition-all duration-300"
            >
              Agendar Avaliação
            </a>
            <a
              href="tel:+5511915966932"
              className="px-8 py-4 border border-foreground/20 text-foreground font-medium rounded-full text-center hover:bg-foreground/5 transition-all duration-300"
            >
              Ligar agora
            </a>
          </div>

          <div className="animate-reveal animate-reveal-delay-4 mt-14 flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-semibold text-foreground">4.9</span>
            </div>
            <span className="text-sm text-muted-foreground">
              +500 avaliações no Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
