import { venues } from "@/lib/data";
import { VenueDetail } from "@/components/venue-detail";

// Server-side static params generation
export function generateStaticParams() {
  return venues.map((venue) => ({
    id: venue.id,
  }));
}

// Server Component
export default function VenuePage({ params }: { params: { id: string } }) {
  const venue = venues.find(v => v.id === params.id);
  return <VenueDetail venue={venue} />;
}