<script setup lang="ts">
import { motion } from 'motion-v';
import { GraduationCap, Calendar, MapPin } from '@lucide/vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { education } from '@/data/portfolio';
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
    <SectionContainer
        v-if="education.length > 0"
        id="education"
        class="py-20 md:py-28"
    >
        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-100px' }"
        >
            <motion.div :variants="prefersReducedMotion ? undefined : itemVariants">
                <span class="section-label">Education</span>
                <h2 class="section-heading mt-3">Academic Background</h2>
            </motion.div>

            <!-- Timeline -->
            <div class="mt-12 space-y-0">
                <motion.div
                    v-for="(entry, index) in education"
                    :key="entry.institution"
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="relative flex gap-6"
                    :class="index < education.length - 1 ? 'pb-8' : ''"
                >
                    <!-- Timeline track -->
                    <div class="flex flex-col items-center">
                        <div class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                            <GraduationCap class="h-5 w-5 text-accent" />
                        </div>
                        <div
                            v-if="index < education.length - 1"
                            class="mt-2 w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent"
                        />
                    </div>

                    <!-- Card -->
                    <div class="flex-1 rounded-2xl border border-border/50 bg-muted/20 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-muted/30">
                        <div class="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <h3 class="text-base font-bold text-foreground">
                                    {{ entry.qualification }}
                                    <span v-if="entry.field" class="font-normal text-muted-foreground"> — {{ entry.field }}</span>
                                </h3>
                                <p class="mt-1 font-medium text-accent">{{ entry.institution }}</p>
                            </div>
                            <div class="flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                                <Calendar class="h-3 w-3" />
                                {{ entry.startDate }} — {{ entry.endDate }}
                            </div>
                        </div>

                        <p v-if="entry.description" class="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {{ entry.description }}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </SectionContainer>
</template>
