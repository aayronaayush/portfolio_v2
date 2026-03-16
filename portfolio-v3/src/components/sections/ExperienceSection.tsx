"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  url?: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "Wio Bank PJSC",
    url: "https://wio.io",
    role: "Software Engineer",
    period: "Aug 2022 — Present",
    highlights: [
      "Leading the Non-Resident & New-to-Country banking vertical, driving scalable platform development for multi-country launches",
      "Built and deployed an internal CRM and back-office tool with role-based access controls, used daily by customer service agents",
      "Architected frontend infrastructure for Business Credit Card and Retail Credit Card platforms with modular, scalable design",
      "Developed the WPS Salary Transfer interface — 1,800+ employers processing over 50M AED in salaries",
      "Created a plug-and-play maker/checker SDK for frontend teams to integrate multi-user approval flows",
      "Own CI/CD pipelines for app builds and store deployments; serve as Release Manager across multiple teams",
    ],
    tech: ["Flutter", "Dart", "React", "Mixpanel", "Sentry", "DataDog"],
  },
  {
    company: "NYU Abu Dhabi Admissions",
    role: "Freelance Engineer",
    period: "May 2023 — Present",
    highlights: [
      "Built a full-stack Flutter app for managing event support requests and student ambassador coordination",
      "Implemented a Go Gin backend with 4-tier permission system using Firebase Auth and Firestore",
      "Integrated SendGrid for automated stakeholder notifications and used OpenAPI as the API contract source of truth",
      "Deployed containerized services on Google Cloud Run via automated Cloud Build pipelines",
    ],
    tech: ["Flutter", "Go", "Firebase", "GCP Cloud Run", "SendGrid"],
  },
  {
    company: "Mental VR",
    role: "Full Stack Web Developer",
    period: "Aug 2021 — May 2022",
    highlights: [
      "Built a training reporting dashboard with a React frontend and Fastify backend in MVC architecture",
      "Automated builds across dependent repositories using GitHub Actions for streamlined CI/CD",
      "Led a 3-member team in configuring and deploying 45 HTC Vive Focus 3 devices, and trained 45 individuals on usage",
    ],
    tech: ["React", "Fastify", "GitHub Actions", "HTC Vive"],
  },
  {
    company: "NYU Abu Dhabi",
    role: "B.S. Computer Science",
    period: "Class of 2022",
    highlights: [
      "Computer Science major with Interactive Media minor",
    ],
    tech: [],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 sm:py-40">
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
              Experience
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-9 lg:col-start-5 space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-white inline-flex items-center gap-2">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-accent transition-colors inline-flex items-center gap-2"
                        >
                          {exp.company}
                          <ArrowUpRight
                            size={16}
                            className="text-brand-white/20 group-hover:text-brand-accent transition-colors"
                          />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <p className="text-brand-accent text-sm mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <p className="text-sm text-brand-white/40 shrink-0">
                    {exp.period}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((point, j) => (
                    <li
                      key={j}
                      className="text-brand-white/60 text-[15px] leading-relaxed pl-4 border-l border-brand-white/10"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                {exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs text-brand-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Divider (except last) */}
                {i < experiences.length - 1 && (
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
