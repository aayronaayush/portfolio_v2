import { Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:aayushaayron@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aayushdeo",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-white/5 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-brand-white/40">
          &copy; {new Date().getFullYear()} Aayush Deo
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-brand-white/40 transition-colors hover:text-brand-accent"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
