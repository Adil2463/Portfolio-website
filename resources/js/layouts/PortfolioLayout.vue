<script setup lang="ts">
import PortfolioHeader from '@/components/layout/PortfolioHeader.vue';
import PortfolioFooter from '@/components/layout/PortfolioFooter.vue';
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <PortfolioHeader />
        <main id="main-content" class="flex-1 pt-16">
            <slot />
        </main>
        <PortfolioFooter />
    </div>
</template>
