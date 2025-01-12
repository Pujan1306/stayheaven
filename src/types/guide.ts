export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceRange: '$$' | '$$$' | '$$$$';
  address: string;
  neighborhood: string;
  signatureDishes: string[];
  averageMealCost: number;
  reservationRequired: boolean;
  openingHours: string;
  accessibility: string[];
}

export interface Attraction {
  id: string;
  name: string;
  type: 'museum' | 'gallery' | 'landmark';
  neighborhood: string;
  description: string;
  admissionFee: number | null;
  openingHours: string;
  bestTimeToVisit: string;
  accessibility: string[];
  currentExhibitions?: string[];
}

export interface TransportOption {
  type: string;
  description: string;
  cost: string;
  tips: string[];
}