import type { Ref } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';

export function useActiveSection(
    sectionIds: string[],
    options?: { rootMargin?: string; threshold?: number },
): Ref<string> {
    const activeSection = ref(sectionIds[0] ?? '');
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
        if (typeof IntersectionObserver === 'undefined') {
            return;
        }

        const visibleSections = new Set<string>();

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;

                    if (entry.isIntersecting) {
                        visibleSections.add(id);
                    } else {
                        visibleSections.delete(id);
                    }
                });

                if (visibleSections.size > 0) {
                    const firstVisible = sectionIds.find((id) =>
                        visibleSections.has(id),
                    );

                    if (firstVisible) {
                        activeSection.value = firstVisible;
                    }
                }
            },
            {
                rootMargin: options?.rootMargin ?? '-20% 0px -60% 0px',
                threshold: options?.threshold ?? 0,
            },
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer!.observe(element);
            }
        });
    });

    onUnmounted(() => {
        observer?.disconnect();
    });

    return activeSection;
}
