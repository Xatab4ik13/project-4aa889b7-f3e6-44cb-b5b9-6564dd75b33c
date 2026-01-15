import { useState } from "react";
import { Send, CheckCircle, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import warehouseHero from "@/assets/warehouse-hero.jpg";

const cargoTypes = [
  "Стандартный груз",
  "ADR (опасные грузы)",
  "Негабаритный груз",
  "Рефрижератор",
  "Сборный груз",
];

const Request = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    from: "",
    to: "",
    cargoType: "",
    weight: "",
    volume: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в течение 15 минут.",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      from: "",
      to: "",
      cargoType: "",
      weight: "",
      volume: "",
      description: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${warehouseHero})` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Оставить <span className="text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">заявку</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            Заполните форму, и мы рассчитаем стоимость доставки 
            вашего груза в течение 15 минут.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Информация о заказе</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Телефон *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Компания</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="ООО «Название»"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 mt-8">Маршрут</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Откуда *</label>
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="Город отправления"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Куда *</label>
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="Город назначения"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 mt-8">Информация о грузе</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Тип груза *</label>
                    <select
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                    >
                      <option value="">Выберите тип</option>
                      {cargoTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Вес (кг)</label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="5000"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Объем (м³)</label>
                    <input
                      type="text"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="20"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-foreground font-medium mb-2">Дополнительная информация</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none bg-background"
                    placeholder="Опишите особенности груза, требования к транспорту..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Отправка...</>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground mb-6">
                <h3 className="text-xl font-bold mb-4">Почему мы?</h3>
                <ul className="space-y-4">
                  {[
                    "Ответ в течение 15 минут",
                    "Индивидуальный расчёт",
                    "Работаем 24/7",
                    "Бесплатная консультация",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Связаться напрямую</h3>
                <div className="space-y-4">
                  <a href="tel:+79150157992" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">+7 (915) 015-79-92</p>
                      <p className="text-sm text-muted-foreground">Звоните 24/7</p>
                    </div>
                  </a>
                  <a href="mailto:OSL.LOGISTIKA@yandex.ru" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">OSL.LOGISTIKA@yandex.ru</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Request;
