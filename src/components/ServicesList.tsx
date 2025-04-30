
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Женская стрижка",
    description: "Профессиональная стрижка с учетом типа волос и формы лица",
    price: "от 1500 ₽",
    duration: "60 мин",
    icon: "✂️",
  },
  {
    id: 2,
    title: "Мужская стрижка",
    description: "Стильная стрижка для мужчин с укладкой",
    price: "от 900 ₽",
    duration: "40 мин",
    icon: "💇‍♂️",
  },
  {
    id: 3,
    title: "Окрашивание",
    description: "Окрашивание волос премиальными красителями",
    price: "от 3500 ₽",
    duration: "120 мин",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Укладка",
    description: "Профессиональная укладка любой сложности",
    price: "от 1200 ₽",
    duration: "40 мин",
    icon: "💆‍♀️",
  },
  {
    id: 5,
    title: "Лечение волос",
    description: "Восстанавливающие процедуры для здоровья волос",
    price: "от 2000 ₽",
    duration: "60 мин",
    icon: "💫",
  },
  {
    id: 6,
    title: "Детская стрижка",
    description: "Бережная стрижка для детей с заботой и вниманием",
    price: "от 700 ₽",
    duration: "30 мин",
    icon: "👶",
  },
];

export const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <span className="text-3xl">{service.icon}</span>
            </div>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-purple-600">{service.price}</p>
              <p className="text-sm text-muted-foreground">{service.duration}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
