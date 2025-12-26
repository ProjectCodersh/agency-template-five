import { createClient } from '@sanity/client';

// Get environment variables with fallbacks for development
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '8q2ol5vx';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-01-01';
// Use CDN in production for better performance, disable for real-time updates
const useCdn = import.meta.env.VITE_SANITY_USE_CDN !== 'false';
const token = import.meta.env.VITE_SANITY_TOKEN || undefined; // Optional: for private datasets

// Main client for fetching data (uses CDN in production)
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn, // true = fast, cached, read-only (production), false = real-time (development)
  token, // Optional: only needed for private datasets
});

// Real-time client for live updates (bypasses CDN)
export const sanityClientRealtime = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Always false for real-time updates
  token,
  perspective: 'published', // Use 'published' for production, 'drafts' for preview mode
});
