import { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const AppointmentBooking = () => {
  useEffect(() => {
    loadBackgroudImages();
    
    // Hide Calendly logo and scrollbar after iframe loads
    const hideCalendlyBranding = () => {
      const style = document.createElement('style');
      style.id = 'calendly-custom-styles';
      style.textContent = `
        /* Hide scrollbars but keep scrolling functionality */
        .calendly-inline-widget {
          overflow: auto !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        
        .calendly-inline-widget::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
          display: none !important;
        }
        
        .calendly-inline-widget iframe {
          overflow: auto !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        
        .calendly-inline-widget iframe::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
          display: none !important;
        }
        
        /* Hide Calendly branding/logo using overlay */
        .calendly-wrapper {
          position: relative;
        }
        
        .calendly-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 60px;
          background: #fff;
          z-index: 10;
          pointer-events: none;
        }
        
        /* Alternative: Hide top-right corner where logo usually appears */
        .calendly-inline-widget {
          position: relative;
        }
      `;
      
      // Remove existing style if present
      const existingStyle = document.getElementById('calendly-custom-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
      
      document.head.appendChild(style);
      
      // Continuously check and hide branding elements
      const checkIframe = setInterval(() => {
        const iframes = document.querySelectorAll('.calendly-inline-widget iframe');
        iframes.forEach(iframe => {
          try {
            // Ensure iframe allows scrolling but hides scrollbar
            iframe.style.overflow = 'auto';
            iframe.style.scrollbarWidth = 'none';
            iframe.style.msOverflowStyle = 'none';
            
            // Try to access iframe content (will fail due to CORS for Calendly)
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              // Hide powered by banner and branding
              const poweredBy = iframeDoc.querySelectorAll('[class*="powered"], [id*="powered"], [class*="branding"], [id*="branding"], [class*="calendly-branding"]');
              poweredBy.forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                el.style.opacity = '0';
                el.style.height = '0';
                el.style.width = '0';
                el.style.overflow = 'hidden';
              });
              
              // Add styles to iframe document
              let iframeStyle = iframeDoc.getElementById('hide-branding-style');
              if (!iframeStyle) {
                iframeStyle = iframeDoc.createElement('style');
                iframeStyle.id = 'hide-branding-style';
                iframeStyle.textContent = `
                  * {
                    scrollbar-width: none !important;
                    -ms-overflow-style: none !important;
                  }
                  *::-webkit-scrollbar {
                    display: none !important;
                    width: 0 !important;
                    height: 0 !important;
                  }
                  [class*="powered"], [id*="powered"], [class*="branding"], [id*="branding"], [class*="calendly-branding"] {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    height: 0 !important;
                    width: 0 !important;
                    overflow: hidden !important;
                  }
                `;
                iframeDoc.head.appendChild(iframeStyle);
              }
            }
          } catch (e) {
            // CORS restriction - expected for Calendly iframes
            // The CSS overlay will handle hiding the logo
          }
        });
      }, 1000);
      
      // Stop checking after 10 seconds
      setTimeout(() => clearInterval(checkIframe), 10000);
    };
    
    // Run after delays to ensure Calendly iframe is loaded
    setTimeout(hideCalendlyBranding, 500);
    setTimeout(hideCalendlyBranding, 2000);
    setTimeout(hideCalendlyBranding, 5000);
  }, []);

  return (
    <>
      <style>
        {`
        .appointment-section {
          display: flex;
          align-items: center;
          background: #F6F3FE;
          min-height: 100vh;
          padding: 60px 0;
        }

        .left-col {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .person-image-wrapper {
          width: 100%;
          text-align: center;
        //   border-bottom: 4px solid #7b62ff;
        }

        .person-image {
          max-width: 430px;
          width: 100%;
          height: auto;
        }

        .left-text-content h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #000;
        }

        .left-text-content p {
          font-size: 18px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 12px;
        }

        .email-link {
          font-size: 24px;
          font-weight: 700;
          color: #6a47ed;
          text-decoration: none;
        }

        @media (max-width: 1024px) and (min-width: 992px) {
          .appointment-section {
            padding: 50px 0;
          }

          .appointment-section .col-lg-8 {
            flex: 0 0 58%;
            max-width: 58%;
          }

          .appointment-section .col-lg-4 {
            flex: 0 0 42%;
            max-width: 42%;
          }

          .left-col .d-flex {
            gap: 20px !important;
            flex-wrap: nowrap;
          }

          .person-image {
            max-width: 280px;
          }

          .left-text-content h1 {
            font-size: 34px;
            line-height: 1.3;
          }

          .left-text-content p {
            font-size: 16px;
            margin-bottom: 8px;
          }

          .email-link {
            font-size: 20px;
          }

          .calendly-wrapper {
            height: 650px;
            padding: 15px;
          }
        }

        @media (max-width: 1024px) {
          .appointment-section {
            padding: 50px 0;
          }

          .left-col .d-flex {
            gap: 20px !important;
          }

          .person-image {
            max-width: 300px;
          }

          .left-text-content h1 {
            font-size: 36px;
            line-height: 1.3;
          }

          .left-text-content p {
            font-size: 16px;
            margin-bottom: 10px;
          }

          .email-link {
            font-size: 20px;
          }

          .calendly-wrapper {
            height: 650px;
            padding: 15px;
          }
        }

        @media (max-width: 991px) {
          .appointment-section {
            padding: 40px 0;
          }

          .left-col {
            align-items: center;
            text-align: center;
          }

          .left-col .d-flex {
            flex-direction: column;
            gap: 30px !important;
          }

          .person-image-wrapper {
            text-align: center;
          }

          .person-image {
            max-width: 300px;
          }

          .left-text-content h1 {
            font-size: 32px;
            line-height: 1.2;
          }

          .left-text-content p {
            font-size: 16px;
          }

          .email-link {
            font-size: 20px;
          }

          .calendly-wrapper {
            height: 600px;
            padding: 15px;
          }
        }

        @media (max-width: 576px) {
          .appointment-section {
            padding: 30px 0;
          }

          .left-text-content h1 {
            font-size: 28px;
          }

          .left-text-content p {
            font-size: 15px;
          }

          .email-link {
            font-size: 18px;
          }

          .calendly-wrapper {
            height: 500px;
            padding: 10px;
            border-radius: 15px;
          }
        }

        .calendly-wrapper {
          background: #fff;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          width: 100%;
          height: 700px;
          overflow: hidden;
          position: relative;
        }

        .calendly-wrapper iframe {
          border: none;
        }

        /* Hide scrollbar but keep scrolling functionality */
        .calendly-wrapper ::-webkit-scrollbar {
          display: none;
        }

        .calendly-wrapper {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Hide Calendly logo/branding */
        .calendly-wrapper iframe {
          overflow: hidden;
        }

        /* Target Calendly iframe content to hide logo and scrollbar */
        .calendly-inline-widget {
          overflow: auto !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }

        .calendly-inline-widget::-webkit-scrollbar {
          display: none !important;
        }

        .calendly-inline-widget iframe {
          overflow: auto !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }

        .calendly-inline-widget iframe::-webkit-scrollbar {
          display: none !important;
        }
      `}
      </style>

      <section className="appointment-section">
        <div className="container">
          <div className="row g-4 align-items-center">

            <div className="col-lg-8 left-col">
              <div className='d-flex gap-4'>
              <div className="person-image-wrapper text-center">
                <img
                  src="/assets/img/image.webp"
                  alt="Harsh Shah"
                  className="person-image"
                />
              </div>

              <div className="left-text-content text-center">
                <h1>Hi,Harsh Shah here</h1>

                <p>
                  Let's connect! Let me help you choose the right plan and start
                  building something powerful for your business.
                </p>

                <p>
                  Book a time on my calendar and you'll receive a calendar
                  invite along with meeting details.
                </p>

                <p>or send me an email at</p>

                <a href="mailto:arvind@codersh.com" className="email-link">
                  arvind@codersh.com
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
                    minWidth: '320px'
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    primaryColor: '6a47ed',
                    textColor: '4d5055'
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentBooking;
