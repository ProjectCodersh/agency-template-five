import ContentBoxOne from '../Components/NewSingleServiceSection/ContentBoxOne';
import ContentBoxTwo from '../Components/NewSingleServiceSection/ContentBoxTwo';
import BreadCumb from '../Components/Common/BreadCumb';

function NewServicesPage() {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Single Service" />
      <ContentBoxTwo />
      <ContentBoxOne />
      {/* <Testimonial4 /> */}
    </div>
  );
}

export default NewServicesPage;
