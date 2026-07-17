<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Send, Mail, MapPin, CheckCircle, ArrowRight } from '@lucide/vue';
import { motion } from 'motion-v';
import SectionContainer from '@/components/layout/SectionContainer.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { personalInfo } from '@/data/portfolio';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { prefersReducedMotion } = useReducedMotion();

const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const submitted = ref(false);

function submit() {
    form.post('/contact', {
        preserveScroll: true,
        onSuccess: () => {
            submitted.value = true;
            form.reset();
        },
    });
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
</script>

<template>
    <SectionContainer id="contact" class="py-20 md:py-28">
        <!-- Background accent -->
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
            <div class="contact-bg-glow absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl" />
        </div>

        <motion.div
            :variants="prefersReducedMotion ? undefined : containerVariants"
            initial="hidden"
            while-in-view="visible"
            :viewport="{ once: true, margin: '-100px' }"
            class="relative z-10"
        >
            <!-- Header -->
            <motion.div :variants="prefersReducedMotion ? undefined : itemVariants" class="text-center">
                <span class="section-label">Contact</span>
                <h2 class="section-heading mt-3">Let's Work Together</h2>
                <p class="mt-3 mx-auto max-w-xl text-muted-foreground">
                    Have a project in mind or looking for a developer? Drop me a message and I'll get back to you shortly.
                </p>
            </motion.div>

            <div class="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-12">

                <!-- Sidebar info -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="flex flex-col gap-5 lg:col-span-2"
                >
                    <!-- Direct email card -->
                    <a
                        :href="`mailto:${personalInfo.email}`"
                        class="contact-info-card group flex items-center gap-4 rounded-2xl border border-border/50 bg-muted/20 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-muted/30"
                    >
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                            <Mail class="h-5 w-5 text-accent" />
                        </div>
                        <div class="overflow-hidden">
                            <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                            <p class="truncate text-sm font-medium text-foreground">{{ personalInfo.email }}</p>
                        </div>
                        <ArrowRight class="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </a>

                    <!-- Location card -->
                    <div class="flex items-center gap-4 rounded-2xl border border-border/50 bg-muted/20 p-5">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                            <MapPin class="h-5 w-5 text-accent" />
                        </div>
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                            <p class="text-sm font-medium text-foreground">{{ personalInfo.location }}</p>
                        </div>
                    </div>

                    <!-- Social links -->
                    <div class="rounded-2xl border border-border/50 bg-muted/20 p-5">
                        <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Find me online</p>
                        <div class="flex flex-col gap-3">
                            <a
                                :href="personalInfo.socialLinks.find(l => l.platform === 'linkedin')?.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-3 rounded-xl p-2 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                            >
                                <!-- LinkedIn icon -->
                                <svg class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                :href="personalInfo.socialLinks.find(l => l.platform === 'github')?.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center gap-3 rounded-xl p-2 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                            >
                                <!-- GitHub icon -->
                                <svg class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <!-- Response note -->
                    <div class="rounded-2xl border border-accent/20 bg-accent/5 p-4">
                        <p class="text-xs text-accent">
                            ⚡ Usually responds within 24 hours
                        </p>
                    </div>
                </motion.div>

                <!-- Form -->
                <motion.div
                    :variants="prefersReducedMotion ? undefined : itemVariants"
                    class="lg:col-span-3"
                >
                    <!-- Success state -->
                    <div
                        v-if="submitted"
                        class="flex h-full flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center"
                    >
                        <CheckCircle class="mb-4 h-14 w-14 text-green-500" />
                        <h3 class="text-xl font-bold text-foreground">Message Sent!</h3>
                        <p class="mt-2 text-sm text-muted-foreground">
                            Thanks for reaching out. I'll get back to you soon.
                        </p>
                        <button
                            class="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                            @click="submitted = false"
                        >
                            Send another message
                        </button>
                    </div>

                    <!-- Form state -->
                    <form
                        v-else
                        class="rounded-2xl border border-border/50 bg-muted/20 p-6 md:p-8"
                        @submit.prevent="submit"
                    >
                        <div class="grid gap-5 sm:grid-cols-2">
                            <div class="space-y-2">
                                <Label for="contact-name" class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</Label>
                                <Input
                                    id="contact-name"
                                    v-model="form.name"
                                    placeholder="Your name"
                                    class="rounded-xl border-border/60 bg-background/60 focus:border-accent/50"
                                    :class="form.errors.name ? 'border-destructive' : ''"
                                    required
                                />
                                <p v-if="form.errors.name" class="text-xs text-destructive" role="alert">{{ form.errors.name }}</p>
                            </div>

                            <div class="space-y-2">
                                <Label for="contact-email" class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</Label>
                                <Input
                                    id="contact-email"
                                    v-model="form.email"
                                    type="email"
                                    placeholder="your@email.com"
                                    class="rounded-xl border-border/60 bg-background/60 focus:border-accent/50"
                                    :class="form.errors.email ? 'border-destructive' : ''"
                                    required
                                />
                                <p v-if="form.errors.email" class="text-xs text-destructive" role="alert">{{ form.errors.email }}</p>
                            </div>
                        </div>

                        <div class="mt-5 space-y-2">
                            <Label for="contact-subject" class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject</Label>
                            <Input
                                id="contact-subject"
                                v-model="form.subject"
                                placeholder="Project inquiry, job opportunity..."
                                class="rounded-xl border-border/60 bg-background/60 focus:border-accent/50"
                                :class="form.errors.subject ? 'border-destructive' : ''"
                                required
                            />
                            <p v-if="form.errors.subject" class="text-xs text-destructive" role="alert">{{ form.errors.subject }}</p>
                        </div>

                        <div class="mt-5 space-y-2">
                            <Label for="contact-message" class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</Label>
                            <Textarea
                                id="contact-message"
                                v-model="form.message"
                                placeholder="Tell me about your project or what you're looking for..."
                                rows="5"
                                class="rounded-xl border-border/60 bg-background/60 focus:border-accent/50 resize-none"
                                :class="form.errors.message ? 'border-destructive' : ''"
                                required
                            />
                            <p v-if="form.errors.message" class="text-xs text-destructive" role="alert">{{ form.errors.message }}</p>
                        </div>

                        <div class="mt-6">
                            <button
                                type="submit"
                                :disabled="form.processing"
                                class="hero-cta-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 disabled:opacity-60 sm:w-auto"
                            >
                                <Send class="h-4 w-4" />
                                {{ form.processing ? 'Sending...' : 'Send Message' }}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    </SectionContainer>
</template>
