<script setup lang="ts">
import { motion } from 'motion-v';
import { testimonials } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();
const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
</script>

<template>
    <section id="reviews" class="folio-section" :style="{ borderTop: '1px solid var(--folio-border)' }">
        <div class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
            <motion.div :variants="prefersReducedMotion?undefined:cv" initial="hidden" while-in-view="visible" :viewport="{once:true,margin:'-80px'}">

                <motion.div :variants="prefersReducedMotion?undefined:iv" class="flex flex-col gap-3">
                    <p class="folio-label">Social proof</p>
                    <h2 class="text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]" :style="{ color: 'var(--folio-text-primary)' }">
                        What clients<br /><em class="not-italic folio-green">say</em>
                    </h2>
                </motion.div>

                <motion.div :variants="prefersReducedMotion?undefined:iv" class="mt-12 border-t" :style="{ borderColor: 'var(--folio-border)' }" />

                <motion.div :variants="prefersReducedMotion?undefined:cv" class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <motion.div
                        v-for="(t, i) in testimonials" :key="i"
                        :variants="prefersReducedMotion?undefined:iv"
                        class="flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 sm:p-7"
                        :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg-card)' }"
                        @mouseover="($el as HTMLElement).style.borderColor = 'hsl(var(--folio-green) / 0.25)'"
                        @mouseleave="($el as HTMLElement).style.borderColor = 'var(--folio-border)'"
                    >
                        <div>
                            <span class="block font-serif text-6xl leading-none select-none" :style="{ color: 'hsl(var(--folio-green) / 0.25)' }" aria-hidden="true">"</span>
                            <p class="mt-2 text-[0.9375rem] leading-[1.8]" :style="{ color: 'var(--folio-text-secondary)' }">{{ t.quote }}</p>
                        </div>
                        <div class="mt-8 flex items-center gap-3 border-t pt-5" :style="{ borderColor: 'var(--folio-border)' }">
                            <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold folio-green"
                                :style="{ borderColor: 'hsl(var(--folio-green) / 0.25)', background: 'hsl(var(--folio-green) / 0.08)' }">
                                {{ t.name.split(' ').map((n: string) => n[0]).join('') }}
                            </div>
                            <div>
                                <p class="text-sm font-semibold" :style="{ color: 'var(--folio-text-primary)' }">{{ t.name }}</p>
                                <p class="text-xs" :style="{ color: 'var(--folio-text-muted)' }">{{ t.role }}, {{ t.company }}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </section>
</template>
