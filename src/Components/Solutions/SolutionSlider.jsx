import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SolutionSlider = ({ data = [] }) => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section-padding">
      <div className="container-fluid px-3 px-sm-3 px-md-4 px-lg-4">
        <Slider {...sliderSettings} className="custom-slider">
          {data.map((image, index) => (
            <div className="slide-item" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SolutionSlider;
