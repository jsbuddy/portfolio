"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

// Per-instance limiter: resets on redeploy and isn't shared across serverless
// instances, which is fine for keeping bots from draining the Resend quota.
const recentSends = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (recentSends.size > 1000) {
    for (const [key, times] of recentSends) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        recentSends.delete(key);
      }
    }
  }
  const timestamps = (recentSends.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    recentSends.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  recentSends.set(ip, timestamps);
  return false;
}

// prettier-ignore
export type ContactResult = { success: true } | { success: false; error: string };

export async function sendContactMessage(input: {
  name: string;
  email: string;
  message: string;
  company?: string;
}): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !toEmail) {
    return { success: false, error: "Contact form is not configured." };
  }
  // Honeypot: visitors never see this field, so a value means a bot.
  // Pretend it worked so the bot doesn't retry.
  if (input.company?.trim()) {
    return { success: true };
  }
  const name = input.name?.trim();
  const email = input.email?.trim();
  const message = input.message?.trim();
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }
  if (!emailPattern.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return { success: false, error: "Your message is too long." };
  }
  const headerList = await headers();
  // prettier-ignore
  const ip = (headerList.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (isRateLimited(ip)) {
    return {
      success: false,
      error: "Too many messages. Please try again in a few minutes.",
    };
  }
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Contact <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `New message from ${name} via judecod.es`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });
  if (error) {
    return {
      success: false,
      error: "Couldn't send your message. Please try again later.",
    };
  }
  return { success: true };
}
