import { Link } from "react-router-dom";

const PricingCard = ({
  addclass,
  title,
  price,
  month,
  FeatureList,
  btnurl,
  btnname,
  description,
  showCollabLink,
  hideIcons,
  timing,
}) => {
  return (
    <div className={addclass}>
      <div className="pricing-header">
        <div className="content">
          <h4>{title}</h4>
          <h6 className="text-white mt-2">{timing}</h6>
          <h2>
            {price} <sub>/ {month}</sub>
          </h2>
        </div>
        {/* <div className="icon">
                    <img src="/assets/img/cloud.png" alt="img" />
                </div> */}
      </div>
      {/* <br /> */}

      <ul className="price-list">
        <h6 className="fw-bold mb-4">{description}</h6>
        {showCollabLink && (
          <Link
            to="/contact-us"
            className="collaborate-link mt-0"
          >
            <span>Let&#39;s Collaborate</span>
          </Link>
        )}

        {FeatureList?.map((item, index) => (
          <li key={index}>
            {!hideIcons && (
              <span className="price-1">
                <i className="bi bi-check-lg"></i> {item}
              </span>
            )}
            {/* <span className="icon"><i className="bi bi-question-circle"></i></span> */}
          </li>
        ))}
      </ul>
      <div className="price-button">
        {/* <Link to={btnurl} className="theme-btn">{btnname} </Link> */}
        {btnurl.startsWith('/') ? (
          <Link to={btnurl} className="theme-btn">
            {btnname}
          </Link>
        ) : (
          <a href={btnurl} className="theme-btn" target="_blank" rel="noopener noreferrer">
            {btnname}
          </a>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
