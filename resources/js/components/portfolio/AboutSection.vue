<script setup lang="ts">
import { motion } from 'motion-v';
import { ArrowUpRight } from '@lucide/vue';
import { personalInfo } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();
const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

const tools = ['PHP','Laravel','Vue.js','Nuxt.js','TypeScript','JavaScript','MySQL','Tailwind CSS','HTML / CSS','Git','REST APIs','PHPUnit'];
const linkedinUrl = personalInfo.socialLinks.find(l => l.platform === 'linkedin')?.url ?? '#';
const githubUrl   = personalInfo.socialLinks.find(l => l.platform === 'github')?.url ?? '#';
</script>

<template>
    <section id="about" class="folio-section" :style="{ borderTop: '1px solid var(--folio-border)' }">
        <div class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
            <motion.div :variants="prefersReducedMotion?undefined:cv" initial="hidden" while-in-view="visible" :viewport="{once:true,margin:'-80px'}" class="grid gap-16 lg:grid-cols-2 lg:gap-24">

                <!-- Photo -->
                <motion.div :variants="prefersReducedMotion?undefined:iv" class="relative">
                    <div class="relative overflow-hidden rounded-2xl">
                        <img src="/Image.jpg" alt="Adil Anwar" class="max-h-[420px] w-full object-cover object-top sm:max-h-[560px]" />
                        <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--folio-bg)] to-transparent" />
                    </div>
                    <div class="absolute right-4 bottom-8 flex flex-col items-center rounded-2xl border px-5 py-4 backdrop-blur-sm"
                        :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg-card)' }">
                        <span class="font-mono text-3xl font-bold" :style="{ color: 'var(--folio-text-primary)' }">1+</span>
                        <span class="mt-0.5 text-xs" :style="{ color: 'var(--folio-text-muted)' }">Year exp.</span>
                    </div>
                </motion.div>

                <!-- Text -->
                <motion.div :variants="prefersReducedMotion?undefined:cv" class="flex flex-col justify-center">
                    <motion.p :variants="prefersReducedMotion?undefined:iv" class="folio-label">About me</motion.p>
                    <motion.h2 :variants="prefersReducedMotion?undefined:iv"
                        class="mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]"
                        :style="{ color: 'var(--folio-text-primary)' }">
                        A bit about<br /><em class="not-italic folio-green">who I am</em>
                    </motion.h2>
                    <motion.p :variants="prefersReducedMotion?undefined:iv" class="mt-6 text-[0.9375rem] leading-[1.8]" :style="{ color: 'var(--folio-text-secondary)' }">
                        I'm <span :style="{ color: 'var(--folio-text-primary)', fontWeight: 500 }">Adil Anwar</span>,
                        a Full Stack Developer based in <span :style="{ color: 'var(--folio-text-primary)', fontWeight: 500 }">HaroonAbad, Pakistan</span>,
                        with experience building scalable web applications. Currently at
                        <span class="folio-green font-medium">NbtHub</span> shipping products end-to-end.
                    </motion.p>
                    <motion.p :variants="prefersReducedMotion?undefined:iv" class="mt-4 text-[0.9375rem] leading-[1.8]" :style="{ color: 'var(--folio-text-secondary)' }">
                        I care about clean, maintainable code and user-focused design — from REST API architecture to polished Vue interfaces.
                    </motion.p>
                    <motion.div :variants="prefersReducedMotion?undefined:iv" class="mt-8">
                        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.12em]" :style="{ color: 'var(--folio-text-muted)' }">Stack &amp; tools</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tool in tools" :key="tool" class="folio-chip">{{ tool }}</span>
                        </div>
                    </motion.div>
                    <motion.div :variants="prefersReducedMotion?undefined:iv" class="mt-8 flex flex-wrap items-center gap-4">
                        <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:folio-green"
                            :style="{ color: 'var(--folio-text-muted)' }">
                            LinkedIn <ArrowUpRight class="h-3.5 w-3.5" />
                        </a>
                        <span class="h-3 w-px" :style="{ background: 'var(--folio-border)' }" />
                        <a :href="githubUrl" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                            :style="{ color: 'var(--folio-text-muted)' }">
                            GitHub <ArrowUpRight class="h-3.5 w-3.5" />
                        </a>
                        <span class="h-3 w-px" :style="{ background: 'var(--folio-border)' }" />
                        <a :href="`mailto:${personalInfo.email}`"
                            class="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                            :style="{ color: 'var(--folio-text-muted)' }">
                            {{ personalInfo.email }} <ArrowUpRight class="h-3.5 w-3.5" />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </section>
</template>
