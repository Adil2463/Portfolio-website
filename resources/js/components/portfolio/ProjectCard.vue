<script setup lang="ts">
import { ExternalLink, GitBranch, ArrowUpRight, CheckCircle2 } from '@lucide/vue';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import type { Project } from '@/types/portfolio';

defineProps<{ project: Project }>();
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <article
                class="project-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/50 bg-muted/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
                <!-- Top image / placeholder -->
                <div class="relative aspect-video overflow-hidden bg-gradient-to-br from-muted/80 to-muted/30">
                    <img
                        v-if="project.image"
                        :src="project.image"
                        :alt="project.name"
                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div v-else class="flex h-full items-center justify-center">
                        <!-- Code pattern placeholder -->
                        <div class="portfolio-grid-bg absolute inset-0 opacity-50" />
                        <div class="relative z-10 space-y-2 rounded-xl border border-border/40 bg-background/60 p-4 font-mono text-xs backdrop-blur-sm">
                            <div><span class="text-accent">const</span> <span class="text-foreground/70">project</span> = {</div>
                            <div class="pl-3"><span class="text-muted-foreground">name:</span> <span class="text-green-400/80">"{{ project.name }}"</span>,</div>
                            <div class="pl-3"><span class="text-muted-foreground">stack:</span> <span class="text-foreground/70">[...]</span></div>
                            <div>}</div>
                        </div>
                    </div>

                    <!-- Featured badge -->
                    <span
                        v-if="project.featured"
                        class="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-md"
                    >
                        ★ Featured
                    </span>

                    <!-- Hover overlay -->
                    <div class="absolute inset-0 flex items-center justify-center bg-accent/0 transition-all duration-300 group-hover:bg-accent/5">
                        <span class="flex items-center gap-1 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                            View Details
                            <ArrowUpRight class="h-3.5 w-3.5" />
                        </span>
                    </div>
                </div>

                <!-- Card body -->
                <div class="flex flex-1 flex-col p-5">
                    <h3 class="text-base font-bold text-foreground transition-colors group-hover:text-accent">
                        {{ project.name }}
                    </h3>
                    <p class="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {{ project.overview }}
                    </p>

                    <!-- Tech chips -->
                    <div class="mt-4 flex flex-wrap gap-1.5">
                        <span
                            v-for="tech in project.technologies.slice(0, 4)"
                            :key="tech"
                            class="rounded-full border border-border/50 bg-background/70 px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                        >
                            {{ tech }}
                        </span>
                        <span
                            v-if="project.technologies.length > 4"
                            class="rounded-full border border-border/50 bg-background/70 px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                        >
                            +{{ project.technologies.length - 4 }}
                        </span>
                    </div>
                </div>
            </article>
        </DialogTrigger>

        <!-- Dialog modal -->
        <DialogContent class="max-h-[90vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
                <DialogTitle class="text-xl font-bold">{{ project.name }}</DialogTitle>
            </DialogHeader>

            <div class="space-y-5 pt-2">
                <p class="text-sm leading-relaxed text-muted-foreground">{{ project.overview }}</p>

                <div v-if="project.problem" class="rounded-xl border border-border/50 bg-muted/20 p-4">
                    <h4 class="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Problem Solved</h4>
                    <p class="text-sm text-foreground">{{ project.problem }}</p>
                </div>

                <div v-if="project.role" class="flex items-center gap-2 text-sm">
                    <span class="text-muted-foreground">Role:</span>
                    <span class="font-medium text-accent">{{ project.role }}</span>
                </div>

                <div v-if="project.features?.length">
                    <h4 class="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Features</h4>
                    <ul class="grid gap-2 sm:grid-cols-2">
                        <li
                            v-for="feature in project.features"
                            :key="feature"
                            class="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                            <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <div v-if="project.outcome" class="rounded-xl border border-accent/20 bg-accent/5 p-4">
                    <h4 class="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent">Outcome</h4>
                    <p class="text-sm text-foreground">{{ project.outcome }}</p>
                </div>

                <!-- Tech stack -->
                <div>
                    <h4 class="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tech Stack</h4>
                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="tech in project.technologies"
                            :key="tech"
                            class="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent"
                        >
                            {{ tech }}
                        </span>
                    </div>
                </div>

                <!-- Links -->
                <div v-if="project.links.length > 0" class="flex gap-3 pt-1">
                    <a
                        v-for="link in project.links"
                        :key="link.type"
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-medium transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                    >
                        <GitBranch v-if="link.type === 'repository'" class="h-4 w-4" />
                        <ExternalLink v-else class="h-4 w-4" />
                        {{ link.type === 'repository' ? 'Source Code' : 'Live Site' }}
                    </a>
                </div>
            </div>
        </DialogContent>
    </Dialog>
</template>
