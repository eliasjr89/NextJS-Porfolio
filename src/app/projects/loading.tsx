"use client";

import { Skeleton } from "@/components/ui/Skeleton";

export default function ProjectsLoading() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto overflow-hidden">
      {/* Title skeleton */}
      <div className="flex justify-center mb-8">
        <Skeleton className="h-10 w-64" />
      </div>

      {/* Carousel skeleton */}
      <div className="relative w-[70vmin] h-[70vmin] mx-auto">
        <div className="absolute flex mx-[-4vmin]">
          <div className="flex flex-1 flex-col items-center justify-center relative w-[70vmin] h-[70vmin] mx-[4vmin]">
            <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30">
              <Skeleton className="w-full h-full" variant="card" />
            </div>
          </div>
        </div>

        {/* Controls skeleton */}
        <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] gap-4">
          <Skeleton className="w-10 h-10 rounded-full" variant="circular" />
          <Skeleton className="w-10 h-10 rounded-full" variant="circular" />
        </div>
      </div>
    </section>
  );
}
