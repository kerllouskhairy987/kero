import { Translations } from "./en";

export const ar: Translations = {
    header: {
        nav: {
            about: "نبذة عني",
            experience: "الخبرات",
            projects: "المشاريع",
            skills: "المهارات",
            certificates: "الشهادات",
            contact: "تواصل معي",
        },
    },
    hero: {
        greeting: "مرحباً، أنا",
        name: "كيرلس خيري",
        title: "مهندس واجهات أمامية",
        description:
            "مهندس واجهات أمامية بخبرة تتجاوز السنة، متخصص في React.js و Next.js، مع خبرة في بناء واجهات قابلة للتوسع وتقديم ميزات أساسية لتطبيقات ويب في بيئات Beta وProduction ضمن فرق Agile.",
        downloadCV: "تحميل السيرة الذاتية",
        viewProjects: "عرض المشاريع",
        cvDownloadSuccess: "تم تحميل السيرة الذاتية بنجاح!",
    },
    about: {
        title: "نبذة عني",
        sections: [
            {
                title: "التركيز الأساسي",
                description: "مهندس واجهات أمامية بخبرة أكثر من سنة يركز على React.js و Next.js، لديه خبرة في تطوير واجهات أساسية لتطبيقات ويب في مراحل Beta وProduction.",
            },
            {
                title: "النهج الهندسي",
                description: "اهتمام ببناء واجهات قابلة للتوسع، مكونات قابلة لإعادة الاستخدام، وهيكلية واجهة أمامية عالية الأداء.",
            },
            {
                title: "أسلوب التعاون",
                description: "خبرة في العمل ضمن فرق Agile، والتعاون الوثيق مع المصممين ومهندسي الواجهة الخلفية.",
            }
        ]
    },
    experience: {
        title: "الخبرات",
        items: [
            {
                role: "مطور React.js و Next.js",
                company: "Zedny INC",
                date: "أكتوبر 2025 — حتى الآن",
                location: "القاهرة",
                bullets: [
                    "قاد تطوير الواجهة الأمامية لمنصة منتج في مرحلة البيتا",
                    "صمم مكونات قابلة لإعادة الاستخدام باستخدام React.js و Next.js",
                    "بنى تخطيطات متجاوبة تحسن الأداء وقابلية الصيانة",
                    "عمل بشكل وثيق مع المصممين ومهندسي الخلفية في فرق Agile"
                ]
            },
            {
                role: "مطور واجهات أمامية",
                company: "Azzrk",
                date: "نوفمبر 2024 — أكتوبر 2025",
                location: "المنصورة",
                bullets: [
                    "هندس صفحات هبوط متجاوبة محسنة للأداء وقابلية التوسع",
                    "بنى واجهات دقيقة وجاهزة للإنتاج باستخدام HTML, CSS, SASS, و JavaScript",
                    "حسن قابلية إعادة استخدام الكود وسرع دورات تسليم الميزات",
                    "عزز استقرار الواجهة وسهولة الاستخدام عبر المتصفحات المختلفة",
                    "تعاون مع المصممين وأصحاب المصلحة"
                ]
            }
        ]
    },
    education: {
        title: "التعليم",
        items: [
            {
                degree: "بكالوريوس هندسة الحاسب الآلي",
                institution: "كلية الهندسة، جامعة كفر الشيخ",
                date: "أكتوبر 2020 — أكتوبر 2026",
            },
            {
                degree: "خريج، DEPI | مسار تطوير الويب (MERN Stack)",
                institution: "مبادرة رواد مصر الرقمية",
                date: "أبريل 2024 — أكتوبر 2024",
            }
        ]
    },
    skills: {
        title: "مهاراتي",
        categories: {
            frontend: "تطوير الواجهة الأمامية",
            backend: "تطوير الواجهة الخلفية",
            styling: "التنسيق والتصميم",
            tools: "الأدوات والتقنيات",
        },
    },
    certificates: {
        title: "الشهادات",
        items: [
            { title: "مبادرة رواد مصر الرقمية (DEPI)" },
            { title: "تدريب DevWave" },
            { title: "دورة البرمجة كائنية التوجه (OOP)" },
            { title: "دبلومة الواجهة الأمامية في أكاديمية SEF" },
        ],
    },
    projects: {
        title: "المشاريع",
        viewDetails: "عرض التفاصيل",
        liveDemo: "عرض حي",
        githubRepo: "مستودع الكود",
        role: "الدور",
        teamProject: "مشروع جماعي",
        soloProject: "مشروع فردي",
        techStack: "التقنيات المستخدمة",
        frontend: "واجهة المستخدم",
        backend: "الخلفية والبيانات",
        features: "المميزات والخصائص",
        dashboard: "الوصول للوحة التحكم",
        noDashboard: "لوحة التحكم غير متوفرة لهذا المشروع.",
        authImplemented: "تم تنفيذ نظام المصادقة والتحقق من الهوية.",
        credentials: "بيانات تسجيل الدخول التجريبية",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        items: [
            {
                id: "1",
                title: "نظام DVLD",
                shortDesc: "نظام إلكتروني متكامل لأقسام الشرطة لإدارة رخص القيادة.",
                description: "يحول هذا المشروع العمليات الورقية التقليدية في أقسام الشرطة إلى نظام إلكتروني بالكامل. يعمل على تبسيط سير العمل، وتحسين دقة البيانات، وتعزيز تقديم الخدمات للمواطنين.",
                purpose: "التحول الرقمي لسير العمل الورقي، إدارة فئات التراخيص، والتتبع التلقائي لبيانات السائقين.",
                role: "مطور واجهات أمامية",
                type: "مشروع جماعي",
                benefits: [
                    "إصدار رخص قيادة جديدة إلكترونياً",
                    "استبدال الرخص المفقودة أو التالفة",
                    "إعادة إصدار الرخص المسحوبة",
                    "إدارة جميع فئات رخص القيادة",
                    "إدارة كاملة لبيانات السائقين"
                ],
                tech: {
                    frontend: ["React", "Axios", "Tailwind CSS", "Framer Motion"],
                    backend: ["ASP.NET Core", "SQL Server"]
                },
                dashboard: {
                    available: true,
                    email: "kero@kero.com",
                    password: "Kero@123"
                },
                links: {
                    demo: "https://dvld.vercel.app",
                    repo: "https://github.com/kerllouskhairy987/Full-Stack-Website-React-ASP.net"
                },
                image: "/p-three.png"
            },
            {
                id: "2",
                title: "منصة لوحة تحكم متكاملة",
                shortDesc: "منصة شاملة تحتوي على صفحة هبوط ولوحة تحكم إدارية قوية.",
                description: "تطبيق كامل (Full-stack) مبني باستخدام Next.js و Prisma، يوفر تجربة سلسة تبدأ من صفحة هبوط جذابة وصولاً إلى منطقة إدارية وظيفية.",
                purpose: "إنشاء منصة قابلة للتطوير لإدارة الأعمال مع معالجة آمنة للبيانات وتحديثات فورية.",
                role: "مطور واجهات وخلفية (Full Stack)",
                type: "مشروع فردي",
                benefits: [
                    "تصميم واجهة مستخدم مخصص وجذاب",
                    "تحكم كامل في المستخدمين من لوحة التحكم",
                    "نظام مصادقة وتفويض آمن",
                    "إدارة فعالة لقواعد البيانات باستخدام Prisma ORM"
                ],
                tech: {
                    frontend: ["Next.js", "Tailwind CSS", "Lucide React"],
                    backend: ["Prisma", "PostgreSQL", "NextAuth"]
                },
                dashboard: {
                    available: true,
                    email: "khairy@gmail.com",
                    password: "Kero@123"
                },
                links: {
                    demo: "https://zedny2.vercel.app",
                    repo: "https://github.com/kerllouskhairy987/zedny2"
                },
                image: "/p-one.png"
            },
            {
                id: "3",
                title: "موقع تجارة إلكترونية",
                shortDesc: "واجهة متجر إلكتروني حديثة مبنية بتقنيات الويب الأساسية.",
                description: "واجهة متجر إلكتروني عالية الأداء تركز على تجربة المستخدم والتصميم النظيف، تم بناؤها بدون أطر عمل ضخمة لإظهار التمكن من JavaScript الأساسية.",
                purpose: "بناء تجربة تسوق خفيفة وسريعة ومتجاوبة للعملاء.",
                role: "مطور واجهات أمامية",
                type: "مشروع فردي",
                benefits: [
                    "واجهة مستخدم نظيفة وحديثة للتجارة الإلكترونية",
                    "قائمة منتجات وتصفح ديناميكي",
                    "نظام سلة تسوق وظيفي",
                    "محسن للتحميل السريع وسهولة الوصول"
                ],
                tech: {
                    frontend: ["HTML5", "CSS3", "Vanilla JavaScript"],
                    backend: []
                },
                dashboard: {
                    available: false
                },
                links: {
                    demo: "https://kerllouskhairy987.github.io/DEPI-amazon-clone-js",
                    repo: "https://github.com/kerllouskhairy987/DEPI-amazon-clone-js"
                },
                image: "/p-two.png"
            }
        ]
    },
    contact: {
        title: "تواصل معنا",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة",
        successMessage: "تم إرسال رسالتك بنجاح، وسيتم التواصل معك عبر البريد الإلكتروني.",
        errors: {
            name: "الاسم مطلوب لتستطيع التواصل مع كيرو",
            email: "البريد الإلكتروني مطلوب للتواصل مع كيرو",
            emailInvalid: "يرجى إدخال عنوان بريد إلكتروني صحيح",
            message: "الرسالة مطلوبة لإرسال طلبك",
        },
        sendError: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.",
    },
    footer: {
        role: "مهندس واجهات أمامية",
        tagline: "تحويل المشكلات المعقدة إلى حلول رقمية أنيقة.",
        nav: {
            title: "روابط سريعة",
            home: "الرئيسية",
            about: "عني",
            projects: "المشاريع",
            contact: "تواصل معي",
        },
        socials: "تواصل اجتماعي",
        techStack: "تم البناء باستخدام Next.js و React و Tailwind CSS و TypeScript",
        availability: "متاح للعمل الحر والفرص الوظيفية",
        copyright: "جميع الحقوق محفوظة.",
        builtWith: "صنع بـ ❤️ باستخدام Next.js",
    },
    loading: {
        text: "جاري التحميل، يرجى الانتظار...",
    },
    notFound: {
        title: "الصفحة غير موجودة",
        description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
        goHome: "العودة إلى الصفحة الرئيسية",
        refresh: "تحديث الصفحة",
    }
};
