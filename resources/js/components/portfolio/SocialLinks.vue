<script setup lang="ts">
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import type { SocialLink } from '@/types/portfolio';

withDefaults(
    defineProps<{
        links: SocialLink[];
        size?: 'sm' | 'md' | 'lg';
    }>(),
    {
        size: 'md',
    },
);

const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
};
</script>

<template>
    <div class="flex items-center gap-3">
        <TooltipProvider
            v-for="link in links"
            :key="link.platform"
            :delay-duration="0"
        >
            <Tooltip>
                <TooltipTrigger as-child>
                    <a
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                        :aria-label="link.label"
                    >
                        <component :is="link.icon" :class="sizeClasses[size]" />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{{ link.label }}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
</template>
