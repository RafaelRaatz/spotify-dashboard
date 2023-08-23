"use client";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { TrackCard } from "../trackCard";
import { MixCard } from "../mixCard";

export const Main = async () => {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </div>
      <h2 className="font-semibold text-2xl mt-10">Made for Rafael Raatz</h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <MixCard />
        <MixCard />
        <MixCard />
        <MixCard />
        <MixCard />
      </div>
    </main>
  );
};
