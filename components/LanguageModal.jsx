"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LanguageModal = () => {
  const { changeLanguage, hasResolved, showModal } = useLanguage();

  // If we haven't checked localStorage yet or modal shouldn't be shown
  if (!hasResolved || !showModal) return null;

  const handleSelect = (lang) => {
    changeLanguage(lang);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-bg/70 dark:bg-primary-black/80 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="bg-white dark:bg-primary-black border-[1px] border-[#d1d5db] dark:border-[#333] p-10 rounded-[32px] shadow-2xl flex flex-col items-center gap-8 max-w-[500px] w-full"
        >
          <div className="text-center">
            <h2 className="font-bold text-[32px] text-primary-text dark:text-white mb-2">
              Bonjour ! / Hello!
            </h2>
            <p className="text-secondary-text dark:text-secondary-white text-[18px]">
              Choisissez votre langue / Choose your language
            </p>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-4">
            <button
              onClick={() => handleSelect("fr")}
              className="flex-1 py-4 px-6 rounded-[24px] border-[2px] border-accent-blue dark:border-[#25618B] bg-accent-blue/10 dark:bg-[#25618B]/10 hover:bg-accent-blue dark:hover:bg-[#25618B] text-primary-text dark:text-white hover:text-white group transition-all duration-300 font-semibold text-[18px]"
            >
              <span className="block text-2xl mb-1">🇫🇷</span>
              Français
            </button>
            <button
              onClick={() => handleSelect("en")}
              className="flex-1 py-4 px-6 rounded-[24px] border-[2px] border-accent-blue dark:border-[#25618B] bg-accent-blue/10 dark:bg-[#25618B]/10 hover:bg-accent-blue dark:hover:bg-[#25618B] text-primary-text dark:text-white hover:text-white group transition-all duration-300 font-semibold text-[18px]"
            >
              <span className="block text-2xl mb-1">🇬🇧</span>
              English
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageModal;
