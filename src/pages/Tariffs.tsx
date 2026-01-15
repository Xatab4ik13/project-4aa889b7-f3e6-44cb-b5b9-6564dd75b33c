import { Link } from "react-router-dom";
import { Check, ArrowRight, Truck, Package, AlertTriangle, Thermometer } from "lucide-react";
import Layout from "@/components/Layout";
import fleetHero from "@/assets/fleet-hero.jpg";

const tariffs = [
  {
    name: "Стандарт",
    icon: Truck,
    description: "Для обычных грузов",
    price: "от 35",
    unit: "₽/км",
    features: [
      "Грузоподъемность до 20 тонн",
      "Объем до 82 м³",
      "Стандартные сроки доставки",
      "Базовое страхование",
      "Отслеживание груза",
    ],
    popular: false,
  },
  {
    name: "Экспресс",
    icon: Package,
    description: "Срочная доставка",
    price: "от 50",
    unit: "₽/км",
    features: [
      "Грузоподъемность до 20 тонн",
      "Объем до 82 м³",
      "Ускоренная доставка",
      "Расширенное страхование",
      "Приоритетная обработка",
      "Трекинг в реальном времени",
    ],
    popular: true,
  },
  {
    name: "ADR",
    icon: AlertTriangle,
    description: "Опасные грузы",
    price: "от 70",
    unit: "₽/км",
    features: [
      "Все классы опасности",
      "Сертифицированный транспорт",
      "Обученные водители",
      "Полное страхование",
      "Документальное сопровождение",
      "24/7 мониторинг",
    ],
    popular: false,
  },
  {
    name: "Рефрижератор",
    icon: Thermometer,
    description: "Температурный режим",
    price: "от 55",
    unit: "₽/км",
    features: [
      "Температура от -25°C до +25°C",
      "Грузоподъемность до 20 тонн",
      "Контроль температуры",
      "Мультитемпературные перевозки",
      "Сертифицированный транспорт",
    ],
    popular: false,
  },
];

const additionalServices = [
  { name: "Погрузочно-разгрузочные работы", price: "от 2 000 ₽" },
  { name: "Страхование груза (дополнительное)", price: "0.1% от стоимости" },
  { name: "Упаковка груза", price: "от 500 ₽" },
  { name: "Сопровождение груза", price: "договорная" },
  { name: "Складское хранение", price: "от 50 ₽/паллет/сутки" },
  { name: "Кросс-докинг", price: "от 300 ₽/паллет" },
];

const Tariffs = () => {
  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fleetHero})` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Наши <span className="text-accent">тарифы</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Прозрачное ценообразование для каждого типа перевозки. 
            Индивидуальный расчёт для вашего груза.
          </p>
        </div>
      </section>

      {/* Tariffs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tariffs.map((tariff) => (
              <div
                key={tariff.name}
                className={`relative bg-card rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  tariff.popular ? "border-primary scale-105" : "border-border hover:border-primary/50"
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Популярный
                  </div>
                )}
                
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <tariff.icon className="h-7 w-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">{tariff.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tariff.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{tariff.price}</span>
                  <span className="text-muted-foreground ml-1">{tariff.unit}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tariff.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/request"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                    tariff.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Заказать
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Дополнительные <span className="text-primary">услуги</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Услуга</th>
                  <th className="text-right py-4 px-6 font-semibold">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map((service, index) => (
                  <tr key={service.name} className={index % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                    <td className="py-4 px-6 text-foreground">{service.name}</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Нужен индивидуальный расчёт?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Оставьте заявку, и наши специалисты рассчитают стоимость 
            доставки вашего груза в течение 15 минут.
          </p>
          <Link to="/request" className="btn-hero inline-flex items-center gap-2">
            Рассчитать стоимость
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Tariffs;
