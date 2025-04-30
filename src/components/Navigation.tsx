
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navigation bar style change on scroll
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navLinks = [
    { title: "Услуги", href: "#services" },
    { title: "Мастера", href: "#masters" },
    { title: "Галерея", href: "#gallery" },
    { title: "Контакты", href: "#contacts" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Парикмахерская "Стиль"
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`font-medium ${
                  isScrolled ? "text-gray-700 hover:text-purple-600" : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                {link.title}
              </a>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-700">
              Записаться
            </Button>
          </div>

          {/* Mobile navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "text-gray-900" : "text-white"}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                  <Button className="bg-purple-600 hover:bg-purple-700 mt-4">
                    Записаться
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
