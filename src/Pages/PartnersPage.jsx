import BreadCumb from '../Components/Common/BreadCumb';
import PartnersSection from '../Components/Partners/PartnersSection';
import ParntersSection2 from '../Components/Partners/ParntersSection2';
import PartnersSection3 from '../Components/Partners/PartnersSection3';

function PartnersPage() {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Partners" />
      <PartnersSection />
      <ParntersSection2 />
      <PartnersSection3 />
    </div>
  );
}

export default PartnersPage;
