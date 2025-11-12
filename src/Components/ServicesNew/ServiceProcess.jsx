// ServiceProcess.jsx
const ServiceProcess = ({ data }) => {
  if (!data) return null;

  return (
    <section className="service-section fix section-padding">
      {/* Background shapes if needed
        {data.leftShape && (
          <div className="left-shape float-bob-y">
            <img src={data.leftShape} alt="left-shape" />
          </div>
        )}
        {data.rightShape && (
          <div className="right-shape">
            <img src={data.rightShape} alt="right-shape" />
          </div>
        )}
        {data.bgShape && (
          <div className="bg-shape">
            <img src={data.bgShape} alt="bg-shape" />
          </div>
        )} */}
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>{data.subtitle}</span>
            </div>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
          </div>
        </div>

        <div className="row">
          {Array.isArray(data.steps) &&
            data.steps.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-box-items text-center flex-column">
                  <div className="d-flex justify-content-center justify-content-md-start service-box-items-icon">
                    <div className="icon" style={{ fontSize: '40px', color: '#6a47ed' }}>
                      <i className={item.iconclass}></i>
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="text-center text-md-start">{item.title}</h4>
                    <p className="text-center text-md-start">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
