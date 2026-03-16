"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-6"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-brand-white"
          >
            Aayush
            <br />
            <span className="text-brand-accent">Deo.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-lg sm:text-xl text-brand-white/60 leading-relaxed"
          >
            I build products that ship — mobile apps, web platforms, and cloud
            infrastructure. Based in Abu Dhabi.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex items-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-brand-accent px-8 py-3.5 text-sm font-medium text-brand-white transition-all hover:bg-brand-accent-light hover:text-brand-bg"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="text-sm text-brand-white/50 transition-colors hover:text-brand-accent"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-brand-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
