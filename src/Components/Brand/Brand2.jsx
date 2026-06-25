import { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

const brandLogos = [
  '/assets/img/brand/reinventu-logo2-test.webp',
  '/assets/img/brand/500-logo-test.webp',
  '/assets/img/brand/chenchef-logo-test.webp',
  '/assets/img/brand/christianbookbag-logo-test.webp',
  '/assets/img/brand/anadian-logo-test.webp',
  '/assets/img/brand/berg-bat-logo.webp',
];

const Brand2 = () => {
  const trackRef = useRef(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      setSingleSetWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="brand-section-22">
      <div className="container">
        <div className="brand-wrapper-2">
          <h4 className="brand-title">1k + Brands Trust Us</h4>
          <div className="swiper brand-slider" style={{ overflow: 'hidden' }}>
            <motion.div
              ref={trackRef}
              style={{ display: 'flex', alignItems: 'center', willChange: 'transform' }}
              animate={singleSetWidth ? { x: [0, -singleSetWidth] } : {}}
              transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            >
              {[...brandLogos, ...brandLogos].map((src, index) => (
                <div key={index} className="swiper-slide" style={{ flex: '0 0 auto', padding: '0 30px' }}>
                  <div className="brand-img center brand-img-slider">
                    <img
                      src={src}
                      alt={`Trusted brand ${index + 1}`}
                      className="brand-trust-img"
                      style={{ maxHeight: '70px' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand2;
