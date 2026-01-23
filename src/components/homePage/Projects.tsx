"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.projects.title}
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{
                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                    }}></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.projects.items.map((project, index) => (
                        <div
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group flex flex-col bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-xl"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/90 dark:bg-zinc-800/90 rounded-full text-zinc-900 dark:text-white hover:scale-110 transition-transform shadow-lg"
                                        title={t.projects.liveDemo}
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.links.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/90 dark:bg-zinc-800/90 rounded-full text-zinc-900 dark:text-white hover:scale-110 transition-transform shadow-lg"
                                        title={t.projects.githubRepo}
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                                        {project.shortDesc}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {[...project.tech.frontend, ...project.tech.backend].slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {(project.tech.frontend.length + project.tech.backend.length) > 4 && (
                                        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                                            +{(project.tech.frontend.length + project.tech.backend.length) - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                                    <div className="flex gap-4">
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
                                            title={t.projects.liveDemo}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.links.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                                            title={t.projects.githubRepo}
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:gap-3 transition-all group/btn"
                                    >
                                        {t.projects.viewDetails}
                                        <ArrowRight size={16} className="rtl:rotate-180 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
