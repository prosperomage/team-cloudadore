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

