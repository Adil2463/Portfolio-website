<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { motion } from 'motion-v';
import { ArrowUpRight, CheckCircle } from '@lucide/vue';
import { personalInfo } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();
const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const iv = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

const form = useForm({ name: '', email: '', subject: '', message: '' });
const submitted = ref(false);

function submit() {
    form.post('/contact', {
        preserveScroll: true,
        onSuccess: () => { submitted.value = true; form.reset(); },
    });
}

const linkedinUrl = personalInfo.socialLinks.find(l => l.platform === 'linkedin')?.url ?? '#';
const githubUrl   = personalInfo.socialLinks.find(l => l.platform === 'github')?.url ?? '#';

const inputClass = 'w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-0';
</script>

<template>
    <section id="contact" class="folio-section" :style="{ borderTop: '1px solid var(--folio-border)' }">
        <div class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
            <motion.div :variants="prefersReducedMotion?undefined:cv" initial="hidden" while-in-view="visible" :viewport="{once:true,margin:'-80px'}" class="grid gap-14 lg:grid-cols-2 lg:gap-20">

                <!-- Left -->
                <motion.div :variants="prefersReducedMotion?undefined:iv" class="flex flex-col justify-between gap-10">
                    <div>
                        <p class="folio-label">Contact</p>
                        <h2 class="mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]" :style="{ color: 'var(--folio-text-primary)' }">
                            Let's work<br /><em class="not-italic folio-green">together</em>
                        </h2>
                        <p class="mt-5 max-w-sm text-[0.9375rem] leading-[1.8]" :style="{ color: 'var(--folio-text-secondary)' }">
                            Have a project in mind or looking for a developer? Drop me a message and I'll get back to you within 24 hours.
                        </p>
                    </div>
                    <div class="border-t pt-6" :style="{ borderColor: 'var(--folio-border)' }">
                        <p class="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.15em]" :style="{ color: 'var(--folio-text-faint)' }">Get in touch</p>
                        <div class="space-y-3">
                            <a :href="`mailto:${personalInfo.email}`" class="flex items-center justify-between group">
                                <span class="text-sm transition-colors" :style="{ color: 'var(--folio-text-secondary)' }">{{ personalInfo.email }}</span>
                                <ArrowUpRight class="h-3.5 w-3.5 transition-all group-hover:folio-green" :style="{ color: 'var(--folio-text-muted)' }" />
                            </a>
                            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between group">
                                <span class="text-sm transition-colors" :style="{ color: 'var(--folio-text-secondary)' }">LinkedIn</span>
                                <ArrowUpRight class="h-3.5 w-3.5 transition-all" :style="{ color: 'var(--folio-text-muted)' }" />
                            </a>
                            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between group">
                                <span class="text-sm transition-colors" :style="{ color: 'var(--folio-text-secondary)' }">GitHub</span>
                                <ArrowUpRight class="h-3.5 w-3.5 transition-all" :style="{ color: 'var(--folio-text-muted)' }" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <!-- Right: form -->
                <motion.div :variants="prefersReducedMotion?undefined:iv">
                    <!-- Success -->
                    <div v-if="submitted" class="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                        <CheckCircle class="h-12 w-12 folio-green" />
                        <h3 class="text-xl font-bold" :style="{ color: 'var(--folio-text-primary)' }">Message sent!</h3>
                        <p class="text-sm" :style="{ color: 'var(--folio-text-secondary)' }">Thanks for reaching out — I'll get back to you soon.</p>
                        <button class="mt-2 text-xs underline underline-offset-4 transition-colors" :style="{ color: 'var(--folio-text-muted)' }" @click="submitted = false">Send another message</button>
                    </div>

                    <!-- Form -->
                    <form v-else class="space-y-4" @submit.prevent="submit">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="space-y-1.5">
                                <label for="c-name" class="block text-[0.65rem] font-semibold uppercase tracking-[0.12em]" :style="{ color: 'var(--folio-text-muted)' }">Name</label>
                                <input id="c-name" v-model="form.name" type="text" placeholder="Your name" required :class="inputClass"
                                    :style="{ borderColor: form.errors.name ? '#f87171' : 'var(--folio-border)', background: 'var(--folio-bg-input)', color: 'var(--folio-text-primary)' }" />
                                <p v-if="form.errors.name" class="text-xs text-red-400">{{ form.errors.name }}</p>
                            </div>
                            <div class="space-y-1.5">
                                <label for="c-email" class="block text-[0.65rem] font-semibold uppercase tracking-[0.12em]" :style="{ color: 'var(--folio-text-muted)' }">Email</label>
                                <input id="c-email" v-model="form.email" type="email" placeholder="your@email.com" required :class="inputClass"
                                    :style="{ borderColor: form.errors.email ? '#f87171' : 'var(--folio-border)', background: 'var(--folio-bg-input)', color: 'var(--folio-text-primary)' }" />
                                <p v-if="form.errors.email" class="text-xs text-red-400">{{ form.errors.email }}</p>
                            </div>
                        </div>
                        <div class="space-y-1.5">
                            <label for="c-subject" class="block text-[0.65rem] font-semibold uppercase tracking-[0.12em]" :style="{ color: 'var(--folio-text-muted)' }">Subject</label>
                            <input id="c-subject" v-model="form.subject" type="text" placeholder="Project inquiry, job opportunity..." required :class="inputClass"
                                :style="{ borderColor: form.errors.subject ? '#f87171' : 'var(--folio-border)', background: 'var(--folio-bg-input)', color: 'var(--folio-text-primary)' }" />
                            <p v-if="form.errors.subject" class="text-xs text-red-400">{{ form.errors.subject }}</p>
                        </div>
                        <div class="space-y-1.5">
                            <label for="c-message" class="block text-[0.65rem] font-semibold uppercase tracking-[0.12em]" :style="{ color: 'var(--folio-text-muted)' }">Message</label>
                            <textarea id="c-message" v-model="form.message" rows="5" placeholder="Tell me about your project..." required :class="inputClass + ' resize-none'"
                                :style="{ borderColor: form.errors.message ? '#f87171' : 'var(--folio-border)', background: 'var(--folio-bg-input)', color: 'var(--folio-text-primary)' }" />
                            <p v-if="form.errors.message" class="text-xs text-red-400">{{ form.errors.message }}</p>
                        </div>
                        <button type="submit" :disabled="form.processing" class="folio-btn-primary w-full justify-center disabled:opacity-50 sm:w-auto">
                            {{ form.processing ? 'Sending...' : 'Send message' }}
                            <ArrowUpRight v-if="!form.processing" class="h-4 w-4" />
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    </section>
</template>
