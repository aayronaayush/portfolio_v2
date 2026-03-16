"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  label: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Mobile",
    skills: ["Flutter", "Dart", "iOS", "Android"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "Python", "Flask", "REST APIs"],
  },
  {
    label: "Cloud & Infra",
    skills: ["Google Cloud", "AWS", "Cloud Run", "Docker", "CI/CD"],
  },
  {
    label: "Data",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Firestore"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 sm:py-40">
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
              Skills
            </p>
          </motion.div>

          {/* Skill groups */}
          <div className="lg:col-span-9 lg:col-start-5 space-y-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-white/40 mb-4">
                  {category.label}
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      className="rounded-full border border-brand-white/10 bg-brand-surface/50 px-5 py-2.5 text-sm text-brand-white/80 transition-colors hover:border-brand-accent/40 hover:text-brand-accent"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
