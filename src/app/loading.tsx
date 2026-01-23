"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Loading() {
    const { t } = useLanguage();

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-50 dark:bg-black transition-colors duration-300">
            {/* Animated Logo / Spinner */}
            <div className="relative w-24 h-24 mb-6">
                {/* Outer Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
                {/* Spinning Gradient Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2ecc71] border-r-[#3498db]"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                {/* Inner Pulse */}
                <motion.div
                    className="absolute inset-4 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#3498db]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Loading Text */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold bg-gradient-to-r from-[#2ecc71] to-[#3498db] bg-clip-text text-transparent"
            >
                {t.loading.text}
            </motion.p>
        </div>
    );
}
