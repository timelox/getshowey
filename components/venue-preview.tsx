"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Venue } from "@/lib/types";

interface VenuePreviewProps {
  venue: Venue | null;
  onClose: () => void;
}

export function VenuePreview({ venue, onClose }: VenuePreviewProps) {
  if (!venue) return null;

  return (
    <Dialog open={!!venue} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <DialogTitle className="sr-only">{venue.name} Preview</DialogTitle>
        <div className="relative aspect-video">
          <img
            src={venue.image}
            alt={venue.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4">
            <Badge
              variant={venue.status === 'live' ? "default" : "secondary"}
            >
              {venue.status === 'live' ? "Live" : "Available"}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <h2 className="mb-2 text-2xl font-semibold">{venue.name}</h2>
          <p className="mb-4 text-muted-foreground">{venue.description}</p>
          <div className="flex items-center justify-between">
            {venue.price && (
              <p className="text-lg font-semibold">${venue.price}/day</p>
            )}
            {venue.status === 'live' && (
              <Button
                className="bg-gradient-to-r from-rose-500 to-indigo-500 text-white transition-opacity hover:opacity-90"
                onClick={() => window.location.href = `/upload?venue=${venue.id}`}
              >
                Book Now
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}