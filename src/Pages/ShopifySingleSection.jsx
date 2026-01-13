import { lazy, Suspense, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SimpleLoader from '../Components/Loader/NormalLoader';
import InteractiveSectionLoader from '../Components/Loader/InteractiveSectionLoader';
import axios from 'axios';

const AppShowcaseSection = lazy(
  () => import('../Components/ShopifySingleSection/AppShowcaseSection')
);

const FeatureDocumentationSection = lazy(
  () => import('../Components/ShopifySingleSection/FeatureDocumentationSection')
);

const TrendingSections = lazy(() => import('../Components/ShopifySingleSection/TrendingSections'));

// Animation variants for smooth transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const loaderVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

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

        // Small delay to ensure smooth transition
        await new Promise((resolve) => setTimeout(resolve, 100));

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

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            padding: '200px 0 100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
          }}
        >
          <SimpleLoader />
        </motion.div>
      ) : error ? (
        <motion.div
          key="error"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ padding: '200px 0 100px', textAlign: 'center' }}
        >
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
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a3dd5';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#6a47ed';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Retry
          </button>
        </motion.div>
      ) : !pageData ? (
        <motion.div
          key="no-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ padding: '200px 0 100px', textAlign: 'center' }}
        >
          <p>No content available.</p>
        </motion.div>
      ) : (
        <motion.main
          key="content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ width: '100%' }}
        >
          <Suspense fallback={<InteractiveSectionLoader />}>
            <AnimatePresence>
              {pageData.appShowcase && (
                <motion.div
                  key="appShowcase"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                >
                  <AppShowcaseSection data={pageData.appShowcase} />
                </motion.div>
              )}
              {pageData.featureDocumentation && (
                <motion.div
                  key="featureDocumentation"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                >
                  <FeatureDocumentationSection data={pageData.featureDocumentation} />
                </motion.div>
              )}
              <motion.div
                key="trending"
                variants={sectionVariants}
                initial="initial"
                animate="animate"
              >
                <TrendingSections />
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default memo(ShopifySingleSection);
