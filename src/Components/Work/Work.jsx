import { useEffect, useMemo, useRef, useState } from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';

const TEAM_CONTENT = [
  {
    img: '/assets/img/work/work1.webp',
    industry: 'Consumer Electronics & Smart Devices',
    brand: 'Techless',
    link: 'https://www.techless.com/',
  },
  {
    img: '/assets/img/work/work2.webp',
    industry: 'Beauty, Skincare & Personal Care',
    brand: 'Kinvara Skincare',
    link: 'https://www.kinvaraskincare.com/',
  },
  {
    img: '/assets/img/work/work3.webp',
    industry: 'Consumer Electronics & Smart Devices',
    brand: 'HelloCarePod',
    link: 'https://hellocarepod.com/',
  },
  {
    img: '/assets/img/work/work4.webp',
    industry: 'Fashion, Footwear & Accessories',
    brand: 'HEYMAEVE',
    link: 'https://heymaeve.com/',
  },
  {
    img: '/assets/img/work/work5.webp',
    industry: 'Industrial, Outdoor & Tools',
    brand: 'WaZoo',
    link: 'https://wazoogear.com/',
  },
  {
    img: '/assets/img/work/work6.webp',
    industry: 'Industrial, Outdoor & Tools',
    brand: 'YesWelder',
    link: 'https://yeswelder.com/',
  },
  {
    img: '/assets/img/work/work7.webp',
    industry: 'Fashion, Footwear & Accessories',
    brand: 'Billy Footwear',
    link: 'https://billyfootwear.com/',
  },
  {
    img: '/assets/img/work/work8.webp',
    industry: 'Fashion, Footwear & Accessories',
    brand: 'Bambi and Birdie',
    link: 'https://bambiandbirdie.com/',
  },
  {
    img: '/assets/img/work/work9.webp',
    industry: 'Business & Digital Services',
    brand: 'Cohort',
  },
  {
    img: '/assets/img/work/work10.webp',
    industry: 'Wellness, Health & Personal Care',
    brand: 'PROTECBriefs',
    link: 'https://www.protecbriefs.com/',
  },
  {
    img: '/assets/img/work/work11.webp',
    industry: 'Finance & Professional Services',
    brand: 'OutRise',
    link: 'https://outrise.co.uk/',
  },
  {
    img: '/assets/img/work/work12.webp',
    industry: 'Industrial, Outdoor & Tools',
    brand: 'ToolRoll',
  },
  {
    img: '/assets/img/work/work13.webp',
    industry: 'Consumer Electronics & Smart Devices',
    brand: 'RockSteady Audio',
    link: 'https://rocksteadyaudio.com/',
  },
  // {
  //   img: '/assets/img/work/work14.webp',
  //   industry: 'Unknown / Placeholder',
  //   brand: 'Unknown',
  // },
  {
    img: '/assets/img/work/work15.webp',
    industry: 'Pet Products',
    brand: 'MauPets',
    link: 'https://www.maupets.com/',
  },
  {
    img: '/assets/img/work/work16.webp',
    industry: 'Beauty, Skincare & Personal Care',
    brand: 'SimpleSkincare',
    link: 'https://www.simpleskincare.in/',
  },
  {
    img: '/assets/img/work/work17.webp',
    industry: 'Business & Digital Services',
    brand: 'Winning Ads Media',
    link: 'https://winningadsmedia.com/',
  },
  {
    img: '/assets/img/work/work18.webp',
    industry: 'Beauty, Skincare & Personal Care',
    brand: 'Paiskincare',
    link: 'https://www.paiskincare.ie/',
  },
  {
    img: '/assets/img/work/work19.webp',
    industry: 'Fashion, Footwear & Accessories',
    brand: 'PillowSlides',
    link: 'https://pillowslides.com/',
  },
  {
    img: '/assets/img/work/work20.webp',
    industry: 'Wellness, Health & Personal Care',
    brand: 'LumiTherapy',
    link: 'https://lumitherapy.co.uk/',
  },
  {
    img: '/assets/img/work/work21.webp',
    industry: 'Fashion, Footwear & Accessories',
    brand: 'Rosamia Jewelry',
    link: 'https://www.rosamiajewelry.com/',
  },
  {
    img: '/assets/img/work/work22.webp',
    industry: 'Beauty, Skincare & Personal Care',
    brand: 'The Detox Market',
    link: 'https://www.thedetoxmarket.com/',
  },
  {
    img: '/assets/img/work/work23.webp',
    industry: 'Food, Beverage & Nutrition',
    brand: 'GenuineTea',
    link: 'https://www.genuinetea.ca/',
  },
  // {
  //   img: '/assets/img/work/work24.webp',
  //   industry: 'Unknown / Placeholder',
  //   brand: 'Unknown',
  // },
  {
    img: '/assets/img/work/work25.webp',
    industry: 'Consumer Electronics & Smart Devices',
    brand: 'Laifen',
    link: 'https://www.laifentech.com/',
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
