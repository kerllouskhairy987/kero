"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function Contact() {
    const { t } = useLanguage();
    const [showToast, setShowToast] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = t.contact.errors.name;
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = t.contact.errors.email;
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t.contact.errors.emailInvalid;
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = t.contact.errors.message;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm() && !isSending) {
            setIsSending(true);

            try {
                const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
                const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
                const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    to_email: 'kyrlskhyry80@gmail.com',
                    message_body: `name : ${formData.name}\nemail : ${formData.email}\nmessage : ${formData.message}`
                };

                await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
                toast.success(t.contact.successMessage || "Message sent successfully!");

                setShowToast(true);
                setFormData({ name: "", email: "", message: "" });
                setErrors({});

                setTimeout(() => {
                    setShowToast(false);
                }, 5000);
            } catch (error) {
                console.error('EmailJS Error:', error);
                toast.error(t.contact.sendError || "Failed to send message. Please try again later.");
            } finally {
                setIsSending(false);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    return (
        <section id="contact" className="py-20 bg-zinc-50 dark:bg-black transition-colors duration-300 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t.contact.title}
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{
                        background: 'linear-gradient(90deg, #2ecc71, #3498db)'
                    }}></div>
                </div>

                {/* Form Container */}
                <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-100 dark:border-zinc-800 max-w-4xl mx-auto">
                    {/* Liquid Gradient Flow Background */}
                    <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] bg-[size:300%_300%] animate-[liquidFlow_16s_ease-in-out_infinite] group-hover:[animation-play-state:paused] pointer-events-none transition-all duration-500" style={{
                        backgroundImage: 'linear-gradient(to bottom right, var(--primaryFirst), var(--primarySecond), transparent)'
                    }}></div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div className="space-y-2" data-aos="fade-right">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    {t.contact.name}
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-transparent border border-zinc-300 transition-all outline-none text-zinc-900 dark:text-white ${errors.name
                                            ? "border-red-400 focus:border-red-500"
                                            : "border-transparent focus:border-[#2ecc71]"
                                            }`}
                                        placeholder={t.contact.name}
                                    />
                                    {errors.name && (
                                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 rtl:right-auto rtl:left-3" size={20} />
                                    )}
                                </div>
                                {errors.name && (
                                    <span className="text-xs text-red-500 font-medium block mt-1 animate-fadeIn">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2" data-aos="fade-left">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    {t.contact.email}
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-transparent border border-zinc-300 transition-all outline-none text-zinc-900 dark:text-white ${errors.email
                                            ? "border-red-400 focus:border-red-500"
                                            : "border-transparent focus:border-[#2ecc71]"
                                            }`}
                                        placeholder={t.contact.email}
                                    />
                                    {errors.email && (
                                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 rtl:right-auto rtl:left-3" size={20} />
                                    )}
                                </div>
                                {errors.email && (
                                    <span className="text-xs text-red-500 font-medium block mt-1 animate-fadeIn">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2" data-aos="fade-up">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                {t.contact.message}
                            </label>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg bg-transparent border-2 border-zinc-300 transition-all outline-none text-zinc-900 dark:text-white resize-none ${errors.message
                                        ? "border-red-400 focus:border-red-500"
                                        : "border-transparent focus:border-[#2ecc71]"
                                        }`}
                                    placeholder={t.contact.message}
                                />
                                {errors.message && (
                                    <AlertCircle className="absolute right-3 top-4 text-red-500 rtl:right-auto rtl:left-3" size={20} />
                                )}
                            </div>
                            {errors.message && (
                                <span className="text-xs text-red-500 font-medium block mt-1 animate-fadeIn">
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        {/* Submit Section */}
                        <div className="relative flex flex-col items-center pt-4" data-aos="fade-up">
                            {/* Toast Notification */}
                            <AnimatePresence>
                                {showToast && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        className="absolute bottom-full mb-6 px-6 py-3 bg-[#2ecc71] text-white rounded-lg shadow-xl flex items-center gap-3 whitespace-nowrap z-20"
                                    >
                                        <CheckCircle size={20} className="stroke-[3px]" />
                                        <span className="font-bold text-sm md:text-base">{t.contact.successMessage}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-fit px-12 py-4 bg-gradient-to-r from-[#2ecc71] to-[#3498db] text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-[#3498db]/20 flex items-center justify-center gap-2 group ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 transform hover:scale-[1.02] active:scale-[0.98]'
                                    }`}
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        {t.contact.send}
                                        <Send size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
