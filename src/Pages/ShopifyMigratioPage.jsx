import { useEffect, useState } from 'react';
import SimpleLoader from '../Components/Loader/NormalLoader';
import { renderSection } from '../Config/SectionRegistry';

/**
 * ShopifyMigratioPage - Dynamic page builder
 * Fetches page structure from JSON and renders sections dynamically
 * Uses SectionRegistry for component mapping
 */
const ShopifyMigratioPage = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await fetch('/assets/data/shopifymigration/page.json');
        if (!res.ok) throw new Error('Failed to load page data');
        const json = await res.json();
        setPageData(json);
      } catch (error) {
        console.error('Failed to load Shopify Migration page data', error);
        setPageData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

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

export default ShopifyMigratioPage;
