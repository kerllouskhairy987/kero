"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Certificates() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const certificates = [
        {
            id: 1,
            src: "/depi.jpeg",
            alt: t.certificates.items[0].title,
            title: t.certificates.items[0].title
        },
        {
            id: 2,
            src: "/devwave2.png",
            alt: t.certificates.items[1].title,
            title: t.certificates.items[1].title
        },
        {
            id: 3,
            src: "/oop.jpeg",
            alt: t.certificates.items[2].title,
            title: t.certificates.items[2].title
        },
        {
            id: 4,
            src: "/sef-front.jpeg",
            alt: t.certificates.items[3].title,
            title: t.certificates.items[3].title
        },
    ];

    const openModal = (src: string) => {
        setSelectedImage(src);
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto"; // Restore scrolling
    };

    return (
        <section id="certificates" className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.certificates.title}
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{
                        background: 'linear-gradient(90deg, var(--primaryFirst), var(--primarySecond))'
                    }}></div>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 justify-between gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
                            onClick={() => openModal(cert.src)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-4/3 w-full overflow-hidden">
                                <Image
                                    src={cert.src}
                                    alt={cert.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium text-zinc-900 dark:text-white shadow-lg">
                                        View Certificate
                                    </div>
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="p-4 text-center border-t border-zinc-100 dark:border-zinc-800">
                                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
                        aria-label="Close modal"
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] aspect-4/3 rounded-lg overflow-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
                    >
                        <Image
                            src={selectedImage}
                            alt="Certificate Full View"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
