
import { Link } from "react-router-dom";
import { Classified } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

interface ClassifiedCardProps {
  classified: Classified;
}

const ClassifiedCard = ({ classified }: ClassifiedCardProps) => {
  const {
    id,
    title,
    price,
    location,
    category,
    images,
    createdAt,
    featured
  } = classified;

  // Format date
  const formattedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  // Format price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);

  return (
    <Link to={`/classified/${id}`}>
      <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-md ${featured ? 'ring-2 ring-primary/20' : ''}`}>
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          {images.length > 0 ? (
            <img
              src={images[0]}
              alt={title}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
              No Image
            </div>
          )}
          {featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-primary text-white">Featured</Badge>
            </div>
          )}
          <Badge className="absolute bottom-2 left-2">{category}</Badge>
        </div>
        <CardContent className="pt-4">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-lg font-bold text-primary mt-2">{formattedPrice}</p>
        </CardContent>
        <CardFooter className="text-sm text-gray-500 flex items-center justify-between pt-0">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            <span className="truncate max-w-[100px]">{location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ClassifiedCard;
