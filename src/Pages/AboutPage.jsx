import About2 from '../Components/About/About2';
import BreadCumb from '../Components/Common/BreadCumb';
// import Counter3 from '../Components/Counter/Counter3';
import Value1 from '../Components/Value/Value1';

const AboutPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="about us" />
      <About2 addclass="about-section-2 fix section-padding" />
      {/* <Counter3 /> */}
      <Value1 />
    </div>
  );
};

export default AboutPage;
