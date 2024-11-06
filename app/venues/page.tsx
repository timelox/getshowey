"use client";

import { useState } from "react";
import { venues } from "@/lib/data";
import { LocationHeader } from "@/components/location-header";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VenueList } from "@/components/venue-list";

export default function VenuesPage() {
  const [selectedVenue, setSelectedVenue] = useState<typeof venues[0] | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <LocationHeader />
        <VenueList venues={venues} onVenueSelect={setSelectedVenue} />
      </div>

      <Dialog open={!!selectedVenue} onOpenChange={() => setSelectedVenue(null)}>
        <DialogContent className="p-0 max-w-lg">
          <DialogTitle className="sr-only">Venue Preview</DialogTitle>
          {selectedVenue && (
            <div>
              <div className="relative aspect-video">
                <img
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className="absolute top-4 left-4"
                  variant={selectedVenue.status === 'live' ? 'default' : 'secondary'}
                >
                  {selectedVenue.status === 'live' ? 'Live Now' : 'Preview'}
                </Badge>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{selectedVenue.name}</h2>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <div>
                    <div className="font-medium">{selectedVenue.views.toLocaleString()}</div>
                    <div>Daily Views</div>
                  </div>
                  <div>
                    <div className="font-medium">{selectedVenue.hours}h</div>
                    <div>Duration</div>
                  </div>
                </div>
                {selectedVenue.status === 'live' && (
                  <Button
                    className="w-full bg-gradient-to-r from-rose-500 to-indigo-500"
                    onClick={() => window.location.href = `/upload?venue=${selectedVenue.id}`}
                  >
                    Book Now
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}