import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '8q2ol5vx', // from sanity.config.ts
  dataset: 'production', // from sanity.config.ts
  apiVersion: '2025-01-01', // any YYYY-MM-DD; use a recent date
  useCdn: true, // true = fast, cached, read-only
});
