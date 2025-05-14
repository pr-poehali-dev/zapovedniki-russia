
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReserveCard from "./ReserveCard";

// Данные о заповедниках
const reserves = [
  {
    id: 1,
    name: "Байкальский заповедник",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Алтайский заповедник",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Кавказский заповедник",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Саяно-Шушенский заповедник",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Заповедник «Столбы»",
    image: "https://images.unsplash.com/photo-1518495973544-1e262a25e614?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Кроноцкий заповедник",
    image: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Лазовский заповедник",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Печоро-Илычский заповедник",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Волжско-Камский заповедник",
    image: "https://images.unsplash.com/photo-1516684732162-7989a92266aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Дарвинский заповедник",
    image: "https://images.unsplash.com/photo-1500534314209-b4436847e2c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ReservesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Функция для определения количества слайдов в зависимости от ширины экрана
  const updateSlidesToShow = () => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  // Обновляем количество отображаемых карточек при изменении размера окна
  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      prev < reserves.length - slidesToShow ? prev + 1 : reserves.length - slidesToShow
    );
  };

  const handleReadMore = (id: number) => {
    console.log(`Показать подробную информацию о ${reserves[id-1].name}`);
    // В будущем здесь можно добавить переход на страницу заповедника
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 my-16">
      <h2 className="text-3xl font-heading font-bold text-center mb-10 text-reserve-blue">
        Уникальные заповедники России
      </h2>
      <div className="overflow-hidden relative" ref={carouselRef}>
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
        >
          {reserves.map((reserve) => (
            <div 
              key={reserve.id} 
              className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2`}
            >
              <ReserveCard 
                name={reserve.name}
                image={reserve.image}
                onReadMore={() => handleReadMore(reserve.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className="bg-black/50 hover:bg-black/80 text-white rounded-full p-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNextSlide}
          disabled={currentSlide >= reserves.length - slidesToShow}
          className="bg-black/50 hover:bg-black/80 text-white rounded-full p-2"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ReservesCarousel;
