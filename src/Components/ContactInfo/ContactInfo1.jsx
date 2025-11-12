import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const ContactInfo1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send message to company
      await emailjs.sendForm(
        'service_yajqym9', // your email service ID
        'template_h4wpbbi', // first template (to company)
        formRef.current,
        'K_wd5BSwBzwzzQXjf' // public key
      );

      // Send thank-you email to user
      await emailjs.sendForm(
        'service_yajqym9', // email service ID
        'template_pwefvuc', // second template (to user)
        formRef.current,
        'K_wd5BSwBzwzzQXjf' // public key
      );

      toast.success('Message sent successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
        agree: false,
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section fix section-padding section-margin">
      <div className="container px-md-3">
        {/* ...title and layout unchanged... */}
        <div className="contact-wrapper">
          <div className="row g-4">
            <div className="col-xl-6 order-2 order-xl-1">
              <div className="contact-form-area">
                <h3>Get in Touch</h3>
                <form id="contact-form" onSubmit={handleSubmit} ref={formRef}>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <input type="hidden" name="user_email" value={formData.email} />

                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="tel"
                          name="number"
                          placeholder="Phone Number"
                          required
                          pattern="^\+?[0-9\-]{10,15}$"
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          placeholder="Message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* <div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="agree"
                                                    required
                                                    checked={formData.agree}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label">
                                                    I agree to the terms and conditions.
                                                </label>
                                            </div>
                                        </div> */}

                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn" disabled={submitting}>
                        Submit Now <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>

            {/* Map & contact info stays unchanged */}
            <div className="col-xl-6 d-flex align-items-center justify-content-center order-1 order-xl-2">
              <div className="contact-map p-4" data-background="/assets/img/audience-bg.jpg">
                <div className="p-0 p-md-3" style={{}}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo1;
