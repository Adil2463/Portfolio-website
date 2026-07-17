<script setup lang="ts">
import { motion } from 'motion-v';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { highlights } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
</script>

<template>
    <SectionContainer id="highlights" class="py-16 md:py-20">
        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-80px' }"
            class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
            <motion.div
                v-for="highlight in highlights"
                :key="highlight.label"
                :variants="prefersReducedMotion ? undefined : itemVariants"
                class="highlight-card group relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-6 text-center transition-all duration-300 hover:border-accent/40"
            >
                <!-- Glow on hover -->
                <div class="highlight-card-glow pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div class="relative z-10">
                    <div class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                        <component :is="highlight.icon" class="h-5 w-5 text-accent" />
                    </div>
                    <div class="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        {{ highlight.value }}
                    </div>
                    <div class="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {{ highlight.label }}
                    </div>
                    <div class="mt-1 hidden text-xs text-muted-foreground/60 md:block">
                        {{ highlight.description }}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </SectionContainer>
</template>
