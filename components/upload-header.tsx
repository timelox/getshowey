import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const steps = [
  { number: 1, title: "Upload Content" },
  { number: 2, title: "Select Venue" },
  { number: 3, title: "Payment" },
  { number: 4, title: "Confirmation" },
];

export default function UploadHeader({ step }: { step: number }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-md items-center justify-between p-4">
        <Link
          href="/"
          className="rounded-full p-2 hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div
              key={s.number}
              className="flex items-center"
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs
                  ${step >= s.number
                    ? "bg-gradient-to-r from-rose-500 to-indigo-500 text-white"
                    : "bg-secondary text-muted-foreground"
                  }`}
              >
                {s.number}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-1 h-0.5 w-4
                    ${step > s.number
                      ? "bg-gradient-to-r from-rose-500 to-indigo-500"
                      : "bg-border"
                    }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}