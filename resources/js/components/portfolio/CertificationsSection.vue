<script setup lang="ts">
import { motion } from 'motion-v';
import { Award, ExternalLink } from '@lucide/vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { certifications } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};
</script>

<template>
    <SectionContainer
        v-if="certifications.length > 0"
        id="certifications"
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
                    Certifications
                </span>
                <h2
                    class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
                >
                    Certifications
                </h2>
            </motion.div>

            <motion.div
                :variants="prefersReducedMotion ? undefined : containerVariants"
                class="mt-10 grid gap-4 sm:grid-cols-2"
            >
                <motion.div
                    v-for="cert in certifications"
                    :key="cert.name"
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="flex items-start gap-4 rounded-xl border border-border/50 bg-muted/20 p-6 transition-all duration-300 hover:border-accent/30"
                >
                    <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10"
                    >
                        <Award class="h-5 w-5 text-accent" />
                    </div>
                    <div class="flex-1">
                        <h3 class="text-base font-semibold">{{ cert.name }}</h3>
                        <p class="text-sm text-muted-foreground">
                            {{ cert.issuer }}
                        </p>
                        <p class="mt-1 text-xs text-muted-foreground">
                            {{ cert.date }}
                        </p>
                    </div>
                    <a
                        v-if="cert.link"
                        :href="cert.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="shrink-0 text-muted-foreground transition-colors hover:text-accent"
                        :aria-label="`View ${cert.name} certification`"
                    >
                        <ExternalLink class="h-4 w-4" />
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    </SectionContainer>
</template>
