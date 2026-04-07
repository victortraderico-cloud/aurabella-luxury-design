import { useState } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. ${form.mensagem}`;
    window.open(
      `https://wa.me/5511915966932?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Contato
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Venha nos <span className="italic">conhecer</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estamos prontos para receber você com todo o cuidado que merece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Endereço</h3>
                <p className="text-sm text-muted-foreground">
                  Rua Monte Serrat, 890 – Tatuapé, São Paulo – SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/5511915966932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  +55 11 91596-6932
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Horário</h3>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta: 9h às 20h<br />
                  Sábado: 9h às 16h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background/50 hover-lift">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-base font-medium text-foreground mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/aurabellaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  @aurabellaoficial
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border/50 h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-46.58!3d-23.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzI0LjAiUyA0NsKwMzQnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Aurabella"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-background border border-border/50">
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              Agende sua avaliação
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Preencha o formulário e entraremos em contato pelo WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Conte-nos como podemos ajudá-la..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-foreground text-primary-foreground font-medium rounded-full hover:bg-foreground/90 transition-colors duration-300 text-sm"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
