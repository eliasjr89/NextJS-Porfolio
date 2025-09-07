"use client";

import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { SocialLinks } from "../components/buttons/SocialLinks";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start mt-20 py-6 px-6 text-center h-full text-[var(--foreground)] transition-colors duration-300 ease-in-out relative">
      <TextGenerateEffect
        words="Hi, I'm Elías Jiminián."
        className="text-4xl text-white md:text-6xl font-bold transition-colors duration-300 ease-in-out"
        duration={1.2}
        aria-live="polite"
      />

      <TextGenerateEffect
        words="Full Stack Developer focused on fast and accessible frontend experiences."
        className="text-lg md:text-2xl max-w-xl mt-6 transition-colors duration-300 ease-in-out"
        duration={0.2}
        aria-live="polite"
      />

      <div className="mt-12">
        <SocialLinks />
      </div>
    </main>
  );
}
