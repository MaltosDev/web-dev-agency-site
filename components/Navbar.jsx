"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

const LanguageSwitcher = ({ currentLang, changeLanguage, isDark }) => {
  return (
    <div className="flex items-center gap-1 bg-[#CBD5E1]/20 dark:bg-[#1E293B]/40 p-[2px] rounded-full border border-gray-300 dark:border-gray-700">
      <button
        onClick={() => changeLanguage("fr")}
        className={`px-2 py-1 rounded-full text-[12px] transition-all ${
          currentLang === "fr" 
            ? "bg-white dark:bg-[#25618B] text-primary-text dark:text-white shadow-sm" 
            : "text-secondary-text dark:text-secondary-white hover:bg-gray-200 dark:hover:bg-gray-800"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded-full text-[12px] transition-all ${
          currentLang === "en" 
            ? "bg-white dark:bg-[#25618B] text-primary-text dark:text-white shadow-sm" 
            : "text-secondary-text dark:text-secondary-white hover:bg-gray-200 dark:hover:bg-gray-800"
        }`}
      >
        EN
      </button>
    </div>
  );
};

const ThemeToggle = ({ theme, setTheme, mounted }) => {
  if (!mounted) return <div className="w-[56px] h-[28px]" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-[56px] h-[28px] rounded-full transition-colors duration-300 flex items-center px-[3px] shadow-inner ${
        isDark ? "bg-[#1E293B]" : "bg-[#CBD5E1]"
      }`}
      aria-label="Toggle Dark Mode"
    >
      {/* Sun icon */}
      <span className="absolute left-[8px] z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#94A3B8" : "#EAB308"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </span>
      {/* Moon icon */}
      <span className="absolute right-[8px] z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isDark ? "white" : "#64748B"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </span>
      {/* Slider */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-[22px] h-[22px] rounded-full bg-white shadow-md z-10 flex items-center justify-center ${isDark ? "ml-auto" : "mr-auto"}`}
      >
        {isDark ? (
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#1E293B" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        )}
      </motion.div>
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t, changeLanguage, currentLang } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.services"), href: "#explore" },
    { name: t("navbar.pricing"), href: "#pricing" },
    { name: t("navbar.team"), href: "#team" },
    { name: t("navbar.faq"), href: "#faq" },
  ];

  return (
    <nav className={`${styles.xPaddings} py-8 fixed w-full top-0 z-50 bg-primary-bg/80 dark:bg-primary-black/80 backdrop-blur-md transition-all`}>
      <div
        className="absolute w-[50%] inset-0 gradient-01 opacity-50"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.5 }}
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
      >
        <a href="#" className="flex items-center gap-2">
          <Image 
            src={mounted && theme === "dark" ? "/maltos_logo_clair.png" : "/maltos_logo_transparent.png"} 
            alt="Maltos Dev Logo" 
            width={60} 
            height={60} 
            className="object-contain"
          />
          <span className="font-extrabold text-[28px] leading-[34px] text-primary-text dark:text-white uppercase hidden sm:block">
            Maltos Dev
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-[16px] text-secondary-text dark:text-secondary-white hover:text-primary-text dark:hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} setTheme={setTheme} mounted={mounted} />
            <LanguageSwitcher 
              currentLang={currentLang} 
              changeLanguage={changeLanguage} 
              isDark={theme === "dark"} 
            />
          </div>
          <a
            href="#contact"
            className="py-2 px-6 bg-accent-blue dark:bg-dark-accent rounded-[32px] font-bold text-[14px] text-white hover:bg-opacity-80 transition-all duration-300"
          >
            {t("navbar.contact")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-[24px] h-[2px] bg-primary-text dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-[24px] h-[2px] bg-primary-text dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-[24px] h-[2px] bg-primary-text dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </motion.div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-primary-bg dark:bg-primary-black border-t border-[#d1d5db] dark:border-[#6a6a6a] p-6 flex flex-col gap-4 z-50"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[18px] text-secondary-text dark:text-secondary-white hover:text-primary-text dark:hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between py-2 border-t border-gray-200 dark:border-gray-800 mt-2 pt-4">
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-secondary-text dark:text-secondary-white">{t("navbar.theme")}</span>
              <ThemeToggle theme={theme} setTheme={setTheme} mounted={mounted} />
            </div>
            <LanguageSwitcher 
              currentLang={currentLang} 
              changeLanguage={changeLanguage} 
              isDark={theme === "dark"} 
            />
          </div>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 px-6 bg-accent-blue dark:bg-dark-accent rounded-[32px] font-bold text-[16px] text-white text-center hover:bg-opacity-80 transition-all duration-300"
          >
            {t("navbar.contact")}
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
