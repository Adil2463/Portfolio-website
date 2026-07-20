<script setup lang="ts">
import { motion } from 'motion-v';
import { GraduationCap, Calendar } from '@lucide/vue';
import { education } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();
const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
</script>

<template>
    <section id="education" class="folio-section" :style="{ borderTop: '1px solid var(--folio-border)' }">
        <div class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
            <motion.div :variants="prefersReducedMotion?undefined:cv" initial="hidden" while-in-view="visible" :viewport="{once:true,margin:'-80px'}">

                <div class="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div :variants="prefersReducedMotion?undefined:iv">
                        <p class="folio-label">Education</p>
                        <h2 class="mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]" :style="{ color: 'var(--folio-text-primary)' }">
                            Academic<br /><em class="not-italic folio-green">background</em>
                        </h2>
                    </motion.div>
                    <motion.p :variants="prefersReducedMotion?undefined:iv" class="self-end text-[0.9375rem] leading-[1.8] lg:pb-1" :style="{ color: 'var(--folio-text-secondary)' }">
                        The foundation behind the code — formal education in Computer Science and engineering.
                    </motion.p>
                </div>

                <div class="relative mt-14">
                    <!-- Vertical connector line -->
                    <div class="absolute top-5 left-5 hidden h-[calc(100%-2.5rem)] w-px sm:block"
                        style="background: linear-gradient(to bottom, hsl(var(--folio-green) / 0.4), hsl(var(--folio-green) / 0.15), transparent)" />

                    <div class="space-y-5">
                        <motion.div v-for="(entry) in education" :key="entry.institution" :variants="prefersReducedMotion?undefined:iv" class="relative flex gap-6 sm:gap-8">

                            <!-- Timeline dot -->
                            <div class="relative hidden sm:flex sm:flex-col sm:items-center">
                                <div class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                                    :style="{ borderColor: 'hsl(var(--folio-green) / 0.3)', background: 'hsl(var(--folio-green) / 0.08)' }">
                                    <GraduationCap class="h-4 w-4 folio-green" />
                                </div>
                            </div>

                            <!-- Card -->
                            <div class="flex-1 overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6"
                                :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg-card)' }"
                                @mouseover="($el as HTMLElement).style.borderColor = 'hsl(var(--folio-green) / 0.3)'"
                                @mouseleave="($el as HTMLElement).style.borderColor = 'var(--folio-border)'"
                            >
                                <!-- Mobile icon -->
                                <div class="mb-4 flex items-center gap-3 sm:hidden">
                                    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
                                        :style="{ borderColor: 'hsl(var(--folio-green) / 0.3)', background: 'hsl(var(--folio-green) / 0.08)' }">
                                        <GraduationCap class="h-4 w-4 folio-green" />
                                    </div>
                                    <span class="text-xs font-semibold uppercase tracking-wider" :style="{ color: 'var(--folio-text-muted)' }">{{ entry.qualification }}</span>
                                </div>

                                <div class="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h3 class="text-base font-bold sm:text-lg" :style="{ color: 'var(--folio-text-primary)' }">
                                            {{ entry.qualification }}
                                            <span v-if="entry.field" class="font-normal" :style="{ color: 'var(--folio-text-secondary)' }"> — {{ entry.field }}</span>
                                        </h3>
                                        <p class="mt-1 text-sm font-semibold folio-green">{{ entry.institution }}</p>
                                    </div>
                                    <div class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs"
                                        :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg)', color: 'var(--folio-text-muted)' }">
                                        <Calendar class="h-3 w-3" /> {{ entry.startDate }} — {{ entry.endDate }}
                                    </div>
                                </div>
                                <p v-if="entry.description" class="mt-3 text-sm leading-[1.8]" :style="{ color: 'var(--folio-text-secondary)' }">{{ entry.description }}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
</template>
