<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { onMounted, onUnmounted } from 'vue';
import HeroSection from '@/components/portfolio/HeroSection.vue';
import AboutSection from '@/components/portfolio/AboutSection.vue';
import SkillsSection from '@/components/portfolio/SkillsSection.vue';
import ExperienceSection from '@/components/portfolio/ExperienceSection.vue';
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue';
import EducationSection from '@/components/portfolio/EducationSection.vue';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection.vue';
import ContactSection from '@/components/portfolio/ContactSection.vue';
import { pageMetadata, personalInfo } from '@/data/portfolio';

let scriptElement: HTMLScriptElement | null = null;

onMounted(() => {
    scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personalInfo.name,
        jobTitle: personalInfo.title,
        description: personalInfo.summary,
        email: personalInfo.email,
        url: window.location.origin,
        sameAs: personalInfo.socialLinks.map((link) => link.url),
    });
    document.head.appendChild(scriptElement);
});

onUnmounted(() => {
    if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
    }
});
</script>

<template>
    <Head :title="pageMetadata.title">
        <meta name="description" :content="pageMetadata.description" />
        <meta property="og:title" :content="pageMetadata.title" />
        <meta property="og:description" :content="pageMetadata.description" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="pageMetadata.title" />
        <meta name="twitter:description" :content="pageMetadata.description" />
    </Head>

    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <TestimonialsSection />
    <ContactSection />
</template>
