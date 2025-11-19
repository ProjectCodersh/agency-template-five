import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactInfo2 = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_yajqym9',
        'template_h4wpbbi',
        formRef.current,
        'K_wd5BSwBzwzzQXjf'
      );

      await emailjs.sendForm(
        'service_yajqym9',
        'template_pwefvuc',
        formRef.current,
        'K_wd5BSwBzwzzQXjf'
      );

      toast.success('Message sent successfully!', { position: 'top-right', autoClose: 3000 });

      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);

    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="contact-info-section fix section-padding">
        <div className="container px-3">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-info-items text-center active">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    <a
                      href="https://maps.app.goo.gl/TJP3CFjW6jSKHwsA6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Address
                    </a>
                  </h3>

                  <p>
                    A-307, Empire Business Hub,
                    <br /> Science City Rd, Sola, Ahmedabad
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="content">
                  <h3 className="text-lowercase">
                    <a
                      href="mailto:bdm.codersh@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      bdm.codersh@gmail.com
                    </a>
                  </h3>
                  <p>
                    Email us anytime for any kind <br /> of query.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    Call: <a href="tel:+9998134094">+91 99981 34094</a>
                  </h3>
                  <p>
                    Call us for any kind of support, <br />
                    we will wait for it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section-33 fix">
        <div className="container px-3">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-xl-6 offset-xl-0 col-lg-10 offset-lg-1 d-flex align-items-center justify-content-center ">
                <div
                  className="contact-map p-4"
                  data-background="/assets/img/audience-bg.jpg"
                  style={{ borderRadius: '20px' }}
                >
                  <div
                    className="p-0 p-md-3"
                    style={{ borderRadius: '20px', background: '#f6f3fe' }}
                  >
                    <img
                      src="/assets/img/team/team.webp"
                      alt="Team Img"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '20px',
                      }}
                    />
                  </div>
                  <div className="text-center mb-3 mt-4 mt-md-4 mt-xl-4" style={{ color: '#fff' }}>
                    <h2 style={{ color: '#fff' }}>Meet the team</h2>
                    <p>Get to know the people behind Intact. Our creative and technical team.</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 mt-xl-4 mt-lg-5">
                <div className="contact-content">
                  <h2>Let&#39;s Talk About Your Next Project</h2>
                  <p>
                    Got an idea, a challenge, or a project you’re ready to launch? We’d love to hear
                    about it. Whether it’s a E-commerece Store or Business Directory - we’re here to
                    help.
                  </p>
                  <form
                    id="contact-form"
                    className="contact-form-items"
                    ref={formRef}
                    onSubmit={handleSubmit}
                  >
                    <div className="row g-4">
                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <span>Your name*</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Your Number*</span>
                          <input
                            type="tel"
                            name="number"
                            id="number"
                            placeholder="Number"
                            required
                            pattern="^\+?[0-9\-]{10,15}$"
                            value={formData.number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Subject*</span>
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <input type="hidden" name="user_email" value={formData.email} />

                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="form-clt">
                          <span>Write Message*</span>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                        <button type="submit" className="theme-btn" disabled={submitting}>
                          {submitting ? 'Sending...' : 'Send Message'}{' '}
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo2;
