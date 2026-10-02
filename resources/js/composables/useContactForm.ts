import { reactive } from 'vue';
import { personalInfo } from '@/data/portfolio';

type Field = 'name' | 'email' | 'subject' | 'message';

/**
 * Contact form that emails submissions via FormSubmit (https://formsubmit.co),
 * so it works on static hosting like GitHub Pages — no backend required.
 * The very first submission triggers a one-time activation email to the inbox.
 */
const endpoint = `https://formsubmit.co/ajax/${personalInfo.email}`;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
    const form = reactive({
        name: '',
        email: '',
        subject: '',
        message: '',
        /** Honeypot — real people never fill this hidden field. */
        botcheck: '',
        processing: false,
        errors: {} as Partial<Record<Field | 'form', string>>,
    });

    function validate(): boolean {
        const errors: typeof form.errors = {};

        if (!form.name.trim()) {
            errors.name = 'Please enter your name.';
        }

        if (!emailPattern.test(form.email.trim())) {
            errors.email = 'Please enter a valid email address.';
        }

        if (!form.subject.trim()) {
            errors.subject = 'Please enter a subject.';
        }

        if (form.message.length > 5000) {
            errors.message = 'Message must not exceed 5000 characters.';
        }

        form.errors = errors;

        return Object.keys(errors).length === 0;
    }

    function reset() {
        form.name = '';
        form.email = '';
        form.subject = '';
        form.message = '';
        form.errors = {};
    }

    /** Resolves true when the message was accepted. */
    async function submit(): Promise<boolean> {
        if (form.botcheck || !validate()) {
            return false;
        }

        form.processing = true;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    _subject: `Portfolio Contact: ${form.subject.trim()}`,
                    _replyto: form.email.trim(),
                    _template: 'table',
                    _captcha: 'false',
                    subject: form.subject.trim(),
                    message: form.message.trim() || '(no message)',
                }),
            });
            const data = (await response.json().catch(() => ({}))) as { success?: string | boolean };

            if (!response.ok || String(data.success) !== 'true') {
                throw new Error('Request failed');
            }

            reset();

            return true;
        } catch {
            form.errors = { form: `Something went wrong. Please email me directly at ${personalInfo.email}.` };

            return false;
        } finally {
            form.processing = false;
        }
    }

    return { form, submit };
}
