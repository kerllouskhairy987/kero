"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
            <div className="mx-auto max-w-7xl w-full">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.about.title}
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{
                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                    }}></div>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
                    {/* Left Column - Who Am I (appears second on mobile) */}
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="space-y-6">
                            <h3 data-aos="fade-right" className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                                {t.about.whoAmI.title}
                            </h3>

                            <div className="space-y-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {t.about.whoAmI.paragraphs.map((paragraph, index) => (
                                    <p key={index} data-aos="fade-right">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Education (appears first on mobile) */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="space-y-6">
                            <h3 data-aos="fade-left" className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                                {t.about.education.title}
                            </h3>

                            <div className="space-y-6">
                                {/* Education Item 1 */}
                                <div data-aos="fade-left" className="relative ps-8 pb-8 border-s-2 border-zinc-200 dark:border-zinc-800">
                                    <div className={`absolute -start-2 top-0 w-4 h-4 rounded-full`} style={{
                                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                                    }}></div>
                                    <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col gap-1">
                                        <h4 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white">{t.about.education.items[0].title} <span className="g-text">{t.about.education.items[0].role}</span></h4>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {t.about.education.items[0].company}
                                        </p>
                                        <span>{t.about.education.items[0].duration}</span>
                                    </div>
                                </div>

                                {/* Education Item 2 */}
                                <div data-aos="fade-left" className="relative ps-8 pb-8 border-s-2 border-zinc-200 dark:border-zinc-800">
                                    <div className={`absolute -start-2 top-0 w-4 h-4 rounded-full`} style={{
                                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                                    }}></div>
                                    <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white">
                                                {t.about.education.items[1].title} <span className="g-text">{t.about.education.items[1].role}</span>
                                            </h4>
                                        </div>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {t.about.education.items[1].company}
                                        </p>
                                        <span>{t.about.education.items[1].duration}</span>
                                    </div>
                                </div>

                                {/* Education Item 3 */}
                                <div data-aos="fade-left" className="relative ps-8 pb-8 border-s-2 border-zinc-200 dark:border-zinc-800">
                                    <div className={`absolute -start-2 top-0 w-4 h-4 rounded-full`} style={{
                                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                                    }}></div>
                                    <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white">
                                                {t.about.education.items[2].title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {t.about.education.items[2].company}
                                        </p>
                                        <span>{t.about.education.items[2].duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
