/**
 * Utility function to handle Calendly branding and scrollbar hiding
 * This function manages the dynamic injection of styles to hide Calendly branding
 * and ensures scrollbars are hidden while maintaining scroll functionality
 */
export const hideCalendlyBranding = () => {
  // Create and inject custom styles for hiding scrollbars
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

  // Remove existing style if present to avoid duplicates
  const existingStyle = document.getElementById('calendly-custom-styles');
  if (existingStyle) {
    existingStyle.remove();
  }

  document.head.appendChild(style);

  // Continuously check and hide branding elements in iframe
  const checkIframe = setInterval(() => {
    const iframes = document.querySelectorAll('.calendly-inline-widget iframe');
    iframes.forEach((iframe) => {
      try {
        // Ensure iframe allows scrolling but hides scrollbar
        iframe.style.overflow = 'auto';
        iframe.style.scrollbarWidth = 'none';
        iframe.style.msOverflowStyle = 'none';

        // Try to access iframe content (will fail due to CORS for Calendly)
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          // Hide powered by banner and branding
          const poweredBy = iframeDoc.querySelectorAll(
            '[class*="powered"], [id*="powered"], [class*="branding"], [id*="branding"], [class*="calendly-branding"]'
          );
          poweredBy.forEach((el) => {
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
      } catch {
        // CORS restriction - expected for Calendly iframes
        // The CSS overlay will handle hiding the logo
      }
    });
  }, 1000);

  // Stop checking after 10 seconds to avoid unnecessary processing
  setTimeout(() => clearInterval(checkIframe), 10000);
};
