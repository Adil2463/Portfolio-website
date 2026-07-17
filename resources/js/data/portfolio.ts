import {
    Code2,
    Database,
    Globe,
    Layers,
    Server,
    Smartphone,
    TestTube,
    Wrench,
    Briefcase,
    Zap,
    GitBranch,
} from '@lucide/vue';
import type {
    Certification,
    EducationEntry,
    Highlight,
    NavigationLink,
    PersonalInfo,
    Project,
    Service,
    SkillCategory,
    SocialLink,
} from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
    name: 'Adil Anwar',
    title: 'Full Stack Developer',
    summary:
        'Results-driven Full Stack Developer with experience building scalable, high-performance web applications using PHP (Laravel), Vue.js, JavaScript, and MySQL. Skilled in developing responsive user interfaces, designing RESTful APIs, optimizing databases, and integrating third-party services.',
    location: 'HaroonAbad, Pakistan',
    email: 'adilanwar0318@gmail.com',
    availability: 'Open to opportunities',
    socialLinks: [
        {
            platform: 'github',
            url: 'https://github.com/adil-anwar',
            label: 'GitHub',
            icon: GitBranch,
        },
        {
            platform: 'linkedin',
            url: 'https://linkedin.com/in/adil-anwar-a31697270',
            label: 'LinkedIn',
            icon: Globe,
        },
    ] satisfies SocialLink[],
};

export const navigationLinks: NavigationLink[] = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

export const highlights: Highlight[] = [
    {
        label: 'Experience',
        value: '1+',
        description: 'years of professional development',
        icon: Briefcase,
    },
    {
        label: 'Projects Delivered',
        value: '5+',
        description: 'projects shipped to production',
        icon: Layers,
    },
    {
        label: 'Technologies',
        value: '10+',
        description: 'technologies and frameworks',
        icon: Code2,
    },
    {
        label: 'Full-Stack Coverage',
        value: 'Frontend to Backend',
        description: 'end-to-end product development',
        icon: Zap,
    },
];

export const skillCategories: SkillCategory[] = [
    {
        category: 'Frontend',
        icon: Globe,
        skills: [
            { name: 'Vue.js', isCore: true },
            { name: 'Nuxt.js', isCore: true },
            { name: 'TypeScript', isCore: true },
            { name: 'JavaScript' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'Tailwind CSS' },
        ],
    },
    {
        category: 'Backend',
        icon: Server,
        skills: [
            { name: 'PHP', isCore: true },
            { name: 'Laravel', isCore: true },
            { name: 'RESTful APIs' },
        ],
    },
    {
        category: 'Databases',
        icon: Database,
        skills: [
            { name: 'MySQL', isCore: true },
        ],
    },
    {
        category: 'DevOps & Tools',
        icon: Wrench,
        skills: [
            { name: 'Git' },
            { name: 'GitHub' },
        ],
    },
    {
        category: 'Testing',
        icon: TestTube,
        skills: [{ name: 'PHPUnit' }],
    },
    {
        category: 'Mobile',
        icon: Smartphone,
        skills: [{ name: 'Responsive Design' }],
    },
];

export const experiences = [
    {
        company: 'NbtHub',
        role: 'Full Stack Developer',
        startDate: '2026',
        endDate: null,
        location: 'Remote',
        description: [
            'Building scalable, high-performance web applications using PHP (Laravel) and Vue.js.',
            'Designing and developing RESTful APIs and integrating third-party services.',
            'Developing responsive user interfaces with Vue.js, TypeScript, and Tailwind CSS.',
            'Optimizing database queries and designing efficient MySQL database schemas.',
        ],
        technologies: ['Laravel', 'Vue.js', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    },
];

export const projects: Project[] = [
    {
        name: 'Hospital Management System',
        overview:
            'A comprehensive Hospital Management System to streamline patient registration, appointment scheduling, doctor management, and medical record tracking.',
        problem:
            'Healthcare facilities struggled with manual processes for patient registration, appointment coordination, and record keeping — leading to inefficiencies and errors.',
        role: 'Full Stack Developer',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
        features: [
            'Patient registration and profile management',
            'Appointment scheduling with doctor availability',
            'Doctor management and assignment',
            'Medical record tracking and history',
            'Secure authentication with role-based access control',
        ],
        outcome:
            'Delivered a fully functional system with secure, role-based access control that digitized hospital workflows end-to-end.',
        links: [],
        featured: true,
    },
    {
        name: 'Expense Tracker',
        overview:
            'A full-stack Expense Tracker application to help users monitor income and expenses with interactive financial reports.',
        problem:
            'Users lacked a simple, secure way to track daily spending, categorize expenses, and visualize their financial health over time.',
        role: 'Full Stack Developer',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
        features: [
            'Expense categorization and tagging',
            'Transaction history with filtering',
            'Budget tracking and limits',
            'Interactive financial reports and charts',
            'Secure user authentication',
        ],
        outcome:
            'Built a fully functional financial management tool with clear data visualization helping users make better spending decisions.',
        links: [],
        featured: true,
    },
];

export const services: Service[] = [
    {
        title: 'Full-Stack Web Development',
        description:
            'End-to-end web application development using modern frameworks and best practices.',
        icon: Layers,
    },
    {
        title: 'API Design & Integration',
        description:
            'RESTful API architecture, third-party integrations, and backend system design.',
        icon: Server,
    },
    {
        title: 'Frontend Engineering',
        description:
            'Responsive, accessible, and performant user interfaces with modern JavaScript frameworks.',
        icon: Code2,
    },
    {
        title: 'Database Architecture',
        description:
            'Database design, optimization, and migration strategies for scalable applications.',
        icon: Database,
    },
];

export const education: EducationEntry[] = [
    {
        institution: 'The Islamia University of Bahawalpur',
        qualification: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: 'March 2022',
        endDate: 'February 2026',
        description: 'Studied core computer science subjects including data structures, algorithms, software engineering, databases, and web development.',
    },
    {
        institution: 'Govt Rizvia Post Graduate College',
        qualification: 'FSc',
        field: 'Pre-Engineering',
        startDate: '2019',
        endDate: '2021',
        description: 'Completed pre-engineering studies with focus on mathematics and physics.',
    },
];

export const certifications: Certification[] = [];

export const contactInfo = {
    email: personalInfo.email,
    location: personalInfo.location,
    availability: personalInfo.availability,
};

export const pageMetadata = {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
};
