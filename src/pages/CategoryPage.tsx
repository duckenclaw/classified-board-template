
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockClassifieds } from "@/data/mockData";
import { Classified, Category } from "@/types";
import Layout from "@/components/Layout";
import ClassifiedCard from "@/components/ClassifiedCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [classifieds, setClassifieds] = useState<Classified[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (categoryName) {
      // Convert the category name from the URL parameter to match our Category type
      const formattedCategoryName = categoryName
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") as Category;

      let filteredClassifieds = mockClassifieds.filter(
        classified => classified.category.toLowerCase() === categoryName.toLowerCase()
      );

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredClassifieds = filteredClassifieds.filter(
          classified =>
            classified.title.toLowerCase().includes(query) ||
            classified.description.toLowerCase().includes(query) ||
            classified.location.toLowerCase().includes(query)
        );
      }

      setClassifieds(filteredClassifieds);
    }
  }, [categoryName, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Format category name for display
  const displayCategoryName = categoryName
    ? categoryName
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return (
    <Layout onSearch={handleSearch}>
      <div className="container-custom py-8">
        <div className="mb-6">
          <Link to="/categories" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to categories
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4">{displayCategoryName}</h1>
        
        {classifieds.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No listings found in this category.</p>
            <p className="text-gray-500 mb-8">Try searching for something else or check back later.</p>
            <Link to="/">
              <Button>View All Listings</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {classifieds.map(classified => (
              <ClassifiedCard key={classified.id} classified={classified} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
