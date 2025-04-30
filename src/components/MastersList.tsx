
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Master = {
  id: number;
  name: string;
  position: string;
  experience: string;
  specialization: string[];
  image: string;
};

const masters: Master[] = [
  {
    id: 1,
    name: "Анна Сергеева",
    position: "Ведущий стилист",
    experience: "10 лет опыта",
    specialization: ["Окрашивание", "Сложные стрижки"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 2,
    name: "Дмитрий Козлов",
    position: "Барбер",
    experience: "8 лет опыта",
    specialization: ["Мужские стрижки", "Бритье"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    name: "Елена Петрова",
    position: "Колорист",
    experience: "12 лет опыта",
    specialization: ["Сложное окрашивание", "Восстановление волос"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
];

export const MastersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {masters.map((master) => (
        <Card key={master.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-square relative">
            <img
              src={master.image}
              alt={master.name}
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={master.image} alt={master.name} />
                <AvatarFallback>{master.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{master.name}</CardTitle>
                <CardDescription>{master.position}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">{master.experience}</p>
            <div className="flex flex-wrap gap-2">
              {master.specialization.map((spec) => (
                <Badge key={spec} variant="secondary">{spec}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
