import { computed, onMounted, onUnmounted, ref } from 'vue';

export function useReducedMotion() {
    const prefersReducedMotion = ref(false);
    let mediaQuery: MediaQueryList | null = null;

    function updatePreference(event: MediaQueryListEvent) {
        prefersReducedMotion.value = event.matches;
    }

    onMounted(() => {
        if (typeof window === 'undefined') {
            return;
        }

        mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        prefersReducedMotion.value = mediaQuery.matches;
        mediaQuery.addEventListener('change', updatePreference);
    });

    onUnmounted(() => {
        mediaQuery?.removeEventListener('change', updatePreference);
    });

    return {
        prefersReducedMotion: computed(() => prefersReducedMotion.value),
    };
}
