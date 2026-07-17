<script setup lang="ts">
import { motion } from 'motion-v';
import { ArrowDown, ArrowRight, Mail } from '@lucide/vue';
import SocialLinks from '@/components/portfolio/SocialLinks.vue';
import { personalInfo } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <section
        id="hero"
        class="relative flex min-h-screen items-center overflow-hidden"
    >
        <!-- Animated gradient orbs -->
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
            <div
                class="hero-orb-1 absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full"
                :class="prefersReducedMotion ? '' : 'animate-orb-drift'"
            />
            <div
                class="hero-orb-2 absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full"
                :class="prefersReducedMotion ? '' : 'animate-orb-drift-reverse'"
            />
            <!-- Grid overlay -->
            <div class="portfolio-grid-bg absolute inset-0 opacity-30" />
        </div>

        <div class="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8 lg:px-12">
            <div class="grid items-center gap-16 lg:grid-cols-2">

                <!-- LEFT: Text content -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : containerVariants"
                    initial="hidden"
                    animate="visible"
                    class="flex flex-col"
                >
                    <!-- Available badge -->
                    <motion.div :variants="prefersReducedMotion ? undefined : itemVariants">
                        <span class="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
                            <span class="relative flex h-2 w-2">
                                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>
                            {{ personalInfo.availability }}
                        </span>
                    </motion.div>

                    <!-- Name -->
                    <motion.h1
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                    >
                        Hi, I'm<br />
                        <span class="hero-gradient-text">{{ personalInfo.name }}</span>
                    </motion.h1>

                    <!-- Title pill -->
                    <motion.div :variants="prefersReducedMotion ? undefined : itemVariants" class="mt-4">
                        <span class="inline-block rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                            {{ personalInfo.title }}
                        </span>
                    </motion.div>

                    <!-- Summary -->
                    <motion.p
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                        {{ personalInfo.summary }}
                    </motion.p>

                    <!-- CTA Buttons -->
                    <motion.div
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-8 flex flex-wrap gap-4"
                    >
                        <button
                            class="hero-cta-primary group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300"
                            @click="scrollTo('projects')"
                        >
                            View My Work
                            <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                        <button
                            class="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                            @click="scrollTo('contact')"
                        >
                            <Mail class="h-4 w-4" />
                            Let's Talk
                        </button>
                    </motion.div>

                    <!-- Social links -->
                    <motion.div
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-8 flex items-center gap-4"
                    >
                        <span class="text-xs text-muted-foreground">Find me on</span>
                        <div class="h-px w-8 bg-border" />
                        <SocialLinks :links="personalInfo.socialLinks" size="md" />
                    </motion.div>
                </motion.div>

                <!-- RIGHT: Photo + floating cards -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : imageVariants"
                    initial="hidden"
                    animate="visible"
                    class="relative hidden lg:flex lg:justify-center"
                >
                    <!-- Glow ring behind photo -->
                    <div class="hero-photo-glow absolute inset-0 rounded-full" />

                    <!-- Photo frame -->
                    <div class="hero-photo-frame relative z-10 h-80 w-80 overflow-hidden rounded-3xl xl:h-96 xl:w-96">
                        <img
                            src="/Image.jpg"
                            alt="Adil Anwar"
                            class="h-full w-full object-cover object-top"
                        />
                        <!-- Subtle gradient overlay at bottom -->
                        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>

                    <!-- Floating card: Stack -->
                    <div class="absolute -bottom-4 -left-8 z-20 rounded-2xl border border-border/60 bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md">
                        <p class="text-xs font-medium text-muted-foreground">Tech Stack</p>
                        <div class="mt-1.5 flex gap-1.5">
                            <span v-for="tech in ['Laravel', 'Vue', 'MySQL']" :key="tech"
                                class="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs font-medium text-accent">
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <!-- Floating card: Experience -->
                    <div class="absolute -top-4 -right-6 z-20 rounded-2xl border border-border/60 bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md">
                        <p class="font-mono text-2xl font-bold text-foreground">1+</p>
                        <p class="text-xs text-muted-foreground">Year Experience</p>
                    </div>
                </motion.div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div
                :animate="prefersReducedMotion ? {} : { y: [0, 8, 0] }"
                :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
                class="flex flex-col items-center gap-1"
            >
                <span class="text-xs text-muted-foreground/40">scroll</span>
                <ArrowDown class="h-4 w-4 text-muted-foreground/40" />
            </motion.div>
        </div>
    </section>
</template>
