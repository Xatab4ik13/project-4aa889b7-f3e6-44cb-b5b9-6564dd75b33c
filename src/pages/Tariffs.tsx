import { Link } from "react-router-dom";
import { ArrowRight, Truck, Package, AlertTriangle, Thermometer } from "lucide-react";
import Layout from "@/components/Layout";
import fleetHero from "@/assets/fleet-hero.jpg";
import OptimizedBackground from "@/components/OptimizedBackground";

const tariffs = [
  {
    icon: Truck,
    name: "Стандарт",
    description: "Для обычных грузов",
    price: "от 35 ₽/км",
    details: "Грузоподъемность до 20 тонн, объем до 82 м³, стандартные сроки доставки, базовое страхование, отслеживание груза.",
  },
  {
    icon: Package,
    name: "Экспресс",
    description: "Срочная доставка",
    price: "от 50 ₽/км",
    details: "Грузоподъемность до 20 тонн, объем до 82 м³, ускоренная доставка, расширенное страхование, приоритетная обработка, трекинг в реальном времени.",
  },
  {
    icon: AlertTriangle,
    name: "ADR",
    description: "Опасные грузы",
    price: "от 70 ₽/км",
    details: "Все классы опасности, сертифицированный транспорт, обученные водители, полное страхование, документальное сопровождение, мониторинг 24/7.",
  },
  {
    icon: Thermometer,
    name: "Рефрижератор",
    description: "Температурный режим",
    price: "от 55 ₽/км",
    details: "Температура от -25°C до +25°C, грузоподъемность до 20 тонн, контроль температуры, мультитемпературные перевозки, сертифицированный транспорт.",
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
      <OptimizedBackground
        src={fleetHero}
        className="py-20 overflow-hidden"
        priority={true}
        overlay={false}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-black/50 backdrop-blur-sm rounded-2xl px-8 py-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Наши <span className="text-accent">тарифы</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Прозрачное ценообразование для каждого типа перевозки. 
              Индивидуальный расчёт для вашего груза.
            </p>
          </div>
        </div>
      </OptimizedBackground>

      {/* Tariffs List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {tariffs.map((tariff) => (
              <div
                key={tariff.name}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-8 border-b border-border last:border-b-0"
              >
                <div className="flex items-center gap-4 md:w-1/4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <tariff.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{tariff.name}</h3>
                    <p className="text-sm text-muted-foreground">{tariff.description}</p>
                  </div>
                </div>
                
                <p className="text-foreground md:flex-1">{tariff.details}</p>
                
                <div className="md:w-32 text-right">
                  <span className="text-xl font-bold text-primary">{tariff.price}</span>
                </div>
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
