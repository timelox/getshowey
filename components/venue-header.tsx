import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function VenueHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-4xl p-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Venues</h1>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search venues..."
              className="pl-9"
            />
          </div>
        </div>
      </div>
    </header>
  );
}