<script setup lang="ts">
import { X } from '@lucide/vue';
import ThemeToggle from '@/components/layout/ThemeToggle.vue';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { navigationLinks, personalInfo } from '@/data/portfolio';
import { useActiveSection } from '@/composables/useActiveSection';

const sectionIds = navigationLinks.map((link) => link.id);
const activeSection = useActiveSection(sectionIds);

function scrollTo(href: string) {
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<template>
    <Sheet>
        <SheetTrigger :as-child="true">
            <slot name="trigger" />
        </SheetTrigger>
        <SheetContent side="right" class="w-[300px] p-0">
            <SheetTitle class="sr-only">Navigation menu</SheetTitle>

            <div class="flex h-full flex-col">
                <!-- Header -->
                <div
                    class="flex items-center justify-between border-b border-border px-6 py-4"
                >
                    <span class="text-lg font-bold tracking-tight">
                        {{ personalInfo.name.split(' ')[0] }}
                        <span class="text-accent">{{ personalInfo.name.split(' ')[1] ?? '' }}</span>
                        <span class="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <SheetClose as-child>
                        <Button
                            variant="ghost"
                            size="icon"
                            class="h-8 w-8 cursor-pointer"
                        >
                            <X class="h-4 w-4" />
                            <span class="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </div>

                <!-- Navigation Links -->
                <nav
                    class="flex-1 overflow-y-auto px-4 py-6"
                    aria-label="Mobile navigation"
                >
                    <div class="flex flex-col gap-1">
                        <SheetClose
                            v-for="link in navigationLinks"
                            :key="link.id"
                            as-child
                        >
                            <button
                                class="flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-muted"
                                :class="
                                    activeSection === link.id
                                        ? 'bg-accent/10 text-accent font-semibold'
                                        : 'text-muted-foreground'
                                "
                                @click="scrollTo(link.href)"
                            >
                                <span
                                    v-if="activeSection === link.id"
                                    class="mr-3 h-1.5 w-1.5 rounded-full bg-accent"
                                />
                                <span
                                    v-else
                                    class="mr-3 h-1.5 w-1.5 rounded-full bg-transparent"
                                />
                                {{ link.label }}
                            </button>
                        </SheetClose>
                    </div>
                </nav>

                <!-- Footer -->
                <div class="border-t border-border px-6 py-4">
                    <div class="mb-4 flex items-center justify-between">
                        <span class="text-sm text-muted-foreground">Theme</span>
                        <ThemeToggle />
                    </div>

                    <SheetClose as-child>
                        <Button
                            variant="default"
                            class="w-full cursor-pointer"
                            @click="scrollTo('#contact')"
                        >
                            Let's talk
                        </Button>
                    </SheetClose>
                </div>
            </div>
        </SheetContent>
    </Sheet>
</template>
