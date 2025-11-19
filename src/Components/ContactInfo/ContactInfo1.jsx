import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const ContactInfo1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const navigate = useNavigate();
  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

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

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

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

      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
      });

      navigate('/thank-you');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section fix section-padding section-margin">
      <div className="container px-md-3">
        <div className="contact-wrapper">
          <div className="row g-4">

            {/* LEFT SIDE — FORM */}
            <div className="col-xl-6 order-2 order-xl-1">
              <div className="contact-form-area">
                <h3>Get in Touch</h3>

                <form id="contact-form" onSubmit={handleSubmit} ref={formRef} noValidate>
                  <div className="row g-4">

                    {/* Name */}
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                      </div>
                    </div>

                    {/* Hidden email for template */}
                    <input type="hidden" name="user_email" value={formData.email} />

                    {/* Number */}
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="tel"
                          name="number"
                          placeholder="Phone Number"
                          value={formData.number}
                          onChange={handleChange}
                        />
                        {errors.number && <p style={{ color: "red" }}>{errors.number}</p>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="col-lg-6">
                      <div className="form-clt">
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

                    {/* Message */}
                    <div className="col-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn" disabled={submitting}>
                        Submit Now <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT SIDE — IMAGE AND TEXT */}
            <div className="col-xl-6 d-flex align-items-center justify-content-center order-1 order-xl-2">
              <div
                className="contact-map p-4"
                data-background="/assets/img/audience-bg.jpg"
              >
                <div className="p-0 p-md-3">
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

                <div className="text-center mb-3 mt-4" style={{ color: '#fff' }}>
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
