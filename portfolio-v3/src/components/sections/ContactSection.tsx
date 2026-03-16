"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "aayushaayron@gmail.com",
    href: "mailto:aayushaayron@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aayush-deo/",
    icon: Linkedin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 sm:py-40">
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
              Contact
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
              Let&apos;s build
              <br />
              <span className="text-brand-accent-light">something real.</span>
            </h2>

            <p className="mt-6 text-lg text-brand-white/60 max-w-lg leading-relaxed">
              Have a project in mind or want to chat about engineering? Reach
              out — I&apos;m always open to interesting conversations.
            </p>

            <div className="mt-12 space-y-4">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 rounded-xl border border-brand-white/5 bg-brand-surface/30 px-6 py-5 transition-all hover:border-brand-accent/30 hover:bg-brand-surface/60"
                >
                  <link.icon
                    size={20}
                    className="text-brand-accent shrink-0"
                  />
                  <span className="text-brand-white/80 group-hover:text-brand-white transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-brand-white/20 group-hover:text-brand-accent transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
