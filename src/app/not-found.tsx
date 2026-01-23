"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Home, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    const { t, dir } = useLanguage();

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black transition-colors duration-300 px-4 py-20">
            <div className="max-w-2xl w-full text-center space-y-12">
                {/* 404 Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full aspect-video max-w-md mx-auto"
                >
                    <svg
                        viewBox="0 0 500 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full drop-shadow-xl"
                    >
                        {/* Background Shapes */}
                        <circle cx="250" cy="150" r="100" className="fill-blue-500/10 dark:fill-blue-500/5" />
                        <rect x="150" y="50" width="200" height="200" rx="40" className="stroke-zinc-200 dark:stroke-zinc-800" strokeWidth="2" strokeDasharray="10 10" />

                        {/* Large 404 Text */}
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className="text-9xl font-black fill-zinc-900 dark:fill-white opacity-10 select-none"
                        >
                            404
                        </text>

                        {/* Illustration Elements */}
                        <motion.path
                            d="M200 150L240 190L300 110"
                            className="stroke-[#2ecc71]"
                            strokeWidth="15"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.circle
                            cx="320"
                            cy="180"
                            r="20"
                            className="fill-[#3498db]"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.rect
                            x="160"
                            y="110"
                            width="25"
                            height="25"
                            rx="5"
                            className="fill-[#2ecc71]/40"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white"
                    >
                        {t.notFound.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-md mx-auto"
                    >
                        {t.notFound.description}
                    </motion.p>
                </div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2ecc71] to-[#3498db] text-white font-bold rounded-full shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        <Home size={20} />
                        {t.notFound.goHome}
                    </Link>
                    <button
                        onClick={handleRefresh}
                        className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-full border-2 border-zinc-100 dark:border-zinc-800 hover:border-[#3498db] transition-all flex items-center justify-center gap-2 group"
                    >
                        <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                        {t.notFound.refresh}
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
