import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo-aurabella.png";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Antes & Depois", href: "#antes-depois" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header py-2.5" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Aurabella" className="h-11 w-11 object-contain" />
          <span className={`font-serif text-xl font-medium tracking-wide hidden sm:inline transition-colors duration-500 ${scrolled ? "text-tobago" : "text-fantasy"}`}>
            Aurabella
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.82rem] font-medium transition-colors duration-300 ${
                scrolled ? "text-tobago/70 hover:text-tobago" : "text-fantasy/75 hover:text-fantasy"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://instagram.com/aurabellaoficial"
            target="_blank" rel="noopener noreferrer"
            aria-label="Instagram"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled ? "text-tobago hover:bg-tobago/10" : "text-fantasy hover:bg-fantasy/10"
            }`}
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5511915966932"
            target="_blank" rel="noopener noreferrer"
            className="ml-1 px-5 py-2.5 bg-tobago text-fantasy text-sm font-medium rounded-full hover:bg-tobago-deep transition-colors duration-300"
          >
            Agendar
          </a>
        </nav>

        <button
          className={`lg:hidden ${scrolled ? "text-tobago" : "text-fantasy"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-header mt-2 mx-4 rounded-2xl p-6 animate-reveal">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-tobago/80 hover:text-tobago transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="https://instagram.com/aurabellaoficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-tobago/80">
              <Instagram className="w-4 h-4" /> @aurabellaoficial
            </a>
            <a
              href="https://wa.me/5511915966932"
              target="_blank" rel="noopener noreferrer"
              className="mt-2 text-center px-5 py-3 bg-tobago text-fantasy text-sm font-medium rounded-full"
            >
              Agendar Avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
