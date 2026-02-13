"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Code2, Cpu, Users } from "lucide-react";

export default function About() {
    const { t } = useLanguage();

    const icons = [
        <Code2 key="code" size={32} />,
        <Cpu key="cpu" size={32} />,
        <Users key="users" size={32} />
    ];

    return (
        <section id="about" className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-zinc-50 dark:bg-black transition-colors duration-300 overflow-hidden">
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

                {/* Three Column Layout - Highlight Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.about.sections.map((section, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white/50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg group relative overflow-hidden backdrop-blur-sm hover:scale-[1.01]"
                        >
                            {/* Liquid Gradient Flow Background */}
                            <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] bg-[size:300%_300%] animate-[liquidFlow_16s_ease-in-out_infinite] group-hover:[animation-play-state:paused] pointer-events-none transition-all duration-500" style={{
                                backgroundImage: 'linear-gradient(to bottom right, var(--primaryFirst), var(--primarySecond), transparent)'
                            }}></div>

                            {/* Secondary Blob Layer for Depth */}
                            <div className="absolute inset-0 opacity-[0.05] bg-[size:200%_200%] animate-[liquidFlow_20s_reverse_infinite] group-hover:[animation-play-state:paused] pointer-events-none" style={{
                                background: 'radial-gradient(circle at 50% 50%, var(--primarySecond), transparent 70%)'
                            }}></div>

                            <div className="relative z-10">
                                <div className="mb-6 inline-block p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{
                                    backgroundImage: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                                }}>
                                    <div className="text-zinc-600 dark:text-zinc-300 group-hover:text-green-500">
                                        {icons[index]}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                                    {section.title}
                                </h3>

                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
