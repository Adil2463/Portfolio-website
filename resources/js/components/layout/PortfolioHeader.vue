<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu } from '@lucide/vue';
import MobileNavigation from '@/components/layout/MobileNavigation.vue';
import ThemeToggle from '@/components/layout/ThemeToggle.vue';
import { navigationLinks, personalInfo } from '@/data/portfolio';
import { useActiveSection } from '@/composables/useActiveSection';

const sectionIds = navigationLinks.map((link) => link.id);
const activeSection = useActiveSection(sectionIds);

const scrolled = ref(false);
function onScroll() { scrolled.value = window.scrollY > 40; }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

function scrollTo(href: string) {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
}

const firstName = personalInfo.name.split(' ')[0] ?? 'Adil';
const lastName  = personalInfo.name.split(' ')[1] ?? '';
</script>

<template>
    <a
        href="#main-content"
        class="fixed top-0 left-0 z-[100] -translate-y-full bg-[hsl(var(--folio-green))] px-4 py-2 text-sm font-semibold text-black focus:translate-y-0"
    >
        Skip to content
    </a>

    <header
        class="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
        :style="scrolled
            ? 'border-bottom: 1px solid var(--folio-nav-border); background: var(--folio-nav-bg); backdrop-filter: blur(20px);'
            : 'border-bottom: 1px solid transparent; background: transparent;'"
    >
        <nav
            class="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 md:px-10 lg:px-12"
            aria-label="Main navigation"
        >
            <!-- Logo -->
            <button
                class="flex items-center gap-0.5 text-base font-bold tracking-tight focus-visible:outline-none"
                @click="scrollTo('#hero')"
                aria-label="Back to top"
            >
                <span :style="{ color: 'var(--folio-text-primary)' }">{{ firstName }}</span>
                <span class="folio-green"> {{ lastName }}</span>
                <span class="ml-0.5 inline-block h-[5px] w-[5px] rounded-full bg-[hsl(var(--folio-green))]" />
            </button>

            <!-- Desktop nav links -->
            <div class="hidden items-center gap-8 md:flex">
                <button
                    v-for="link in navigationLinks"
                    :key="link.id"
                    class="folio-nav-link"
                    :class="{ active: activeSection === link.id }"
                    @click="scrollTo(link.href)"
                >
                    {{ link.label }}
                </button>
            </div>

            <!-- Right side -->
            <div class="flex items-center gap-3">
                <ThemeToggle />

                <button
                    class="hidden items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors md:inline-flex"
                    :style="{
                        borderColor: 'hsl(var(--folio-green) / 0.35)',
                        background:  'hsl(var(--folio-green) / 0.08)',
                        color:       'hsl(var(--folio-green))',
                    }"
                    @click="scrollTo('#contact')"
                >
                    <span class="relative flex h-1.5 w-1.5">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--folio-green))] opacity-60" />
                        <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--folio-green))]" />
                    </span>
                    Open to projects
                </button>

                <MobileNavigation>
                    <template #trigger>
                        <button
                            class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border transition-colors md:hidden"
                            :style="{ borderColor: 'var(--folio-border)', color: 'var(--folio-text-muted)' }"
                            aria-label="Open menu"
                        >
                            <Menu class="h-4 w-4" />
                        </button>
                    </template>
                </MobileNavigation>
            </div>
        </nav>
    </header>
</template>
