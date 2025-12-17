import { useEffect, memo } from 'react';
import parse from 'html-react-parser';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const LogoSection = ({ data }) => {
  if (!data?.enabled) return null;

  const { styles, heading, builders } = data;

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="feature-secton section-padding fix"
      style={{ backgroundColor: styles?.sectionBgColor }}
    >
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            {heading?.subtitle && (
              <div
                className="sub-title wow fadeInUp"
                style={{ backgroundColor: styles?.chipBgColor }}
              >
                <span>{heading.subtitle}</span>
              </div>
            )}

            {heading?.title && (
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heading.title)}
              </h2>
            )}
          </div>

          {heading?.content && (
            <p className="wow fadeInUp" data-wow-delay=".5s">
              {parse(heading.content)}
            </p>
          )}
        </div>

        <div className="row">
          {builders?.map((item, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-6 wow fadeInUp"
              data-wow-delay={`${0.2 + (index % 4) * 0.1}s`}
            >
              <div className="service-box-items text-center flex-column brandsection-box">
                <div className="d-flex justify-content-center justify-content-md-start service-box-items-icon">
                  <div
                    className="d-flex justify-content-center align-items-center w-100"
                    style={{ fontSize: '40px', color: '#6a47ed', gap: '20px' }}
                  >
                    <img
                      className="brandsection-img"
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                    />
                    <h3 className="text-center text-md-start">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(LogoSection);
