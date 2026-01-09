import { useEffect, useState, memo, useCallback } from 'react';
import axios from 'axios';
import ShopifySectionsCard from './ShopifySectionsCard';

const ShopifySectionsContainer = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSections = useCallback(async () => {
    try {
      const response = await axios.get('/assets/data/shopify-sections/ShopifySectionsData.json');
      const sectionsData = response.data.ShopifySectionsPage?.find(
        (section) => section.ShopifySectionsCard
      );
      if (sectionsData?.ShopifySectionsCard) {
        setSections(sectionsData.ShopifySectionsCard);
      }
    } catch (error) {
      console.error('Error fetching Shopify sections:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  if (loading) return <div className="text-center py-5">Loading sections...</div>;
  if (sections.length === 0) return <div className="text-center py-5">No sections found.</div>;

  return (
    <section className="section-padding fix shopify-hero-section" aria-label="Shopify Sections">
      <div className="section-title-area text-center justify-content-center mb-4">
        <div className="section-title">
          <div className="sub-title wow fadeInUp">
            <span>CONVERSION-READY SECTIONS</span>
          </div>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Browse Shopify Sections
          </h2>
          <p className="wow fadeInUp mt-2" data-wow-delay=".5s" style={{ borderLeft: 'none' }}>
            Explore our comprehensive library of premium, no-code Shopify sections. Designed to
            increase engagement, boost AOV, and beautify your store instantly.
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
