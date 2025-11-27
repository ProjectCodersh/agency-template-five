import { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { hideCalendlyBranding } from './useCalendlyBranding';
import './AppointmentBooking.css';

const AppointmentBooking = () => {
  useEffect(() => {
    loadBackgroudImages();

    // Run after delays to ensure Calendly iframe is loaded
    const timeouts = [
      setTimeout(hideCalendlyBranding, 500),
      setTimeout(hideCalendlyBranding, 2000),
      setTimeout(hideCalendlyBranding, 5000),
    ];

    // Cleanup timeouts on unmount
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <section className="appointment-section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-8 left-col">
            <div className="d-flex gap-4">
              <div className="person-image-wrapper text-center">
                <img src="/assets/img/image.webp" alt="Harsh Shah" className="person-image" />
              </div>

              <div className="left-text-content">
                <h1>Hi,Harsh Shah here</h1>

                <p>
                  Let&apos;s connect! Let me help you choose the right plan and start building
                  something powerful for your business.
                </p>

                <p>
                  Book a time on my calendar and you&apos;ll receive a calendar invite along with
                  meeting details.
                </p>

                <p>or send me an email at</p>

                <a href="mailto:bdm.codersh@gmail.com" className="email-link">
                  bdm.codersh@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="calendly-wrapper">
              <InlineWidget
                url="https://calendly.com/codersh-web-services/15min"
                styles={{
                  height: '100%',
                  minWidth: '100%',
                  width: '100%',
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  primaryColor: '6a47ed',
                  textColor: '4d5055',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
