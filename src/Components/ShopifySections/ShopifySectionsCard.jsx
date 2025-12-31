import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShopifySectionsCard = ({ section, index }) => {
  return (
    <>
      <style>
        {`
          .shopify-section-card-img {
            padding: 40px 20px 0 !important;
          }
          @media (min-width: 768px) {
            .shopify-section-card-img {
            padding: 30px 20px 0 !important;
            }
          }
          @media (min-width: 992px) {
            .shopify-section-card-img {
              padding: 40px 20px 0 !important;
            }
          }
        `}
      </style>
      <article
        className="svc-card h-100 position-relative"
        tabIndex={0}
        aria-labelledby={`section-title-${index}`}
      >
        <div className="svc-header-tag">{section.headertag || 'Shopify Section'}</div>
        {/* <div className="page-speed-badge">
          <span className="icon">
            <img
              src="/assets/img/check-mark.png"
              alt="check-mark-icon"
              height="20"
              className="me-1 mb-1"
            />
          </span>
          by MIT Sections Pro
        </div> */}

        <div className="svc-img shopify-section-card-img">
          <img
            src={section.img}
            alt={section.sectiontitle}
            loading="lazy"
            style={{ borderRadius: '20px 20px 0 0' }}
          />
        </div>

        <div className="svc-content">
          <h3 className="svc-title" id={`section-title-${index}`}>
            {section.sectiontitle}
          </h3>
          <p className="svc-description">{section.sectiondescription}</p>
          <Link
            className="svc-btn"
            to={section.link || '#'}
            aria-label={section.sectionbtn || 'View Section'}
          >
            {section.sectionbtn || 'View Section'}
          </Link>
        </div>
      </article>
    </>
  );
};

ShopifySectionsCard.propTypes = {
  section: PropTypes.shape({
    headertag: PropTypes.string,
    img: PropTypes.string,
    sectiontitle: PropTypes.string,
    sectiondescription: PropTypes.string,
    sectionbtn: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ShopifySectionsCard;
