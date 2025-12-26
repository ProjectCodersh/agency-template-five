# Sanity CMS Deployment & Real-time Updates Setup Guide

## Overview

This guide explains how to configure your Sanity CMS integration for production deployment with real-time content updates.

## What Has Been Configured

### ✅ 1. Environment-Based Configuration

- **File**: `src/sanityClient.js`
- The Sanity client now uses environment variables instead of hardcoded values
- Supports both CDN (fast, cached) and real-time (live updates) modes
- Two clients are exported:
  - `sanityClient`: Uses CDN for fast, cached responses (production default)
  - `sanityClientRealtime`: Bypasses CDN for real-time updates

### ✅ 2. Real-time Content Updates

- **File**: `src/Pages/ShopifyDynamicServices.jsx`
- Added real-time subscription support using Sanity's `listen` API
- Content automatically updates when changes are published in Sanity
- Includes error handling and cleanup on component unmount

### ✅ 3. Environment Variables

- **File**: `.gitignore` (updated to exclude `.env` files)
- All sensitive configuration moved to environment variables

## Setup Instructions

### Step 1: Create Environment File

Create a `.env` file in your project root with the following variables:

```env
# Required: Your Sanity Project ID
VITE_SANITY_PROJECT_ID=your-project-id-here

# Required: Your Sanity Dataset name
VITE_SANITY_DATASET=production

# Optional: API Version (default: 2025-01-01)
VITE_SANITY_API_VERSION=2025-01-01

# Optional: Use CDN (default: true)
# Set to 'false' to disable CDN for real-time updates
VITE_SANITY_USE_CDN=true

# Optional: Enable real-time updates (default: false)
# Set to 'true' to enable live content updates
VITE_SANITY_REALTIME=false

# Optional: API Token (only for private datasets)
VITE_SANITY_TOKEN=
```

### Step 2: Get Your Sanity Project ID

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Find your **Project ID** in the project settings
4. Copy it to `VITE_SANITY_PROJECT_ID` in your `.env` file

### Step 3: Configure Dataset

- **Production**: Use `production` dataset for live site
- **Development**: Use `development` dataset for testing
- Set `VITE_SANITY_DATASET` accordingly

### Step 4: Enable Real-time Updates (Optional)

To enable real-time content updates:

1. Set `VITE_SANITY_REALTIME=true` in your `.env` file
2. Set `VITE_SANITY_USE_CDN=false` (real-time requires CDN to be disabled)
3. Restart your development server

**Note**: Real-time updates are great for development but may impact performance in production. Consider:

- **Development**: Enable real-time for instant preview
- **Production**: Disable real-time and use CDN for better performance

### Step 5: API Token (If Needed)

Only required if:

- Your dataset is private
- You need to access draft content
- You're using custom permissions

To get a token:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project → API → Tokens
3. Create a new token with "Viewer" permissions
4. Add it to `VITE_SANITY_TOKEN` in your `.env` file

## Deployment Checklist

### Before Deploying to Production:

- [ ] Create `.env.production` file with production values
- [ ] Set `VITE_SANITY_PROJECT_ID` to your production project ID
- [ ] Set `VITE_SANITY_DATASET` to `production`
- [ ] Set `VITE_SANITY_USE_CDN=true` for better performance
- [ ] Set `VITE_SANITY_REALTIME=false` (unless you specifically need it)
- [ ] Verify your Sanity project is deployed and accessible
- [ ] Test the connection in production environment

### Platform-Specific Deployment

#### Vercel

1. Go to Project Settings → Environment Variables
2. Add all `VITE_SANITY_*` variables
3. Redeploy your application

#### Netlify

1. Go to Site Settings → Environment Variables
2. Add all `VITE_SANITY_*` variables
3. Redeploy your application

#### Other Platforms

- Add environment variables in your hosting platform's dashboard
- Ensure variables are prefixed with `VITE_` (required for Vite)
- Restart/redeploy after adding variables

## How Real-time Updates Work

When `VITE_SANITY_REALTIME=true`:

1. **Initial Load**: Page loads content from Sanity CDN (fast)
2. **Subscription**: Component subscribes to document changes
3. **Live Updates**: When content is published in Sanity, the page automatically updates
4. **No Refresh Needed**: Users see changes without refreshing the page

### Performance Considerations

- **With CDN** (`VITE_SANITY_USE_CDN=true`): Fast, cached responses (~50-100ms)
- **Without CDN** (`VITE_SANITY_USE_CDN=false`): Direct API calls (~200-500ms)
- **Real-time**: Adds WebSocket connection overhead (~10-50KB)

**Recommendation**:

- Production: Use CDN, disable real-time
- Development: Enable real-time for instant preview

## Troubleshooting

### Content Not Loading

1. Check browser console for errors
2. Verify `VITE_SANITY_PROJECT_ID` is correct
3. Verify `VITE_SANITY_DATASET` exists in your Sanity project
4. Check Sanity project is deployed (not just in draft)

### Real-time Not Working

1. Ensure `VITE_SANITY_REALTIME=true`
2. Ensure `VITE_SANITY_USE_CDN=false`
3. Check browser console for subscription errors
4. Verify your Sanity project allows real-time subscriptions

### CORS Errors

- Sanity CDN should handle CORS automatically
- If issues persist, check Sanity project CORS settings

## Security Notes

- ✅ Never commit `.env` files (already in `.gitignore`)
- ✅ Use different project IDs for development/production
- ✅ API tokens are optional but should be kept secret
- ✅ Public datasets don't require tokens

## Next Steps

1. Create your `.env` file with your Sanity credentials
2. Test locally with `npm run dev`
3. Configure production environment variables
4. Deploy and verify content loads correctly
5. (Optional) Enable real-time updates for development

## Support

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Client Documentation](https://www.sanity.io/docs/js-client)
- [Real-time Subscriptions](https://www.sanity.io/docs/realtime)
