"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PortfolioCard = ({ id, title, desc, imgUrl, url, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="group relative flex-1 min-w-[280px] max-w-[400px] rounded-[32px] overflow-hidden border-[1px] border-[#d1d5db] dark:border-[#6a6a6a] bg-white/50 dark:bg-white/5"
  >
    {/* Image */}
    <div className="w-full h-[240px] bg-gradient-to-br from-accent-blue/20 to-purple-500/20 dark:from-dark-accent/30 dark:to-purple-800/30 relative overflow-hidden">
      {imgUrl && (
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      )}
      {/* Fallback gradient name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[40px] font-extrabold text-white/20 dark:text-white/10 uppercase tracking-widest">{title}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="font-bold text-[24px] text-primary-text dark:text-white mb-2">{title}</h3>
      <p className="font-normal text-[14px] text-secondary-text dark:text-secondary-white mb-4">{desc}</p>
      {url && url !== "#" && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2 px-5 bg-accent-blue dark:bg-dark-accent rounded-full font-bold text-[14px] text-white hover:bg-opacity-80 transition-all duration-300"
        >
          Voir le site →
        </a>
      )}
    </div>

    {/* Hover border glow */}
    <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-accent-blue/30 dark:group-hover:border-dark-accent/30 transition-all duration-300 pointer-events-none" />
  </motion.div>
);

export default PortfolioCard;
