/**
 * Environment variable validation
 * Ensures all required environment variables are present at build time
 */

const requiredEnvVars = [
  'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
  'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
  'NEXT_PUBLIC_EMAILJS_USER_ID',
] as const;

interface Env {
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
  NEXT_PUBLIC_EMAILJS_USER_ID: string;
  VERCEL_TOKEN?: string;
}

function validateEnv(): Env {
  const missing: string[] = [];

  // Check required variables
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.map(v => `  - ${v}`).join('\n')}\n\nPlease add them to your .env.local file.`
    );
  }

  return {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
    VERCEL_TOKEN: process.env.VERCEL_TOKEN,
  };
}

// Validate on module load (build time)
export const env = validateEnv();

// Helper to check if we're in development
export const isDev = process.env.NODE_ENV === 'development';

// Helper to check if we're in production
export const isProd = process.env.NODE_ENV === 'production';
