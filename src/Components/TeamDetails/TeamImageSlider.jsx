import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamImageSlider = () => {
  const blogContent = [
    {
      img: '/assets/img/team/team-details-1.webp',
    },
    {
      img: '/assets/img/team/team-details-2.webp',
    },
    {
      img: '/assets/img/team/team-details-3.webp',
    },
    {
      img: '/assets/img/team/team-details-4.webp',
    },
    // {
    //     img: '/assets/img/team/team-details-5.webp',
    // },
    {
      img: '/assets/img/team/team-details-6.webp',
    },
    {
      img: '/assets/img/team/team-details-7.webp',
    },
    {
      img: '/assets/img/team/team-details-8.webp',
    },
    {
      img: '/assets/img/team/team-details-9.webp',
    },
    {
      img: '/assets/img/team/team-details-10.webp',
    },
  ];

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    focusOnSelect: false,
    swipe: true,
    draggable: true,
    touchMove: true,
    swipeToSlide: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          swipe: true,
          draggable: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          swipe: true,
          draggable: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          swipe: true,
          draggable: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          swipe: true,
          draggable: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <section className="news-section pt-0 section-padding">
      <div className="container px-3">
        <div className="section-title text-center">
          <div className="sub-title bg-color-2 wow fadeInUp">
            <span>Leadership in Action</span>
          </div>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Moments with our CEO shaping <br /> innovation and growth
          </h2>
        </div>
      </div>

      <div className="container-fluid px-3" style={{ marginTop: '32px' }}>
        <Slider {...sliderSettings} className="team-image-slider">
          {blogContent.map((item, i) => (
            <div key={i} className="slide-item">
              <div className="news-card-items mt-0  ">
                <div className="news-image">
                  <img src={item.img} alt={`Team image ${i + 1}`} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamImageSlider;
