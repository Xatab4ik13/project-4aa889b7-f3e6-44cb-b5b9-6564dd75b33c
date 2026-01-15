import { CheckCircle, Target, Users, Award } from "lucide-react";

const advantages = [
  "Перевозки любой сложности по России и СНГ",
  "Собственный и привлечённый специализированный транспорт",
  "Экспертиза в сложных и нестандартных перевозках",
  "Прозрачные условия и соблюдение сроков",
  "Постоянная связь и контроль на всём пути следования",
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main About */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            О компании
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Объединённая служба логистики</strong> — это многолетний опыт в сфере грузоперевозок по всей России и стран СНГ.
            </p>
            <p>
              В нашем распоряжении — собственный автопарк: тентованные и бортовые фуры от 20 тонн, тралы, низкорамные платформы и специализированная техника.
            </p>
            <p>
              Мы работаем по принципу индивидуального подхода: глубоко вникаем в задачу, просчитываем маршрут, сроки и риски, сопровождаем груз от момента заявки до выгрузки.
            </p>
          </div>
        </div>

        {/* Advantages */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="h-7 w-7 text-primary" />
              Наши преимущества
            </h3>
            <ul className="space-y-4">
              {advantages.map((advantage) => (
                <li key={advantage} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Users className="h-7 w-7 text-primary" />
              Отношения с клиентами
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы строим долгосрочные партнёрские отношения, основанные на доверии, честности и выполнении обязательств. Многие клиенты работают с нами на постоянной основе, доверяя нам самые ответственные и срочные грузы.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Target className="h-7 w-7 text-primary" />
              Достижения и цели
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              За годы работы мы успешно реализовали тысячи перевозок повышенной сложности и сформировали команду профессионалов, для которых нет нерешаемых логистических задач.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
            Наша цель — развиваться, масштабироваться и задавать высокий стандарт сервиса в логистике, оставаясь надёжным партнёром для бизнеса любого уровня.
          </p>
          <p className="text-xl md:text-2xl font-bold text-primary">
            Объединённая служба логистики — когда результат важнее слов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
