"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock, MapPin, DollarSign } from "lucide-react";
import type { Venue } from "@/lib/types";

interface VenueDetailProps {
  venue: Venue | undefined;
}

export function VenueDetail({ venue }: VenueDetailProps) {
  if (!venue) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="container max-w-md mx-auto px-4 py-6">
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">Venue not found</p>
            <Button
              className="mt-4 bg-gradient-to-r from-rose-500 to-indigo-500"
              onClick={() => window.location.href = '/venues'}
            >
              View All Venues
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4 py-6">
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
              className="absolute left-4 top-4"
              variant={venue.status === 'live' ? 'default' : 'secondary'}
            >
              {venue.status === 'live' ? 'Live Now' : 'Coming Soon'}
            </Badge>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-semibold mb-2">{venue.name}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{venue.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{venue.hours}h</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{venue.location}</span>
                </div>
                {venue.price && venue.status === 'live' && (
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span>${venue.price}/day</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-medium">Description</h2>
              <p className="text-muted-foreground">{venue.description}</p>
            </div>

            {venue.status === 'live' && (
              <Button 
                className="w-full bg-gradient-to-r from-rose-500 to-indigo-500"
                onClick={() => window.location.href = `/upload?venue=${venue.id}`}
              >
                Book Now
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}