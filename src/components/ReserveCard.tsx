
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface ReserveProps {
  name: string;
  image: string;
  onReadMore: () => void;
}

const ReserveCard = ({ name, image, onReadMore }: ReserveProps) => {
  return (
    <Card className="w-[300px] mx-3 carousel-card overflow-hidden">
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="p-4">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </CardHeader>
      <CardFooter className="flex justify-center items-center p-4 pt-0 gap-4">
        <Button 
          onClick={onReadMore}
          className="bg-reserve-blue hover:bg-reserve-darkblue transition-colors"
        >
          Читать
        </Button>
        <ArrowRight className="text-reserve-blue" />
      </CardFooter>
    </Card>
  );
};

export default ReserveCard;
