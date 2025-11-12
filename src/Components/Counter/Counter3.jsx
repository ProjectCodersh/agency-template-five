import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Counter3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cta-counter-section-3 fix section-bg section-padding bg-cover"
      data-background="/assets/img/cta-counter-bg.jpg"
    >
      <div className="container px-3">
        <div className="cta-counter-wrapper-2">
          {/* Title Area */}
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title bg-color-3 wow fadeInUp">
                <span>Why Hire Us</span>
              </div>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                We bring experience, clarity, and commitment to every project.
              </h2>
            </div>

            <div className="counter-box-area">
              <div className="counter-text wow fadeInUp" data-wow-delay=".3s">
                <p>
                  Since 2019, Codersh Web Services has helped businesses across the US, UK, Asia,
                  and the Netherlands grow through purposeful design, development, and digital
                  marketing.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div
            className="cta-video-image wow img-custom-anim-left row"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <div className="col-12 col-lg-8">
              <img src="/assets/img/team/aboutus-gallery-1.webp" alt="" />
            </div>
            <div className="col-12 col-lg-4 d-none d-lg-block">
              <img src="/assets/img/team/aboutus-gallery-2.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter3;
