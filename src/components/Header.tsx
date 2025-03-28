
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              ClassiFinder
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative w-64">
              <Input
                type="text"
                placeholder="Search classifieds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
              >
                <Search size={18} />
              </button>
            </form>
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/categories">
              <Button variant="ghost">Categories</Button>
            </Link>
            <Link to="/post">
              <Button variant="default">Post Ad</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="p-1">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <form onSubmit={handleSearchSubmit} className="relative mb-4">
              <Input
                type="text"
                placeholder="Search classifieds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
              >
                <Search size={18} />
              </button>
            </form>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Home</Button>
              </Link>
              <Link to="/categories" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">Categories</Button>
              </Link>
              <Link to="/post" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" className="w-full justify-start">Post Ad</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
