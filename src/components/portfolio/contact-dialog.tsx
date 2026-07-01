'use client';

import { useMemo, useState } from 'react';
import type React from 'react';
import { toast } from 'sonner';

import { buttonClass } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactDialog({
  buttonLabel = 'Email me',
  className,
  variant = 'secondary',
}: {
  buttonLabel?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isFormValid = useMemo(
    () => form.name.trim() !== '' && form.email.trim() !== '' && form.message.trim() !== '' && validateEmail(form.email),
    [form.email, form.message, form.name]
  );

  async function handleSubmit() {
    if (!isFormValid) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send');

      toast.success('Message sent', {
        description: `I will reach out to you at ${form.email}.`,
      });
      setForm(initialForm);
      setEmailError('');
      setOpen(false);
    } catch {
      toast.error('Message not sent', {
        description: 'Please try again or email japhethoruko@gmail.com directly.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={cn(buttonClass(variant), className)}>
          {buttonLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[94vh] overflow-y-auto p-0 sm:max-w-2xl">
        <DialogHeader className="sticky top-0 z-10 gap-1 border-b border-line bg-background/95 p-4 pr-14 backdrop-blur">
          <p className="font-mono text-xs uppercase text-muted-text">Contact form</p>
          <DialogTitle className="text-lg">Send me a message</DialogTitle>
          <DialogDescription>
            Use this form for product design, frontend, PixeSci, or portfolio-related opportunities. Email and Calendly remain available as direct options.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 p-4 sm:p-6">
          <Field id="contact-name" label="Name" required>
            <Input
              id="contact-name"
              value={form.name}
              onChange={event => setForm({ ...form, name: event.target.value })}
              autoComplete="name"
              required
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="contact-email" label="Email" required error={emailError}>
              <Input
                id="contact-email"
                value={form.email}
                type="email"
                onChange={event => {
                  const value = event.target.value;
                  setForm({ ...form, email: value });
                  setEmailError(value && !validateEmail(value) ? 'Invalid email format' : '');
                }}
                autoComplete="email"
                required
              />
            </Field>
            <Field id="contact-phone" label="Phone">
              <Input
                id="contact-phone"
                value={form.phone}
                onChange={event => setForm({ ...form, phone: event.target.value })}
                autoComplete="tel"
              />
            </Field>
          </div>

          <Field id="contact-message" label="Message" required>
            <Textarea
              id="contact-message"
              value={form.message}
              onChange={event => setForm({ ...form, message: event.target.value })}
              className="min-h-36 resize-y"
              required
            />
          </Field>

          <button type="button" className={buttonClass('primary')} disabled={!isFormValid || loading} onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-brand"> *</span>}
      </Label>
      {children}
      {error && <span className="mt-1 block text-xs text-red-300">{error}</span>}
    </div>
  );
}
