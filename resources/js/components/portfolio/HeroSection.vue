<script setup lang="ts">
import { motion } from 'motion-v';
import { ArrowDown, ArrowUpRight } from '@lucide/vue';
import { personalInfo } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const photoVariants = {
    hidden:  { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
    { value: '1+',  label: 'Year\nexperience' },
    { value: '5+',  label: 'Projects\ndelivered' },
    { value: '10+', label: 'Technologies\nmastered' },
];

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <section
        id="hero"
        class="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-16 pt-28 md:px-10 lg:px-12"
        :style="{ background: 'var(--folio-bg)' }"
    >
        <!-- Radial glow -->
        <div class="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.07]"
            style="background: radial-gradient(circle, hsl(142 71% 45%), transparent 70%)" />

        <!-- Main content -->
        <div class="relative z-10 mx-auto w-full max-w-6xl flex-1">
            <div class="grid min-h-[calc(100vh-12rem)] items-center gap-12 lg:grid-cols-2 lg:gap-0">

                <!-- LEFT: text -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : containerVariants"
                    initial="hidden" animate="visible"
                    class="flex flex-col"
                >
                    <motion.div :variants="prefersReducedMotion ? undefined : itemVariants">
                        <span class="inline-flex items-center gap-2 text-xs font-medium" :style="{ color: 'var(--folio-text-muted)' }">
                            <span class="relative flex h-1.5 w-1.5">
                                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(142_71%_45%)] opacity-70" />
                                <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(142_71%_45%)]" />
                            </span>
                            {{ personalInfo.availability }}
                        </span>
                    </motion.div>

                    <motion.h1
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-6 text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold leading-[1.0] tracking-[-0.03em]"
                        :style="{ color: 'var(--folio-text-primary)' }"
                    >
                        Hi, I'm<br />
                        <span class="folio-green">{{ personalInfo.name }}</span>
                    </motion.h1>

                    <motion.p
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-4 text-base font-medium md:text-lg"
                        :style="{ color: 'var(--folio-text-muted)' }"
                    >
                        {{ personalInfo.title }}
                    </motion.p>

                    <motion.p
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-5 max-w-md text-sm leading-relaxed md:text-[0.9375rem]"
                        :style="{ color: 'var(--folio-text-secondary)' }"
                    >
                        Building scalable web apps with
                        <span :style="{ color: 'var(--folio-text-primary)' }">Laravel</span>,
                        <span :style="{ color: 'var(--folio-text-primary)' }">Vue.js</span> and
                        <span :style="{ color: 'var(--folio-text-primary)' }">MySQL</span> —
                        from clean APIs to polished interfaces.
                    </motion.p>

                    <motion.div
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <button class="folio-btn-primary" @click="scrollTo('projects')">
                            View my work <ArrowUpRight class="h-4 w-4" />
                        </button>
                        <button class="folio-btn-ghost" @click="scrollTo('contact')">
                            Let's talk
                        </button>
                    </motion.div>

                    <motion.div
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
                    >
                        <a :href="personalInfo.socialLinks.find(l => l.platform === 'linkedin')?.url"
                            target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 text-xs transition-colors hover:opacity-80"
                            :style="{ color: 'var(--folio-text-secondary)' }">
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <span class="hidden h-3 w-px sm:block" :style="{ background: 'var(--folio-border)' }" />
                        <a :href="personalInfo.socialLinks.find(l => l.platform === 'github')?.url"
                            target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 text-xs transition-colors hover:opacity-80"
                            :style="{ color: 'var(--folio-text-secondary)' }">
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            GitHub
                        </a>
                        <span class="hidden h-3 w-px sm:block" :style="{ background: 'var(--folio-border)' }" />
                        <a :href="`mailto:${personalInfo.email}`"
                            class="truncate text-xs transition-colors hover:opacity-80"
                            :style="{ color: 'var(--folio-text-secondary)' }">
                            {{ personalInfo.email }}
                        </a>
                    </motion.div>
                </motion.div>

                <!-- RIGHT: photo -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : photoVariants"
                    initial="hidden" animate="visible"
                    class="relative hidden lg:flex lg:justify-end"
                >
                    <div class="pointer-events-none absolute inset-0 rounded-2xl opacity-20 blur-3xl"
                        style="background: radial-gradient(circle at 50% 60%, hsl(142 71% 45%), transparent 65%)" />
                    <div class="relative h-[520px] w-[400px] overflow-hidden rounded-2xl">
                        <div class="absolute inset-0 z-10 bg-gradient-to-t from-[var(--folio-bg)] via-transparent to-transparent" />
                        <img src="/Image.jpg" alt="Adil Anwar — Full Stack Developer"
                            class="h-full w-full object-cover object-top" />
                    </div>
                    <div class="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full border px-3.5 py-2 backdrop-blur-sm"
                        :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg-card)' }">
                        <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" :style="{ color: 'hsl(var(--folio-green))' }">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span class="text-xs font-medium" :style="{ color: 'var(--folio-text-secondary)' }">{{ personalInfo.location }}</span>
                    </div>
                </motion.div>
            </div>
        </div>

        <!-- Bottom stats bar -->
        <div class="relative z-10 mx-auto w-full max-w-6xl">
            <div class="flex items-end justify-between border-t pt-8" :style="{ borderColor: 'var(--folio-border)' }">
                <motion.div
                    :variants="prefersReducedMotion ? undefined : containerVariants"
                    initial="hidden" animate="visible"
                    class="flex gap-8 sm:gap-12"
                >
                    <motion.div v-for="stat in stats" :key="stat.value"
                        :variants="prefersReducedMotion ? undefined : itemVariants"
                        class="flex flex-col"
                    >
                        <span class="font-mono text-2xl font-bold md:text-3xl" :style="{ color: 'var(--folio-text-primary)' }">{{ stat.value }}</span>
                        <span class="mt-0.5 whitespace-pre-line text-xs leading-tight" :style="{ color: 'var(--folio-text-muted)' }">{{ stat.label }}</span>
                    </motion.div>
                </motion.div>
                <div class="hidden flex-col items-center gap-1.5 sm:flex">
                    <span class="text-[10px] font-medium uppercase tracking-[0.15em]" :style="{ color: 'var(--folio-text-faint)' }">Scroll</span>
                    <div class="animate-bounce-y">
                        <ArrowDown class="h-3.5 w-3.5" :style="{ color: 'var(--folio-text-faint)' }" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
