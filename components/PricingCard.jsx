"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PricingCard = ({ id, title, price, features, buttonText, index }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    );
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("");
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: transform ? "transform 0.1s ease-out" : "transform 0.5s ease-out" }}
      className="pricing-card-3d flex-1 flex flex-col justify-between p-8 rounded-[32px] border-[1px] border-[#d1d5db] dark:border-[#6a6a6a] bg-white/50 dark:bg-white/5 relative z-10 overflow-hidden"
    >
      {/* Glow follow cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(37,99,235,0.15), transparent 60%)`,
          opacity: transform ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      <div className="relative z-10">
        <h3 className="font-bold text-[32px] text-primary-text dark:text-white mb-4">{title}</h3>
        <div className="flex items-baseline gap-2 mb-8">
          <span className="font-extrabold text-[48px] text-primary-text dark:text-white">{price}</span>
          {price === "800$" && (
            <span className="font-normal text-[16px] text-secondary-text dark:text-secondary-white">/site</span>
          )}
          {price === "1500$" && (
            <span className="font-normal text-[16px] text-secondary-text dark:text-secondary-white">/projet</span>
          )}
          {price === "1200$" && (
            <span className="font-normal text-[16px] text-secondary-text dark:text-secondary-white">/an</span>
          )}
        </div>

        <ul className="flex flex-col gap-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-[12px] h-[12px] rounded-full bg-accent-blue dark:bg-dark-accent flex-shrink-0" />
              <span className="font-normal text-[16px] text-secondary-text dark:text-secondary-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="relative z-10 w-full py-4 px-6 bg-accent-blue dark:bg-dark-accent rounded-[32px] font-bold text-[16px] text-white hover:bg-opacity-80 transition-all duration-300"
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

export default PricingCard;
