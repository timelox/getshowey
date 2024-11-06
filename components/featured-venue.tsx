"use client";

import { Eye, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Venue } from "@/lib/data";

interface FeaturedVenueProps {
  venue: Venue;
}

export function FeaturedVenue({ venue }: FeaturedVenueProps) {
  return (
    <div className="my-6">
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <img
            src={venue.image}
            alt={venue.name}
            className="h-full w-full object-cover"
          />
          <Badge
            className="absolute left-4 top-4"
            variant={venue.status === 'live' ? 'default' : 'secondary'}
          >
            {venue.status === 'live' ? 'Live Now' : 'Available'}
          </Badge>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <Eye className="h-4 w-4" />
            <Clock className="h-4 w-4" />
            <span className="text-sm">{venue.hours}h</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.location.href = `/venues/${venue.id}`}
            >
              More Info
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-rose-500 to-indigo-500"
              onClick={() => window.location.href = `/upload?venue=${venue.id}`}
            >
              Book ${venue.price}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}