
import { Leaf } from "lucide-react";
import ReservesCarousel from "@/components/ReservesCarousel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Герой-секция */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
          }}
        >
          <div className="hero-overlay"></div>
        </div>
        
        <div className="absolute top-5 left-5 md:top-10 md:left-10 flex items-center z-10">
          <div className="bg-white/90 p-2 rounded-lg flex items-center">
            <Leaf className="h-8 w-8 text-reserve-green mr-2" />
            <h1 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-reserve-blue">
              Заповедники России
            </h1>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-0 right-0 text-center z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
            Откройте для себя уникальные природные территории
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Богатство флоры и фауны, невероятные ландшафты и удивительная природа в заповедниках нашей страны
          </p>
        </div>
      </div>

      {/* Секция карусели заповедников */}
      <ReservesCarousel />

      {/* Подвал */}
      <footer className="bg-reserve-blue text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>© 2025 Заповедники России. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
