<script setup lang="ts">
import { motion } from 'motion-v';
import { Briefcase, MapPin, Calendar } from '@lucide/vue';
import { experiences } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();
const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
</script>

<template>
    <section id="experience" class="folio-section" :style="{ borderTop: '1px solid var(--folio-border)' }">
        <div class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
            <motion.div :variants="prefersReducedMotion?undefined:cv" initial="hidden" while-in-view="visible" :viewport="{once:true,margin:'-80px'}">

                <div class="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div :variants="prefersReducedMotion?undefined:iv">
                        <p class="folio-label">Experience</p>
                        <h2 class="mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]" :style="{ color: 'var(--folio-text-primary)' }">
                            Where I've<br /><em class="not-italic folio-green">worked</em>
                        </h2>
                    </motion.div>
                    <motion.p :variants="prefersReducedMotion?undefined:iv" class="self-end text-[0.9375rem] leading-[1.8] lg:pb-1" :style="{ color: 'var(--folio-text-secondary)' }">
                        Professional experience building and shipping real products for actual users.
                    </motion.p>
                </div>

                <div class="mt-14 space-y-5">
                    <motion.div v-for="exp in experiences" :key="exp.company+exp.role" :variants="prefersReducedMotion?undefined:iv"
                        class="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-8"
                        :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg-card)' }"
                        @mouseover="($el as HTMLElement).style.borderColor = 'hsl(var(--folio-green) / 0.35)'"
                        @mouseleave="($el as HTMLElement).style.borderColor = 'var(--folio-border)'"
                    >
                        <!-- Left accent bar -->
                        <div class="absolute top-0 left-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[hsl(var(--folio-green)/0.8)] via-[hsl(var(--folio-green)/0.3)] to-transparent" />

                        <!-- Current badge -->
                        <div v-if="!exp.endDate" class="absolute top-5 right-5">
                            <span class="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-semibold folio-green"
                                :style="{ borderColor: 'hsl(var(--folio-green) / 0.3)', background: 'hsl(var(--folio-green) / 0.08)' }">
                                <span class="relative flex h-1.5 w-1.5">
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--folio-green))] opacity-60" />
                                    <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--folio-green))]" />
                                </span>
                                Current
                            </span>
                        </div>

                        <div class="pl-3 sm:pl-4">
                            <div class="flex flex-wrap items-center gap-3">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border" :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg)' }">
                                    <Briefcase class="h-4 w-4 folio-green" />
                                </div>
                                <div>
                                    <h3 class="text-base font-bold sm:text-lg" :style="{ color: 'var(--folio-text-primary)' }">{{ exp.role }}</h3>
                                    <p class="text-sm font-semibold folio-green">{{ exp.company }}</p>
                                </div>
                            </div>
                            <div class="mt-3 flex flex-wrap gap-4">
                                <span class="flex items-center gap-1.5 text-xs" :style="{ color: 'var(--folio-text-muted)' }">
                                    <Calendar class="h-3.5 w-3.5" /> {{ exp.startDate }} — {{ exp.endDate ?? 'Present' }}
                                </span>
                                <span v-if="exp.location" class="flex items-center gap-1.5 text-xs" :style="{ color: 'var(--folio-text-muted)' }">
                                    <MapPin class="h-3.5 w-3.5" /> {{ exp.location }}
                                </span>
                            </div>
                            <ul class="mt-5 space-y-2.5">
                                <li v-for="(desc,i) in exp.description" :key="i" class="flex items-start gap-3 text-sm leading-[1.75]" :style="{ color: 'var(--folio-text-secondary)' }">
                                    <span class="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full" :style="{ background: 'hsl(var(--folio-green) / 0.7)' }" />
                                    {{ desc }}
                                </li>
                            </ul>
                            <div v-if="exp.technologies?.length" class="mt-5 flex flex-wrap gap-2">
                                <span v-for="tech in exp.technologies" :key="tech" class="folio-tag">{{ tech }}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
</template>
