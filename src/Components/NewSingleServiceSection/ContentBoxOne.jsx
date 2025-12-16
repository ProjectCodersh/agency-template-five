import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const ContentBoxOne = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="team-section fix section-padding bg-cover"
      data-background="/assets/img/team/team-bg.jpg"
    >
      <div className="container px-3">
        <div className="team-wrapper style-3">
          <div className="row g-4">
            <div className="col-lg-6 text-center">
              <img src={data.img} alt="img" style={{ maxHeight: '535px', borderRadius: '24px' }} />
            </div>

            <div className="col-lg-6">
              <div className="team-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2">
                    <span>{data.subtitle}</span>
                  </div>
                  <h2>{data.title}</h2>
                </div>

                <p>{data.content}</p>

                <div className="main-button mt-4" style={{ width: 'fit-content' }}>
                  <Link to={data.buttonLink}>
                    <span className="theme-btn">{data.buttonText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBoxOne;
