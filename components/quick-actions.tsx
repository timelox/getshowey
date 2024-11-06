"use client";

import { Upload, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8 mb-6">
      <Button
        variant="outline"
        className="h-24 flex flex-col items-center justify-center space-y-2"
        onClick={() => window.location.href = '/upload'}
      >
        <Upload className="h-6 w-6" />
        <span className="text-sm">Quick Upload</span>
      </Button>
      <Button
        variant="outline"
        className="h-24 flex flex-col items-center justify-center space-y-2"
        onClick={() => window.location.href = '/venues'}
      >
        <Play className="h-6 w-6" />
        <span className="text-sm">Live Feed</span>
      </Button>
    </div>
  );
}