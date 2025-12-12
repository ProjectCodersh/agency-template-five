import { useEffect, memo } from 'react';
import parse from 'html-react-parser';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Counter4 = () => {
  const heading = {
    subtitle: 'Page Builders',
    title: ' Seamless integration <br/> with page builders',
    content: '',
    img: '/assets/img/feature-img.png',
  };

  const builders = [
    {
      img: '/assets/img/pagebuilder/builder13.webp',
      title: 'PageFly',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder14.webp',
      title: 'Klaviyo',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder16.webp',
      title: 'Shopify Flow',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder17.webp',
      title: 'Bold Commerce',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder18.webp',
      title: 'Instafeed',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder19.webp',
      title: 'Recharge',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder20.webp',
      title: 'Loox',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder21.webp',
      title: 'Rebuy',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder23.webp',
      title: 'REVIEWS',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder24.webp',
      title: 'Yotpo',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
  ];
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="feature-secton section-padding fix" style={{ backgroundColor: '#f6f3fe' }}>
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp" style={{ backgroundColor: '#384bff1a' }}>
              <span>{heading.subtitle}</span>
            </div>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(heading.title)}
            </h2>
          </div>

          {heading.content && (
            <p className="wow fadeInUp" data-wow-delay=".5s">
              {parse(heading.content)}
            </p>
          )}
        </div>

        <div className="row">
          {builders.map((item, index) => (
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
                      className="brandsection-img pagebuilder-img"
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

export default memo(Counter4);
