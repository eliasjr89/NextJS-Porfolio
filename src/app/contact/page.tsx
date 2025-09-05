"use client";

import FormContact from "@/components/contact-form/FormContact";
import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";

export default function ContactPage() {
  return (
    <section className="px-6 py-16 max-w-md mx-auto">
      <TextGenerateEffect
        words="Contact Me"
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />
      <FormContact />
    </section>
  );
}
