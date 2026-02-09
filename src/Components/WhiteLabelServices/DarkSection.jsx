import { useEffect, useState, useRef } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

const DarkSection = ({ data }) => {
  // 1. Add a ref to measure the actual height of the content
  const contentRef = useRef(null);

  // 2. State to handle the dynamic height value
  const [height, setHeight] = useState('650px');
  const [showAllItems, setShowAllItems] = useState(false);

  // Constants
  const MAX_VISIBLE_ITEMS = 4;
  const COLLAPSED_HEIGHT = 650; // The height when closed (approx 2 rows)

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // 3. This effect calculates the height whenever the toggle state changes
  useEffect(() => {
    if (!contentRef.current) return;

    if (showAllItems) {
      // If expanding, set height to the full scrollHeight of the content
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      // If collapsing, go back to the fixed height
      setHeight(`${COLLAPSED_HEIGHT}px`);
    }
  }, [showAllItems, data]); // specific dependency on data ensures recalculation if props change

  if (!data) return null;

  const { bg, heading = {}, items = [] } = data;
  const { subtitle, title } = heading;

  const hasHeading = subtitle || title;
  const hasItems = Array.isArray(items) && items.length > 0;
  const shouldShowToggle = hasItems && items.length > MAX_VISIBLE_ITEMS;

  // 4. IMPORTANT: Do NOT slice the items here. We must render ALL items
  // so they exist in the DOM to be animated.
  // We use CSS overflow to hide them instead.

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
            {/* 5. Apply the ref and the dynamic styles here.
              We animate the 'height' property. 
            */}
            <div
              ref={contentRef}
              className="row g-4 mt-2"
              style={{
                height: height, // Dynamic height
                overflow: 'hidden', // Hides the items that don't fit in the height
                transition: 'height 0.5s ease-in-out', // Smooth animation
              }}
            >
              {items.map((item, i) => (
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
                    cursor: 'pointer'
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