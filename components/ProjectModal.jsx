"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';

const ProjectModal = ({ isOpen, closeModal, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl bg-primary-bg dark:bg-primary-black rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-text dark:text-white"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Left side - Image */}
            <div className={`w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden flex items-center justify-center ${project.format === 'mobile' ? 'bg-primary-black/20' : ''}`}>
              {project.format === 'mobile' ? (
                <>
                  {/* Blurred Background for Mobile format */}
                  <Image
                    src={project.imgUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                  />
                  {/* The 9:16 Mobile Image */}
                  <div className="relative z-10 h-[85%] aspect-[9/16] shadow-2xl rounded-[16px] overflow-hidden border-[4px] border-primary-black/50 dark:border-white/10">
                    <Image
                      src={project.imgUrl}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
            </div>

            {/* Right side - Text */}
            <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center">
              <span className="text-accent-blue dark:text-dark-accent font-bold uppercase tracking-widest text-[12px] mb-2">
                Projet terminé
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text dark:text-white mb-4">
                {project.title}
              </h2>
              <p className="text-[16px] text-secondary-text dark:text-secondary-white leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack?.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-accent-blue/10 dark:bg-dark-accent/20 text-accent-blue dark:text-dark-accent text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-fit px-6 py-3 bg-accent-blue dark:bg-dark-accent text-white font-bold rounded-xl hover:bg-opacity-90 transition-all text-center text-sm"
              >
                Visiter le site
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
