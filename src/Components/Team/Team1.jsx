import { Link } from 'react-router-dom';
import BreadCumb from '../../Components/Common/BreadCumb';

const Team1 = () => {
  const teamContent = [
    {
      img: '/assets/img/work/work1.webp',
      name: 'Reful Miya',
      content: 'CO-Leader',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/work/work2.webp',
      name: 'Shikhon Islam',
      content: 'Web Developer',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/work/work3.webp',
      name: 'Abdullah Islam',
      content: 'Web Development',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/work/work1.webp',
      name: 'Leslie Alexander',
      content: 'Nursing Assistant',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/work/work2.webp',
      name: 'Leslie Alexander',
      content: 'Nursing Assistant',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/work/work3.webp',
      name: 'Leslie Alexander',
      content: 'Nursing Assistant',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  ];

  return (
    <>      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Pricing"></BreadCumb>
      <section className="team-section-3 fix section-padding">

        {/* <div className="container px-3">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>OUR WORK</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Use SEO to Drive Growth <br /> at Your Business
              </h2>
            </div>
            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <Link to="/team">
                <span className="theme-btn">EXPLORE MORE </span>
                <span className="arrow-btn">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
          <div className="row">
            {teamContent.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="team-card-items">
                  <div className="team-image">
                    <img src={item.img} alt="img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>
  );
};

export default Team1;
