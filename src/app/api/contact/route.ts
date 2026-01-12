// src/app/api/contact/route.ts
// API Route (App Router) for handling contact form submissions.
// This file runs on the server by default in Next.js 13+ App Router and must
// NOT include the "use client" directive. It does not access browser-only APIs
// or React hooks; it parses JSON and sends an email via Resend.
//
// What this endpoint does:
// - Accepts POST requests with JSON body: { name, email, phone?, message }.
// - Validates required fields (name, email, message) and returns 400 on error.
// - Sends a notification email using Resend to japhethoruko@gmail.com with replyTo set
//   to the sender's email, so recipients can respond directly.
// - Returns a JSON success payload if the email was queued/sent by Resend.
//
// Configuration:
// - Requires RESEND_API_KEY in the environment (e.g., .env.local) for the
//   Resend SDK to authenticate. Without it, send will fail at runtime.
///
// Security and operations notes (future improvements):
// - Consider adding server-side email validation and input length limits to
//   mitigate abuse and oversized payloads.
// - Add simple anti-spam measures (honeypot field, rate limiting, CAPTCHA).
// - Log with a structured logger and avoid echoing untrusted data in logs.
// - If exposing this publicly, consider CORS controls if used cross-origin.

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Handle POST /api/contact
 *
 * Request body (JSON):
 * - name: string (required)
 * - email: string (required)
 * - phone: string (optional)
 * - message: string (required)
 *
 * Responses:
 * - 200: { success: true, result: ResendResponse }
 * - 400: { error: 'Missing required fields' }
 * - 500: { error: 'Failed to send email', details?: string }
 */
export async function POST(req: Request) {
  try {
    // Parse incoming JSON; Next.js provides the Request object in the App Router.
    const data = await req.json();

    const { name, email, phone, message } = data;

    // Basic required-field validation. The client also validates but the server
    // must enforce this to ensure integrity when called directly.
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email via Resend. "to" must be an array. We use replyTo so the
    // recipient can reply directly to the sender's address.
    const result = await resend.emails.send({
      from: '"Japheth Oruko Portfolio" <onboarding@resend.dev>', // Resend verified email
      to: 'japhethoruko@gmail.com', // your personal inbox
      subject: '📩 New Contact from Japheth Oruko Portfolio Website',
      replyTo: email, // sender can reply directly
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #111;">
      <h1 style="color:#0b5ed7; margin-bottom:16px;">New Contact Form Submission</h1>
      <p>Hello Japheth,</p>
      <p>You have received a new message through your <strong>Portfolio Website</strong> contact form.</p>

      <table style="width:100%; border-collapse: collapse; margin-top:16px;">
        <tr>
          <td style="font-weight:bold; padding:8px; border:1px solid #ddd;">Name:</td>
          <td style="padding:8px; border:1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="font-weight:bold; padding:8px; border:1px solid #ddd;">Email:</td>
          <td style="padding:8px; border:1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="font-weight:bold; padding:8px; border:1px solid #ddd;">Phone:</td>
          <td style="padding:8px; border:1px solid #ddd;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="font-weight:bold; padding:8px; border:1px solid #ddd;">Message:</td>
          <td style="padding:8px; border:1px solid #ddd;">${message}</td>
        </tr>
      </table>

      <p style="margin-top:16px;">You can reply directly to the sender by clicking reply.</p>
    </div>
  `,
    });

    // Return the result from Resend (useful for debugging in development).
    return Response.json({ success: true, result });
  } catch (error: any) {
    // Avoid leaking sensitive internals; include message for observability.
    console.error('Contact API Error:', error);
    return Response.json(
      {
        error: 'Failed to send email',
        details: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
