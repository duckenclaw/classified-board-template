
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">ClassiFinder</h3>
            <p className="text-gray-600">
              Your trusted marketplace for buying and selling locally.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/electronics" className="text-gray-600 hover:text-primary">Electronics</Link></li>
              <li><Link to="/category/vehicles" className="text-gray-600 hover:text-primary">Vehicles</Link></li>
              <li><Link to="/category/furniture" className="text-gray-600 hover:text-primary">Furniture</Link></li>
              <li><Link to="/category/real-estate" className="text-gray-600 hover:text-primary">Real Estate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/post" className="text-gray-600 hover:text-primary">Post Ad</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p>1234 Market Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-2">Email: info@classifinder.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ClassiFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
