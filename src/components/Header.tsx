import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/tariffs", label: "Тарифы" },
  { href: "/request", label: "Заявка" },
  { href: "/vacancies", label: "Вакансии" },
  { href: "/contacts", label: "Контакты" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logo} alt="ОСЛ" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
            <div>
              <p className="text-primary-foreground font-medium text-base sm:text-xl leading-tight">
                Объединенная
              </p>
              <p className="text-accent font-medium text-sm sm:text-base">
                Служба Логистики
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link font-bold ${
                  location.pathname === link.href ? "text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phones */}
          <div className="hidden md:flex items-center gap-4 text-primary-foreground">
            <Phone className="h-5 w-5 text-accent" />
            <div className="flex flex-col text-sm">
              <a href="tel:+79150157992" className="font-medium hover:text-accent transition-colors">
                +7 (915) 015-79-92
              </a>
              <a href="tel:+79106061779" className="font-medium hover:text-accent transition-colors">
                +7 (910) 606-17-79
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-primary-foreground font-medium py-2 ${
                    location.pathname === link.href ? "text-accent" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-1 py-2">
                <a
                  href="tel:+79150157992"
                  className="flex items-center gap-2 text-accent font-bold"
                >
                  <Phone className="h-5 w-5" />
                  +7 (915) 015-79-92
                </a>
                <a
                  href="tel:+79106061779"
                  className="flex items-center gap-2 text-accent font-bold"
                >
                  <Phone className="h-5 w-5" />
                  +7 (910) 606-17-79
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
