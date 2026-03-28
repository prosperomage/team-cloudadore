// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: string; // Keeping as string to match your ₦ formatting
  imageUrl?: string;
}

export interface TestimonialData {
  id: number;
  text: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface MissionVision {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "blue" | "orange";
}

export interface ResourceItem {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  status?: "Open" | "Sold Out" | "Limited"; // Specifically for Events
}

export interface ResourceGalleryProps {
  items: ResourceItem[];
  itemsPerPage?: number;
  title?: string;
  allTabLabel: string; 
  categoryMapping?: Record<string, string>;
  
}
