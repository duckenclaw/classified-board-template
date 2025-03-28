
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container-custom flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <p className="text-gray-600 mb-10 text-center max-w-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
