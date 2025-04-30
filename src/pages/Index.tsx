
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Navigation } from "@/components/Navigation";
import { ServicesList } from "@/components/ServicesList";
import { MastersList } from "@/components/MastersList";
import { Gallery } from "@/components/Gallery";
import { ContactInfo } from "@/components/ContactInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
          alt="Салон красоты" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Красота начинается здесь</h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl">Профессиональный уход за волосами и стильные стрижки от лучших мастеров города</p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => navigate("/booking")}
          >
            Записаться сейчас
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <ServicesList />
        </div>
      </section>

      {/* Masters Section */}
      <section className="py-20 bg-purple-50" id="masters">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши мастера</h2>
          <MastersList />
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white" id="booking">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Запись на услуги</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <Card className="p-6 shadow-lg w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Выберите дату и время</h3>
              <p className="text-muted-foreground mb-6">Запишитесь на удобное для вас время и получите подтверждение моментально</p>
              <div className="flex justify-center mb-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Выбрать время</Button>
            </Card>
            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-4">Почему стоит записаться к нам?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Опытные мастера с международными сертификатами</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Используем только профессиональную косметику</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Удобное расположение в центре города</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Уютная атмосфера и приятные бонусы для клиентов</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-purple-50" id="gallery">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Галерея наших работ</h2>
          <Gallery />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contacts">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как нас найти</h2>
          <ContactInfo />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Парикмахерская "Стиль"</h3>
              <p className="text-gray-400 mt-2">© 2025 Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400">Instagram</a>
              <a href="#" className="hover:text-purple-400">VK</a>
              <a href="#" className="hover:text-purple-400">Telegram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
