
import { Classified } from "@/types";

export const mockClassifieds: Classified[] = [
  {
    id: "1",
    title: "iPhone 13 Pro Max - Perfect Condition",
    description: "Selling my iPhone 13 Pro Max, 256GB, Sierra Blue. Purchased 6 months ago, in perfect condition, no scratches or dents. Comes with original box, charger and unused earphones. AppleCare+ valid for another 18 months.",
    price: 899.99,
    location: "San Francisco, CA",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-06-15T08:30:00Z",
    sellerName: "Alex Johnson",
    sellerContact: "alex.johnson@example.com",
    featured: true
  },
  {
    id: "2",
    title: "Spacious 2-Bedroom Apartment for Rent",
    description: "Beautiful, newly renovated 2-bedroom apartment available for rent. Located in a quiet neighborhood with easy access to public transportation, shops, and restaurants. Includes modern appliances, in-unit washer/dryer, central AC/heating, and a balcony with a great view. Parking spot included.",
    price: 2400,
    location: "Boston, MA",
    category: "Real Estate",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-06-10T14:20:00Z",
    sellerName: "Maria Garcia",
    sellerContact: "maria.g@example.com"
  },
  {
    id: "3",
    title: "2018 Tesla Model 3 Long Range",
    description: "2018 Tesla Model 3 Long Range with 45,000 miles. White exterior, black interior. Autopilot, FSD capability. Recently serviced, new tires. Clean title, no accidents. Battery health at 96%. Comes with wall charger and all original accessories.",
    price: 32500,
    location: "Austin, TX",
    category: "Vehicles",
    images: [
      "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-06-05T11:45:00Z",
    sellerName: "David Smith",
    sellerContact: "david.smith@example.com",
    featured: true
  },
  {
    id: "4",
    title: "Professional Web Development Services",
    description: "Experienced web developer offering professional services for businesses and individuals. Specializing in responsive websites, e-commerce solutions, and web applications. Proficient in React, Node.js, and various CMS platforms. Portfolio and references available upon request.",
    price: 50,
    location: "Remote",
    category: "Services",
    images: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-06-03T09:15:00Z",
    sellerName: "Emma Wilson",
    sellerContact: "emma.wilson@example.com"
  },
  {
    id: "5",
    title: "Vintage Mid-Century Modern Dining Set",
    description: "Beautiful, authentic mid-century modern dining set from the 1960s. Solid teak wood with immaculate craftsmanship. Set includes table and six chairs. Table dimensions: 72\" x 36\" x 29\". Chairs are sturdy and comfortable with original upholstery in excellent condition.",
    price: 1200,
    location: "Portland, OR",
    category: "Furniture",
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1532372320572-cda25653a694?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-06-01T16:50:00Z",
    sellerName: "Robert Brown",
    sellerContact: "r.brown@example.com"
  },
  {
    id: "6",
    title: "Marketing Assistant Position - Entry Level",
    description: "Growing digital marketing agency seeking an entry-level Marketing Assistant. No specific experience required, but must have excellent communication skills, be detail-oriented, and eager to learn. Responsibilities include assisting with social media management, content creation, and basic market research. Full-time position with competitive salary and benefits.",
    price: 45000,
    location: "Chicago, IL",
    category: "Jobs",
    images: [
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-05-30T13:20:00Z",
    sellerName: "Jennifer Taylor",
    sellerContact: "jobs@taylormarketing.com"
  },
  {
    id: "7",
    title: "Nike Air Jordan 1 Retro High - Size 10",
    description: "Nike Air Jordan 1 Retro High 'Chicago' colorway, size 10 US men's. 100% authentic, purchased directly from Nike. Worn only twice, in like-new condition. Original box and extra laces included.",
    price: 320,
    location: "Miami, FL",
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-05-28T10:05:00Z",
    sellerName: "Michael Rodriguez",
    sellerContact: "m.rodriguez@example.com"
  },
  {
    id: "8",
    title: "Handcrafted Ceramic Planters - Set of 3",
    description: "Beautiful handcrafted ceramic planters, set of 3 different sizes. Each piece uniquely designed and glazed in soothing pastels. Perfect for indoor plants or as decorative pieces. Small: 4\" diameter, Medium: 6\" diameter, Large: 8\" diameter. Drainage holes and matching saucers included.",
    price: 85,
    location: "Santa Fe, NM",
    category: "Other",
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-05-25T15:30:00Z",
    sellerName: "Sophia Chen",
    sellerContact: "sophia.ceramics@example.com"
  },
  {
    id: "9",
    title: "Gaming PC - High-End Custom Build",
    description: "Custom-built gaming PC with top-tier components. Specs: AMD Ryzen 9 5900X, NVIDIA RTX 3080, 32GB DDR4 RAM, 1TB NVMe SSD, 2TB HDD, liquid cooling, RGB lighting. Less than 6 months old, perfectly maintained in a smoke-free home. Selling because I'm moving overseas.",
    price: 2200,
    location: "Seattle, WA",
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-05-20T12:15:00Z",
    sellerName: "James Wilson",
    sellerContact: "james.w@example.com",
    featured: true
  },
  {
    id: "10",
    title: "Mountain Bike - Trek Fuel EX 8",
    description: "2021 Trek Fuel EX 8 mountain bike, size medium. Full suspension, 29\" wheels, 1x12 SRAM drivetrain. Excellent condition with only minor wear from normal use. Recently serviced with new brake pads and fresh tubeless sealant. Selling because I'm upgrading to a new model.",
    price: 2800,
    location: "Denver, CO",
    category: "Other",
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3",
    ],
    createdAt: "2023-05-18T09:40:00Z",
    sellerName: "Thomas Lee",
    sellerContact: "t.lee@example.com"
  }
];

export const getClassifiedById = (id: string): Classified | undefined => {
  return mockClassifieds.find(item => item.id === id);
};

export const getAllCategories = (): Category[] => {
  return ["Electronics", "Vehicles", "Furniture", "Real Estate", "Jobs", "Services", "Fashion", "Other"];
};
