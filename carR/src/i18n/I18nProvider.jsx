import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const dict = translations[lang] || translations.en;

  const t = (key, vars) => {
    const parts = key.split(".");
    let cur = dict;
    for (const p of parts) cur = cur?.[p];
    if (typeof cur === "function") {
      const params = typeof vars === "object" ? vars : { count: vars };
      return cur(params);
    }
    if (typeof cur === "string") return cur;
    return key;
  };

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
