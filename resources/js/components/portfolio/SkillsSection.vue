<script setup lang="ts">
import { motion } from 'motion-v';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { skillCategories } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// Only show meaningful categories (non-empty)
const activeCategories = skillCategories.filter(c => c.skills.length > 0);
</script>

<template>
    <SectionContainer id="skills" class="py-20 md:py-28">
        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-100px' }"
        >
            <motion.div :variants="prefersReducedMotion ? undefined : itemVariants">
                <span class="section-label">Skills</span>
                <h2 class="section-heading mt-3">Technical Expertise</h2>
                <p class="mt-3 max-w-xl text-muted-foreground">
                    Technologies I use to build production-grade full-stack applications.
                </p>
            </motion.div>

            <motion.div
                :variants="prefersReducedMotion ? undefined : containerVariants"
                class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                <motion.div
                    v-for="category in activeCategories"
                    :key="category.category"
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="skill-card group relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-muted/40"
                >
                    <!-- Hover glow -->
                    <div class="skill-card-glow pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div class="relative z-10">
                        <!-- Header -->
                        <div class="mb-5 flex items-center gap-3">
                            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 transition-colors group-hover:bg-accent/25">
                                <component :is="category.icon" class="h-4 w-4 text-accent" />
                            </div>
                            <h3 class="font-semibold text-foreground">{{ category.category }}</h3>
                        </div>

                        <!-- Skills as chips -->
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="skill in category.skills"
                                :key="skill.name"
                                class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors"
                                :class="skill.isCore
                                    ? 'border border-accent/40 bg-accent/10 text-accent'
                                    : 'border border-border/60 bg-background/60 text-muted-foreground hover:border-accent/30 hover:text-foreground'"
                            >
                                <span v-if="skill.isCore" class="mr-1.5 h-1 w-1 rounded-full bg-accent" />
                                {{ skill.name }}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <!-- All tech flat list -->
            <motion.div
                :variants="prefersReducedMotion ? undefined : itemVariants"
                class="mt-10 rounded-2xl border border-border/40 bg-muted/10 p-6"
            >
                <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Full Stack</p>
                <div class="flex flex-wrap gap-2">
                    <span
                        v-for="tech in ['PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'MySQL', 'Tailwind CSS', 'HTML', 'CSS', 'Git', 'REST APIs']"
                        :key="tech"
                        class="rounded-full border border-border/50 bg-background/70 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                        {{ tech }}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    </SectionContainer>
</template>
