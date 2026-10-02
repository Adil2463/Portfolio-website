import {
    Code2,
    Database,
    GitBranch,
    Globe,
    Layers,
    LayoutTemplate,
    Server,
    Sparkles,
    Wrench,
} from '@lucide/vue';
import type {
    EducationEntry,
    ExperienceEntry,
    NavigationLink,
    PersonalInfo,
    Project,
    Service,
    SkillCategory,
    SocialLink,
    Stat,
} from '@/types/portfolio';
import { asset } from '@/lib/asset';

export const personalInfo: PersonalInfo = {
    name: 'Adil Anwar',
    title: 'Full Stack Developer',
    summary:
        'Full Stack Developer building scalable, high-performance web applications with Laravel, Vue.js, TypeScript and MySQL — from clean REST APIs and solid database design to fast, responsive interfaces.',
    location: 'HaroonAbad, Pakistan',
    timezone: 'Asia/Karachi',
    email: 'adilanwar0318@gmail.com',
    availability: 'Open to opportunities',
    photo: asset('/Image.jpg'),
    socialLinks: [
        {
            platform: 'github',
            url: 'https://github.com/Adil2463',
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
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

/** Headline numbers — keep these honest; they're the first thing recruiters check. */
export const stats: Stat[] = [
    { value: '1+', label: 'Year of professional experience' },
    { value: '2', label: 'Featured full-stack projects' },
    { value: '10+', label: 'Technologies in daily use' },
];

/** Shown in the scrolling marquee under the hero. */
export const techStack = [
    'Laravel',
    'Vue.js',
    'TypeScript',
    'PHP',
    'Nuxt.js',
    'MySQL',
    'Tailwind CSS',
    'Inertia.js',
    'REST APIs',
    'JavaScript',
    'Git',
    'PHPUnit',
];

export const skillCategories: SkillCategory[] = [
    {
        category: 'Backend',
        icon: Server,
        blurb: 'APIs, business logic and auth that hold up in production.',
        skills: [
            { name: 'PHP', isCore: true },
            { name: 'Laravel', isCore: true },
            { name: 'RESTful APIs', isCore: true },
            { name: 'MVC Architecture' },
            { name: 'Authentication & RBAC' },
        ],
    },
    {
        category: 'Frontend',
        icon: LayoutTemplate,
        blurb: 'Responsive, accessible interfaces that feel fast.',
        skills: [
            { name: 'Vue.js', isCore: true },
            { name: 'TypeScript', isCore: true },
            { name: 'Nuxt.js' },
            { name: 'JavaScript' },
            { name: 'Tailwind CSS' },
            { name: 'HTML & CSS' },
        ],
    },
    {
        category: 'Database',
        icon: Database,
        blurb: 'Schemas and queries designed to scale.',
        skills: [
            { name: 'MySQL', isCore: true },
            { name: 'Query Optimisation' },
            { name: 'Schema Design' },
            { name: 'Eloquent ORM' },
        ],
    },
    {
        category: 'Tools & Workflow',
        icon: Wrench,
        blurb: 'The everyday toolkit for shipping reliably.',
        skills: [
            { name: 'Git & GitHub', isCore: true },
            { name: 'PHPUnit' },
            { name: 'Vite' },
            { name: 'Composer' },
            { name: 'NPM' },
        ],
    },
    {
        category: 'Currently Learning',
        icon: Sparkles,
        blurb: 'Always levelling up.',
        skills: [{ name: 'Inertia.js' }, { name: 'Docker' }],
    },
];

export const experiences: ExperienceEntry[] = [
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
        slug: 'hospital-management-system',
        name: 'Hospital Management System',
        category: 'Healthcare',
        image: asset('/images/projects/hospital-management.svg'),
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
    },
    {
        slug: 'food-ordering-website',
        name: 'Food Ordering Website',
        category: 'Food & Delivery',
        status: 'demo',
        image: asset('/images/projects/food-website.svg'),
        overview:
            'A modern food ordering website where customers browse restaurant menus, filter dishes by category, add items to a cart and place orders through a smooth, mobile-first checkout flow.',
        problem:
            'Small restaurants needed a simple online storefront so customers could explore the menu and order without phone calls or third-party apps taking a large commission.',
        role: 'Full Stack Developer',
        technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
        features: [
            'Menu browsing with category filters and search',
            'Cart with live quantity and price updates',
            'Streamlined checkout and order summary',
            'Admin panel to manage dishes, prices and offers',
            'Fully responsive, mobile-first layout',
        ],
        outcome:
            'Built as a demo project showcasing a complete ordering flow — from discovering dishes to checkout — with a clean, appetising UI.',
        links: [],
    },
];

export const services: Service[] = [
    {
        title: 'Full-stack web apps',
        description: 'End-to-end products — database, API and interface — built with Laravel and Vue.',
        icon: Layers,
    },
    {
        title: 'API design & integration',
        description: 'Clean RESTful APIs and reliable third-party integrations.',
        icon: Server,
    },
    {
        title: 'Frontend engineering',
        description: 'Responsive, accessible interfaces with Vue.js, TypeScript and Tailwind.',
        icon: Code2,
    },
    {
        title: 'Database architecture',
        description: 'MySQL schemas and queries designed for speed and growth.',
        icon: Database,
    },
];

export const education: EducationEntry[] = [
    {
        institution: 'The Islamia University of Bahawalpur',
        qualification: 'BS Computer Science',
        startDate: '2022',
        endDate: '2026',
        description:
            'Data structures, algorithms, software engineering, databases and web development.',
    },
    {
        institution: 'Govt Rizvia Post Graduate College',
        qualification: 'FSc Pre-Engineering',
        startDate: '2019',
        endDate: '2021',
        description: 'Pre-engineering studies with a focus on mathematics and physics.',
    },
];

export const pageMetadata = {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.summary,
};
