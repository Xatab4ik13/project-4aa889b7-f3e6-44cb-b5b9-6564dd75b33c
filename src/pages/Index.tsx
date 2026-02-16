import { Link } from "react-router-dom";
import { Truck, Package, Shield, Clock, MapPin, ArrowRight, CheckCircle, Warehouse, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import heroBg from "@/assets/hero-bg.jpg";
import PartnersCarousel from "@/components/PartnersCarousel";
import AboutSection from "@/components/AboutSection";
import OptimizedBackground from "@/components/OptimizedBackground";

const features = [
  "Собственный парк",
  "24/7",
  "Опыт более 10 лет",
  "Профессиональная команда логистов",
  "Высокий сервис",
  "Профессиональные водители",
];

const services = [
  {
    icon: Truck,
    title: "Грузоперевозки по России",
    description: "Доставка грузов любой сложности по всей территории России. От сборных до полных загрузок.",
  },
  {
    icon: AlertTriangle,
    title: "ADR перевозки",
    description: "Специализированные перевозки опасных грузов с соблюдением всех требований безопасности.",
  },
  {
    icon: Package,
    title: "Негабаритные грузы",
    description: "Транспортировка крупногабаритных и тяжеловесных грузов с получением разрешений.",
  },
  {
    icon: Warehouse,
    title: "Кросс-докинг",
    description: "Площадки для перегрузки грузов в Домодедово и Казани. Возможность организации в других регионах.",
  },
  {
    icon: Shield,
    title: "Страхование груза",
    description: "Полное страхование всех перевозимых грузов для вашего спокойствия.",
  },
  {
    icon: Clock,
    title: "Трекинг в реальном времени",
    description: "Отслеживание местоположения вашего груза на каждом этапе доставки.",
  },
];


const Index = () => {
  return (
    <Layout>
      {/* SEO: Structured data for LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Объединенная Служба Логистики",
          "image": "https://osl-logistika.ru/favicon.png",
          "telephone": "+7-915-015-79-92",
          "email": "OSL.LOGISTIKA@yandex.ru",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Домодедово",
            "addressRegion": "Московская область",
            "addressCountry": "RU"
          },
          "priceRange": "$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        })
      }} />
      {/* Hero Section */}
      <OptimizedBackground
        src={heroBg}
        className="min-h-[90vh] flex items-center overflow-hidden"
        priority={true}
        overlay={false}
      >
        
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Ваш надежный партнер в сфере{" "}
              <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">грузоперевозок по всему миру</span>
            </h1>
            
            <p className="text-xl text-primary-foreground mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Опыт работы на рынке более 10 лет. Профессиональная команда логистов с академическим образованием. 
              Высокий сервис и индивидуальный подход.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/request" className="btn-hero inline-flex items-center justify-center gap-2">
                Оставить заявку
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/tariffs" className="btn-outline-hero inline-flex items-center justify-center gap-2">
                Наши тарифы
              </Link>
            </div>
          </div>
        </div>
      </OptimizedBackground>

      {/* About Section */}
      <AboutSection />

      {/* Partners Carousel */}
      <PartnersCarousel />


      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши <span className="text-primary">услуги</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр логистических услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Cross-docking Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Кросс-докинг и <span className="text-accent">складское хранение</span>
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed">
                Предоставляем площадки для перегрузки грузов, а также склады для временного хранения. 
                Собственные площадки в ключевых логистических точках России.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-semibold">Домодедово (Москва)</p>
                    <p className="text-primary-foreground/70 text-sm">Собственная площадка</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-semibold">Казань</p>
                    <p className="text-primary-foreground/70 text-sm">Собственная площадка</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-semibold">Другие регионы</p>
                    <p className="text-primary-foreground/70 text-sm">Организуем по запросу</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur">
              <h3 className="text-accent font-bold text-xl mb-4">Преимущества кросс-докинга:</h3>
              <ul className="space-y-3">
                {[
                  "Сокращение времени доставки",
                  "Оптимизация логистических затрат",
                  "Консолидация грузов",
                  "Временное хранение",
                  "Перегрузка между транспортом",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary-foreground/90">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ваш груз — ваша история
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы не просто перевозим, мы создаем доверие. 
              Готовы к диалогу? Давайте обсудим ваш уникальный случай уже сегодня.
            </p>
            <Link to="/request" className="btn-hero inline-flex items-center gap-2">
              Оставить заявку
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
