import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ОСЛ" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-bold text-lg">Объединенная</p>
                <p className="text-accent font-semibold text-sm">Служба Логистики</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Ваш надежный партнер в сфере автомобильных грузоперевозок. 
              Работаем 24/7 по всей России.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Навигация по сайту">
            <h4 className="text-accent font-bold text-lg mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Главная</Link>
              <Link to="/tariffs" className="text-primary-foreground/80 hover:text-accent transition-colors">Тарифы</Link>
              <Link to="/request" className="text-primary-foreground/80 hover:text-accent transition-colors">Заявка</Link>
              <Link to="/vacancies" className="text-primary-foreground/80 hover:text-accent transition-colors">Вакансии</Link>
              <Link to="/contacts" className="text-primary-foreground/80 hover:text-accent transition-colors">Контакты</Link>
            </div>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-accent font-bold text-lg mb-4">Услуги</h4>
            <ul className="flex flex-col gap-2 text-primary-foreground/80 text-sm">
              <li>Грузоперевозки по России</li>
              <li>ADR перевозки</li>
              <li>Негабаритные грузы</li>
              <li>Кросс-докинг</li>
              <li>Складское хранение</li>
            </ul>
          </div>

          {/* Contacts */}
          <address className="not-italic">
            <h4 className="text-accent font-bold text-lg mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+79150157992" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                +7 (915) 015-79-92
              </a>
              <a href="tel:+79106061779" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                +7 (910) 606-17-79
              </a>
              <a href="mailto:OSL.LOGISTIKA@yandex.ru" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                OSL.LOGISTIKA@yandex.ru
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                <span>Москва, Домодедово</span>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Объединенная Служба Логистики. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;