export const en = {
    header: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            certificates: "Certificates",
            contact: "Contact",
        },
    },
    hero: {
        greeting: "Hi, I am",
        name: "Kerolos Khairy",
        title: "Frontend Engineer",
        description:
            "Frontend Engineer with 1+ year focused on React.js and Next.js, experienced in delivering core UI features in beta and production-grade web applications within Agile teams.",
        downloadCV: "Download CV",
        viewProjects: "View Projects",
        cvDownloadSuccess: "CV downloaded successfully!",
    },
    about: {
        title: "About Me",
        // Core Focus, Engineering Approach, Collaboration Style
        sections: [
            {
                title: "Core Focus",
                description: "Frontend Engineer with 1+ year focused on React.js and Next.js, experienced in delivering core UI features in beta and production-grade web applications.",
            },
            {
                title: "Engineering Approach",
                description: "Strong in building scalable UI, reusable components, and performance-driven frontend architecture.",
            },
            {
                title: "Collaboration Style",
                description: "Experienced in working within Agile teams, collaborating closely with designers and backend engineers.",
            }
        ]
    },
    experience: {
        title: "Experience",
        items: [
            {
                role: "React.js & Next.js Developer",
                company: "Zedny INC",
                date: "Oct 2025 — Present",
                location: "Cairo",
                bullets: [
                    "Spearheaded front-end development for a beta product platform",
                    "Architected reusable components using React.js and Next.js",
                    "Built responsive layouts improving performance and maintainability",
                    "Worked closely with designers and backend engineers in Agile teams"
                ]
            },
            {
                role: "Frontend Developer",
                company: "Azzrk",
                date: "Nov 2024 — Oct 2025",
                location: "Mansoura",
                bullets: [
                    "Engineered responsive landing pages optimized for performance and scalability",
                    "Built pixel-perfect production-ready interfaces using HTML, CSS, SASS, and JavaScript",
                    "Improved code reusability and accelerated feature delivery cycles",
                    "Enhanced cross-browser UI stability and usability",
                    "Collaborated with designers and stakeholders"
                ]
            }
        ]
    },
    education: {
        title: "Education",
        items: [
            {
                degree: "B.Sc. in Computer Science Engineering",
                institution: "Faculty of Engineering, Kafrelsheikh University",
                date: "Oct 2020 — Oct 2026",
            },
            {
                degree: "Graduate, DEPI | MERN Stack Web Development Track",
                institution: "Digital Egypt Pioneers Initiative",
                date: "Apr 2024 — Oct 2024",
            }
        ]
    },
    skills: {
        title: "Skills",
        categories: {
            frontend: "Frontend",
            backend: "Backend",
            styling: "Styling",
            tools: "Tools",
        },
    },
    certificates: {
        title: "Certificates",
        items: [
            { title: "Digital Egypt Pioneers Initiative (DEPI)" },
            { title: "DevWave Internship" },
            { title: "OOP Course" },
            { title: "Front End Diploma At SEF Academy" },
        ],
    },
    projects: {
        title: "Projects",
        viewDetails: "View Details",
        liveDemo: "Live Demo",
        githubRepo: "GitHub Repo",
        role: "Role",
        teamProject: "Team Project",
        soloProject: "Solo Project",
        techStack: "Tech Stack",
        frontend: "Frontend",
        backend: "Backend",
        features: "Features",
        dashboard: "Dashboard Access",
        noDashboard: "No dashboard available for this project.",
        authImplemented: "Authentication & Authorization are implemented.",
        credentials: "Demo Credentials",
        email: "Email",
        password: "Password",
        items: [
            {
                id: "1",
                title: "DVLD System",
                shortDesc: "Full electronic system for police departments to manage driving licenses.",
                description: "This project transforms traditional paper-based processes in police departments into a fully electronic system. It streamlines workflows, improves data accuracy, and enhances service delivery for citizens needing licensing services.",
                purpose: "Digital transformation of paper-based workflows, managing license categories, and automated driver data tracking.",
                role: "Frontend Developer",
                type: "Team Project",
                benefits: [
                    "Issuing new driving licenses electronically",
                    "Replacing lost or damaged licenses",
                    "Re-issuing withdrawn licenses",
                    "Managing all driving license categories",
                    "Complete driver data management"
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
                title: "Full Stack Dashboard",
                shortDesc: "Comprehensive platform with a landing page and powerful admin dashboard.",
                description: "A full-stack application built with Next.js and Prisma, providing a seamless experience from a beautiful landing page to a functional administrative area.",
                purpose: "Creating a scalable platform for business management with secure data handling and real-time updates.",
                role: "Full Stack Developer",
                type: "Solo Project",
                benefits: [
                    "Custom and attractive UI design",
                    "Full control over users from the dashboard",
                    "Secure authentication & authorization",
                    "Efficient database management using Prisma ORM"
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
                title: "E-Commerce Website",
                shortDesc: "Modern e-commerce interface built with pure web technologies.",
                description: "A high-performance e-commerce frontend that focuses on user experience and clean design, built without heavy frameworks to demonstrate core JS mastery.",
                purpose: "Building a lightweight, fast, and responsive shopping experience for customers.",
                role: "Frontend Developer",
                type: "Solo Project",
                benefits: [
                    "Clean and modern e-commerce UI",
                    "Dynamic product listing and browsing",
                    "Functional shopping cart system",
                    "Optimized for fast loading and accessibility"
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
        title: "Contact Us",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        successMessage: "Your message has been sent successfully. You will be contacted via email.",
        errors: {
            name: "Name is required to connect with Kero",
            email: "Email is required to contact Kero",
            emailInvalid: "Please enter a valid email address",
            message: "Message is required to send your request",
        },
        sendError: "Failed to send message. Please try again later.",
    },
    footer: {
        role: "Junior Front End Developer",
        tagline: "Turning complex problems into elegant digital solutions.",
        nav: {
            title: "Quick Links",
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
        },
        socials: "Social Connect",
        techStack: "Built with Next.js, React, Tailwind CSS & TypeScript",
        availability: "Available for freelance / opportunities",
        copyright: "All rights reserved.",
        builtWith: "Built with ❤️ using Next.js",
    },
    loading: {
        text: "Loading, please wait...",
    },
    notFound: {
        title: "Page Not Found",
        description: "The page you are looking for doesn’t exist or has been moved.",
        goHome: "Go to Home",
        refresh: "Refresh Page",
    }
};

export type Translations = typeof en;
