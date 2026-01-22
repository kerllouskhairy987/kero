"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { language, setLanguage } = useLanguage();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Close dropdown on Escape key
    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    const handleLanguageChange = (lang: "en" | "ar") => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 flex items-center gap-2"
                aria-label="Select Language"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Globe size={20} className="text-white" />
                <span className="text-white text-sm font-medium uppercase hidden sm:inline">
                    {language}
                </span>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden min-w-[120px] z-50 animate-fadeIn">
                    <button
                        onClick={() => handleLanguageChange("en")}
                        className={`w-full px-4 py-3 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3 ${language === "en"
                                ? "bg-zinc-100 dark:bg-zinc-800 font-semibold"
                                : ""
                            }`}
                        role="menuitem"
                    >
                        <span className="text-2xl">🇬🇧</span>
                        <span className="text-zinc-900 dark:text-white">English</span>
                    </button>
                    <button
                        onClick={() => handleLanguageChange("ar")}
                        className={`w-full px-4 py-3 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3 ${language === "ar"
                                ? "bg-zinc-100 dark:bg-zinc-800 font-semibold"
                                : ""
                            }`}
                        role="menuitem"
                    >
                        <span className="text-2xl">🇪🇬</span>
                        <span className="text-zinc-900 dark:text-white">العربية</span>
                    </button>
                </div>
            )}
        </div>
    );
}
