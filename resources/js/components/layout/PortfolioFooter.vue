<script setup lang="ts">
import { navigationLinks, personalInfo } from '@/data/portfolio';
import SocialLinks from '@/components/portfolio/SocialLinks.vue';

function scrollTo(href: string) {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="border-t border-border bg-background">
        <div class="mx-auto max-w-6xl px-6 py-12 md:px-8 lg:px-12">
            <div class="flex flex-col items-center gap-8 md:flex-row md:justify-between">

                <!-- Left: Branding -->
                <div class="text-center md:text-left">
                    <button
                        class="text-lg font-bold tracking-tight hover:text-accent transition-colors"
                        @click="scrollToTop"
                    >
                        <span class="text-foreground">{{ personalInfo.name.split(' ')[0] }}</span>
                        <span class="text-accent"> {{ personalInfo.name.split(' ')[1] }}</span>
                        <span class="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    </button>
                    <p class="mt-1 text-sm text-muted-foreground">{{ personalInfo.title }}</p>
                </div>

                <!-- Center: Nav links -->
                <nav aria-label="Footer navigation" class="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <button
                        v-for="link in navigationLinks"
                        :key="link.id"
                        class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        @click="scrollTo(link.href)"
                    >
                        {{ link.label }}
                    </button>
                </nav>

                <!-- Right: Social -->
                <SocialLinks :links="personalInfo.socialLinks" size="sm" />
            </div>

            <!-- Bottom bar -->
            <div class="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 md:flex-row">
                <p class="text-xs text-muted-foreground">
                    &copy; {{ currentYear }} {{ personalInfo.name }}. All rights reserved.
                </p>
                <p class="text-xs text-muted-foreground">
                    Built with Laravel + Vue.js
                </p>
            </div>
        </div>

        <!-- Back to top button -->
        <button
            class="fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/90 text-muted-foreground shadow-md backdrop-blur-sm transition-all hover:border-accent/40 hover:text-accent hover:shadow-accent/10"
            aria-label="Back to top"
            @click="scrollToTop"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m18 15-6-6-6 6" />
            </svg>
        </button>
    </footer>
</template>
