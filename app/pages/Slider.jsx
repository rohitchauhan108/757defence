import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/slider/1.webp",
  "/slider/2.webp",
  "/slider/3.webp",
  "/slider/4.webp",
];

export default function SmoothImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  // Auto-advance the slider every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  // Ultra-smooth crossfade & parallax variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "20%" : "-20%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 220, damping: 25 },
        opacity: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
        scale: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-20%" : "20%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 220, damping: 25 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative w-full h-[450px] lg:h-[520px] overflow-hidden bg-[#111827] shadow-2xl"
    >
      {/* Slider Images Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 object-cover w-full h-full select-none will-change-transform"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md cursor-pointer transition-all duration-300 z-20 focus:outline-none"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md cursor-pointer transition-all duration-300 z-20 focus:outline-none"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </motion.div>
  );
}