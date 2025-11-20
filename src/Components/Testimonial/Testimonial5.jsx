const Testimonial5 = () => {
  const testimonialContent = [
    {
      img: '/assets/img/testimonial/02.png',
      subtitle: 'Seattle, Washington',
      title: 'Claire Olson',
      content:
        'Great to work with! Made an amazing website for our org. We have him our vision and everything came out even better than imagined. Use him for all website needs you will be pleased!',
    },
    {
      img: '/assets/img/testimonial/01.png',
      subtitle: 'San Antonio, Texas',
      title: 'Luke Jacobs',
      content:
        'Arvind was an excellent developer with great communication skills. His work went beyond what I was expecting and I would love to continue working with him.',
    },
    {
      img: '/assets/img/testimonial/02.png',
      subtitle: 'Detroit, Michigan',
      title: 'Phillip Hunt',
      content:
        'Our 3DCart website design and migrations project was completed successfully from start to finish. It took a lot longer than anticipated but that was due to delays on our end. We had a few technical challenges on the way, and Arvind was very efficient at resolving them.',
    },
    {
      img: '/assets/img/testimonial/01.png',
      subtitle: 'Portland, Oregon',
      title: 'Amber Page',
      content:
        "Absolutely Fantastic. The biggest thing was he got the design from the beginning mockup and didn't waste any time and everything ran on schedule with making lots of minor adjustments to a level of amazing quality!",
    },
    {
      img: '/assets/img/testimonial/01.png',
      subtitle: 'Texas',
      title: 'Cole Haring',
      content:
        'Work was great! I Will definitely use in the future. Arvind delivered good work on this project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong.',
    },
  ];

  return (
    <section className="testimonial-section fix section-padding">
      <div className="container px-3">
        <div className="testimonial-wrapper">
          <div className="section-title-area">
            <div className="section-title">
              <div
                className="sub-title bg-color-2 wow fadeInUp"
                style={{ backgroundColor: '#f6f3fe' }}
              >
                <span>TESTIMONIALS</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Loved by niche digital agencies across the US!
              </h2>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              We are very proud of the service we provide <br /> and stand by every product we
              carry. Read our testimonials from our happy customers.
            </p>
          </div>

          <div className="row g-4">
            {testimonialContent.map((item, i) => (
              <div key={i} className="col-xl-6 col-lg-6 col-md-12">
                <div className="testimonial-box-items">
                  <div className="icon">
                    <img src="/assets/img/testimonial/icon.png" alt="testimonial icon" />
                  </div>
                  <div className="testimonial-img">
                    <img src={item.img} alt="img" />
                    <div className="shape-img">
                      <img src="/assets/img/testimonial/shape.png" alt="img" />
                    </div>
                  </div>
                  <div className="content" style={{ maxWidth: '475px' }}>
                    <div className="client-info">
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <h5>{item.title}</h5>
                      <span>{item.subtitle}</span>
                    </div>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial5;
