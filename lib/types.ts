export interface Venue {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: number | null;
  hours: number;
  views: number;
  status: 'live' | 'available' | 'coming_soon';
}