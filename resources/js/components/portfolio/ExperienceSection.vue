<script setup lang="ts">
import { motion } from 'motion-v';
import { Briefcase, MapPin, Calendar } from '@lucide/vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { experiences } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
</script>

<template>
    <SectionContainer id="experience" class="py-20 md:py-28">
        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-100px' }"
        >
            <motion.div :variants="prefersReducedMotion ? undefined : itemVariants">
                <span class="section-label">Experience</span>
                <h2 class="section-heading mt-3">Work History</h2>
            </motion.div>

            <div class="mt-12 space-y-6">
                <motion.div
                    v-for="(entry, index) in experiences"
                    :key="entry.company + entry.role"
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="experience-card group relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-6 transition-all duration-300 hover:border-accent/40 md:p-8"
                >
                    <!-- Accent left bar -->
                    <div class="absolute top-0 left-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-accent/60 via-accent/30 to-transparent" />

                    <!-- Current badge -->
                    <div v-if="!entry.endDate" class="absolute top-5 right-5">
                        <span class="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                            <span class="h-1.5 w-1.5 rounded-full bg-green-500" />
                            Current
                        </span>
                    </div>

                    <div class="pl-4">
                        <!-- Role & company -->
                        <div class="flex flex-wrap items-start gap-3">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                                <Briefcase class="h-5 w-5 text-accent" />
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-foreground">{{ entry.role }}</h3>
                                <p class="text-base font-medium text-accent">{{ entry.company }}</p>
                            </div>
                        </div>

                        <!-- Meta -->
                        <div class="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span class="flex items-center gap-1.5">
                                <Calendar class="h-3.5 w-3.5" />
                                {{ entry.startDate }} — {{ entry.endDate ?? 'Present' }}
                            </span>
                            <span v-if="entry.location" class="flex items-center gap-1.5">
                                <MapPin class="h-3.5 w-3.5" />
                                {{ entry.location }}
                            </span>
                        </div>

                        <!-- Description bullets -->
                        <ul class="mt-5 space-y-2.5">
                            <li
                                v-for="(desc, i) in entry.description"
                                :key="i"
                                class="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                                {{ desc }}
                            </li>
                        </ul>

                        <!-- Tech tags -->
                        <div v-if="entry.technologies?.length" class="mt-5 flex flex-wrap gap-2">
                            <span
                                v-for="tech in entry.technologies"
                                :key="tech"
                                class="rounded-full border border-border/60 bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/30 hover:text-accent"
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </SectionContainer>
</template>
