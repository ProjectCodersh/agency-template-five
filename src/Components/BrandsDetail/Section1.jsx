import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Section1 = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="fix section-padding">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="about-image d-flex justify-content-center align-items-center mt-0 mt-lg-5">
              <picture>
                <source srcSet={data.img} type="image/webp" />
                <img
                  src={data.img}
                  // alt={data.title}
                  alt={data.img ? data.img.split('/').pop().split('.')[0] : ''}
                  className="img-fluid rounded-4"
                  style={{ width: 'auto', height: '100%', maxHeight: '608px' }}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title mb-4">
                <div className="sub-title bg-color-2 mb-2">
                  <span>{data.subtitle}</span>
                </div>
                <h2>{data.title}</h2>
              </div>
              <p className="mb-4">{data.content}</p>

              <div className="row">
                {data.listItems.map((item, idx) => (
                  <div key={idx} className="col-sm-6 mb-3">
                    <h5>{item.title}</h5>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.text}
                      </a>
                    ) : (
                      <ul className="list-unstyled">
                        {item.content.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
