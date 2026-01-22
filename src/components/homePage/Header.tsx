"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropdown from "@/components/LanguageDropdown";

export default function Header() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [showBg, setShowBg] = useState(false);
    const navbarRef = useRef<HTMLHeadingElement | null>(null);

    // Initialize theme
    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme");
        // Default to dark if no preference or if dark is stored
        if (storedTheme === "dark" || !storedTheme) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    // trigger scroll 

    useEffect(() => {
        const handleScroll = () => {
            setShowBg(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.header.nav.about, href: "#about" },
        { name: t.header.nav.projects, href: "#projects" },
        { name: t.header.nav.contact, href: "#contact" },
    ];

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${showBg ? "header-bg" : ""}`} ref={navbarRef}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="shrink-0">
                        <div className="relative w-18 h-18 rounded-full overflow-hidden ">
                            <Link
                                href="/"
                                className="hover:opacity-90 transition-opacity"
                            >
                                <Image
                                    src="/keroLogo.png"
                                    alt="Logo"
                                    fill
                                    className="object-cover"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Center: Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-4 rounded-full px-3 py-px backdrop-brightness-125 shadow-blue-950 shadow-md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 rounded-lg text-lg font-medium text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Social Icons, Language & Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://www.linkedin.com/in/kerolos-khairy-a6673625a"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon-bg"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} color="white" />
                            </a>
                            <a
                                href="https://github.com/kerllouskhairy987"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon-bg"
                                aria-label="GitHub"
                            >
                                <Github size={20} color="white" />
                            </a>
                            <a
                                href="mailto:kyrlskhyry80@gmail.com"
                                className="social-icon-bg"
                                aria-label="Email"
                            >
                                <Mail size={20} color="white" />
                            </a>
                        </div>

                        {/* Language Dropdown */}
                        <LanguageDropdown />

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
                            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {mounted ? (
                                isDarkMode ? (
                                    <Sun size={20} className="text-white" />
                                ) : (
                                    <Moon size={20} className="text-white" />
                                )
                            ) : (
                                <div className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:opacity-80 focus:outline-none"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 absolute w-full left-0 top-16 shadow-lg">
                    <div className="px-4 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Actions */}
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/kerolos-khairy-a6673625a" target="_blank" rel="noreferrer" className="social-icon-bg" aria-label="LinkedIn"><Linkedin size={20} color="white" /></a>
                                <a href="https://github.com/kerllouskhairy987" target="_blank" rel="noreferrer" className="social-icon-bg" aria-label="GitHub"><Github size={20} color="white" /></a>
                                <a href="mailto:kyrlskhyry80@gmail.com" className="social-icon-bg" aria-label="Email"><Mail size={20} color="white" /></a>
                            </div>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-white/10"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-white" />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
