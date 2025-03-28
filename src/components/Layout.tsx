
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
}

const Layout = ({ children, onSearch }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={onSearch} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
