"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t, dir } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/kerllouskhairy987", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/kerolos-khairy-a6673625a", label: "LinkedIn" },
        { icon: Mail, href: "mailto:kyrlskhyry80@gmail.com", label: "Email" },
    ];

    const navLinks = [
        { name: t.footer.nav.home, href: "#hero" },
        { name: t.footer.nav.about, href: "#about" },
        { name: t.footer.nav.projects, href: "#projects" },
        { name: t.footer.nav.contact, href: "#contact" },
    ];

    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* 1. Name & Role */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2ecc71] to-[#3498db] bg-clip-text text-transparent">
                                {t.hero.name}
                            </h3>
                            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                {t.footer.role}
                            </p>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                            {t.footer.tagline}
                        </p>
                        {/* Availability Status */}
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                                {t.footer.availability}
                            </span>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-zinc-900 dark:text-white font-bold mb-6">
                            {t.footer.nav.title}
                        </h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#3498db] dark:hover:text-[#3498db] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Tech Stack */}
                    <div>
                        <h4 className="text-zinc-900 dark:text-white font-bold mb-6">
                            {t.projects.techStack}
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            {t.footer.techStack}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {["Next.js", "React", "TypeScript", "Tailwind"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 4. Social Links */}
                    <div className="flex flex-col items-start md:items-end lg:items-start xl:items-end">
                        <h4 className="text-zinc-900 dark:text-white font-bold mb-6">
                            {t.footer.socials}
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-[#2ecc71] hover:text-white dark:hover:bg-[#2ecc71] transition-all transform hover:-translate-y-1 shadow-sm"
                                    title={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="mt-8 flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-[#3498db] transition-colors group"
                        >
                            Back to top
                            <div className="p-1 bg-zinc-100 dark:bg-zinc-800 rounded group-hover:bg-[#3498db] group-hover:text-white transition-colors">
                                <ChevronUp size={14} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
                    <p>
                        © {new Date().getFullYear()} {t.hero.name}. {t.footer.copyright}
                    </p>
                    <div className="flex items-center gap-1">
                        <span>{t.footer.builtWith}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
