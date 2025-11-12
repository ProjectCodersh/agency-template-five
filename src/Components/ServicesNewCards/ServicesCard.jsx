// === ServiceCard.jsx ===
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  return (
    <article
      className="svc-card h-100 position-relative"
      tabIndex={0}
      aria-labelledby={`svc-title-${index}`}
    >
      <div className="svc-header-tag">{service.headertag}</div>
      <div className="page-speed-badge">
        {/* <span className="icon">⚡</span>
                PageSpeed <span className="score">99</span> */}
        <span className="icon">
          <img
            src="/assets/img/check-mark.png"
            alt="check-mark-icon"
            height="20"
            className="me-1 mb-1"
          />
        </span>
        mail@domain.com
      </div>

      <div className="svc-img">
        <img src={service.img} alt={service.servicetitle} loading="lazy" />
      </div>

      <div className="svc-content">
        <h3 className="svc-title" id={`svc-title-${index}`}>
          {service.servicetitle}
        </h3>
        <p className="svc-description">{service.servicedescription}</p>
        <Link
          className="svc-btn"
          to="/services" // Adjust this path as needed
          // to={`/services/${service.slug}`}
          aria-label={service.servicebtn}
        >
          {service.servicebtn}
        </Link>
      </div>
    </article>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    headertag: PropTypes.string,
    img: PropTypes.string,
    servicetitle: PropTypes.string,
    servicedescription: PropTypes.string,
    servicebtn: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ServiceCard;
