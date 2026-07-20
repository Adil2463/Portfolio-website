<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';
import { ArrowUpRight, X, CheckCircle2, ExternalLink, GitBranch } from '@lucide/vue';
import { projects } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';
import type { Project } from '@/types/portfolio';

const { prefersReducedMotion } = useReducedMotion();
const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const iv = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

const activeProject = ref<Project | null>(null);
function openProject(p: Project) { activeProject.value = p; }
function closeProject() { activeProject.value = null; }

const categories: Record<string, string> = {
    'Hospital Management System': 'Healthcare',
    'Expense Tracker': 'Finance',
};

const cardAccents: Record<string, { from: string; to: string; text: string }> = {
    'Hospital Management System': { from: 'hsl(200 80% 12%)', to: 'hsl(200 60% 6%)', text: 'hsl(200 70% 55%)' },
    'Expense Tracker':            { from: 'hsl(142 50% 10%)', to: 'hsl(142 40% 5%)',  text: 'hsl(142 60% 45%)' },
};
</script>

<template>
    <section id="projects" class="folio-section" :style="{ borderTop: '1px solid var(--folio-border)' }">
        <div class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
            <motion.div :variants="prefersReducedMotion?undefined:cv" initial="hidden" while-in-view="visible" :viewport="{once:true,margin:'-80px'}">

                <div class="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div :variants="prefersReducedMotion?undefined:iv">
                        <p class="folio-label">Projects</p>
                        <h2 class="mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]" :style="{ color: 'var(--folio-text-primary)' }">
                            Selected<br /><em class="not-italic folio-green">work</em>
                        </h2>
                    </motion.div>
                    <motion.p :variants="prefersReducedMotion?undefined:iv" class="self-end text-[0.9375rem] leading-[1.8] lg:pb-1" :style="{ color: 'var(--folio-text-secondary)' }">
                        Full-stack applications built from scratch — click any project to see the full breakdown.
                    </motion.p>
                </div>

                <motion.div :variants="prefersReducedMotion?undefined:iv" class="mt-12 border-t" :style="{ borderColor: 'var(--folio-border)' }" />

                <motion.div :variants="prefersReducedMotion?undefined:cv" class="mt-10 grid gap-5 sm:grid-cols-2">
                    <motion.article
                        v-for="project in projects" :key="project.name"
                        :variants="prefersReducedMotion?undefined:iv"
                        class="folio-project-card group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                        @click="openProject(project)"
                    >
                        <div class="relative flex h-48 items-center justify-center overflow-hidden sm:h-56"
                            :style="`background: linear-gradient(135deg, ${cardAccents[project.name]?.from ?? 'var(--folio-bg-card)'}, ${cardAccents[project.name]?.to ?? 'var(--folio-bg)'})`">
                            <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(hsl(0 0% 100% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.05) 1px, transparent 1px); background-size: 32px 32px" />
                            <div class="relative z-10 rounded-xl border border-white/5 bg-black/30 p-4 font-mono text-xs backdrop-blur-sm" :style="`color: ${cardAccents[project.name]?.text ?? 'var(--folio-text-secondary)'}`">
                                <div class="opacity-70"><span class="opacity-50">class</span> {{ project.name.replace(/\s+/g, '') }}</div>
                                <div class="pl-4 opacity-60"><span class="opacity-50">extends</span> BaseApp</div>
                                <div class="pl-4 opacity-50">run() → void</div>
                            </div>
                            <div class="absolute top-3 left-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/50 backdrop-blur-sm">{{ categories[project.name] ?? 'Web App' }}</div>
                            <div class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                <ArrowUpRight class="h-3.5 w-3.5 text-white/70" />
                            </div>
                        </div>
                        <div class="p-5 sm:p-6">
                            <div class="flex flex-wrap gap-1.5">
                                <span v-for="tech in project.technologies" :key="tech" class="folio-tag">{{ tech }}</span>
                            </div>
                            <div class="mt-4 flex items-start justify-between gap-4">
                                <h3 class="text-base font-bold leading-snug transition-colors duration-200 sm:text-lg" :style="{ color: 'var(--folio-text-primary)' }">{{ project.name }}</h3>
                                <ArrowUpRight class="mt-0.5 h-4 w-4 shrink-0 transition-all duration-200 group-hover:folio-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" :style="{ color: 'var(--folio-text-muted)' }" />
                            </div>
                            <p class="mt-2 line-clamp-2 text-sm leading-relaxed" :style="{ color: 'var(--folio-text-secondary)' }">{{ project.overview }}</p>
                            <div class="mt-5 flex items-center gap-1.5 text-xs font-semibold folio-green">
                                View case study <ArrowUpRight class="h-3 w-3" />
                            </div>
                        </div>
                    </motion.article>
                </motion.div>
            </motion.div>
        </div>
    </section>

    <Teleport to="body">
        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="activeProject" class="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4" @click.self="closeProject">
                <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-8 sm:scale-95 sm:translate-y-0" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <div v-if="activeProject" class="relative w-full max-h-[92vh] overflow-y-auto rounded-t-3xl border sm:max-w-2xl sm:rounded-2xl" :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg-card)' }">
                        <button class="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border transition-colors" :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg)', color: 'var(--folio-text-muted)' }" @click="closeProject" aria-label="Close">
                            <X class="h-4 w-4" />
                        </button>
                        <div class="flex h-36 items-center justify-center rounded-t-3xl sm:h-44 sm:rounded-t-2xl" :style="`background: linear-gradient(135deg, ${cardAccents[activeProject.name]?.from ?? 'var(--folio-bg)'}, ${cardAccents[activeProject.name]?.to ?? 'var(--folio-bg-card)'})`">
                            <span class="font-mono text-2xl font-bold opacity-30 sm:text-3xl" :style="`color: ${cardAccents[activeProject.name]?.text ?? 'white'}`">{{ activeProject.name }}</span>
                        </div>
                        <div class="p-6 sm:p-8">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider" :style="{ borderColor: 'var(--folio-border)', color: 'var(--folio-text-muted)' }">{{ categories[activeProject.name] ?? 'Web App' }}</span>
                                <span v-if="activeProject.role" class="rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider folio-green" :style="{ borderColor: 'hsl(var(--folio-green) / 0.3)', background: 'hsl(var(--folio-green) / 0.08)' }">{{ activeProject.role }}</span>
                            </div>
                            <h3 class="mt-3 text-xl font-extrabold sm:text-2xl" :style="{ color: 'var(--folio-text-primary)' }">{{ activeProject.name }}</h3>
                            <p class="mt-3 text-sm leading-[1.8]" :style="{ color: 'var(--folio-text-secondary)' }">{{ activeProject.overview }}</p>
                            <div v-if="activeProject.problem" class="mt-6 rounded-xl border p-4" :style="{ borderColor: 'var(--folio-border)', background: 'var(--folio-bg)' }">
                                <p class="mb-1.5 text-[0.65rem] font-bold uppercase tracking-wider" :style="{ color: 'var(--folio-text-muted)' }">Problem</p>
                                <p class="text-sm leading-[1.75]" :style="{ color: 'var(--folio-text-secondary)' }">{{ activeProject.problem }}</p>
                            </div>
                            <div v-if="activeProject.features?.length" class="mt-6">
                                <p class="mb-3 text-[0.65rem] font-bold uppercase tracking-wider" :style="{ color: 'var(--folio-text-muted)' }">Key Features</p>
                                <ul class="grid gap-2 sm:grid-cols-2">
                                    <li v-for="f in activeProject.features" :key="f" class="flex items-start gap-2.5 text-sm" :style="{ color: 'var(--folio-text-secondary)' }">
                                        <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 folio-green" /> {{ f }}
                                    </li>
                                </ul>
                            </div>
                            <div v-if="activeProject.outcome" class="mt-6 rounded-xl border p-4" :style="{ borderColor: 'hsl(var(--folio-green) / 0.2)', background: 'hsl(var(--folio-green) / 0.05)' }">
                                <p class="mb-1.5 text-[0.65rem] font-bold uppercase tracking-wider folio-green">Outcome</p>
                                <p class="text-sm leading-[1.75]" :style="{ color: 'var(--folio-text-secondary)' }">{{ activeProject.outcome }}</p>
                            </div>
                            <div class="mt-6">
                                <p class="mb-3 text-[0.65rem] font-bold uppercase tracking-wider" :style="{ color: 'var(--folio-text-muted)' }">Tech Stack</p>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in activeProject.technologies" :key="tech" class="folio-chip">{{ tech }}</span>
                                </div>
                            </div>
                            <div v-if="activeProject.links?.length" class="mt-6 flex flex-wrap gap-3">
                                <a v-for="link in activeProject.links" :key="link.type" :href="link.url" target="_blank" rel="noopener noreferrer" class="folio-btn-ghost text-sm">
                                    <GitBranch v-if="link.type === 'repository'" class="h-4 w-4" />
                                    <ExternalLink v-else class="h-4 w-4" />
                                    {{ link.type === 'repository' ? 'Source Code' : 'Live Site' }}
                                </a>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
