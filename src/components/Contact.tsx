import { MapPin, Phone, Clock, Instagram, MessageCircle, Train, Car, Accessibility } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Contato & Localização
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Venha nos <span className="italic">conhecer</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estamos prontos para receber você com todo o cuidado que merece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Endereço</h3>
                <p className="text-sm text-muted-foreground">
                  Rua Monte Serrat, 890 – Tatuapé, São Paulo – SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                <Train className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Próximo ao Metrô Carrão</h3>
                <p className="text-sm text-muted-foreground">
                  Aproximadamente 10 minutos de caminhada da estação.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                <Car className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Estacionamento no local</h3>
                <p className="text-sm text-muted-foreground">
                  2 vagas rotativas disponíveis para clientes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/5511915966932"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 hover-lift"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-medium text-foreground mb-1">WhatsApp</h3>
                  <p className="text-sm text-primary">+55 11 91596-6932</p>
                </div>
              </a>

              <a
                href="tel:+5511915966932"
                className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 hover-lift"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-medium text-foreground mb-1">Telefone</h3>
                  <p className="text-sm text-primary">+55 11 91596-6932</p>
                </div>
              </a>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                <Clock className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Horário de atendimento</h3>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta: 9h às 20h<br />
                  Sábado: 9h às 15h
                </p>
              </div>
            </div>

            <a
              href="https://instagram.com/aurabellaoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 hover-lift"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Instagram</h3>
                <p className="text-sm text-primary">@aurabellaoficial</p>
              </div>
            </a>
          </div>

          {/* Map + Accessibility */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-border/50 h-72">
              <iframe
                src="https://www.google.com/maps?q=Rua+Monte+Serrat+890+Tatuapé+São+Paulo&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Aurabella"
              />
            </div>

            <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Acessibilidade
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A Aurabella foi pensada para acolher todas as pessoas com conforto
                e segurança. Nosso espaço oferece:
              </p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span> Acesso facilitado e circulação ampla</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Salas individuais climatizadas</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Atendimento inclusivo e LGBTQ+ friendly</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Equipamentos compatíveis com todos os tipos de pele</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Estacionamento próprio no local</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
