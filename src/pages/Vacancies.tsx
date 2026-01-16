import { useState } from "react";
import { MapPin, Clock, Banknote, ChevronDown, ChevronUp, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import driverHero from "@/assets/driver-hero.jpg";
import OptimizedBackground from "@/components/OptimizedBackground";

const vacancies = [
  {
    id: 1,
    title: "Водитель категории С/E",
    location: "Москва, Домодедово",
    schedule: "Вахта 15/15",
    salary: "от 150 000 ₽",
    description: "Ищем опытных водителей для международных и междугородних перевозок.",
    requirements: [
      "Категория C/E",
      "Опыт работы от 3 лет",
      "Знание ПДД",
      "Ответственность и пунктуальность",
    ],
    benefits: [
      "Официальное трудоустройство",
      "Стабильная загрузка",
      "Современный автопарк",
      "Медицинское страхование",
    ],
  },
  {
    id: 2,
    title: "Водитель ADR",
    location: "Москва",
    schedule: "Посменный график",
    salary: "от 180 000 ₽",
    description: "Требуется водитель с допуском к перевозке опасных грузов.",
    requirements: [
      "Категория C/E",
      "Свидетельство ДОПОГ",
      "Опыт ADR перевозок от 2 лет",
      "Знание правил перевозки ОГ",
    ],
    benefits: [
      "Повышенная оплата",
      "Полный соцпакет",
      "Бонусы за безаварийность",
      "Современный транспорт",
    ],
  },
  {
    id: 3,
    title: "Логист-диспетчер",
    location: "Москва (возможна удаленка)",
    schedule: "5/2",
    salary: "от 80 000 ₽",
    description: "Координация грузоперевозок, работа с клиентами и перевозчиками.",
    requirements: [
      "Опыт в логистике от 1 года",
      "Знание географии России",
      "Уверенный пользователь ПК",
      "Коммуникабельность",
    ],
    benefits: [
      "Возможность удаленной работы",
      "Карьерный рост",
      "Обучение за счет компании",
      "Дружный коллектив",
    ],
  },
  {
    id: 4,
    title: "Менеджер по работе с клиентами",
    location: "Москва",
    schedule: "5/2",
    salary: "от 70 000 ₽ + %",
    description: "Развитие клиентской базы, ведение переговоров, заключение договоров.",
    requirements: [
      "Опыт продаж от 1 года",
      "Грамотная речь",
      "Нацеленность на результат",
      "Стрессоустойчивость",
    ],
    benefits: [
      "Высокий процент от сделок",
      "Обучение продуктам",
      "Корпоративная связь",
      "Премии по KPI",
    ],
  },
];

const Vacancies = () => {
  const { toast } = useToast();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [applyingId, setApplyingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleApply = async (vacancyId: number) => {
    toast({
      title: "Отклик отправлен!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setApplyingId(null);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero with Image */}
      <OptimizedBackground
        src={driverHero}
        className="py-20 overflow-hidden"
        priority={true}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Вакансии</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            Присоединяйтесь к нашей команде профессионалов. 
            Мы ценим каждого сотрудника и создаем условия для развития.
          </p>
        </div>
      </OptimizedBackground>

      {/* Vacancies List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {vacancies.map((vacancy) => (
              <div key={vacancy.id} className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
                {/* Header */}
                <div
                  className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedId(expandedId === vacancy.id ? null : vacancy.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{vacancy.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          {vacancy.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          {vacancy.schedule}
                        </span>
                        <span className="flex items-center gap-1">
                          <Banknote className="h-4 w-4 text-primary" />
                          {vacancy.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-semibold">
                        {expandedId === vacancy.id ? "Свернуть" : "Подробнее"}
                      </span>
                      {expandedId === vacancy.id ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedId === vacancy.id && (
                  <div className="px-6 pb-6 border-t border-border">
                    <div className="pt-6">
                      <p className="text-foreground mb-6">{vacancy.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-foreground mb-3">Требования:</h4>
                          <ul className="space-y-2">
                            {vacancy.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-3">Мы предлагаем:</h4>
                          <ul className="space-y-2">
                            {vacancy.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-accent">✓</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {applyingId === vacancy.id ? (
                        <div className="bg-muted rounded-xl p-6">
                          <h4 className="font-bold text-foreground mb-4">Откликнуться на вакансию</h4>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <input
                              type="text"
                              placeholder="Ваше имя"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-background"
                            />
                            <input
                              type="tel"
                              placeholder="Телефон"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-background"
                            />
                          </div>
                          <textarea
                            placeholder="Сопроводительное письмо (необязательно)"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none mb-4 bg-background"
                          />
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleApply(vacancy.id)}
                              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
                            >
                              Отправить <Send className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setApplyingId(null)}
                              className="px-6 py-2 rounded-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Отмена
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setApplyingId(vacancy.id)}
                          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                          Откликнуться
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Не нашли подходящую вакансию?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Отправьте нам своё резюме, и мы свяжемся с вами, 
            когда появится подходящая позиция.
          </p>
          <a
            href="mailto:OSL.LOGISTIKA@yandex.ru"
            className="btn-hero inline-flex items-center gap-2"
          >
            Отправить резюме
            <Send className="h-5 w-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Vacancies;
