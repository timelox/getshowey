"use client";

import { VenueCard } from "@/components/venue-card";
import { type Venue } from "@/lib/types";

interface VenueListProps {
  venues: Venue[];
  onVenueSelect: (venue: Venue) => void;
}

export function VenueList({ venues, onVenueSelect }: VenueListProps) {
  return (
    <div className="space-y-4">
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venue={venue}
          onPreview={() => onVenueSelect(venue)}
        />
      ))}
    </div>
  );
}