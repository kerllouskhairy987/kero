"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Translations } from "@/locales";

type Language = "en" | "ar";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    // Initialize language from localStorage
    useEffect(() => {
        setMounted(true);
        const storedLanguage = localStorage.getItem("language") as Language;
        if (storedLanguage && (storedLanguage === "en" || storedLanguage === "ar")) {
            setLanguageState(storedLanguage);
        }
    }, []);

    // Update document attributes and localStorage when language changes
    useEffect(() => {
        const dir = language === "ar" ? "rtl" : "ltr";

        // Update HTML attributes
        document.documentElement.lang = language;
        document.documentElement.dir = dir;

        // Also update body for better browser support
        document.body.dir = dir;

        // Persist to localStorage
        if (mounted) {
            localStorage.setItem("language", language);
        }
    }, [language, mounted]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language],
        dir: language === "ar" ? "rtl" : "ltr",
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
