import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SimpleLoader from '../Components/Loader/NormalLoader';
import { renderSection } from '../Config/SectionRegistry';
import { sanityClient, sanityClientRealtime } from '../sanityClient';

/**
 * ShopifyDynamicServices - Dynamic page builder (Sanity powered)
 * Fetches page structure from Sanity and renders sections dynamically
 * Uses SectionRegistry for component mapping
 * Supports real-time content updates via Sanity's listen API
 */

const PAGE_QUERY = `
  *[_type == "page" && slug.current == $slug][0]{
    title,
    "pageTitle": title,
    "sections": sections[]{
      "type": _type,
      "data": {
        ...,
        // Convert image objects to URL strings (coalesce handles both image objects and string URLs)
        // For breadcrumb: extract URL or use default if null
        "bgimg": coalesce(bgimg.asset->url, "/assets/img/breadcrumb.jpg"),
        "bg": coalesce(bg.asset->url, bg),
        "img": coalesce(img.asset->url, img),
        "heading": heading {
          ...,
          "img": coalesce(heading.img.asset->url, heading.img)
        },
        "logos": logos[]{
          ...,
          "img": coalesce(img.asset->url, img)
        },
        "columns": columns[]{
          ...,
          "icon": coalesce(icon.asset->url, icon)
        }
      }
    }
  }
`;

const ShopifyDynamicServices = () => {
  const { slug } = useParams();
  const effectiveSlug = slug || 'shopify-dynamic-services';

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const subscriptionRef = useRef(null);
  const isRealtimeEnabled = import.meta.env.VITE_SANITY_REALTIME === 'true';

  // Initial fetch and real-time subscription
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Initial fetch using CDN client (faster)
        const data = await sanityClient.fetch(PAGE_QUERY, {
          slug: effectiveSlug,
        });

        setPageData(data);
        setLoading(false);

        // Set up real-time subscription if enabled
        if (isRealtimeEnabled && data?._id) {
          setupRealtimeSubscription(data._id);
        }
      } catch (err) {
        console.error('Failed to load Shopify Dynamic Services page data from Sanity', err);
        setError('Failed to load content. Please try again later.');
        setPageData(null);
        setLoading(false);
      }
    };

    fetchPageData();

    // Cleanup subscription on unmount or slug change
    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
    };
  }, [effectiveSlug, isRealtimeEnabled]);

  // Set up real-time subscription for live content updates
  const setupRealtimeSubscription = (documentId) => {
    // Clean up existing subscription
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
    }

    try {
      // Subscribe to changes for this specific page document
      subscriptionRef.current = sanityClientRealtime
        .listen(
          `*[_type == "page" && _id == $documentId][0]{
            title,
            "pageTitle": title,
            "sections": sections[]{
              "type": _type,
              "data": {
                ...,
                "bgimg": coalesce(bgimg.asset->url, "/assets/img/breadcrumb.jpg"),
                "bg": coalesce(bg.asset->url, bg),
                "img": coalesce(img.asset->url, img),
                "heading": heading {
                  ...,
                  "img": coalesce(heading.img.asset->url, heading.img)
                },
                "logos": logos[]{
                  ...,
                  "img": coalesce(img.asset->url, img)
                },
                "columns": columns[]{
                  ...,
                  "icon": coalesce(icon.asset->url, icon)
                }
              }
            }
          }`,
          { documentId },
          {
            // Include previous result for comparison
            includePreviousRevision: false,
          }
        )
        .subscribe((update) => {
          if (update.result) {
            // Update page data when content changes in Sanity
            setPageData(update.result);
            console.log('Content updated in real-time');
          }
        });
    } catch (err) {
      console.error('Failed to set up real-time subscription', err);
      // Don't break the app if real-time fails, just log the error
    }
  };

  if (loading) {
    return (
      <div
        style={{
          padding: '200px 0 100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SimpleLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '200px 0 100px', textAlign: 'center' }}>
        <p style={{ color: '#dc3545' }}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!pageData || !pageData.sections || !Array.isArray(pageData.sections)) {
    return (
      <div style={{ padding: '200px 0 100px', textAlign: 'center' }}>
        <p>No content available.</p>
      </div>
    );
  }

  return (
    <div>{pageData.sections.map((section, index) => renderSection(section, index, pageData))}</div>
  );
};

export default ShopifyDynamicServices;
