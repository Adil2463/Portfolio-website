<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue';
import { Button } from '@/components/ui/button';
import { usePortfolioTheme } from '@/composables/usePortfolioTheme';

const { appearance, updateAppearance } = usePortfolioTheme();

function toggle() {
    const next = appearance.value === 'dark' ? 'light' : 'dark';
    updateAppearance(next);
}
</script>

<template>
    <Button
        variant="ghost"
        size="icon"
        class="relative h-9 w-9 cursor-pointer"
        :aria-label="`Switch to ${appearance === 'dark' ? 'light' : 'dark'} mode`"
        @click="toggle"
    >
        <Sun
            class="h-5 w-5 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90"
        />
        <Moon
            class="absolute h-5 w-5 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0"
        />
    </Button>
</template>
