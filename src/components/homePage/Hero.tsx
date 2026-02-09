"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import Antigravity from "@/reactBits/Antigravity";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const { t } = useLanguage();
    const [displayText, setDisplayText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = [t.hero.name, t.hero.title];

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseDuration = 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing forward
                if (displayText.length < currentPhrase.length) {
                    setDisplayText(currentPhrase.substring(0, displayText.length + 1));
                } else {
                    // Finished typing, pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                } else {
                    // Finished deleting, move to next phrase
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentPhraseIndex, t.hero.name, t.hero.title]);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Kerolos_Khairy_CV.pdf';
        link.click();

        toast.success(t.hero.cvDownloadSuccess);
    };

    return (
        <section className="z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-zinc-50 dark:bg-black transition-colors duration-300">

            {/* waves */}
            <div className="absolute top-0 left-0 right-0 opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#00cba9" fillOpacity="1" d="M0,160L21.8,149.3C43.6,139,87,117,131,90.7C174.5,64,218,32,262,48C305.5,64,349,128,393,138.7C436.4,149,480,107,524,96C567.3,85,611,107,655,117.3C698.2,128,742,128,785,149.3C829.1,171,873,213,916,208C960,203,1004,149,1047,133.3C1090.9,117,1135,139,1178,165.3C1221.8,192,1265,224,1309,229.3C1352.7,235,1396,213,1418,202.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
                </svg>
            </div>


            <div className="mx-auto max-w-7xl w-full">
                <div className="flex flex-wrap-reverse md:flex-nowrap items-center justify-between gap-12">
                    {/* Left Section - Text Content */}
                    <div data-aos="fade-right" className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
                                {t.hero.greeting}
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold min-h-[80px] md:min-h-[100px]">
                                <span
                                    className="bg-linear-to-r from-[var(--primaryFirst)] to-[var(--primarySecond)] bg-clip-text text-transparent"
                                >
                                    {displayText}
                                    <span className="animate-pulse text-zinc-600 dark:text-zinc-400">|</span>
                                </span>
                            </h1>
                        </div>

                        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                            {t.hero.description}
                        </p>

                        <div className="flex justify-center items-center md:hidden">
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/kerolos-khairy-a6673625a" target="_blank" rel="noreferrer" className="social-icon-bg" aria-label="LinkedIn"><Linkedin size={20} color="white" /></a>
                                <a href="https://github.com/kerllouskhairy987" target="_blank" rel="noreferrer" className="social-icon-bg" aria-label="GitHub"><Github size={20} color="white" /></a>
                                <a href="mailto:kyrlskhyry80@gmail.com" className="social-icon-bg" aria-label="Email"><Mail size={20} color="white" /></a>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={handleDownloadCV}
                                className="whitespace-nowrap px-8 py-3 bg-linear-to-r from-[var(--primaryFirst)] to-[var(--primarySecond)] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
                            >
                                {t.hero.downloadCV}
                            </button>
                            <Link
                                href="#projects"
                                className="whitespace-nowrap px-8 py-3 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white font-semibold rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-center"
                            >
                                {t.hero.viewProjects}
                            </Link>
                        </div>
                    </div>

                    {/* Right Section - Profile Image */}
                    <div data-aos="fade-left" className="flex-1 flex justify-center md:justify-end relative">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primaryFirst)] to-[var(--primarySecond)] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl animate-float">
                                <Image
                                    src="/profile.jpg"
                                    alt="Kerolos Khairy"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* antiGravity component */}
                        <div className="absolute top-0 left-0 right-0 z-100">
                            <Antigravity
                                count={500}
                                magnetRadius={1}
                                ringRadius={9}
                                waveSpeed={1}
                                waveAmplitude={10}
                                particleSize={1.5}
                                lerpSpeed={0.05}
                                color="#29c390"
                                autoAnimate
                                particleVariance={0.6}
                                rotationSpeed={0}
                                depthFactor={1}
                                pulseSpeed={10}
                                particleShape="sphere"
                                fieldStrength={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
