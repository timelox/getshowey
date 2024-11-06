"use client";

import { MapPin } from "lucide-react";

export function LocationHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
        Showey
      </h1>
      <div className="flex items-center text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 mr-1" />
        Melbourne, VIC
      </div>
    </div>
  );
}