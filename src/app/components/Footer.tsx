"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full p-5 text-center text-sm text-muted-foreground border-t border-black/10 dark:border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-md transition-all duration-300 ease-in-out shadow-lg dark:shadow-none">
      <div className="mb-5">
        <p>© {year ?? "----"} Elias Jiminián. All rights reserved.</p>
      </div>
    </footer>
  );
}
