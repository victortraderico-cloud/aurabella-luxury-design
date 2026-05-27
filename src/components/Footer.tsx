import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-aurabella.png";

const Footer = () => {
  return (
    <footer className="relative px-6 py-20 md:px-12 lg:px-20 bg-tobago-deep text-fantasy/75 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-rose/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Aurabella" className="h-12 w-12 object-contain" />
              <span className="font-serif text-2xl font-medium text-fantasy">Aurabella</span>
            </div>
            <p className="text-sm leading-relaxed text-fantasy/55 max-w-sm mb-7">
              Clínica de estética premium em Tatuapé, São Paulo. Tratamentos
              personalizados com tecnologia avançada e cuidado humano.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/5511915966932" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-fantasy/10 border border-fantasy/15 flex items-center justify-center hover:bg-rose hover:text-tobago transition-all duration-500">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-fantasy/10 border border-fantasy/15 flex items-center justify-center hover:bg-rose hover:text-tobago transition-all duration-500">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="tel:+5511915966932" aria-label="Telefone" className="w-11 h-11 rounded-full bg-fantasy/10 border border-fantasy/15 flex items-center justify-center hover:bg-rose hover:text-tobago transition-all duration-500">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-serif text-base font-medium text-fantasy mb-5">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {[
                { l: "Serviços", h: "#servicos" },
                { l: "Equipamentos", h: "#equipamentos" },
                { l: "Antes & Depois", h: "#antes-depois" },
                { l: "Estrutura", h: "#estrutura" },
                { l: "Depoimentos", h: "#depoimentos" },
                { l: "FAQ", h: "#faq" },
                { l: "Contato", h: "#contato" },
              ].map((item) => (
                <a key={item.h} href={item.h} className="text-sm text-fantasy/55 hover:text-rose transition-colors duration-300">
                  {item.l}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-serif text-base font-medium text-fantasy mb-5">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <span className="text-sm text-fantasy/55 leading-relaxed">
                  Rua Monte Serrat, 890 – Tatuapé, SP<br />
                  Próximo ao metrô Carrão (10 min)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose shrink-0" />
                <a href="tel:+5511915966932" className="text-sm text-fantasy/55 hover:text-fantasy transition-colors">
                  +55 11 91596-6932
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-rose shrink-0" />
                <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" className="text-sm text-fantasy/55 hover:text-fantasy transition-colors">
                  @aurabellaoficial
                </a>
              </div>
              <p className="text-xs text-fantasy/40 pt-2">
                Seg–Sex: 9h–20h · Sáb: 9h–15h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-fantasy/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fantasy/40">
            © {new Date().getFullYear()} Aurabella Clínica de Estética. Todos os direitos reservados.
          </p>
          <p className="text-xs text-fantasy/40">
            LGBTQ+ Friendly 🏳️‍🌈
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
