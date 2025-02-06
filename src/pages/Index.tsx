import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const [products] = useState([
    {
      title: "Мёд Цветочный",
      price: 800,
      image: "/assets/images/honey/flower.png",
      description: "Нежный цветочный мёд с приятным ароматом луговых цветов и трав.",
    },
    {
      title: "Мёд Акациевый",
      price: 1300,
      image: "/assets/images/honey/acacia.png",
      description: "Светлый мёд с тонким ароматом акации и нежным вкусом.",
    },
    {
      title: "Мёд Горный",
      price: 1200,
      image: "/assets/images/honey/mountain.png",
      description: "Горный мёд с насыщенным вкусом высокогорных трав.",
    },
    {
      title: "Мёд Гречишный",
      price: 900,
      image: "/assets/images/honey/buckwheat.png",
      description: "Тёмный мёд с характерным ароматом гречихи.",
    },
    {
      title: "Мёд Липовый",
      price: 1100,
      image: "/assets/images/honey/linden.png",
      description: "Янтарный мёд с нежным ароматом липового цвета.",
    },
    {
      title: "Мёд в сотах",
      price: 1500,
      image: "/assets/images/honey/honeycomb.png",
      description: "Натуральный мёд в восковых сотах в баночке.",
    },
  ]);

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F97316]/10 via-background to-[#FFD700]/10">
      <section className="relative flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-[#F97316] via-[#F97316] to-[#FFD700] px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589827577276-3f32aff56699?auto=format&fit=crop&w=1920&q=100')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10 mx-auto text-center">
          <h1 className="animate-fade-up text-4xl font-bold text-white sm:text-6xl md:text-7xl">
            Hive
          </h1>
          <p className="mx-auto mt-6 max-w-lg animate-fade-up text-lg text-white/90">
            Откройте для себя натуральный мёд высшего качества от лучших пасек России
          </p>
          <Button 
            onClick={scrollToProducts}
            className="mt-8 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
          >
            Смотреть ассортимент
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section id="products" className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#F97316]">Наша продукция</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#F97316] to-[#FFD700] text-white">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up">
              <h3 className="mb-4 text-lg font-semibold">О нас</h3>
              <p className="text-white/80">
                Мы поставляем натуральный мёд высшего качества от лучших пасек России.
              </p>
            </div>
            <div className="animate-fade-up delay-100">
              <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
              <p className="text-white/80">
                Telegram: @Hive_officia1_bot
                <br />
                Email: info@hivehoney.ru
              </p>
            </div>
            <div className="animate-fade-up delay-200">
              <h3 className="mb-4 text-lg font-semibold">Доставка</h3>
              <p className="text-white/80">
                Доставка осуществляется по всей России. Подробности уточняйте у менеджера.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-white/60">
            <p className="mb-2">&copy; 2025 Hive. Все права защищены.</p>
            <p className="text-sm">Данный сайт создан исключительно в целях демонстрации портфолио.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;