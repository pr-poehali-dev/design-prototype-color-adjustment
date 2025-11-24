import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Компания</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Услуги
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Связаться
            </Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={28} className="text-foreground" />
          </button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Инвестируйте в маркетинг с{" "}
                <span className="text-primary">Инфодэнси</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Повысим эффективность работы и увеличим доход вашего бизнеса. Современные решения для роста компании.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                  Начать работу
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Team collaboration"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Рост продаж</h3>
                <p className="text-muted-foreground">
                  Увеличим конверсию и привлечём новых клиентов с помощью проверенных стратегий
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Users" size={28} className="text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Команда экспертов</h3>
                <p className="text-muted-foreground">
                  Профессионалы с многолетним опытом работают над вашими проектами
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Target" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Точность решений</h3>
                <p className="text-muted-foreground">
                  Используем аналитику и данные для принятия эффективных решений
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-secondary hover:border-primary transition-all hover:shadow-lg group animate-slide-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="BarChart3" size={24} className="text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Маркетинг</h3>
                <p className="text-muted-foreground mb-4">
                  Эффективное управление рекламными кампаниями
                </p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary hover:border-primary transition-all hover:shadow-lg group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" size={24} className="text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Стратегия</h3>
                <p className="text-muted-foreground mb-4">
                  Разработка бизнес-стратегий и планов развития
                </p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary hover:border-primary transition-all hover:shadow-lg group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Lightbulb" size={24} className="text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Консалтинг</h3>
                <p className="text-muted-foreground mb-4">
                  Экспертная поддержка в принятии решений
                </p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary hover:border-primary transition-all hover:shadow-lg group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="LineChart" size={24} className="text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Аналитика</h3>
                <p className="text-muted-foreground mb-4">
                  Глубокий анализ данных для роста бизнеса
                </p>
                <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Свяжитесь с нами сегодня и узнайте, как мы можем помочь вашему бизнесу расти
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-foreground text-lg px-8 animate-slide-up">
            Связаться с нами
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="text-xl font-bold">Компания</span>
              </div>
              <p className="text-white/70">
                Инвестируйте в маркетинг с Инфодэнси
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-secondary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Стратегия</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Консалтинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@company.ru" className="hover:text-secondary transition-colors">
                    info@company.ru
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79991234567" className="hover:text-secondary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 Компания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
