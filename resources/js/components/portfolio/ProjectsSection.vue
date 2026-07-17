<script setup lang="ts">
import { motion } from 'motion-v';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import ProjectCard from '@/components/portfolio/ProjectCard.vue';
import { projects } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
</script>

<template>
    <SectionContainer id="projects" class="py-20 md:py-28">
        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-100px' }"
        >
            <motion.div :variants="prefersReducedMotion ? undefined : itemVariants">
                <span class="section-label">Projects</span>
                <h2 class="section-heading mt-3">Featured Work</h2>
                <p class="mt-3 max-w-xl text-muted-foreground">
                    Projects I've built from scratch — click any card for the full breakdown.
                </p>
            </motion.div>

            <motion.div
                :variants="prefersReducedMotion ? undefined : containerVariants"
                class="mt-12 grid gap-6 sm:grid-cols-2"
            >
                <motion.div
                    v-for="project in projects"
                    :key="project.name"
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="flex"
                >
                    <ProjectCard :project="project" class="w-full" />
                </motion.div>
            </motion.div>
        </motion.div>
    </SectionContainer>
</template>
