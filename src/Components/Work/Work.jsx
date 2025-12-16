import { useEffect, useMemo, useRef, useState } from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';

const TEAM_CONTENT = [
  {
    img: '/assets/img/work/work2.webp',
    industry: 'Skincare & Beauty',
    brand: 'Kinvara Skincare',
  },
  {
    img: '/assets/img/work/work1.webp',
    industry: 'Home Appliances / Consumer Electronics',
    brand: 'Techless',
  },
  {
    img: '/assets/img/work/work3.webp',
    industry: 'Consumer Electronics / Home Appliances',
    brand: 'HelloCarePod',
  },
  {
    img: '/assets/img/work/work4.webp',
    industry: 'Fashion / Jewelry & Accessories',
    brand: 'HEYMAEVE',
  },
  {
    img: '/assets/img/work/work5.webp',
    industry: 'Outdoor Gear & Tools',
    brand: 'YesWelder',
  },
  {
    img: '/assets/img/work/work6.webp',
    industry: 'Fashion / Lifestyle',
    brand: 'Billy Footwear',
  },
  {
    img: '/assets/img/work/work7.webp',
    industry: 'Fashion / Lifestyle',
    brand: 'Bambi and Birdie',
  },
  {
    img: '/assets/img/work/work8.webp',
    industry: 'Fashion / Activewear',
    brand: 'OutRise',
  },
  {
    img: '/assets/img/work/work9.webp',
    industry: 'Audio & Consumer Electronics',
    brand: 'RockSteady Audio',
  },
  // work10.webp is currently not used
  {
    img: '/assets/img/work/work11.webp',
    industry: 'Skincare & Beauty',
    brand: 'SimpleSkincare.in',
  },
  {
    img: '/assets/img/work/work12.webp',
    industry: 'Skincare & Beauty',
    brand: 'Paiskincare.ie',
  },
  {
    img: '/assets/img/work/work13.webp',
    industry: 'Health & Beauty Marketplace',
    brand: 'The Detox Market',
  },
  {
    img: '/assets/img/work/work14.webp',
    industry: 'Beverages & Nutrition',
    brand: 'GenuineTea.ca',
  },
  {
    img: '/assets/img/work/work15.webp',
    industry: 'Skincare & Beauty (Technology)',
    brand: 'LumiTherapy.co.uk',
  },
  {
    img: '/assets/img/work/work16.webp',
    industry: 'Jewelry',
    brand: 'Rosamia Jewelry',
  },
  {
    img: '/assets/img/work/work17.webp',
    industry: 'Footwear',
    brand: 'PillowSlides',
  },
  {
    img: '/assets/img/work/work18.webp',
    industry: 'Home Appliances or Beauty',
    brand: 'Laifen.in',
  },
  {
    img: '/assets/img/work/work19.webp',
    industry: 'Skincare & Beauty',
    brand: 'Kinvara Skincare',
  },
  {
    img: '/assets/img/work/work20.webp',
    industry: 'Fashion / Jewelry',
    brand: 'HEYMAEVE',
  },
  {
    img: '/assets/img/work/work21.webp',
    industry: 'Audio & Consumer Electronics',
    brand: 'RockSteady Audio',
  },
  {
    img: '/assets/img/work/work22.webp',
    industry: 'Pet Products',
    brand: 'MauPets',
  },
  {
    img: '/assets/img/work/work23.webp',
    industry: 'Skincare & Beauty',
    brand: 'Paiskincare.ie',
  },
  {
    img: '/assets/img/work/work24.webp',
    industry: 'Skincare & Beauty',
    brand: 'SimpleSkincare.in',
  },
  {
    img: '/assets/img/work/work25.webp',
    industry: 'Other',
    brand: 'Client Work',
  },
];

const Work = () => {
  const teamContent = TEAM_CONTENT;

  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef(null);

  const industries = useMemo(
    () => ['All', ...Array.from(new Set(TEAM_CONTENT.map((item) => item.industry)))],
    []
  );

  const filteredContent =
    selectedIndustry === 'All'
      ? teamContent
      : teamContent.filter((item) => item.industry === selectedIndustry);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* BREADCRUMB */}
      <BreadCumb
        bgimg="/assets/img/work/Group-1171275783.png"
        Title="Work"
        className="breadcrumb-wrapper bg-cover breadcrumb-wrapper-margin-top case-study-breadcrumb"
      />

      {/* Image section */}
      <section className="team-section-3 fix section-padding">
        <div className="container-fluid">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>Our Work</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Industry Case Studies
              </h2>
            </div>
            <div className="work-filter wow fadeInUp" data-wow-delay=".5s">
              <span className="work-filter-label">Industry</span>
              <div
                className={`work-filter-dropdown ${isFilterOpen ? 'open' : ''}`}
                ref={dropdownRef}
              >
                <button
                  type="button"
                  className="work-filter-toggle"
                  onClick={() => setIsFilterOpen((prev) => !prev)}
                >
                  <span className="work-filter-selected">
                    {selectedIndustry === 'All' ? 'All industries' : selectedIndustry}
                  </span>
                  <span className="work-filter-toggle-icon">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </button>
                <ul className="work-filter-menu">
                  {industries.map((industry) => (
                    <li key={industry}>
                      <button
                        type="button"
                        className={`dropdown-menu-link ${
                          selectedIndustry === industry ? 'active' : ''
                        }`}
                        onClick={() => {
                          setSelectedIndustry(industry);
                          setIsFilterOpen(false);
                        }}
                      >
                        {industry}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredContent.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="team-card-items team-work-card">
                  <div className="team-image-wrapper">
                    <div className="team-image">
                      <img src={item.img} alt={item.brand || 'Client work'} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
