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
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ОСЛ" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block">
              <p className="text-primary-foreground font-bold text-lg leading-tight">
                Объединенная
              </p>
              <p className="text-accent font-semibold text-sm">
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
                className={`nav-link font-medium ${
                  location.pathname === link.href ? "text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-2 text-primary-foreground">
            <Phone className="h-5 w-5 text-accent" />
            <a href="tel:+79001234567" className="font-semibold hover:text-accent transition-colors">
              +7 (900) 123-45-67
            </a>
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
              <a
                href="tel:+79001234567"
                className="flex items-center gap-2 text-accent font-semibold py-2"
              >
                <Phone className="h-5 w-5" />
                +7 (900) 123-45-67
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
