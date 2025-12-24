import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleLoader from '../Components/Loader/NormalLoader';
import { renderSection } from '../Config/SectionRegistry';
import { sanityClient } from '../sanityClient';

/**
 * ShopifyDynamicServices - Dynamic page builder (Sanity powered)
 * Fetches page structure from Sanity and renders sections dynamically
 * Uses SectionRegistry for component mapping
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

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const data = await sanityClient.fetch(PAGE_QUERY, {
          slug: effectiveSlug,
        });

        setPageData(data);
      } catch (error) {
        console.error('Failed to load Shopify Dynamic Services page data from Sanity', error);
        setPageData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [effectiveSlug]);

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
