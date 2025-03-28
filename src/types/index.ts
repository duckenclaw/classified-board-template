
export interface Classified {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  category: Category;
  images: string[];
  createdAt: string;
  sellerName: string;
  sellerContact: string;
  featured?: boolean;
}

export type Category = 
  | "Electronics" 
  | "Vehicles" 
  | "Furniture" 
  | "Real Estate" 
  | "Jobs" 
  | "Services" 
  | "Fashion" 
  | "Other";
