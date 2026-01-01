import { lazy, Suspense, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleLoader from '../Components/Loader/NormalLoader';
import axios from 'axios';

const AppShowcaseSection = lazy(
  () => import('../Components/ShopifySingleSection/AppShowcaseSection')
);

const FeatureDocumentationSection = lazy(
  () => import('../Components/ShopifySingleSection/FeatureDocumentationSection')
);

const TrendingSections = lazy(() => import('../Components/ShopifySingleSection/TrendingSections'));

function ShopifySingleSection() {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Determine the JSON file path based on slug
        // If no slug provided, use a default or show error
        if (!slug) {
          setError('No section specified. Please provide a section slug in the URL.');
          setLoading(false);
          return;
        }

        // Fetch JSON data based on slug
        const response = await axios.get(`/assets/data/shopify-sections/${slug}.json`);

        if (response.data) {
          setPageData(response.data);
        } else {
          setError('Section data not found.');
        }
      } catch (err) {
        console.error('Error fetching section data:', err);
        setError(
          `Failed to load section data for "${slug}". Please check if the JSON file exists at /assets/data/shopify-sections/${slug}.json`
        );
        setPageData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);

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
        <p style={{ color: '#dc3545', marginBottom: '20px' }}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6a47ed',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 600,
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div style={{ padding: '200px 0 100px', textAlign: 'center' }}>
        <p>No content available.</p>
      </div>
    );
  }

  return (
    <main>
      <Suspense fallback={<div className="loading">Loading sections...</div>}>
        {pageData.appShowcase && <AppShowcaseSection data={pageData.appShowcase} />}
        {pageData.featureDocumentation && (
          <FeatureDocumentationSection data={pageData.featureDocumentation} />
        )}
        {pageData.trendingSections && (
          <TrendingSections data={pageData.trendingSections.allSections} />
        )}
      </Suspense>
    </main>
  );
}

export default memo(ShopifySingleSection);
