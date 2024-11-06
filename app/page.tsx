"use client";

import { venues } from "@/lib/data";
import { StoryCircles } from "@/components/story-circles";
import { QuickActions } from "@/components/quick-actions";
import { LocationHeader } from "@/components/location-header";
import { RequestShowey } from "@/components/request-showey";
import { FeaturedVenue } from "@/components/featured-venue";

export default function Home() {
  // Select a live venue as featured
  const featuredVenue = venues.find(venue => venue.status === 'live');

  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4 py-6">
        <LocationHeader />
        <StoryCircles venues={venues} />
        <QuickActions />
        {featuredVenue && <FeaturedVenue venue={featuredVenue} />}
        <RequestShowey />
      </div>
    </main>
  );
}