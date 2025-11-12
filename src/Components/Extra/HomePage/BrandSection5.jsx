import parse from 'html-react-parser';
import goDaddyLogo from '/assets/img/tools/godaddy-logo.png';
import flyWheelLogo from '/assets/img/tools/flywheel-logo.png';
import HighLevelLogo from '/assets/img/tools/highlevel-logo.png';
import HostingerLogo from '/assets/img/tools/hostinger-logo.png';
import blueHostLogo from '/assets/img/tools/bluehost-logo.png';
import kinstaLogo from '/assets/img/tools/kinsta-logo.png';
import namecheapLogo from '/assets/img/tools/namecheap-logo.png';
import onetwothreeRegLogo from '/assets/img/tools/123reg-logo.png';
// import ionosLogo from "/assets/img/tools/tool18.png";
// import hostgatorLogo from "/assets/img/tools/tool19.png";

const BrandSection5 = () => {
  const recommended = [
    { name: 'goDaddy', logo: goDaddyLogo },
    { name: 'Flywheel', logo: flyWheelLogo },
    { name: 'HighLevel', logo: HighLevelLogo },
    { name: 'Hostinger', logo: HostingerLogo },
    // { name: "Hostinger", logo: HostingerLogo },
  ];

  const compatible = [
    { name: 'Bluehost', logo: blueHostLogo },
    { name: 'Kinsta', logo: kinstaLogo },
    { name: 'Namecheap', logo: namecheapLogo },
    { name: '1-2-3', logo: onetwothreeRegLogo },
  ];

  const chooseHeading = {
    subtitle: 'Our Services',
    title: 'Domain/Hosting/SSL/Email Management Tools',
    content:
      'A fully equipped Shopify development <br/> team ready to handle all your technical needs— <br/>fast, flexible, and reliable.',
    plantitle1: 'We recommend For you ',
    plantitle2: 'We are Also compatible with',
  };

  return (
    <section className="py-5 px-3 brand-section fix">
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp text-break" data-wow-delay=".3s">
              {parse(chooseHeading.title)}
            </h2>
          </div>
        </div>
        <div className="mb-4">
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4">
              <span>{chooseHeading.plantitle1}</span>
            </div>
          </div>
          <div className="row gy-4">
            {recommended.map((tool, index) => (
              <div
                className="col-6 col-sm-4 col-md-4 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column"
                key={index}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="img-fluid mb-2 brandsection-brands-two px-3 px-md-0"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4">
              <span>{chooseHeading.plantitle2}</span>
            </div>
          </div>
          <div className="row gy-4">
            {compatible.map((tool, index) => (
              <div
                className="col-6 col-sm-4 col-md-4 col-lg-3 text-center  d-flex align-items-center justify-content-center flex-column"
                key={index}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="img-fluid mb-2 brandsection-brands-two px-3 px-md-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection5;
