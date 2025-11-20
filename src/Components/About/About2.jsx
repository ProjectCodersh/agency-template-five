const About2 = ({ addclass }) => {
  const aboutContent = {
    img: '/assets/img/about/01.jpg',
    subtitle: 'What we Do',
    title: 'We Make Your Business Stand Out',
    content:
      ' We are not just another agency - we are your digital growth partners. With years of industry experience and a passion for innovation, our team is dedicated to delivering measurable results propel your business forward.',
    icon1: '100%',
    title2: 'Success Ratio',
    content2: 'Collaboratively formulate principle capital. Progressively evolve user',
    icon2: '92% ',
    title3: 'Recurring Clients',
    content3: 'Collaboratively formulate principle capital. Progressively evolve user',
    icon3: '5.0',
    title4: 'Ratings On Clutch.Co',
    content4: 'Collaboratively formulate principle capital. Progressively evolve user',
    icon4: '1000+',
    title5: 'Project Delivered',
    content5: 'Collaboratively formulate principle capital. Progressively evolve user',
  };

  return (
    <section className={addclass}>
      <div className="container px-3">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src={aboutContent.img}
                  alt="img"
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>{aboutContent.subtitle}</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {aboutContent.title}
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {aboutContent.content}
                </p>
                <div className="icon-items-area">
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="content">
                      <h2 className="">{aboutContent.icon2}</h2>
                    </div>
                    <div className="">
                      <h3>{aboutContent.title3}</h3>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="content">
                      <h2 className="">{aboutContent.icon1}</h2>
                    </div>
                    <div className="">
                      <h3>{aboutContent.title2}</h3>
                    </div>
                  </div>
                </div>
                <div className="icon-items-area mt-2">
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="content">
                      <h2 className="">{aboutContent.icon4}</h2>
                    </div>
                    <div className="">
                      <h3>{aboutContent.title5}</h3>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="content">
                      <h2 className="">{aboutContent.icon3}</h2>
                    </div>
                    <div className="">
                      <h3>{aboutContent.title4}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
