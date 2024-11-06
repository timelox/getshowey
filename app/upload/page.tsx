"use client";

import { useState, useRef } from "react";
import { Upload, Camera, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { venues } from "@/lib/data";

export default function UploadPage() {
  const [step, setStep] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [uploadType, setUploadType] = useState<'upload' | 'capture'>('upload');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setStep(2);
    }
  };

  const startCapture = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCapture = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const handleCapture = () => {
    const canvas = document.createElement('canvas');
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          setFile(new File([blob], "capture.jpg", { type: "image/jpeg" }));
          setStep(2);
          stopCapture();
        }
      }, 'image/jpeg');
    }
  };

  const handleVenueSelect = (value: string) => {
    setSelectedVenue(value);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-md px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Media Upload/Capture */}
          <div className={cn(step === 1 ? "block" : "hidden")}>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={uploadType === 'upload' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => {
                    setUploadType('upload');
                    stopCapture();
                  }}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
                <Button
                  type="button"
                  variant={uploadType === 'capture' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => {
                    setUploadType('capture');
                    startCapture();
                  }}
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Capture
                </Button>
              </div>

              {uploadType === 'upload' ? (
                <Card className="relative overflow-hidden">
                  <label
                    htmlFor="file-upload"
                    className="flex cursor-pointer flex-col items-center gap-4 p-8"
                  >
                    <div className="rounded-full bg-secondary p-4">
                      <Upload className="h-6 w-6" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">Upload your content</p>
                      <p className="text-sm text-muted-foreground">
                        Drag and drop or click to select
                      </p>
                    </div>
                    <Input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </Card>
              ) : (
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex justify-center">
                    <Button
                      type="button"
                      onClick={handleCapture}
                      className="bg-gradient-to-r from-rose-500 to-indigo-500"
                    >
                      Capture
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>

          {/* Step 2: Venue Selection */}
          <div className={cn(step === 2 ? "block" : "hidden")}>
            <div className="space-y-4">
              <Label>Select Venue</Label>
              <RadioGroup
                value={selectedVenue}
                onValueChange={handleVenueSelect}
                className="space-y-4"
              >
                {venues.map((venue) => (
                  <label
                    key={venue.id}
                    className={cn(
                      "flex cursor-pointer items-center gap-4 rounded-lg border p-4",
                      "transition-all hover:border-primary",
                      selectedVenue === venue.id && "border-primary"
                    )}
                  >
                    <RadioGroupItem value={venue.id} id={venue.id} />
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{venue.name}</p>
                      {venue.price && (
                        <p className="text-sm text-muted-foreground">
                          ${venue.price}/day
                        </p>
                      )}
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Step 3: Payment */}
          <div className={cn(step === 3 ? "block" : "hidden")}>
            <Card className="space-y-6 p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-indigo-500"
              >
                Pay Now
              </Button>
            </Card>
          </div>

          {/* Step 4: Success */}
          <div className={cn(step === 4 ? "block" : "hidden")}>
            <Card className="flex flex-col items-center gap-4 p-8 text-center">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Upload Successful!</h3>
              <p className="text-muted-foreground">
                Your content has been uploaded and will be reviewed shortly
              </p>
              <Button
                onClick={() => window.location.href = "/"}
                className="bg-gradient-to-r from-rose-500 to-indigo-500"
              >
                Back to Home
              </Button>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}