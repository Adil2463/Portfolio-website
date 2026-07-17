<script setup lang="ts">
import { cn } from '@/lib/utils';

withDefaults(
    defineProps<{
        id?: string;
        className?: string;
        as?: 'section' | 'div' | 'main';
    }>(),
    {
        as: 'section',
        className: '',
    },
);
</script>

<template>
    <component
        :is="as"
        :id="id"
        :class="cn('relative px-6 md:px-8 lg:px-12', className)"
    >
        <div class="mx-auto max-w-6xl">
            <slot />
        </div>
    </component>
</template>
