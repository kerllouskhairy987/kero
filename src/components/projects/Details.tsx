"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ExternalLink, Github, Monitor, Server, Shield, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function ProjectDetails({ id }: { id: string }) {
    const { t, dir } = useLanguage();
    const [isLoading, setIsLoading] = useState(true);

    // Find the project data from locales based on ID
    const project = t.projects.items.find(p => p.id === id);

    if (!project) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300 pb-20">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
                    >
                        <ArrowLeft size={20} className="rtl:rotate-180" />
                        Back to Projects
                    </Link>
                    <div className="flex items-center gap-4">
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                            <ExternalLink size={16} />
                            {t.projects.liveDemo}
                        </a>
                        <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                            <Github size={16} />
                            {t.projects.githubRepo}
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
                {/* Header Section */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
                        {project.shortDesc}
                    </p>
                </div>

                {/* 1. Website Preview (Iframe) */}
                <div className="w-full h-[80vh] bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl relative group">
                    {/* Browser Toolbar Mockup */}
                    <div className="h-10 bg-zinc-200 dark:bg-zinc-800 flex items-center px-4 gap-2 border-b border-zinc-300 dark:border-zinc-700">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 mx-4 bg-white dark:bg-zinc-900 h-6 rounded flex items-center px-3 text-xs text-zinc-400 font-mono truncate">
                            {project.links.demo}
                        </div>
                    </div>

                    {/* Loading Spinner Overlay */}
                    {isLoading && (
                        <div className="absolute inset-0 top-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 z-10 transition-opacity duration-500">
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                                <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Loading Preview...</span>
                            </div>
                        </div>
                    )}

                    {/* Iframe */}
                    <iframe
                        src={project.links.demo}
                        className={`w-full h-[calc(100%-2.5rem)] bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        title={`${project.title} Preview`}
                        loading="lazy"
                        onLoad={() => setIsLoading(false)}
                    />

                    {/* Fallback Overlay (in case iframe is blocked or loading) - Optional visual cue could be added here */}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* 2. Project Description */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                                <Monitor className="text-blue-500" />
                                {t.projects.role}: <span className="text-zinc-600 dark:text-zinc-400 font-normal">{project.role}</span>
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300">
                                <p className="text-lg leading-relaxed">{project.description}</p>
                            </div>
                        </section>

                        {/* 3. Benefits & Features */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                                <CheckCircle className="text-green-500" />
                                {t.projects.features}
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-zinc-700 dark:text-zinc-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Tech & Dashboard */}
                    <div className="space-y-8">
                        {/* 4. Technologies */}
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                                {t.projects.techStack}
                            </h3>

                            {/* Frontend */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Monitor size={14} /> {t.projects.frontend}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.frontend.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm rounded-lg font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend (if any) */}
                            {project.tech.backend.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Server size={14} /> {t.projects.backend}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.backend.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 text-sm rounded-lg font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 5. Dashboard Access */}
                        <div className="bg-zinc-900 dark:bg-white rounded-2xl p-6 shadow-lg text-white dark:text-zinc-900">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Shield className="text-yellow-400 dark:text-yellow-600" />
                                {t.projects.dashboard}
                            </h3>

                            {project.dashboard.available ? (
                                <div className="space-y-4">
                                    <p className="text-sm text-zinc-300 dark:text-zinc-600">
                                        {t.projects.authImplemented}
                                    </p>
                                    <div className="bg-white/10 dark:bg-zinc-100 rounded-xl p-4 space-y-3">
                                        <div className="text-xs font-semibold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
                                            {t.projects.credentials}
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-zinc-400 dark:text-zinc-500">{t.projects.email}:</span>
                                            <span className="font-mono font-bold select-all">{project.dashboard.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-zinc-400 dark:text-zinc-500">{t.projects.password}:</span>
                                            <span className="font-mono font-bold select-all">{project.dashboard.password}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-zinc-400 dark:text-zinc-600 text-sm">
                                    {t.projects.noDashboard}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
