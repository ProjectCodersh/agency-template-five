import { Link } from 'react-router-dom';
import BreadCumb from '../../Components/Common/BreadCumb';

const Team1 = () => {
  const teamContent = [
    {
      img: '/assets/img/work/work1.webp',
    },
    {
      img: '/assets/img/work/work2.webp',
    },
    {
      img: '/assets/img/work/work3.webp',
    },
    {
      img: '/assets/img/work/work1.webp',
    },
    {
      img: '/assets/img/work/work2.webp',
    },
    {
      img: '/assets/img/work/work3.webp',
    },
  ];

  return (
    <>
      <div></div>
      {/* <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Work" />

      <section className="team-section-3 fix section-padding">
        <div className="container-fluid">
          <div className="row">
            {teamContent.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="team-card-items team-work-card">
                  <div className="team-image-wrapper">
                    <div className="team-image">
                      <img src={item.img} alt="work" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Team1;
