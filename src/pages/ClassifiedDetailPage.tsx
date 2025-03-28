
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getClassifiedById } from "@/data/mockData";
import { Classified } from "@/types";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ClassifiedDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [classified, setClassified] = useState<Classified | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const fetchedClassified = getClassifiedById(id);
      setClassified(fetchedClassified || null);
      setLoading(false);
    }
  }, [id]);

  const handleContactSeller = () => {
    if (classified) {
      navigator.clipboard.writeText(classified.sellerContact);
      toast({
        title: "Contact information copied!",
        description: `${classified.sellerContact} has been copied to your clipboard.`,
        duration: 3000,
      });
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <p>Loading classified details...</p>
        </div>
      </Layout>
    );
  }

  if (!classified) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Classified Not Found</h1>
          <p className="mb-6">The classified you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(classified.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(classified.price);

  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to listings
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-100 mb-4">
              {classified.images && classified.images.length > 0 ? (
                <img
                  src={classified.images[activeImageIndex]}
                  alt={classified.title}
                  className="object-contain w-full h-96"
                />
              ) : (
                <div className="flex items-center justify-center h-96 bg-gray-200 text-gray-500">
                  No Image Available
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {classified.images && classified.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {classified.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 transition ${
                      activeImageIndex === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge>{classified.category}</Badge>
                  {classified.featured && (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Featured
                    </Badge>
                  )}
                </div>

                <h1 className="text-2xl font-bold mb-2">{classified.title}</h1>
                <p className="text-3xl font-bold text-primary mb-4">{formattedPrice}</p>

                <div className="space-y-3 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{classified.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>Posted on {formattedDate}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Seller Information</h3>
                  <p className="text-gray-700 mb-1">{classified.sellerName}</p>
                  <Button
                    onClick={handleContactSeller}
                    className="w-full mt-2"
                  >
                    <Mail size={16} className="mr-2" />
                    Contact Seller
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="whitespace-pre-line">{classified.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClassifiedDetailPage;
