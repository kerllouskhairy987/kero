"use client";

import { useLanguage } from "@/context/LanguageContext";

import {
    FileJson,
    Globe,
    Smartphone,
} from "lucide-react";

interface Skill {
    name: string;
    icon: string | React.ElementType; // URL or Icon component
    color?: string; // Optional brand color for icons
}

interface SkillCategory {
    id: string; // 'frontend', 'backend', etc. for translation lookup
    skills: Skill[];
}

export default function Skills() {
    const { t, dir } = useLanguage();

    // Skills Configuration
    const frontendSkills: Skill[] = [
        { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS", icon: "https://www.svgrepo.com/show/452185/css-3.svg" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000?darkmode=white" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ];

    const stylingSkills: Skill[] = [
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        { name: "Sass", icon: "https://cdn.simpleicons.org/sass/CC6699" },
        { name: "Chakra UI", icon: "https://cdn.simpleicons.org/chakraui/319795" },
        { name: "CSS Modules", icon: "https://cdn.simpleicons.org/cssmodules" }, // Doesn't exist, will fallback
        { name: "Responsive Design", icon: Smartphone },
    ];

    const backendSkills: Skill[] = [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Mongoose", icon: "https://cdn.simpleicons.org/mongoose/880000" },
        { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
    ];

    const toolSkills: Skill[] = [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717?darkmode=white" }, // github is black.
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
        { name: "REST APIs", icon: Globe },
    ];

    const allSkills = [
        ...frontendSkills,
        ...stylingSkills,
        ...backendSkills,
        ...toolSkills
    ];

    // Adjust specific icons that failed or need components
    const getSkillIcon = (skill: Skill) => {
        if (skill.name === "CSS Modules") return <FileJson className="w-12 h-12 text-blue-500" />;
        if (typeof skill.icon === "string") {
            // Handle Next.js and GitHub dark/light mode visibility if possible, or just default.
            // Using a filter invert class for dark mode on specific logos (Next.js, GitHub) is a common trick.
            const isDarkSensitive = skill.name === "Next.js" || skill.name === "GitHub" || skill.name === "Express.js";
            return (
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-12 h-12 object-contain ${isDarkSensitive ? "dark:invert" : ""}`}
                    loading="lazy"
                />
            );
        }
        const Icon = skill.icon;
        return <Icon className="w-12 h-12 text-zinc-600 dark:text-zinc-400" />;
    };

    return (
        <section id="skills" className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-300 overflow-hidden">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.skills.title}
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{
                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                    }}></div>
                </div>

                {/* Infinite Slider */}
                <div className="relative w-full overflow-hidden mb-20 group select-none">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent dark:from-black z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent dark:from-black z-10 pointer-events-none"></div>

                    <div
                        className={`flex w-max gap-16 group-hover:[animation-play-state:paused] active:[animation-play-state:paused] ${dir === "ltr" ? "animate-scroll-ltr" : "animate-scroll-rtl"}`}
                    // style={{ animationDirection: dir === 'rtl' ? 'reverse' : 'normal' }}
                    >
                        {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
                            <div key={`${skill.name}-${index}`} className="flex-shrink-0 w-20 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100">
                                {getSkillIcon(skill)}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Categorized Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Frontend */}
                    <SkillCategoryCard title={t.skills.categories.frontend} skills={frontendSkills} delay={0} />
                    {/* Backend */}
                    <SkillCategoryCard title={t.skills.categories.backend} skills={backendSkills} delay={100} />
                    {/* Styling */}
                    <SkillCategoryCard title={t.skills.categories.styling} skills={stylingSkills} delay={200} />
                    {/* Tools */}
                    <SkillCategoryCard title={t.skills.categories.tools} skills={toolSkills} delay={300} />
                </div>
            </div>
        </section>
    );
}

// Subcomponent for cleaner code
function SkillCategoryCard({ title, skills, delay }: { title: string, skills: Skill[], delay: number }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
        >
            {/* Liquid Gradient Flow Background */}
            <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] bg-[size:300%_300%] animate-[liquidFlow_16s_ease-in-out_infinite] group-hover:[animation-play-state:paused] pointer-events-none transition-all duration-500" style={{
                backgroundImage: 'linear-gradient(to bottom right, var(--primaryFirst), var(--primarySecond), transparent)'
            }}></div>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                {title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 rounded-xl p-2 group-hover:scale-110 transition-transform duration-300 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700">
                            {/* Re-use Icon Logic inside? Or pass formatted icon? 
                               Copying logic for simplicity or Refactor.
                           */}
                            {(() => {
                                if (skill.name === "CSS Modules") return <FileJson className="w-8 h-8 text-blue-500" />;
                                if (typeof skill.icon === "string") {
                                    const isDarkSensitive = skill.name === "Next.js" || skill.name === "GitHub" || skill.name === "Express.js";
                                    return <img src={skill.icon} alt={skill.name} className={`w-8 h-8 object-contain ${isDarkSensitive ? "dark:invert" : ""}`} />
                                }
                                const Icon = skill.icon;
                                return <Icon className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
                            })()}
                        </div>
                        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-center">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
