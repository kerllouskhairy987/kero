export const en = {
    header: {
        nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            certificates: "Certificates",
            contact: "Contact",
        },
    },
    hero: {
        greeting: "Hi, I am",
        name: "Kerolos Khairy",
        title: "Junior Front End Developer",
        description:
            "Passionate front-end developer specializing in creating beautiful, responsive, and user-friendly web applications. I turn ideas into reality through clean code and modern design principles.",
        downloadCV: "Download CV",
        viewProjects: "View Projects",
        cvDownloadSuccess: "CV downloaded successfully!",
    },
    about: {
        title: "About Me",
        whoAmI: {
            title: "Who Am I",
            paragraphs: [
                "I am a passionate software engineer specializing in front-end web development using React.js and Next.js. With a strong foundation in engineering principles and modern web technologies, I build scalable, responsive, and user-friendly applications.",
                "My approach combines technical expertise with a keen eye for design, ensuring that the applications I build are not only functional but also deliver exceptional user experiences.",
                "Through continuous learning and collaboration, I strive to bring innovative solutions to life, contributing to the growth and success of the applications I work on.",
                "With a strong commitment to quality and a passion for innovation, I am committed to delivering exceptional results that meet the needs of users and stakeholders.",
                "Let's work together to create exceptional software solutions that drive business success.",
            ],
        },
        education: {
            title: "Education",
            items: [
                {
                    title: "Onsite Internship",
                    role: "As Frontend Developer",
                    company: "At Zedny from December 2025 to January 2026",
                    duration: "Duration: 2 Months",
                },
                {
                    title: "Remote Internship",
                    role: "As Frontend Developer",
                    company: "At DevWave July from 2025 to October 2025",
                    duration: "Duration: 3 Months",
                },
                {
                    title: "Graduate of DEPI (Digital Egypt Pioneers Initiative)",
                    company: "At DEPI from January 2025 to Jane 2025",
                    duration: "Duration: 2 Months",
                },
            ],
        },
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
