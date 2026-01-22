"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
    const pathname = usePathname();

    useEffect(() => {
        requestAnimationFrame(() => {
            AOS.init({
                duration: 800,
                once: true,
            });
            AOS.refresh();
        });
    }, [pathname]);

    return null;
}

