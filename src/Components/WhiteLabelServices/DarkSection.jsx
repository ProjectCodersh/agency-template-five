import { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

/**
 * DarkSection
 * - Fully driven by `data` prop (no internal defaults)
 * - If no data or no items, returns null
 *
 * Expected `data` shape:
 * {
 *   "bg": "/assets/img/case-studies/bg.jpg",
 *   "heading": {
 *     "subtitle": "SHOPIFY SUBSCRIPTIONS",
 *     "title": "Benefits of Adding Subscriptions to Your Shopify Store"
 *   },
 *   "items": [
 *     {
 *       "title": "Enhancing Customer Experience",
 *       "content": "Adding subscriptions to your Shopify store creates a seamless shopping experience..."
 *     },
 *     ...
 *   ]
 * }
 */
const DarkSection = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const MAX_VISIBLE_ITEMS = 4;
  const [showAllItems, setShowAllItems] = useState(false);

  // If no data is provided, don't render the block at all
  if (!data) return null;

  const { bg, heading = {}, items = [] } = data;
  const { subtitle, title } = heading;

  const hasHeading = subtitle || title;
  const hasItems = Array.isArray(items) && items.length > 0;

  const shouldShowToggle = hasItems && items.length > MAX_VISIBLE_ITEMS;
  const visibleItems = showAllItems ? items : items.slice(0, MAX_VISIBLE_ITEMS);

  // If there is effectively no content, don't render the block
  if (!hasHeading && !hasItems) {
    return null;
  }

  return (
    <section
      className="case-studies-section-2 fix section-padding bg-cover"
      data-background={bg || '/assets/img/case-studies/bg.jpg'}
    >
      <div className="container px-3">
        {hasHeading && (
          <div className="section-title-area w-full d-flex justify-content-center align-items-center text-center">
            <div className="section-title">
              {subtitle && (
                <div className="sub-title wow fadeInUp text-white">
                  <span>{subtitle}</span>
                </div>
              )}
              {title && (
                <h2 className="wow fadeInUp text-white" data-wow-delay=".3s">
                  {parse(title)}
                </h2>
              )}
            </div>
          </div>
        )}

        {hasItems && (
          <>
            {/* Collapsible cards list */}
            <div
              className="row g-4 mt-2"
              style={{
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
                maxHeight: showAllItems ? '2000px' : '650px',
              }}
            >
              {visibleItems.map((item, i) => (
                <div
                  key={i}
                  className="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.1}s`}
                >
                  <div className="case-studies-items bor-top bor-bottom h-100">
                    <div className="content p-4">
                      {item.title && <h3 className="text-white mb-2">{parse(item.title)}</h3>}
                      {item.content && <p className="text-white-50">{parse(item.content)}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle button */}
            {shouldShowToggle && (
              <div className="d-flex justify-content-center mt-4">
                <button
                  type="button"
                  className="theme-btn"
                  onClick={() => setShowAllItems((prev) => !prev)}
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    border: '1px solid #ffffff',
                    padding: '10px 28px',
                    borderRadius: '30px',
                    fontWeight: 500,
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {showAllItems ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default DarkSection;
