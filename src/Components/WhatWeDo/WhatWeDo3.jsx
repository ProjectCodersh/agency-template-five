import { useEffect, memo } from 'react';
import parse from 'html-react-parser';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Counter4 = () => {
  const heading = {
    subtitle: 'Page Builders',
    title: ' Seamless integration <br/> with page builders',
    content: '', // Add content here if needed
    img: '/assets/img/feature-img.png',
  };

  const builders = [
    {
      img: '/assets/img/pagebuilder/builder1.webp',
      title: 'builder-one',
    },
    {
      img: '/assets/img/pagebuilder/builder2.webp',
      title: 'builder-two',
    },
    {
      img: '/assets/img/pagebuilder/builder3.webp',
      title: 'builder-three',
    },
    {
      img: '/assets/img/pagebuilder/builder4.webp',
      title: 'builder-four',
    },
    {
      img: '/assets/img/pagebuilder/builder5.webp',
      title: 'builder-five',
    },
    {
      img: '/assets/img/pagebuilder/builder6.webp',
      title: 'builder-six',
    },
    {
      img: '/assets/img/pagebuilder/builder7.webp',
      title: 'builder-seven',
    },
    // {
    //   img: '/assets/img/pagebuilder/builder8.webp',
    //   title: 'builder-eight',
    // },
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
              className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay={`${0.2 + (index % 4) * 0.1}s`}
            >
              <div className="feature-box-items2 text-center p-3 bg-white rounded-3 shadow-sm  pagebuilder-hover-effect">
                <div className="icon w-100 h-100">
                  <img src={item.img} alt={item.title} loading="lazy" />
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
