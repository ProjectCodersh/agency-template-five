import { Link } from 'react-router-dom';
import BreadCumb from '../../Components/Common/BreadCumb';

const Team1 = () => {
  const teamContent = [
    {
      img: '/assets/img/work/work1.webp',
      name: 'Reful Miya',
    },
    {
      img: '/assets/img/work/work2.webp',
      name: 'Shikhon Islam',
    },
    {
      img: '/assets/img/work/work3.webp',
      name: 'Abdullah Islam',
    },
    {
      img: '/assets/img/work/work1.webp',
      name: 'Leslie Alexander',
    },
    {
      img: '/assets/img/work/work2.webp',
      name: 'Leslie Alexander',
    },
    {
      img: '/assets/img/work/work3.webp',
      name: 'Leslie Alexander',
    },
  ];

  return (
    <>
      {/* WORK BREADCRUMB */}
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Pricing"></BreadCumb>

      {/* WORK CARDS */}
      <section className="team-section-3 fix section-padding">
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
