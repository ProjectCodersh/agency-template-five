import { useEffect, useState, memo, useCallback } from 'react';
import ShopifySectionsCard from './ShopifySectionsCard';
import InteractiveSectionLoader from '../Loader/InteractiveSectionLoader';
import { getAllShopifySections } from '../../Api/wpapi';

const ShopifySectionsContainer = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSections = useCallback(async () => {
    try {
      const data = await getAllShopifySections();

      const formattedSections = data.map((post) => ({
        headertag: post.acf?.headertag || 'Shopify Section',
        sectiontitle: post.title.rendered,
        sectiondescription: post.content.rendered,
        sectionbtn: post.acf?.sectionbtn || 'View Section',
        link: post.acf?.link || `/shopify-sections/${post.slug}`,
        img: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
      }));

      setSections(formattedSections);
    } catch (error) {
      console.error('Error fetching Shopify sections:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  if (loading) return <InteractiveSectionLoader />;
  if (sections.length === 0) return <div className="text-center py-5">No sections found.</div>;

  return (
    <section className="section-padding fix shopify-hero-section" aria-label="Shopify Sections">
      <div className="section-title-area text-center justify-content-center mb-4">
        <div className="section-title">
          <div className="sub-title">
            <span>CONVERSION-READY SECTIONS</span>
          </div>
          <h2>Browse Shopify Sections</h2>
          <p className="mt-2" style={{ borderLeft: 'none' }}>
            Explore our comprehensive library of premium, no-code Shopify sections.
          </p>
        </div>
      </div>

      <div className="container-fluid container-lg px-3 px-lg-0">
        <div className="row">
          {sections.map((section, index) => (
            <div className="col-12 col-md-6 col-xl-4 my-5 d-flex" key={index}>
              <ShopifySectionsCard section={section} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ShopifySectionsContainer);
