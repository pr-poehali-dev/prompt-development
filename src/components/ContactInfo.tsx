
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-600" />
                Адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>ул. Красная, 123, Москва</p>
              <CardDescription className="mt-1">Метро: Красная площадь</CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-600" />
                Телефон
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>+7 (999) 123-45-67</p>
              <CardDescription className="mt-1">Звоните с 9:00 до 21:00</CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Часы работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ежедневно с 9:00 до 21:00</p>
              <CardDescription className="mt-1">Без выходных</CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-600" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>info@style-salon.ru</p>
              <CardDescription className="mt-1">Для вопросов и пожеланий</CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3801976738877!2d37.617696376954705!3d55.75369997986433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square!5e0!3m2!1sen!2sru!4v1683068408100!5m2!1sen!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
