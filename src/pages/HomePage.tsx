
import { useState, useEffect } from "react";
import { mockClassifieds } from "@/data/mockData";
import { Classified, Category } from "@/types";
import Layout from "@/components/Layout";
import ClassifiedCard from "@/components/ClassifiedCard";
import CategoryFilter from "@/components/CategoryFilter";
import { getAllCategories } from "@/data/mockData";

const HomePage = () => {
  const [classifieds, setClassifieds] = useState<Classified[]>(mockClassifieds);
  const [filteredClassifieds, setFilteredClassifieds] = useState<Classified[]>(mockClassifieds);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const categories = getAllCategories();

  // Filter classifieds based on search query and category
  useEffect(() => {
    let result = classifieds;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query)
      );
    }

    if (activeCategory) {
      result = result.filter((item) => item.category === activeCategory);
    }

    setFilteredClassifieds(result);
  }, [classifieds, searchQuery, activeCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: Category | null) => {
    setActiveCategory(category);
  };

  return (
    <Layout onSearch={handleSearch}>
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Find the perfect deal</h1>
          <p className="text-gray-600 mb-6">
            Browse thousands of listings across various categories.
          </p>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Featured Listings */}
        {!searchQuery && !activeCategory && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Featured Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {classifieds
                .filter(item => item.featured)
                .map(classified => (
                  <ClassifiedCard key={classified.id} classified={classified} />
                ))}
            </div>
          </div>
        )}

        {/* All Listings */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : activeCategory
              ? `${activeCategory} Listings`
              : "All Listings"}
          </h2>
          
          {filteredClassifieds.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No listings found.</p>
              <p className="text-gray-500">Try changing your search criteria or check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredClassifieds.map(classified => (
                <ClassifiedCard key={classified.id} classified={classified} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
