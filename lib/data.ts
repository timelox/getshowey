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

export const venues: Venue[] = [
  {
    id: '1',
    name: 'BIC Festival Screen',
    description: 'Massive LED screen at Beyond Imagination Concert (BIC), Melbourne\'s premier indoor music festival. Perfect for brand activations and artist visuals. Located at the main stage with 50,000+ daily attendees.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
    location: 'Melbourne Showgrounds',
    price: 999,
    hours: 12,
    views: 50000,
    status: 'live'
  },
  {
    id: '2',
    name: 'Coming Soon - Federation Square',
    description: 'Digital billboard in Melbourne\'s iconic Federation Square.',
    image: '/placeholder.png',
    location: 'CBD',
    price: null,
    hours: 24,
    views: 30000,
    status: 'coming_soon'
  },
  {
    id: '3',
    name: 'Coming Soon - Southern Cross',
    description: 'Premium LED display at Southern Cross Station.',
    image: '/placeholder.png',
    location: 'CBD',
    price: null,
    hours: 24,
    views: 25000,
    status: 'coming_soon'
  },
  {
    id: '4',
    name: 'Coming Soon - Crown Casino',
    description: 'Luxury digital displays at Crown Entertainment Complex.',
    image: '/placeholder.png',
    location: 'Southbank',
    price: null,
    hours: 24,
    views: 40000,
    status: 'coming_soon'
  },
  {
    id: '5',
    name: 'Coming Soon - Melbourne Central',
    description: 'Prime retail location digital signage.',
    image: '/placeholder.png',
    location: 'CBD',
    price: null,
    hours: 24,
    views: 35000,
    status: 'coming_soon'
  },
  {
    id: '6',
    name: 'Coming Soon - Flinders Street',
    description: 'High-traffic railway station displays.',
    image: '/placeholder.png',
    location: 'CBD',
    price: null,
    hours: 24,
    views: 45000,
    status: 'coming_soon'
  }
];