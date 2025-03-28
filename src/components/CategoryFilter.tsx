
import { Category } from "@/types";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: Category | null;
  onCategoryChange: (category: Category | null) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          onClick={() => onCategoryChange(null)}
          className="whitespace-nowrap"
        >
          All Categories
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
