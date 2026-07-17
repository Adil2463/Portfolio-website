import type { LucideIcon } from '@lucide/vue';

export type SocialPlatform =
    'github' | 'linkedin' | 'twitter' | 'email' | 'other';

export type SocialLink = {
    platform: SocialPlatform;
    url: string;
    label: string;
    icon: LucideIcon;
};

export type NavigationLink = {
    label: string;
    href: string;
    id: string;
};

export type SkillItem = {
    name: string;
    description?: string;
    isCore?: boolean;
};

export type SkillCategory = {
    category: string;
    icon: LucideIcon;
    skills: SkillItem[];
};

export type ExperienceEntry = {
    company: string;
    role: string;
    startDate: string;
    endDate: string | null;
    location?: string;
    description: string[];
    technologies: string[];
};

export type ProjectLink = {
    type: 'live' | 'repository';
    url: string;
};

export type Project = {
    name: string;
    overview: string;
    problem?: string;
    role?: string;
    technologies: string[];
    features?: string[];
    outcome?: string;
    links: ProjectLink[];
    image?: string;
    featured?: boolean;
};

export type EducationEntry = {
    institution: string;
    qualification: string;
    field?: string;
    startDate: string;
    endDate: string;
    description?: string;
};

export type Certification = {
    name: string;
    issuer: string;
    date: string;
    link?: string;
};

export type Service = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export type Highlight = {
    label: string;
    value: string | number;
    description?: string;
    icon: LucideIcon;
};

export type PersonalInfo = {
    name: string;
    title: string;
    summary: string;
    location?: string;
    email: string;
    availability?: string;
    socialLinks: SocialLink[];
};

export type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
