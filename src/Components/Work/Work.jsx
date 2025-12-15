// import { Link } from 'react-router-dom';
import BreadCumb from '../../Components/Common/BreadCumb';

const Work = () => {
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
      img: '/assets/img/work/work4.webp',
    },
    {
      img: '/assets/img/work/work5.webp',
    },
    {
      img: '/assets/img/work/work6.webp',
    },
    {
      img: '/assets/img/work/work7.webp',
    },
    {
      img: '/assets/img/work/work8.webp',
    },
    {
      img: '/assets/img/work/work9.webp',
    },
    // {
    //     img: '/assets/img/work/work10.webp',
    // },
    {
      img: '/assets/img/work/work11.webp',
    },
    {
      img: '/assets/img/work/work12.webp',
    },
    {
      img: '/assets/img/work/work13.webp',
    },
    {
      img: '/assets/img/work/work14.webp',
    },
    {
      img: '/assets/img/work/work15.webp',
    },
    {
      img: '/assets/img/work/work16.webp',
    },
    {
      img: '/assets/img/work/work17.webp',
    },
    {
      img: '/assets/img/work/work18.webp',
    },
    {
      img: '/assets/img/work/work19.webp',
    },
    {
      img: '/assets/img/work/work20.webp',
    },
    {
      img: '/assets/img/work/work21.webp',
    },
    {
      img: '/assets/img/work/work22.webp',
    },
    {
      img: '/assets/img/work/work23.webp',
    },
    {
      img: '/assets/img/work/work24.webp',
    },
    {
      img: '/assets/img/work/work25.webp',
    },
  ];

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
      </section>
    </>
  );
};

export default Work;
