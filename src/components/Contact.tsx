import { MapPin, Phone, Clock, Instagram, MessageCircle, Train, Car, Accessibility } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-vanilla">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Contato & Localização</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago mb-4 leading-[1.1]">
            Venha nos <span className="italic text-rose">conhecer</span>
          </h2>
          <p className="text-tobago/65 leading-relaxed">
            Estamos prontos para receber você com todo o cuidado que merece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="space-y-3">
            {[
              { Icon: MapPin,         title: "Endereço",                       text: "Rua Monte Serrat, 890 – Tatuapé, São Paulo – SP" },
              { Icon: Train,          title: "Próximo ao Metrô Carrão",        text: "Aproximadamente 10 minutos de caminhada da estação." },
              { Icon: Car,            title: "Estacionamento no local",        text: "2 vagas rotativas disponíveis para clientes." },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-5 p-6 rounded-2xl bg-fantasy hover:bg-warm-cream transition-colors duration-500">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-tobago text-fantasy flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-medium text-tobago mb-1">{title}</h3>
                  <p className="text-sm text-tobago/65">{text}</p>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="https://wa.me/5511915966932" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-2xl bg-tobago text-fantasy hover:bg-tobago-deep transition-colors duration-500">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-fantasy/15 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-medium mb-1">WhatsApp</h3>
                  <p className="text-sm text-rose">+55 11 91596-6932</p>
                </div>
              </a>

              <a href="tel:+5511915966932" className="flex items-start gap-4 p-6 rounded-2xl bg-fantasy hover:bg-warm-cream transition-colors duration-500">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-tobago text-fantasy flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-medium text-tobago mb-1">Telefone</h3>
                  <p className="text-sm text-tobago/70">+55 11 91596-6932</p>
                </div>
              </a>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-2xl bg-fantasy">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-tobago text-fantasy flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-tobago mb-1">Horário de atendimento</h3>
                <p className="text-sm text-tobago/65">
                  Segunda a Sexta: 9h às 20h<br />
                  Sábado: 9h às 15h
                </p>
              </div>
            </div>

            <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-6 rounded-2xl bg-rose hover:bg-tobago hover:text-fantasy transition-all duration-500 group">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-tobago/15 group-hover:bg-fantasy/15 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-tobago group-hover:text-fantasy transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium mb-1">Instagram</h3>
                <p className="text-sm">@aurabellaoficial · veja resultados reais</p>
              </div>
            </a>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-tobago/10 h-80">
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

            <div className="p-8 rounded-2xl bg-tobago text-fantasy">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-fantasy/10 border border-fantasy/15 flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-rose" />
                </div>
                <h3 className="font-serif text-xl font-medium">Acessibilidade</h3>
              </div>
              <p className="text-sm text-fantasy/70 leading-relaxed mb-5">
                A Aurabella foi pensada para acolher todas as pessoas com conforto
                e segurança. Nosso espaço oferece:
              </p>
              <ul className="space-y-2.5 text-sm text-fantasy/75">
                {[
                  "Acesso facilitado e circulação ampla",
                  "Salas individuais climatizadas",
                  "Atendimento inclusivo e LGBTQ+ friendly",
                  "Equipamentos compatíveis com todos os tipos de pele",
                  "Estacionamento próprio no local",
                ].map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-rose">—</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
