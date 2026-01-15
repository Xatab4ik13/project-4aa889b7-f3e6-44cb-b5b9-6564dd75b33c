import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import officeHero from "@/assets/office-hero.jpg";

const offices = [
  {
    city: "Москва (Домодедово)",
    address: "Московская область, г. Домодедово, ул. Логистическая, д. 1",
    phone: "+7 (915) 015-79-92",
    email: "OSL.LOGISTIKA@yandex.ru",
    hours: "Пн-Пт: 9:00-18:00, Сб-Вс: выходной",
    isMain: true,
  },
  {
    city: "Казань",
    address: "Республика Татарстан, г. Казань, ул. Складская, д. 15",
    phone: "+7 (915) 015-79-92",
    email: "OSL.LOGISTIKA@yandex.ru",
    hours: "Пн-Пт: 9:00-18:00, Сб-Вс: выходной",
    isMain: false,
  },
];

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим вам в ближайшее время.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero with Image */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${officeHero})` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            <span className="text-accent">Контакты</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. 
            Мы работаем 24/7 и всегда готовы помочь.
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Наши <span className="text-primary">офисы</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office) => (
              <div
                key={office.city}
                className={`bg-card rounded-2xl p-8 shadow-lg border-2 ${
                  office.isMain ? "border-primary" : "border-border"
                }`}
              >
                {office.isMain && (
                  <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Головной офис
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-4">{office.city}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${office.phone.replace(/\D/g, "")}`} className="text-foreground hover:text-primary transition-colors font-medium">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${office.email}`} className="text-foreground hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Quick Contact */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Быстрая <span className="text-primary">связь</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Для срочных вопросов по грузоперевозкам звоните на горячую линию. 
                Мы работаем круглосуточно, без выходных.
              </p>

              <div className="bg-primary rounded-2xl p-8 text-primary-foreground mb-8">
                <h3 className="text-accent font-bold text-xl mb-4">Горячая линия 24/7</h3>
                <a href="tel:+79150157992" className="text-3xl font-bold hover:text-accent transition-colors">
                  +7 (915) 015-79-92
                </a>
                <p className="text-primary-foreground/80 mt-2">
                  Диспетчерская служба
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Общие вопросы</p>
                    <a href="mailto:OSL.LOGISTIKA@yandex.ru" className="text-foreground font-semibold hover:text-primary transition-colors">
                      OSL.LOGISTIKA@yandex.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Отдел кадров</p>
                    <a href="mailto:OSL.LOGISTIKA@yandex.ru" className="text-foreground font-semibold hover:text-primary transition-colors">
                      OSL.LOGISTIKA@yandex.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-background"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Сообщение *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none bg-background"
                    placeholder="Ваш вопрос или предложение..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Отправить сообщение
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
