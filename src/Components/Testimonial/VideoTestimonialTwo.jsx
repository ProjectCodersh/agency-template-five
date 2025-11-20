import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import '../../assets/aditya.css';

const VideoTestimonialSlickSecond = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const allVideos = document.querySelectorAll('.video-testimonial-slide video');
    const playButtons = document.querySelectorAll('.video-testimonial-slide .play-btn-vr');
    const allContents = document.querySelectorAll('.video-testimonial-slide .testimonial-content');

    playButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const video = btn.previousElementSibling;
        const content = btn.nextElementSibling;

        allVideos.forEach((v) => {
          if (v !== video) {
            v.pause();
            v.removeAttribute('controls');
          }
        });

        allContents.forEach((c) => c.classList.remove('hidden'));
        playButtons.forEach((b) => (b.style.display = 'flex'));

        video.play();
        btn.style.display = 'none';
        video.setAttribute('controls', true);
        content.classList.add('hidden');
      });
    });

    allVideos.forEach((video) => {
      video.addEventListener('pause', () => {
        const wrapper = video.parentElement;
        const content = wrapper.querySelector('.testimonial-content');
        const playBtn = wrapper.querySelector('.play-btn-vr');

        content.classList.remove('hidden');
        playBtn.style.display = 'flex';
        video.removeAttribute('controls');
      });
    });
  }, []);

  const pauseAllVideos = () => {
    const allVideos = document.querySelectorAll('.video-testimonial-slide video');
    allVideos.forEach((v) => {
      v.pause();
      v.removeAttribute('controls');
    });
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const videoSlides = [
    {
      src: 'https://codersh.com/wp-content/uploads/2025/06/Video-1-compressed-D5ZEQNbv.mp4',
      name: 'Esther Howard',
      role: 'CEO',
      desc: 'From the initial consultation to the final product...',
    },
    {
      src: 'https://codersh.com/wp-content/uploads/2025/06/Video-2-compressed-CkzfM4nC.mp4',
      name: 'Simon',
      role: 'CEO',
      desc: 'He personalized my website to fit my needs...',
    },
    {
      src: 'https://codersh.com/wp-content/uploads/2025/06/Video-3-compressed-CYU6nxZ0.mp4',
      name: 'Cameron Williamson',
      role: 'CEO',
      desc: "Don't worry about the code. Don't worry about things not working...",
    },
    {
      src: 'https://codersh.com/wp-content/uploads/2025/06/Video-4-compressed-BI7yZHtd.mp4',
      name: 'Brooklyn Simmons',
      role: 'CEO',
      desc: 'We have been working together for over three years...',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: false, // removed autoplay
    beforeChange: () => {
      pauseAllVideos(); // pause on manual swipe too
    },
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial-section section-padding fix" style={{ background: '#F6F3FE' }}>
      <div className="container px-3">
        <div className="testimonial-wrapper g-3">
          <div className="section-title-area">
            <div className="section-title">
              <div
                className="sub-title bg-color-2 wow fadeInUp"
                style={{ backgroundColor: '#384bff1a' }}
              >
                <span>TESTIMONIALS</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Loved by niche digital agencies <br /> across the US!
              </h2>
            </div>
            <div className="array-button wow fadeInUp d-none d-lg-flex" data-wow-delay=".5s">
              <button onClick={previous} className="array-prev">
                <i className="bi bi-arrow-left"></i>
              </button>
              <button onClick={next} className="array-next">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="row video-testimonial-row">
            <div className="col-12">
              <div className="video-testimonial-slider">
                <Slider ref={sliderRef} {...settings}>
                  {videoSlides.map((slide, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="video-testimonial-slide">
                        <video
                          src={slide.src}
                          preload="metadata"
                          playsInline
                          controlsList="nodownload" // remove download button
                        ></video>
                        <div className="play-btn-vr">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                            fill="#6a47ed"
                          >
                            <path d="M361 215C375.2 223.2 384 238.1 384 254.1s-8.75 30.9-23 39L87 473c-14.4 8.1-32 7.9-46.2-.5S0 450.4 0 433.1V78.9C0 61.6 9.75 45.6 24 37.1S72.6 31.9 87 40.1L361 215z" />
                          </svg>
                        </div>
                        <div className="testimonial-content">
                          <div className="stars">★★★★★</div>
                          <h3>{slide.name}</h3>
                          <p className="role">{slide.role}</p>
                          <p className="desc">{slide.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div
            className="array-button wow fadeInUp d-flex d-lg-none justify-content-center"
            data-wow-delay=".5s"
          >
            <button onClick={previous} className="array-prev">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button onClick={next} className="array-next">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSlickSecond;
