import { useEffect } from 'react';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import parse from 'html-react-parser';

function Tools2() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const chooseHeading = {
    subtitle: 'Our Services',
    title: ' What You Get <br/>With Every Plan',
    content: '',
    plantitle1: 'Design & Devlopment',
    plantitle2: 'Performance & optimization',
    plantitle3: 'Integrations & Marketing',
    plantitle4: 'Maintenance & Security',
    plantitle5: 'Maintenance & Server Tasks',
  };

  const aboutContent = {
    list1: 'New Site Development',
    list2: 'Website Redesign',
    list3: 'Landing Page Creation',
    list4: 'Coming Soon Landing Page',
    list6: 'Custom PHP Code',
    list7: 'All Popular Page Builders',
    list8: 'Theme Customization',
    list9: 'Plugin Customization',
    list10: 'PSD to HTML',
    list11: 'Custom Feature Development',
    list12: 'Dynamic Site with ACF Pro',
    list13: 'Funnels Setup',
    list14: 'PSD to Shopify',
    list15: 'WooCommerce',
    list16: 'Site Speed Optimization',
    list17: 'Technical SEO Optimization',
    list18: 'Yoast and Rank Math Plugin Configuration',
    list19: 'Meta Tags & Meta Description Adding',
    list20: 'On-Page Technical SEO',
    list21: 'Payment Integration',
    list22: 'Shipping Integration',
    list23: 'Google Search Console Setup',
    list24: 'Klaviyo Newsletter Setup',
    list25: 'Facebook Ads (Pixel Code Setup)',
    list26: 'Google Analytics Setup',
    list27: 'Klaviyo Integration',
    list28: 'Klaviyo Pop Setup',
    list29: 'Theme and Plugin Updates',
    list30: 'Site Maintenance',
    list31: 'Website Security Management',
    list32: 'Malware Scan & Removal',
    list33: 'Manual & Automatic Backup Management',
    list34: 'Site Migration from Another Platform',
    list35: 'Domain Mapping with DNS Records',
    list36: 'Email MX Records Setup',
    list37: 'Webmail / Outlook Setup',
  };

  const serviceGroups = [
    {
      title: chooseHeading.plantitle1,
      items: [
        aboutContent.list1,
        aboutContent.list2,
        aboutContent.list3,
        aboutContent.list4,
        aboutContent.list6,
        aboutContent.list7,
        aboutContent.list8,
        aboutContent.list9,
        aboutContent.list10,
        aboutContent.list11,
        aboutContent.list12,
        aboutContent.list13,
        aboutContent.list14,
        aboutContent.list15,
      ],
    },
    {
      title: chooseHeading.plantitle3,
      items: [
        aboutContent.list21,
        aboutContent.list22,
        aboutContent.list23,
        aboutContent.list24,
        aboutContent.list25,
        aboutContent.list26,
        aboutContent.list12,
        aboutContent.list13,
        aboutContent.list14,
        aboutContent.list15,
      ],
    },
    {
      title: chooseHeading.plantitle2,
      items: [
        aboutContent.list16,
        aboutContent.list17,
        aboutContent.list18,
        aboutContent.list19,
        aboutContent.list20,
      ],
    },
    {
      title: chooseHeading.plantitle4,
      items: [
        aboutContent.list29,
        aboutContent.list30,
        aboutContent.list31,
        aboutContent.list32,
        aboutContent.list33,
      ],
    },
    {
      title: chooseHeading.plantitle5,
      items: [aboutContent.list34, aboutContent.list35, aboutContent.list36, aboutContent.list37],
    },
  ];

  return (
    <section className="feature-secton section-padding fix">
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp" style={{ backgroundColor: '#f6f3fe' }}>
              <span>{chooseHeading.subtitle}</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(chooseHeading.title)}
            </h2>
          </div>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            {parse(chooseHeading.content)}
          </p>
        </div>
        <div className="masonry-grid">
          {serviceGroups.map((group, idx) => (
            <div className="service-column" key={idx}>
              <div className="service-title" style={{ backgroundColor: '#f6f3fe' }}>
                <span>{group.title}</span>
              </div>
              <ul className="service-list">
                {group.items.filter(Boolean).map((item, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
                .masonry-grid {
                    column-count: 1;
                    column-gap: 2rem;
                }
                @media (min-width: 768px) {
                    .masonry-grid {
                        column-count: 2;
                    }
                }
                @media (min-width: 993px) {
                    .masonry-grid {
                        column-count: 3;
                    }
                }
                .service-column {
                    break-inside: avoid;
                    margin-bottom: 2rem;
                }
                .service-title {
                    display: inline-block;
                    padding: 0.5rem 1.5rem;
                    border-radius: 25px;
                    color: #384bff;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                .service-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .service-list li {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.75rem;
                    font-size: 1rem;
                    color: #2d2d2d;
                    font-weight: bold;
                }
                .check-icon {
                    color: #6A47ED;
                    font-weight: bold;
                }
            `}</style>
    </section>
  );
}

export default Tools2;
