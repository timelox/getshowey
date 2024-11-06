"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutGrid, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        
        <Card className="relative overflow-hidden p-8">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 p-3">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome to Showey</h1>
                <p className="text-muted-foreground">Your digital signage marketplace</p>
              </div>
            </div>
            
            <p className="mb-8 max-w-2xl text-muted-foreground">
              Start exploring available venues or create your first listing. Our marketplace
              connects you with premium digital signage locations across Melbourne.
            </p>

            <Button
              onClick={() => window.location.href = '/venues'}
              className="bg-gradient-to-r from-rose-500 to-indigo-500 text-white"
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              Browse Venues
            </Button>
          </div>
          
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-16 translate-y-[-50%] bg-gradient-to-br from-rose-500/20 to-indigo-500/20 blur-3xl" />
        </Card>
      </div>
    </div>
  );
}