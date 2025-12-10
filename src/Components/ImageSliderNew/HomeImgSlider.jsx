import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function OurWorkdata() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch('/assets/data/homeimgslider/homeimgslider.json')
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <div className="" style={{ background: '#6a47ed' }}>
      <div
        className="container"
        style={{
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          padding: '60px 0',
          background: 'rgba(106, 71, 237, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '20px',
          boxShadow: '0 0 30px rgba(106, 71, 237, 0.5)',
        }}
      >
        {/* <div className="project-details-content home-img-slider-section">
          <h3
            className="text-white"
            style={{
              textAlign: 'center',
              color: 'white !important',
              // fontSize: '2rem',
              // fontWeight: '700',
              marginBottom: '40px',
            }}
          >
            Recent Work with Big Brands
          </h3>
        </div> */}

        {/* <div className="section-title">
          <div
            className="sub-title wow fadeInUp"
            style={{ backgroundColor: 'rgba(56, 75, 255, 0.1)' }}
            data-wow-delay=".1s"
          >
            <span>Recent Work</span>
          </div>
          <h2
            className="wow fadeInUp text-center"
            data-wow-delay=".3s"
            style={{ color: 'white', marginBottom: '40px' }}
          >
            {' '}
            Recent work with Big Brands
          </h2>
        </div> */}

        <div className="project-details-content home-img-slider-section section-title d-flex flex-column align-items-center justify-content-center">
          <div
            className="sub-title wow fadeInUp"
            // style={{ backgroundColor: 'rgb(246 243 254 / 50%)' }}
            style={{ backgroundColor: '#f6f3fe' }}
            data-wow-delay=".1s"
          >
            <span>Recent Work</span>
          </div>
          <h2
            className="text-white"
            style={{
              textAlign: 'center',
              color: 'white !important',
              marginBottom: '40px',
            }}
          >
            Creative Work Portfolio
          </h2>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg, rgba(106, 71, 237,1) 0%, rgba(106, 71, 237,0) 10%, rgba(106, 71, 237,0) 90%, rgba(106, 71, 237,1) 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {[...projectData, ...projectData].map((project, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                width: '200px',
                height: '100%',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '200px',
                  maxHeight: '350px',
                  overflow: 'hidden',
                  borderRadius: '20px',
                }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div className="p-2 d-flex flex-row align-items-center justify-content-center gap-2">
                <div
                  className="logo-container bg-white"
                  style={{
                    width: '80px',
                    height: '37px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    padding: '4px 6px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                <p
                  style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginTop: '10px',
                  }}
                >
                  {project.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
