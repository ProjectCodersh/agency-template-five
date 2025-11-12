import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

function Counter6() {
  const chooseHeading = {
    subtitle: 'Page Builders',
    title: ' Seamless integration <br/> with page builders',
    content: '',
    // " We work with all major page builders,<br/> including Elementor. Whether you prefer to leverage <br/> existing page builder functionality or need custom .",
    img: '/assets/img/feature-img.png',
  };

  const chooseContent = [
    {
      img: '/assets/img/pagebuilder/builder13.webp',
      title: 'Better audiences',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder14.webp',
      title: 'Better Analytics',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder16.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder17.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder18.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder19.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder20.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder21.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder23.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      img: '/assets/img/pagebuilder/builder24.webp',
      title: 'Better Output',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
  ];

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="feature-secton section-padding fix" style={{ background: '#f6f3fe' }}>
      {/* <div className="bg-shape">
                <img src="/assets/img/bg-shape-2.png" alt="img" />
            </div> */}
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp" style={{ backgroundColor: '#384bff1a' }}>
              <span>{chooseHeading.subtitle}</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(chooseHeading.title)}
            </h2>
          </div>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            {parse(chooseHeading.content)}
          </p>
        </div>
        <div className="row">
          {chooseContent.map((item, i) => (
            <div
              key={i}
              className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="feature-box-items3  text-center p-3 bg-white rounded-3 shadow-sm pagebuilder-hover-effect">
                <div className="icon w-100 h-100 ">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter6;
