import { Link } from 'react-router-dom';

const ServiceActionSection = () => {
  const chooseContent = [
    {
      img: '/assets/img/newservices/modle-3.png',
      title: 'SEO Marketing',
      content: 'Collaboratively formulate principle capital doing progressively evolve user',
    },
    {
      img: '/assets/img/newservices/modle-2.png',
      title: 'Social Media Marketing',
      content: 'Collaboratively formulate principle capital doing progressively evolve user',
    },
    {
      img: '/assets/img/newservices/modle-1.png',
      title: 'Email Marketing',
      content: 'Collaboratively formulate principle capital doing progressively evolve user',
    },
  ];

  return (
    <section className="service-section fix section-padding">
      {/* <div className="bg-shape-2">
        <img src="/assets/img/service/bg-shape-2.png" alt="img" />
      </div>
      <div className="right-shape-3">
        <img src="/assets/img/service/right-shape-3.png" alt="img" />
      </div> */}
      <div className="container px-3">
        <div className="section-title text-center">
          <div className="sub-title bg-color-2 wow fadeInUp">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Use SEO to Drive Growth <br /> at Your Business
          </h2>
        </div>
        <div className="row">
          {chooseContent.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-card-items style-2">
                <div className="service-thumb">
                  <img src={item.img} alt="img" />
                </div>
                <div className="content">
                  <h3 className="title-2">
                    <Link to="/service/service-details">{item.title}</Link>
                  </h3>
                  <p>{item.content}</p>
                  <Link to="/service/service-details" className="service-btn">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceActionSection;
