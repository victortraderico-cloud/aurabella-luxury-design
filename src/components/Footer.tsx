import { MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 py-16 md:px-12 lg:px-20 bg-foreground text-primary-foreground/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
              Aurabella
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Clínica de Estética Premium em Tatuapé, São Paulo. Tratamentos 
              personalizados com excelência e cuidado.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-medium text-primary-foreground mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2.5">
              {["Serviços", "Sobre", "Depoimentos", "FAQ", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-base font-medium text-primary-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  Rua Monte Serrat, 890 – Tatuapé, SP
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="https://wa.me/5511915966932" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  +55 11 91596-6932
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  @aurabellaoficial
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Aurabella Clínica de Estética. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            LGBTQ+ Friendly 🏳️‍🌈
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
