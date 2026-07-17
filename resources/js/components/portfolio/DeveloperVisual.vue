<script setup lang="ts">
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();
</script>

<template>
    <div class="relative aspect-square w-full max-w-md lg:max-w-lg">
        <!-- Outer glow -->
        <div
            class="absolute inset-0 rounded-3xl opacity-30 blur-3xl transition-opacity duration-1000"
            :class="prefersReducedMotion ? '' : 'animate-pulse'"
            style="
                background: radial-gradient(
                    circle,
                    hsl(var(--portfolio-accent) / 0.3),
                    transparent 70%
                );
            "
        />

        <!-- Grid background -->
        <div
            class="relative flex h-full items-center justify-center overflow-hidden rounded-3xl border border-border/50 bg-muted/30"
        >
            <!-- Code grid pattern -->
            <div class="portfolio-grid-bg absolute inset-0 opacity-40" />

            <!-- Abstract code blocks -->
            <div class="relative z-10 flex flex-col items-center gap-4 p-8">
                <!-- Terminal-like header bar -->
                <div
                    class="w-full max-w-xs rounded-lg border border-border/50 bg-background/80 p-4 backdrop-blur-sm"
                >
                    <div class="mb-3 flex items-center gap-1.5">
                        <span class="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span
                            class="h-2.5 w-2.5 rounded-full bg-yellow-400/80"
                        />
                        <span
                            class="h-2.5 w-2.5 rounded-full bg-green-400/80"
                        />
                    </div>
                    <div class="space-y-2 font-mono text-xs">
                        <div class="flex items-center gap-2">
                            <span class="text-muted-foreground/50">01</span>
                            <span class="text-accent">{</span>
                        </div>
                        <div class="flex items-center gap-2 pl-4">
                            <span class="text-muted-foreground/50">02</span>
                            <span class="text-muted-foreground">role:</span>
                            <span class="text-foreground/80">"fullstack"</span>
                        </div>
                        <div class="flex items-center gap-2 pl-4">
                            <span class="text-muted-foreground/50">03</span>
                            <span class="text-muted-foreground">stack:</span>
                            <span class="text-foreground/80">[...]</span>
                        </div>
                        <div class="flex items-center gap-2 pl-4">
                            <span class="text-muted-foreground/50">04</span>
                            <span class="text-muted-foreground">status:</span>
                            <span class="text-green-500/80">"active"</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-muted-foreground/50">05</span>
                            <span class="text-accent">}</span>
                        </div>
                    </div>
                </div>

                <!-- Floating tech badges -->
                <div class="flex flex-wrap items-center justify-center gap-2">
                    <span
                        v-for="tech in [
                            'Laravel',
                            'Vue',
                            'TypeScript',
                            'Tailwind',
                        ]"
                        :key="tech"
                        class="rounded-md border border-border/50 bg-background/80 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
                    >
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
