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

  const [errors, setErrors] = useState({});

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear individual error
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // VALIDATION (same as ContactInfo1)
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.number.trim()) newErrors.number = "Phone number is required.";
    else if (!/^\+?[0-9\-]{10,15}$/.test(formData.number))
      newErrors.number = "Invalid phone number.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop if validation fails

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

      setTimeout(() => navigate('/thank-you'), 1000);

    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* TOP SECTION SAME AS BEFORE */}
      <section className="contact-info-section fix section-padding">
        <div className="container px-3">
          <div className="row g-4">

            {/* Address */}
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

            {/* Email */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="content">
                  <h3 className="text-lowercase">
                    <a href="mailto:bdm.codersh@gmail.com">bdm.codersh@gmail.com</a>
                  </h3>
                  <p>Email us anytime for any kind of query.</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    Call: <a href="tel:+9998134094">+91 99981 34094</a>
                  </h3>
                  <p>Call us for any kind of support.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-section-33 fix">
        <div className="container px-3">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">

              {/* IMAGE SECTION (UNCHANGED) */}
              <div className="col-xl-6 offset-xl-0 col-lg-10 offset-lg-1 d-flex align-items-center justify-content-center ">
                <div className="contact-map p-4" data-background="/assets/img/audience-bg.jpg"
                  style={{ borderRadius: '20px' }}>
                  <div className="p-0 p-md-3" style={{ borderRadius: '20px', background: '#f6f3fe' }}>
                    <img src="/assets/img/team/team.webp" alt="Team Img"
                      style={{
                        width: '100%', height: 'auto', objectFit: 'contain',
                        display: 'block', borderRadius: '20px'
                      }}
                    />
                  </div>
                  <div className="text-center mb-3 mt-4" style={{ color: '#fff' }}>
                    <h2 style={{ color: '#fff' }}>Meet the team</h2>
                    <p>Get to know the people behind Intact.</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE FORM */}
              <div className="col-xl-6 mt-xl-4 mt-lg-5">
                <div className="contact-content">
                  <h2>Let&#39;s Talk About Your Next Project</h2>

                  <form id="contact-form" className="contact-form-items" ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="row g-4">

                      {/* NAME */}
                      <div className="col-md-6">
                        <div className="form-clt">
                          <span>Your name*</span>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                        </div>
                      </div>

                      {/* EMAIL */}
                      <div className="col-md-6">
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </div>
                      </div>

                      {/* NUMBER */}
                      <div className="col-md-6">
                        <div className="form-clt">
                          <span>Your Number*</span>
                          <input
                            type="tel"
                            name="number"
                            placeholder="Number"
                            value={formData.number}
                            onChange={handleChange}
                          />
                          {errors.number && <p style={{ color: "red" }}>{errors.number}</p>}
                        </div>
                      </div>

                      {/* SUBJECT */}
                      <div className="col-md-6">
                        <div className="form-clt">
                          <span>Subject*</span>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                        </div>
                      </div>

                      <input type="hidden" name="user_email" value={formData.email} />

                      {/* MESSAGE */}
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <span>Write Message*</span>
                          <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                        </div>
                      </div>

                      {/* BUTTON */}
                      <div className="col-lg-7">
                        <button type="submit" className="theme-btn" disabled={submitting}>
                          {submitting ? 'Sending...' : 'Send Message'} <i className="bi bi-arrow-right"></i>
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
