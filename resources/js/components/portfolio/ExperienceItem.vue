<script setup lang="ts">
import type { ExperienceEntry } from '@/types/portfolio';

defineProps<{
    entry: ExperienceEntry;
    isLast?: boolean;
}>();
</script>

<template>
    <div class="relative flex gap-6 pb-8" :class="isLast ? 'pb-0' : ''">
        <!-- Timeline line -->
        <div class="relative flex flex-col items-center">
            <div
                class="h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-background"
            />
            <div v-if="!isLast" class="mt-2 w-px flex-1 bg-border" />
        </div>

        <!-- Content -->
        <div class="flex-1 pb-2">
            <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 class="text-base font-semibold">{{ entry.role }}</h3>
                <span class="text-sm text-muted-foreground"
                    >@ {{ entry.company }}</span
                >
            </div>

            <div
                class="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
                <span
                    >{{ entry.startDate }} —
                    {{ entry.endDate || 'Present' }}</span
                >
                <span v-if="entry.location" class="text-border">|</span>
                <span v-if="entry.location">{{ entry.location }}</span>
            </div>

            <ul class="mt-3 space-y-1.5">
                <li
                    v-for="(desc, i) in entry.description"
                    :key="i"
                    class="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                    <span
                        class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50"
                    />
                    {{ desc }}
                </li>
            </ul>

            <div
                v-if="entry.technologies.length > 0"
                class="mt-3 flex flex-wrap gap-1.5"
            >
                <span
                    v-for="tech in entry.technologies"
                    :key="tech"
                    class="rounded-md bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>
