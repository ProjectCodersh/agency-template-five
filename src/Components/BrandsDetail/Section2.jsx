import { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';

const Section2 = ({ data }) => {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // const handleClick = () => {
  //   setIframeSrc(data.videoUrl);
  //   setToggle(true);
  // };

  const handleClose = () => {
    setIframeSrc('about:blank');
    setToggle(false);
  };

  return (
    <section
      className="cta-counter-section-3 fix section-bg section-padding bg-cover"
      data-background="/assets/img/cta-counter-bg.jpg"
    >
      <div className="container">
        <div className="cta-counter-wrapper-2">
          <div className="cta-video-image wow img-custom-anim-left" data-wow-delay=".3s">
            <img
              src={data.image}
              alt={data.image ? data.image.split('/').pop().split('.')[0] : ''}
            />
          </div>
        </div>
      </div>
      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handleClose} />
    </section>
  );
};

export default Section2;
