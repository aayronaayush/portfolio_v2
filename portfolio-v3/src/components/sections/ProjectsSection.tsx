"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    title: "PropertyOS",
    subtitle: "Holiday Home Management Software",
    description:
      "A full-stack, multi-tenant platform built to automate and centralise holiday home operations for property managers. Covers the end-to-end lifecycle including booking sync and smart lock management.",
    highlights: [
      "Multi-tenant SaaS architecture on Google Cloud Run with AES-256-GCM credential encryption and per-tenant API key management",
      "Hostaway integration as channel manager, proxying Airbnb/OTA bookings with a custom Axios interceptor-based route enforcement layer",
      "TTLock API for programmatic PIN generation and smart lock management",
      "Sentry distributed tracing across an Express + Flask + Pub/Sub stack",
      "Cloud Run Jobs for scheduled/cron-style workloads",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "Flask",
      "Google Cloud Run",
      "Pub/Sub",
      "API Gateway",
      "VPN",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 sm:py-40">
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
              Projects
            </p>
          </motion.div>

          {/* Projects */}
          <div className="lg:col-span-9 lg:col-start-5 space-y-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Header */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-white">
                  {project.title}
                </h3>
                <p className="text-brand-accent text-sm mt-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mt-6 text-brand-white/60 text-[15px] leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-8 space-y-3">
                  {project.highlights.map((point, j) => (
                    <li
                      key={j}
                      className="text-brand-white/60 text-[15px] leading-relaxed pl-4 border-l border-brand-white/10"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs text-brand-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider (except last) */}
                {i < projects.length - 1 && (
                  <div className="mt-16 border-b border-brand-white/5" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
