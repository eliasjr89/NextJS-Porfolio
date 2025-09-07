"use client";

import { useLanguage } from "@/context/LanguageContex";
import { dictionary } from "@/locale/dictionary";
import { Language } from "@/types/types";

export function useTranslation() {
  const { language } = useLanguage();
  const t = dictionary[language as Language];

  return { t, language };
}
