import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

/*--- Reusable SVG Icon Component  --*/
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064Z"
      fill="#6A47ED"
    />
  </svg>
);

/*--- Main Component  --*/
const RightContentBox = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // If no data is provided, don't render the block at all
  if (!data) return null;

  const { bg, subtitle, title, content, img, features = [], buttonText, buttonLink } = data;

  // If there is effectively no content, don't render the block
  const hasTextContent = subtitle || title || content;
  const hasFeatures = Array.isArray(features) && features.length > 0;
  const hasButton = buttonText && buttonLink;
  const hasImage = !!img;

  if (!hasTextContent && !hasFeatures && !hasButton && !hasImage) {
    return null;
  }

  // 🔹 Split features into two columns
  const midIndex = Math.ceil(features.length / 2);
  const leftColumn = features.slice(0, midIndex);
  const rightColumn = features.slice(midIndex);

  // Background image: if bg is true (toggle enabled), use default path; otherwise no background
  const backgroundImage = bg === true ? '/assets/img/team/team-bg.jpg' : '';

  return (
    <section
      className="team-section fix section-padding bg-cover"
      data-background={backgroundImage}
    >
      <div className="container px-3">
        <div className="team-wrapper style-3">
          <div className="row g-4">
            {/* LEFT IMAGE */}
            {hasImage && (
              <div className="col-lg-6 text-center ">
                <img
                  src={img}
                  alt="Hire Shopify Developer"
                  className="wow img-custom-anim-left img-fluid"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                  loading="lazy"
                />
              </div>
            )}

            {/* RIGHT CONTENT */}
            <div className="col-lg-6 ">
              <div className="team-content">
                {(subtitle || title) && (
                  <div className="section-title">
                    {subtitle && (
                      <div className="sub-title bg-color-2 wow fadeInUp">
                        <span>{subtitle}</span>
                      </div>
                    )}
                    {title && (
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {title}
                      </h2>
                    )}
                  </div>
                )}

                {content && (
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    {parse(content)}
                  </p>
                )}

                {/* FEATURES LIST */}
                {hasFeatures && (
                  <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                    <ul>
                      {leftColumn.map((item) => (
                        <li key={item}>
                          <CheckIcon />
                          {parse(item)}
                        </li>
                      ))}
                    </ul>

                    <ul>
                      {rightColumn.map((item) => (
                        <li key={item}>
                          <CheckIcon />
                          {parse(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hasButton && (
                  <div
                    className="main-button wow fadeInUp mt-4"
                    data-wow-delay=".5s"
                    style={{ width: 'fit-content' }}
                  >
                    <Link to={buttonLink}>
                      <span className="theme-btn">{buttonText}</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightContentBox;
