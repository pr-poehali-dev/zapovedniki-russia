
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Eye } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface ReserveDetailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reserve: {
    id: number;
    name: string;
    image: string;
    description: string;
    location: string;
    established: string;
    area: string;
    features: string[];
    gallery: string[];
  } | null;
}

const ReserveDetail = ({ open, onOpenChange, reserve }: ReserveDetailProps) => {
  if (!reserve) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="relative w-full">
          <AspectRatio ratio={21/9}>
            <img 
              src={reserve.image} 
              alt={reserve.name} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20"></div>
          </AspectRatio>
          <Button 
            className="absolute top-4 left-4 rounded-full bg-black/50 hover:bg-black/70"
            size="icon"
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </Button>
        </div>
        
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold font-heading mb-2">
              {reserve.name}
            </DialogTitle>
            
            <div className="flex flex-wrap gap-4 my-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{reserve.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Основан: {reserve.established}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>Площадь: {reserve.area}</span>
              </div>
            </div>
            
            <DialogDescription className="text-base">
              {reserve.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Особенности заповедника:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              {reserve.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Галерея:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {reserve.gallery.map((img, index) => (
                <div key={index} className="relative rounded-md overflow-hidden">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={img} 
                      alt={`${reserve.name} фото ${index + 1}`} 
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReserveDetail;
