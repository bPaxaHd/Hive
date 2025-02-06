
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard = ({ title, price, image, description }: ProductCardProps) => {
  const handleTelegramRedirect = () => {
    window.open("https://t.me/Hive_officia1_bot", "_blank");
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] glass-effect">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2 text-xl text-[#F97316]">{title}</CardTitle>
        <CardDescription className="text-foreground/80 group-hover:text-foreground/80">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        <span className="text-lg font-semibold text-[#F97316]">{price} ₽/кг</span>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90 transition-all duration-300 transform hover:scale-105 text-white">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Заказать
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-gradient-to-r from-[#F97316] to-[#FFD700] backdrop-blur-lg border-none text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">{title}</DialogTitle>
              <DialogDescription className="text-white/90">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                    <p className="text-lg font-semibold mb-2">Для оформления заказа:</p>
                    <p className="text-sm leading-relaxed">
                      Напишите нашему телеграм-боту, где с вами свяжется менеджер для обсуждения:
                      <br />• Количества меда
                      <br />• Выбранного сорта
                      <br />• Условий доставки
                    </p>
                  </div>
                  <Button 
                    onClick={handleTelegramRedirect} 
                    className="w-full bg-white/20 hover:bg-white/30 transition-all duration-300"
                  >
                    Написать в Telegram
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
