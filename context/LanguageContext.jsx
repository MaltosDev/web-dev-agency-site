"use client";
import { createContext, useContext, useState, useEffect } from "react";
import translations from "../constants/translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("fr"); // Default fallback
  const [hasResolved, setHasResolved] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("maltos_lang");
    // If the user has visited before and saved a language
    if (savedLang && (savedLang === "fr" || savedLang === "en")) {
      setCurrentLang(savedLang);
    }
    setHasResolved(true);
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem("maltos_lang", lang);
  };

  // Helper function to get nested keys like "hero.title"
  const t = (key) => {
    const keys = key.split(".");
    let result = translations[currentLang];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key; // Fallback to key if missing
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t, hasResolved }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
