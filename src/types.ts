export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  idealFor: string;
  process: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hardwood' | 'vinyl' | 'refinishing' | 'herringbone' | 'repairs';
  categoryLabel: string;
  image: string;
  location: string;
  woodType?: string;
  finish?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  projectType: string;
  comment: string;
  verified: boolean;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  squareFootage: string;
  location: string;
  propertyType: 'residential' | 'commercial';
  message: string;
}
