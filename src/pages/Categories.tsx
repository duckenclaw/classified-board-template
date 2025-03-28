
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getAllCategories } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag,
  Smartphone,
  Car,
  Home,
  Briefcase,
  Wrench,
  ShoppingCart,
  Package
} from "lucide-react";

const Categories = () => {
  const categories = getAllCategories();
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Electronics":
        return <Smartphone size={48} />;
      case "Vehicles":
        return <Car size={48} />;
      case "Furniture":
        return <Home size={48} />;
      case "Real Estate":
        return <Home size={48} />;
      case "Jobs":
        return <Briefcase size={48} />;
      case "Services":
        return <Wrench size={48} />;
      case "Fashion":
        return <ShoppingCart size={48} />;
      case "Other":
        return <Package size={48} />;
      default:
        return <ShoppingBag size={48} />;
    }
  };

  return (
    <Layout onSearch={setSearchQuery}>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-2">Browse Categories</h1>
        <p className="text-gray-600 mb-8">
          Find exactly what you're looking for by category.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.toLowerCase()}`} key={category}>
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:scale-105">
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <div className="text-primary mb-4">
                    {getCategoryIcon(category)}
                  </div>
                  <h2 className="text-xl font-semibold text-center">
                    {category}
                  </h2>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
