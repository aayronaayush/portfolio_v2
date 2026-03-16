"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent sticky top-24">
              About
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-9 lg:col-start-5"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white leading-tight">
              Engineer who builds
              <br />
              <span className="text-brand-accent-light">products that ship.</span>
            </h2>

            <div className="mt-10 space-y-6 text-brand-white/60 text-lg leading-relaxed max-w-2xl">
              <p>
                Based in Abu Dhabi, I pursue a career
                in software engineering. Today I build full-stack products —
                cross-platform mobile apps in Flutter, web applications with
                React and Next.js, and backend services powered by Node.js and
                Python.
              </p>
              <p>
                I&apos;ve shipped SaaS platforms, ERP systems, fintech tools,
                and property management solutions across startups and
                enterprises. My work sits at the intersection of solid
                engineering and pragmatic product thinking — I care about code
                that scales and products that people actually use.
              </p>
              <p>
                Currently a mid-level engineer working toward senior, focused
                on cloud infrastructure (GCP, AWS) and building systems that
                hold up under real-world pressure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
