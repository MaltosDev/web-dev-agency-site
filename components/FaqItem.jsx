"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motion";

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 1)}
      className="flex flex-col gap-2 p-6 rounded-[24px] border-[1px] border-[#d1d5db] dark:border-[#6a6a6a] w-full relative z-10 bg-primary-text/5 dark:bg-white/5 cursor-pointer select-none transition-colors duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[20px] text-primary-text dark:text-white">{question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[24px] text-primary-text dark:text-white font-light flex-shrink-0 ml-4"
        >
          +
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-normal text-[16px] text-secondary-text dark:text-secondary-white mt-2 overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
