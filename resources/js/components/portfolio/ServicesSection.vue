<script setup lang="ts">
import { motion } from 'motion-v';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { services } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};
</script>

<template>
    <SectionContainer
        v-if="services.length > 0"
        id="services"
        class="py-20 md:py-28"
    >
        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-100px' }"
        >
            <motion.div
                :variants="prefersReducedMotion ? undefined : itemVariants"
            >
                <span
                    class="font-mono text-xs tracking-wider text-accent uppercase"
                >
                    Services
                </span>
                <h2
                    class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
                >
                    What I can do
                </h2>
            </motion.div>

            <motion.div
                :variants="prefersReducedMotion ? undefined : containerVariants"
                class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                <motion.div
                    v-for="service in services"
                    :key="service.title"
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="group rounded-xl border border-border/50 bg-muted/20 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-muted/40"
                >
                    <div
                        class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"
                    >
                        <component
                            :is="service.icon"
                            class="h-5 w-5 text-accent"
                        />
                    </div>
                    <h3 class="text-sm font-semibold">{{ service.title }}</h3>
                    <p
                        class="mt-2 text-sm leading-relaxed text-muted-foreground"
                    >
                        {{ service.description }}
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    </SectionContainer>
</template>
