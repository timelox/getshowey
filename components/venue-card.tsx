"use client";

import { Eye, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Venue } from "@/lib/types";

interface VenueCardProps {
  venue: Venue;
  onPreview: () => void;
}

export function VenueCard({ venue, onPreview }: VenueCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        {venue.status === 'live' ? (
          <img
            src={venue.image}
            alt={venue.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}
        <Badge
          className="absolute right-2 top-2"
          variant={venue.status === 'live' ? 'default' : 'secondary'}
        >
          {venue.status === 'live' ? "Live" : "Coming Soon"}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{venue.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              {venue.location}
            </div>
          </div>
          {venue.price && venue.status === 'live' && (
            <div className="text-right">
              <div className="text-lg font-bold">${venue.price}</div>
              <div className="text-sm text-muted-foreground">per day</div>
            </div>
          )}
        </div>

        <p className="mb-4 text-sm text-muted-foreground">{venue.description}</p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Eye className="mr-1 h-3 w-3" />
            {venue.views.toLocaleString()}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {venue.hours}h
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
        {venue.status === 'live' && (
          <>
            <Button variant="outline" onClick={onPreview}>
              Live View
            </Button>
            <Button variant="outline" onClick={() => window.location.href = `/venues/${venue.id}`}>
              More Info
            </Button>
            <Button
              className="col-span-2 bg-gradient-to-r from-rose-500 to-indigo-500 text-white"
              onClick={() => window.location.href = `/upload?venue=${venue.id}`}
            >
              Book Now
            </Button>
          </>
        )}
        {venue.status !== 'live' && (
          <Button
            variant="outline"
            className="col-span-2"
            onClick={() => window.location.href = `/venues/${venue.id}`}
          >
            More Info
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}