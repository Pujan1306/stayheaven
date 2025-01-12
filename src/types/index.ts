export interface Room {
  id: string;
  name: string;
  type: 'Deluxe' | 'Suite' | 'Standard';
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Appetizers' | 'Main Courses' | 'Desserts' | 'Beverages';
  price: number;
  description: string;
  imageUrl?: string;
  isSpecial?: boolean;
}

export interface BookingRequest {
  name: string;
  email: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  roomType: Room['type'];
}