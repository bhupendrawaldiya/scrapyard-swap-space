
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  seller: string;
  condition: string;
}

export const ProductCard = ({ title, price, image, seller, condition }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute right-2 top-2 rounded-full bg-white/90 p-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-primary/80">{condition}</span>
          <span className="text-sm font-semibold">${price}</span>
        </div>
        <h3 className="mb-1 text-sm font-medium line-clamp-2">{title}</h3>
        <p className="text-xs text-muted-foreground">Listed by {seller}</p>
      </div>
    </Card>
  );
};
