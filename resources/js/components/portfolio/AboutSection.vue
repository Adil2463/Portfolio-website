<script setup lang="ts">
import { motion } from 'motion-v';
import { MapPin, Briefcase, Mail, ExternalLink } from '@lucide/vue';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { personalInfo } from '@/data/portfolio';
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

const facts = [
    { label: 'Focus', value: 'Full-Stack' },
    { label: 'Approach', value: 'Product-Driven' },
    { label: 'Language', value: 'PHP + Vue.js' },
    { label: 'Database', value: 'MySQL' },
];
</script>

<template>
    <SectionContainer id="about" class="py-20 md:py-28">
        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-100px' }"
        >
            <!-- Section label -->
            <motion.div :variants="prefersReducedMotion ? undefined : itemVariants">
                <span class="section-label">About Me</span>
                <h2 class="section-heading mt-3">
                    The person behind the code
                </h2>
            </motion.div>

            <div class="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-16">
                <!-- Photo col -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="flex justify-center lg:col-span-2 lg:justify-start"
                >
                    <div class="relative">
                        <!-- Decorative border offset -->
                        <div class="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border-2 border-accent/30" />
                        <div class="relative h-72 w-64 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 lg:h-80 lg:w-72">
                            <img
                                src="/Image.jpg"
                                alt="Adil Anwar"
                                class="h-full w-full object-cover object-top"
                            />
                        </div>
                        <!-- Experience badge -->
                        <div class="absolute -top-4 -right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-accent/30 bg-background shadow-lg">
                            <span class="font-mono text-lg font-bold text-accent">1+</span>
                            <span class="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">Years</span>
                        </div>
                    </div>
                </motion.div>

                <!-- Text col -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="flex flex-col justify-center lg:col-span-3"
                >
                    <p class="text-lg leading-relaxed text-muted-foreground">
                        {{ personalInfo.summary }}
                    </p>
                    <p class="mt-4 text-base leading-relaxed text-muted-foreground">
                        Passionate about writing clean, maintainable code and collaborating with cross-functional teams to deliver secure, efficient, and user-focused solutions. Currently working as a Full Stack Developer at <span class="font-medium text-foreground">NbtHub</span>.
                    </p>

                    <!-- Info row -->
                    <div class="mt-6 flex flex-wrap gap-4">
                        <div class="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin class="h-4 w-4 text-accent" />
                            {{ personalInfo.location }}
                        </div>
                        <div class="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase class="h-4 w-4 text-accent" />
                            {{ personalInfo.availability }}
                        </div>
                        <a
                            :href="`mailto:${personalInfo.email}`"
                            class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                            <Mail class="h-4 w-4 text-accent" />
                            {{ personalInfo.email }}
                        </a>
                    </div>

                    <!-- Fact grid -->
                    <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <div
                            v-for="fact in facts"
                            :key="fact.label"
                            class="rounded-xl border border-border/50 bg-muted/30 p-3 text-center transition-colors hover:border-accent/30"
                        >
                            <div class="font-mono text-xs uppercase tracking-wider text-muted-foreground">{{ fact.label }}</div>
                            <div class="mt-1 text-sm font-semibold text-foreground">{{ fact.value }}</div>
                        </div>
                    </div>

                    <!-- LinkedIn CTA -->
                    <div class="mt-8">
                        <a
                            :href="personalInfo.socialLinks.find(l => l.platform === 'linkedin')?.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent/20"
                        >
                            View LinkedIn Profile
                            <ExternalLink class="h-3.5 w-3.5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </SectionContainer>
</template>
