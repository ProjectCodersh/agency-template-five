import { useEffect } from 'react';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import parse from 'html-react-parser';

function Tools1() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const sectionHead = {
    subtitle: 'Our Services',
    title: ' What You Get <br/>With Every Plan',
    content: '',
    plantitle1: 'Design & Devlopment',
    plantitle2: 'Performance & optimization',
    plantitle3: 'Integrations & Marketing',
    plantitle4: 'Maintenance & Security',
    plantitle5: 'Maintenance & Server Tasks',
  };

  const services = {
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
    list14: 'PSD to WordPress',
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
      title: sectionHead.plantitle1,
      items: [
        services.list1,
        services.list2,
        services.list3,
        services.list4,
        services.list6,
        services.list7,
        services.list8,
        services.list9,
        services.list10,
        services.list11,
        services.list12,
        services.list13,
        services.list14,
        services.list15,
      ],
    },
    {
      title: sectionHead.plantitle3,
      items: [
        services.list21,
        services.list22,
        services.list23,
        services.list24,
        services.list25,
        services.list26,
        services.list12,
        services.list13,
        services.list14,
        services.list15,
      ],
    },
    {
      title: sectionHead.plantitle2,
      items: [
        services.list16,
        services.list17,
        services.list18,
        services.list19,
        services.list20,
      ],
    },
    {
      title: sectionHead.plantitle4,
      items: [
        services.list29,
        services.list30,
        services.list31,
        services.list32,
        services.list33,
      ],
    },
    {
      title: sectionHead.plantitle5,
      items: [services.list34, services.list35, services.list36, services.list37],
    },
  ];

  return (
    <section className="feature-secton fix section-padding">
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>{sectionHead.subtitle}</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(sectionHead.title)}
            </h2>
          </div>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            {parse(sectionHead.content)}
          </p>
        </div>

        <div className="masonry-grid">
          {serviceGroups.map((group, index) => (
            <div className="service-column" key={index}>
              <div className="service-title" style={{ backgroundColor: '#f6f3fe' }}>
                <span>{group.title}</span>
              </div>
              <ul className="service-list">
                {group.items.filter(Boolean).map((item, i) => (
                  <li key={i}>
                    <span className="check-icon" aria-label="Included service">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
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
            `}
      </style>
    </section>
  );
}

export default Tools1;
