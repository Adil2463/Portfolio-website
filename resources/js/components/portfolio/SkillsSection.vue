<script setup lang="ts">
import { motion } from 'motion-v';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();
const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const iv = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const chipV = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

const skillGroups = [
    { label: 'Backend',         skills: ['PHP', 'Laravel', 'RESTful APIs'] },
    { label: 'Frontend',        skills: ['Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { label: 'Database',        skills: ['MySQL'] },
    { label: 'Tools & Workflow',skills: ['Git', 'GitHub', 'PHPUnit', 'Vite', 'Composer', 'NPM'] },
    { label: 'Practices',       skills: ['Responsive Design', 'REST Architecture', 'MVC Pattern', 'Clean Code', 'Agile'] },
];
</script>

<template>
    <section id="skills" class="folio-section" :style="{ borderTop: '1px solid var(--folio-border)' }">
        <div class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
            <motion.div :variants="prefersReducedMotion?undefined:cv" initial="hidden" while-in-view="visible" :viewport="{once:true,margin:'-80px'}">

                <div class="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div :variants="prefersReducedMotion?undefined:iv">
                        <p class="folio-label">Skills</p>
                        <h2 class="mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]" :style="{ color: 'var(--folio-text-primary)' }">
                            What I work<br /><em class="not-italic folio-green">with</em>
                        </h2>
                    </motion.div>
                    <motion.p :variants="prefersReducedMotion?undefined:iv" class="self-end text-[0.9375rem] leading-[1.8] lg:pb-1" :style="{ color: 'var(--folio-text-secondary)' }">
                        Technologies I use daily to build full-stack applications — from database design to polished interfaces.
                    </motion.p>
                </div>

                <motion.div :variants="prefersReducedMotion?undefined:iv" class="mt-12 border-t" :style="{ borderColor: 'var(--folio-border)' }" />

                <div class="mt-12 space-y-10">
                    <motion.div v-for="group in skillGroups" :key="group.label" :variants="prefersReducedMotion?undefined:cv" class="grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-8">
                        <motion.p :variants="prefersReducedMotion?undefined:iv" class="pt-1 text-xs font-semibold uppercase tracking-[0.12em]" :style="{ color: 'var(--folio-text-faint)' }">
                            {{ group.label }}
                        </motion.p>
                        <motion.div :variants="prefersReducedMotion?undefined:cv" class="flex flex-wrap gap-2">
                            <motion.span v-for="skill in group.skills" :key="skill" :variants="prefersReducedMotion?undefined:chipV" class="folio-chip">{{ skill }}</motion.span>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div :variants="prefersReducedMotion?undefined:iv" class="mt-16 flex flex-col gap-3 border-t pt-8 sm:flex-row sm:items-center sm:justify-between" :style="{ borderColor: 'var(--folio-border)' }">
                    <p class="text-sm" :style="{ color: 'var(--folio-text-muted)' }">
                        Always learning — currently exploring
                        <span :style="{ color: 'var(--folio-text-secondary)', fontWeight: 500 }">Inertia.js</span> &amp;
                        <span :style="{ color: 'var(--folio-text-secondary)', fontWeight: 500 }">Docker</span>
                    </p>
                    <span class="font-mono text-xs" :style="{ color: 'var(--folio-text-faint)' }">v2026</span>
                </motion.div>
            </motion.div>
        </div>
    </section>
</template>
