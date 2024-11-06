"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Clock } from "lucide-react";
import { type Venue } from "@/lib/data";

interface StoryCirclesProps {
  venues: Venue[];
}

export function StoryCircles({ venues }: StoryCirclesProps) {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const firstVenue = venues[0];
  const comingSoonVenues = Array(5).fill(null);

  return (
    <>
      <ScrollArea className="w-full scrollbar-hide">
        <div className="flex gap-4 py-4 px-1">
          <button
            className="flex flex-col items-center space-y-1"
            onClick={() => setSelectedVenue(firstVenue)}
          >
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 p-[2px]">
                <div className="h-full w-full rounded-full p-[2px] bg-background">
                  <img
                    src={firstVenue.image}
                    alt={firstVenue.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs font-medium">BIC</span>
          </button>

          {comingSoonVenues.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 w-16"
            >
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full bg-muted p-[2px]">
                  <div className="h-full w-full rounded-full dark:bg-gray-700 bg-gray-200" />
                </div>
              </div>
              <span className="text-xs text-muted-foreground text-center">Coming soon</span>
            </div>
          ))}
        </div>
      </ScrollArea>

      <Dialog open={!!selectedVenue} onOpenChange={() => setSelectedVenue(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="sr-only">Venue Preview</DialogTitle>
          {selectedVenue && (
            <div className="space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  className="object-cover w-full h-full"
                />
                <Badge
                  className="absolute top-2 right-2"
                  variant={selectedVenue.status === 'live' ? 'default' : 'secondary'}
                >
                  {selectedVenue.status === 'live' ? 'Live Now' : 'Available'}
                </Badge>
                <div className="absolute bottom-2 left-2 flex items-center gap-2 text-white">
                  <Eye className="h-4 w-4" />
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{selectedVenue.hours}h</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.location.href = `/venues/${selectedVenue.id}`}
                >
                  More Info
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-rose-500 to-indigo-500"
                  onClick={() => window.location.href = `/upload?venue=${selectedVenue.id}`}
                >
                  Book ${selectedVenue.price}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}