/**
 * serviceDataLoader.js
 *
 * Central registry that maps URL slugs to their JSON data files.
 * Add a new entry here whenever you create a new service page.
 *
 * Usage:
 *   import { getServiceData } from '../data/serviceDataLoader';
 *   const data = await getServiceData('seo-services');
 */

// Registry: slug → dynamic import of the JSON file
const SERVICE_REGISTRY = {
  'seo-service': () => import('./seo-services.json'),
  'social-media-management-service': () => import('./social-media-management.json'),
  'meta-ads-service': () => import('./meta-ads-services.json'),
};

/**
 * Load page data for a given slug.
 * Returns null if the slug is not registered.
 */
export async function getServiceData(slug) {
  const loader = SERVICE_REGISTRY[slug];
  if (!loader) return null;
  const module = await loader();
  // Vite/webpack wraps JSON in a default export
  return module.default ?? module;
}

/**
 * Get all registered slugs (useful for static generation / sitemap).
 */
export function getAllServiceSlugs() {
  return Object.keys(SERVICE_REGISTRY);
}
