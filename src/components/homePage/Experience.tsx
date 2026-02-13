"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Experience() {
    const { t, language } = useLanguage();
    const isRTL = language === 'ar';
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute("data-visible", "true");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const updateParallax = () => {
            if (!containerRef.current || !lineRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Only animate when section is roughly in view
            if (rect.top < viewportHeight && rect.bottom > 0) {
                // Line parallax - slower movement than scroll
                const scrollProgress = (viewportHeight - rect.top) * 0.05;
                lineRef.current.style.transform = `translateY(${scrollProgress}px)`;

                // Card micro-parallax
                itemRefs.current.forEach((item, index) => {
                    if (!item) return;
                    const card = item.querySelector('.experience-card') as HTMLElement;
                    if (card) {
                        const itemRect = item.getBoundingClientRect();
                        // Optimization: only calc if item is in/near viewport
                        if (itemRect.top < viewportHeight + 100 && itemRect.bottom > -100) {
                            const distinctOffset = (index % 2 === 0 ? 1 : -1);
                            const progress = (viewportHeight - itemRect.top) / viewportHeight;
                            const offset = (progress - 0.5) * 8 * distinctOffset; // Range approx -4px to 4px
                            card.style.transform = `translateY(${offset}px)`;
                        }
                    }
                });
            }
            animationFrameId = requestAnimationFrame(updateParallax);
        };

        updateParallax();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-zinc-50 dark:bg-black transition-colors duration-300 overflow-hidden">
            <div ref={containerRef} className="mx-auto max-w-4xl w-full">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.experience.title}
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{
                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                    }}></div>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        ref={lineRef}
                        className={`absolute top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 ${isRTL ? 'right-4 md:right-1/2 md:translate-x-1/2' : 'left-4 md:left-1/2 md:-translate-x-1/2'}`}
                        style={{ willChange: 'transform' }}
                    ></div>

                    <div className="space-y-12">
                        {t.experience.items.map((item, index) => (
                            <div
                                key={index}
                                ref={(el: any) => (itemRefs.current[index] = el)}
                                className={`group relative flex flex-col md:flex-row ${index % 2 === 0 ? (isRTL ? 'md:flex-row-reverse' : '') : (isRTL ? '' : 'md:flex-row-reverse')} items-center opacity-0 translate-y-6 transition-all duration-700 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0`}
                            >

                                {/* Timestamp/Date - Desktop */}
                                <div className={`hidden md:flex w-1/2 px-8 ${index % 2 === 0 ? (isRTL ? 'md:justify-start text-end' : 'md:justify-end text-start') : (isRTL ? 'md:justify-end text-start' : 'md:justify-start text-end')}`}>
                                    <div className="inline-block px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform duration-300 group-hover:scale-105">
                                        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div
                                    className={`absolute w-3 h-3 rounded-full border border-white dark:border-black z-10 transition-all duration-500 group-data-[visible=true]:w-4 group-data-[visible=true]:h-4 group-data-[visible=true]:shadow-[0_0_15px_currentColor] group-hover:scale-125 ${isRTL ? 'right-[1.125rem] md:right-1/2 md:translate-x-1/2' : 'left-[1.125rem] md:left-1/2 md:-translate-x-1/2'}`} // adjusted positioning for different size
                                    style={{
                                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))',
                                        color: 'var(--primaryFirst)' // for shadow currentColor
                                    }}
                                ></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? (isRTL ? 'md:pe-8!' : 'md:ps-8!') : (isRTL ? 'md:ps-8!' : 'md:pe-8!')}`}>
                                    <div className="experience-card bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 relative group-hover:-translate-y-1 overflow-hidden group/card hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700" style={{ willChange: 'transform' }}>
                                        {/* Hover Gradient Background */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-500 pointer-events-none"
                                            style={{
                                                background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond), transparent)'
                                            }}
                                        ></div>

                                        <div className="flex flex-col gap-2 mb-4 relative z-10">
                                            <div className="flex justify-between items-start gap-4">
                                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover/card:text-transparent group-hover/card:bg-clip-text transition-all duration-300" style={{ backgroundImage: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))' }}>
                                                    {item.role}
                                                </h3>
                                                <div className="md:hidden absolute top-0 -translate-y-1/2 end-0 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                                                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                                        {item.date}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium">
                                                <Briefcase size={16} />
                                                <span>{item.company}</span>
                                                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                                                <span>{item.location}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 list-none">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--primaryFirst)' }}></span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
