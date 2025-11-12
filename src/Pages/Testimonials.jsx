// import React from 'react'
import BreadCumb from '../Components/Common/BreadCumb';
import VideoTestimonialSlick from '../Components/Testimonial/VideoTestimonial';
// import Testimonial5 from '../Components/Testimonial/Testimonial5';
// import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';

function Testimonials() {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Testimonials"></BreadCumb>
      {/* <Testimonial5 /> */}
      <VideoTestimonialSlick />
    </div>
  );
}

export default Testimonials;
