<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import { Menu } from '@lucide/vue';
import MobileNavigation from '@/components/layout/MobileNavigation.vue';
import ThemeToggle from '@/components/layout/ThemeToggle.vue';
import { Button } from '@/components/ui/button';
import { navigationLinks, personalInfo } from '@/data/portfolio';
import { useActiveSection } from '@/composables/useActiveSection';

const sectionIds = navigationLinks.map((link) => link.id);
const activeSection = useActiveSection(sectionIds);

// Track scroll position to add background/shadow on scroll
const scrolled = ref(false);

function onScroll() {
    scrolled.value = window.scrollY > 20;
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

function scrollTo(href: string) {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// First name only for the logo
const firstName = personalInfo.name.split(' ')[0] || 'Adil';
const lastName = personalInfo.name.split(' ')[1] || '';
</script>

<template>
    <a
        href="#main-content"
        class="fixed top-0 left-0 z-[100] -translate-y-full rounded-br-lg bg-accent px-4 py-2 text-sm font-medium text-white focus:translate-y-0"
    >
        Skip to content
    </a>

    <header
        class="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
        :class="[
            scrolled
                ? 'border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-xl'
                : 'border-b border-transparent bg-transparent',
        ]"
    >
        <nav
            class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8 lg:px-12"
            aria-label="Main navigation"
        >
            <!-- Logo -->
            <Link
                href="/"
                class="group flex items-center gap-1 text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
                aria-label="Go to top"
                @click.prevent="scrollTo('#hero')"
            >
                <span class="text-foreground">{{ firstName }}</span>
                <span class="text-accent">{{ lastName ? ' ' + lastName : '' }}</span>
                <span
                    class="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150"
                />
            </Link>

            <!-- Desktop Navigation -->
            <div class="hidden items-center md:flex">
                <!-- Nav pill container -->
                <div class="flex items-center gap-0.5 rounded-full border border-border/50 bg-muted/40 px-1.5 py-1 backdrop-blur-sm">
                    <button
                        v-for="link in navigationLinks"
                        :key="link.id"
                        class="relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
                        :class="
                            activeSection === link.id
                                ? 'bg-background text-foreground shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                        "
                        @click="scrollTo(link.href)"
                    >
                        {{ link.label }}
                    </button>
                </div>
            </div>

            <!-- Right side actions -->
            <div class="flex items-center gap-2">
                <ThemeToggle />

                <Button
                    size="sm"
                    class="hidden cursor-pointer rounded-full px-5 font-medium md:inline-flex"
                    @click="scrollTo('#contact')"
                >
                    Let's talk
                </Button>

                <!-- Mobile menu trigger -->
                <MobileNavigation>
                    <template #trigger>
                        <Button
                            variant="ghost"
                            size="icon"
                            class="h-9 w-9 cursor-pointer md:hidden"
                            aria-label="Open navigation menu"
                        >
                            <Menu class="h-5 w-5" />
                        </Button>
                    </template>
                </MobileNavigation>
            </div>
        </nav>
    </header>
</template>
