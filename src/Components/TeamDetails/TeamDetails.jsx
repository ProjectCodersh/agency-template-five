import TeamImageSlider from './TeamImageSlider';

const TeamDetails = () => {
  return (
    <div>
      <section className="team-details-section fix section-padding pb-0">
        <div className="container px-3">
          <div className="team-details-wrapper">
            <div className="team-details-items">
              <div className="thumb">
                <img src="/assets/img/team/team-ceo.webp" alt="img" />
                {/* <img src="/assets/img/team/details-1.jpg" alt="img" /> */}
              </div>
              <div className="content">
                <div className="cont">
                  <h4>Harsh Shah</h4>
                  <span>Founder & CEO, Codersh Web Services</span>
                </div>
                <p className="mb-3">
                  Harsh Shah is a skilled entrepreneur and technology leader with over 8+ years of
                  experience in building and scaling digital solutions for global clients. As the
                  Founder and CEO of Codersh Web Services, he has spearheaded the delivery of
                  high-quality web, mobile, and e-commerce development projects — helping startups
                  and established businesses grow their online presence with robust and
                  performance-driven products.
                </p>
                <p>
                  Harsh Shah is passionate about mentoring young developers, sharing insights on
                  emerging tech trends, and building thriving tech communities. Outside of work, he
                  enjoys exploring new innovations in web development and advocating for
                  client-focused design solutions.
                </p>
                <div className="signature">
                  {/* <img src="/assets/img/team/signature.png" alt="img" /> */}
                </div>
                <div className="team-contact-info">
                  <div className="icon-items">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <h5>
                      <a href="tel:+919998134094">+91 99981 34094</a>
                    </h5>
                  </div>
                  <div className="icon-items">
                    <div className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <h5>
                      <a href="mailto:arvind@codersh.com">arvind@codersh.com</a>
                    </h5>
                  </div>
                  <div className="icon-items">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <h5>
                      <a href="https://maps.app.goo.gl/TJP3CFjW6jSKHwsA6">
                        A-307, Empire Business Hub, <br /> Science City Rd, Sola, Ahmedabad
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="social-icon d-flex align-items-center mt-4">
                  <a href="https://www.facebook.com/Codershweb/">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://x.com/CodershWeb/">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://www.instagram.com/codersh.web/">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F30213091%2Fadmin%2Fanalytics%2Ffollowers%2F">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://wa.me/9998134094?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%20services.">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="personal-information-area section-padding">
        <div className="container px-3">
          <div className="personal-information-wrapper">
            <h3>Personal Information</h3>
            <p className="mt-3">
              Harsh Shah is the visionary behind Codersh Web Services, a thriving digital agency
              that specializes in custom web development, e-commerce solutions, and strategic
              digital experiences. With a career built on passion and constant learning, Harsh
              started his journey in technology over a decade ago and has since helped hundreds of
              businesses launch, grow, and scale their digital products.
            </p>
            <p className="mt-3">
              Harsh Shah believes in transparent communication, strategic problem-solving, and
              delivering solutions that not only look great but perform exceptionally in real
              business environments. His leadership has helped Codersh maintain a strong reputation
              for quality and client satisfaction.
            </p>
            <p className="mt-3">
              When he’s not leading projects, Harsh enjoys speaking on tech topics, contributing to
              online developer communities, and exploring new tools and frameworks in the web
              ecosystem.
            </p>
            {/* <div className="personal-skill-wrapper">
              <h4>Personal skills</h4>
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Branding Design</h6>
                        <span className="point">86%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Business</h6>
                        <span className="point">96%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-two"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Ad copy optimization</h6>
                        <span className="point">86%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Treatment Planning</h6>
                        <span className="point">96%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-two"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-5">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                do not look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there is not anything embarrassing hidden in the middle
                of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary,
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <TeamImageSlider></TeamImageSlider>
    </div>
  );
};

export default TeamDetails;
