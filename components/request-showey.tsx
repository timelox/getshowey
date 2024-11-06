"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const venues = [
  "Revolver Upstairs",
  "Crown Casino",
  "Billboard Nightclub",
  "The Night Cat",
  "Sub Club",
  "New Guernica",
  "Section 8",
  "Colour Club",
  "Brown Alley",
  "The Bottom End"
];

export function RequestShowey() {
  const [open, setOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);

  const handleRequest = () => {
    if (selectedVenue) {
      toast.success(`Request sent for ${selectedVenue}`);
      setOpen(false);
      setSelectedVenue(null);
    }
  };

  return (
    <div className="space-y-6">
      <Button 
        className="w-full h-12 bg-gradient-to-r from-rose-500 to-indigo-500 hover:opacity-90"
        onClick={() => setOpen(true)}
      >
        Request Showey
      </Button>

      <Card className="p-4 space-y-4">
        <h3 className="font-semibold">Be the Star of the Night! Upload your photo or 10-second video and light up the big screen!</h3>
        
        <div className="space-y-2">
          <div>
            <h4 className="font-medium text-green-500">Allowed:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Your Own Original Photo or Video</li>
              <li>Social Media Handles</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-red-500">Not Allowed:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>No Nudity</li>
              <li>Nothing Illegal</li>
              <li>No Marketing / Advertising</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-4 space-y-2">
            <div className="aspect-video rounded-lg dark:bg-gray-800 bg-gray-200" />
            <p className="text-sm text-center text-muted-foreground">Coming Soon</p>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Showey at Venue</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-2">
              {venues.map((venue) => (
                <Button
                  key={venue}
                  variant={selectedVenue === venue ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedVenue(venue)}
                >
                  {venue}
                </Button>
              ))}
            </div>
          </ScrollArea>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleRequest}
              disabled={!selectedVenue}
              className="flex-1 bg-gradient-to-r from-rose-500 to-indigo-500"
            >
              Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}