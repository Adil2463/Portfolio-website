<script setup lang="ts">
import type { SkillCategory } from '@/types/portfolio';

defineProps<{
    category: SkillCategory;
}>();
</script>

<template>
    <div
        class="group rounded-xl border border-border/50 bg-muted/20 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-muted/40 md:p-6"
    >
        <div class="mb-4 flex items-center gap-3">
            <div
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10"
            >
                <component :is="category.icon" class="h-4 w-4 text-accent" />
            </div>
            <h3 class="text-sm font-semibold">{{ category.category }}</h3>
        </div>

        <div class="flex flex-wrap gap-2">
            <span
                v-for="skill in category.skills"
                :key="skill.name"
                class="inline-flex items-center rounded-md border border-border/50 bg-background/50 px-2.5 py-1 text-xs font-medium transition-colors group-hover:border-accent/20"
                :class="
                    skill.isCore
                        ? 'border-accent/30 text-accent'
                        : 'text-muted-foreground'
                "
            >
                {{ skill.name }}
            </span>
        </div>
    </div>
</template>
