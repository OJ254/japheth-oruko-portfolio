// src/app/about/About.tsx
'use client';

import React, { useState, useMemo } from 'react';
import {
  Divider,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from '@mui/material';

const contactInfo = [
  { label: 'Phone', value: '+254 739 134882' },
  { label: 'Email', value: 'japhethoruko@gmail.com' },
  { label: 'WhatsApp', value: '+254 739 134882' },
  { label: 'LinkedIn', value: '@japheth-oruko' },
];

export default function Contact() {
  // Form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    msg: string;
  } | null>(null);

  // Basic email validation
  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // Form validity
  const isFormValid = useMemo(() => {
    return (
      form.name.trim() !== '' &&
      form.email.trim() !== '' &&
      form.message.trim() !== '' &&
      validateEmail(form.email)
    );
  }, [form.name, form.email, form.message]);

  // Handle form submit
  const handleSubmit = async () => {
    if (!isFormValid) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus({
        type: 'success',
        msg: `Your message has been sent successfully. I’ll reach out to you at ${form.email}.`,
      });

      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        msg: 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className='flex h-full flex-col gap-8'>
      {/* Contact Info Section */}
      <div>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>Get in Touch</span>
          </Typography>
        </div>
        <Divider className='w-full' />

        <div className='flex h-full w-full flex-col justify-between space-y-3 p-8 pb-0'>
          <div className='grid gap-x-8 md:grid-cols-2'>
            {contactInfo.map((item, index) => (
              <div key={index} className='mt-4 space-y-4'>
                <div className='flex w-full justify-between gap-4'>
                  <Typography
                    variant='body2'
                    className='bg-primary-color max-h-max w-full max-w-max rounded-sm px-2 py-1 text-white'
                  >
                    {item.label}:
                  </Typography>
                  <Typography variant='body2'>{item.value}</Typography>
                </div>
                {index < contactInfo.length && <Divider className='w-full' />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>Contact Form</span>
          </Typography>
        </div>
        <Divider className='w-full' />

        <div className='w-full space-y-6 p-8'>
          {status && <Alert severity={status.type}>{status.msg}</Alert>}

          <TextField
            label='Name'
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            className='w-full bg-blue-500/10 dark:bg-purple-500/5'
          />

          <div className='flex flex-col gap-6 md:flex-row'>
            <TextField
              label='Email'
              value={form.email}
              onChange={e => {
                const value = e.target.value;
                setForm({ ...form, email: value });

                if (!validateEmail(value))
                  setEmailError('Invalid email format');
                else setEmailError('');
              }}
              required
              error={!!emailError}
              helperText={emailError}
              className='w-full bg-blue-500/10 dark:bg-purple-500/5'
            />

            <TextField
              label='Phone (optional)'
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className='w-full bg-blue-500/10 dark:bg-purple-500/5'
            />
          </div>

          <TextField
            multiline
            rows={4}
            label='Message'
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
            className='w-full bg-blue-500/10 dark:bg-purple-500/5'
          />

          <Button
            variant='contained'
            className='bg-primary-color w-full py-3'
            disabled={!isFormValid || loading}
            onClick={handleSubmit}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </div>
    </Box>
  );
}
