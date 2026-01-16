import { CheckCircle, Target, Users, Award, Truck, Route, ShieldCheck } from "lucide-react";
import fleetHero from "@/assets/fleet-hero.jpg";
import warehouseHero from "@/assets/warehouse-hero.jpg";
import OptimizedImage from "@/components/OptimizedImage";

const advantages = [
  { icon: ShieldCheck, text: "Все классы опасности, сертифицированный транспорт" },
  { icon: Users, text: "Водители, прошедшие специальное обучение" },
  { icon: Award, text: "Страхование перевозки" },
  { icon: Route, text: "Документальное сопровождение" },
  { icon: Target, text: "Спутниковое (ГЛОНАСС) отслеживание ТС 24/7" },
  { icon: Truck, text: "Собственный автопарк" },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Main About Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
              О компании
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Объединённая служба логистики
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Многолетний опыт в сфере грузоперевозок по всей России и стран СНГ. Мы знаем логистику изнутри и решаем задачи любой сложности.
              </p>
              <p>
                В нашем распоряжении — <strong className="text-foreground">собственный автопарк</strong>: тентованные и бортовые фуры от 20 тонн, тралы, низкорамные платформы и специализированная техника.
              </p>
              <p>
                Мы работаем по принципу индивидуального подхода: глубоко вникаем в задачу, просчитываем маршрут, сроки и риски, сопровождаем груз от момента заявки до выгрузки.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage 
                src={fleetHero} 
                alt="Автопарк компании" 
                className="w-full h-[400px]"
                containerClassName="h-[400px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-primary-foreground/80">лет опыта</p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              Преимущества
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Почему выбирают нас
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage) => (
              <div 
                key={advantage.text} 
                className="bg-muted/50 border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Relations & Goals */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage 
                src={warehouseHero} 
                alt="Склад и логистика" 
                className="w-full h-[400px]"
                containerClassName="h-[400px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-accent-foreground/80">клиентов</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Отношения с клиентами</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Мы строим долгосрочные партнёрские отношения, основанные на доверии, честности и выполнении обязательств. Многие клиенты работают с нами на постоянной основе, доверяя нам самые ответственные и срочные грузы.
              </p>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Достижения и цели</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                За годы работы мы успешно реализовали тысячи перевозок повышенной сложности и сформировали команду профессионалов, для которых нет нерешаемых логистических задач.
              </p>
            </div>

            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <p className="font-medium mb-2">Наша миссия</p>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Развиваться, масштабироваться и задавать высокий стандарт сервиса в логистике, оставаясь надёжным партнёром для бизнеса любого уровня.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Объединённая служба логистики — <span className="text-primary">когда результат важнее слов</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
