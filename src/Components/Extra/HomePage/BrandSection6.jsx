import parse from 'html-react-parser';
import figmaLogo from '/assets/img/tools/figma-icon.webp';
import canvaLogo from '/assets/img/tools/canva-icon.webp';
import photoshopLogo from '/assets/img/tools/photoshop-icon.webp';
import adobeLogo from '/assets/img/tools/adobecloud-icon.webp';

const Brandsection6 = () => {
  const recommended = [{ name: 'figma-icon', logo: figmaLogo }];

  const compatible = [
    { name: 'canva-icon', logo: canvaLogo },
    { name: 'photoshop-icon', logo: photoshopLogo },
    { name: 'adobecloud-icon', logo: adobeLogo },
  ];

  const chooseHeading = {
    subtitle: 'Our Services',
    title: 'Design & Prototype Tools',
    content:
      'A fully equipped WordPress development <br/> team ready to handle all your technical needs— <br/>fast, flexible, and reliable.',
    plantitle1: 'We recommend For you ',
    plantitle2: 'We are Also compatible with',
  };

  return (
    <section className="section-padding brand-section fix">
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(chooseHeading.title)}
            </h2>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="section-title mb-0">
              <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#f6f3fe' }}>
                <span>{chooseHeading.plantitle1}</span>
              </div>
            </div>
            <div className="row gy-4">
              {recommended.map((tool, index) => (
                <div className="col-6 col-sm-4 col-md-4 col-lg-3" key={index}>
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="img-fluid mb-2 px-2 px-md-0 brandsection-brands-three"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
            <div className="section-title mb-0">
              <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#f6f3fe' }}>
                <span>{chooseHeading.plantitle2}</span>
              </div>
            </div>

            <div className="row p-md-0">
              {compatible.map((tool, index) => (
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 " key={index}>
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="img-fluid mb-2 px-2 px-md-0 brandsection-brands-three"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brandsection6;
