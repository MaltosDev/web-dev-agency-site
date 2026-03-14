"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const navLinks = [
  { name: "À propos", href: "#about" },
  { name: "Services", href: "#explore" },
  { name: "Réalisations", href: "#portfolio" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Équipe", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

const ThemeToggle = ({ theme, setTheme, mounted }) => {
  if (!mounted) return <div className="w-[56px] h-[28px]" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-[56px] h-[28px] rounded-full transition-colors duration-300 flex items-center px-[3px] ${
        isDark ? "bg-[#25618B]" : "bg-[#d1d5db]"
      }`}
      aria-label="Toggle Dark Mode"
    >
      {/* Sun icon */}
      <span className={`absolute left-[6px] text-[12px] transition-opacity duration-200 ${isDark ? "opacity-40" : "opacity-100"}`}>
        ☀️
      </span>
      {/* Moon icon */}
      <span className={`absolute right-[6px] text-[12px] transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-40"}`}>
        🌙
      </span>
      {/* Slider */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-[22px] h-[22px] rounded-full bg-white shadow-md z-10 ${isDark ? "ml-auto" : "mr-auto"}`}
      />
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        <a href="#" className="font-extrabold text-[24px] leading-[30px] text-primary-text dark:text-white uppercase">
          MALTOS DEV
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
          <ThemeToggle theme={theme} setTheme={setTheme} mounted={mounted} />
          <a
            href="#contact"
            className="py-2 px-6 bg-accent-blue dark:bg-dark-accent rounded-[32px] font-bold text-[14px] text-white hover:bg-opacity-80 transition-all duration-300"
          >
            Contact
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
          <div className="flex items-center gap-3 py-2">
            <span className="text-[14px] text-secondary-text dark:text-secondary-white">Thème</span>
            <ThemeToggle theme={theme} setTheme={setTheme} mounted={mounted} />
          </div>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 px-6 bg-accent-blue dark:bg-dark-accent rounded-[32px] font-bold text-[16px] text-white text-center hover:bg-opacity-80 transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
