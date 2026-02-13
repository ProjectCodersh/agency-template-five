import { lazy, Suspense, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveSectionLoader from '../Components/Loader/InteractiveSectionLoader';
import { getCPTBySlug } from '../Api/wpapi';

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

        if (!slug) {
          setError('No section specified in URL.');
          return;
        }

        const post = await getCPTBySlug(slug);

        if (!post) {
          setError('Section not found.');
          return;
        }

        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

        const formattedData = {
          appShowcase: {
            title: post.title?.rendered || '',
            description: post.content?.rendered || post.excerpt?.rendered || '',
            badge: post.acf?.badge || 'Add to Your Store',

            appInfo: {
              icon: post.acf?.app_icon || '/assets/img/shopify-sections/app-icon.png',
              name: post.acf?.app_name || 'Shopify Section',
              subtext: post.acf?.app_subtext || 'Custom Shopify App',
              price: post.acf?.price || '$20.00',
            },

            features: Array.isArray(post.acf?.features)
              ? post.acf?.features.map((f) => (typeof f === 'string' ? f : f.feature))
              : [],

            ctaButton: {
              text: post.acf?.cta_text || 'Get This Section Free',
              link: `/shopify-sections/${post.slug}/get-code`,
            },

            featureIcons: post.acf?.feature_icons || [],

            // ⭐ THIS FIXES IMAGE WITHOUT TOUCHING DESIGN
            previews: featuredImage
              ? [
                  {
                    type: 'desktop',
                    image: featuredImage,
                    alt: post.title?.rendered || 'Preview',
                  },
                ]
              : [],
          },

          featureDocumentation: post.acf?.feature_documentation || null,
        };

        setPageData(formattedData);
      } catch (err) {
        console.error('API ERROR:', err);
        setError('Failed to load section data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div style={{ padding: '200px 0', textAlign: 'center' }}>
          <InteractiveSectionLoader />
        </motion.div>
      ) : error ? (
        <motion.div style={{ padding: '200px 0', textAlign: 'center', color: 'red' }}>
          {error}
        </motion.div>
      ) : (
        <motion.main style={{ width: '100%' }}>
          <Suspense fallback={null}>
            <AnimatePresence>
              {pageData?.appShowcase && <AppShowcaseSection data={pageData.appShowcase} />}

              {pageData?.featureDocumentation && (
                <FeatureDocumentationSection data={pageData.featureDocumentation} />
              )}

              <TrendingSections />
            </AnimatePresence>
          </Suspense>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default memo(ShopifySingleSection);
