"use client";

import { Home, Upload, LayoutGrid, User } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/upload", icon: Upload, label: "Upload" },
    { href: "/venues", icon: LayoutGrid, label: "Venues" },
    { href: "/dashboard", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-md justify-around p-4">
        {links.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <a
              key={href}
              href={href}
              className="flex flex-col items-center"
            >
              <div className="relative mb-1">
                <Icon
                  className={`h-6 w-6 ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                />
                {isActive && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500" />
                )}
              </div>
              <span className={`text-xs ${
                isActive ? "font-medium text-foreground" : "text-muted-foreground"
              }`}>
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}