import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ShopifySectionsCard from '../ShopifySections/ShopifySectionsCard';

const TrendingSections = ({ data }) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to randomly select sections
  const getRandomSections = useCallback((allSections, count = 3) => {
    if (!allSections || allSections.length === 0) return [];

    // Create a copy of the array to avoid mutating the original
    const shuffled = [...allSections].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }, []);

  // Fetch sections data if not provided
  useEffect(() => {
    const fetchSections = async () => {
      // If data is provided as prop, use it
      if (data && Array.isArray(data) && data.length > 0) {
        const randomSections = getRandomSections(data, 3);
        setSections(randomSections);
        setLoading(false);
        return;
      }

      // Otherwise, fetch from JSON file
      try {
        const response = await axios.get('/assets/data/shopify-sections/ShopifySectionsData.json');
        const sectionsData = response.data.ShopifySectionsPage?.find(
          (section) => section.ShopifySectionsCard
        );

        if (sectionsData?.ShopifySectionsCard) {
          const randomSections = getRandomSections(sectionsData.ShopifySectionsCard, 3);
          setSections(randomSections);
        }
      } catch (error) {
        console.error('Error fetching trending sections:', error);
        // Fallback to default sections if fetch fails
        setSections([
          {
            id: '33',
            headertag: 'Shopify Section',
            img: '/assets/img/shopify-sections/section-22.png',
            sectiontitle: 'Featured Collection',
            sectiondescription:
              'Bring attention to selected collections to guide customers toward your most important products.',
            sectionbtn: 'View Section',
            link: '#',
          },
          {
            id: '6',
            headertag: 'Shopify Section',
            img: '/assets/img/shopify-sections/section-9.png',
            sectiontitle: 'Collection Grid',
            sectiondescription:
              'Showcase products in a structured grid layout that keeps your collections organized and visually appealing.',
            sectionbtn: 'View Section',
            link: '#',
          },
          {
            id: '30',
            headertag: 'Shopify Section',
            img: '/assets/img/shopify-sections/section-19.png',
            sectiontitle: 'Image with Text Scroll',
            sectiondescription:
              'Tell engaging product or brand stories by combining images with smoothly scrolling text sections.',
            sectionbtn: 'View Section',
            link: '#',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [data, getRandomSections]);

  return (
    <section className="trending-sections section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}

        <div className="section-title-area mb-4">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>Trending Sections</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Other Shopify Sections
            </h2>
          </div>
          <div className="main-button wow fadeInUp" data-wow-delay=".3s">
            <a href="/new-services/cms/shopify-sections" data-discover="true">
              {' '}
              <span className="theme-btn">Explore All</span>
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        {loading ? (
          <div className="text-center py-5">
            <div className="loading">Loading trending sections...</div>
          </div>
        ) : sections.length > 0 ? (
          <div className="row g-4 justify-content-center mt-4">
            {sections.map((section, index) => (
              <div key={section.id || index} className="col-12 col-md-6 col-lg-4 d-flex">
                <ShopifySectionsCard section={section} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p>No trending sections available.</p>
          </div>
        )}
      </div>

      <style>
        {`


          @media (max-width: 991px) {
            .section-title {
              font-size: 28px !important;
            }

            .section-header {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 20px;
            }

            .explore-all-link {
              align-self: flex-end;
            }
          }

          @media (max-width: 767px) {
            .section-title {
              font-size: 24px !important;
            }
          }

          @media (max-width: 575px) {
            .section-title {
              font-size: 22px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

TrendingSections.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      headertag: PropTypes.string,
      img: PropTypes.string,
      sectiontitle: PropTypes.string,
      sectiondescription: PropTypes.string,
      sectionbtn: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  exploreAllLink: PropTypes.string,
};

TrendingSections.defaultProps = {
  data: null,
  exploreAllLink: '/shopify-sections',
};

export default TrendingSections;
