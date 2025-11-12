// BreadCumb.jsx
import { useEffect } from 'react';
import loadBackgroudImages from './loadBackgroudImages';
import { Link } from 'react-router-dom';
import React from 'react';

const BreadCumb = ({ Title, bgimg, customTrail = null, hasOverlay = false }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="breadcrumb-wrapper bg-cover breadcrumb-wrapper-margin-top"
      data-background={bgimg}
    >
      {/* Add this overlay */}
      {hasOverlay && <div className="breadcrumb-overlay" />}

      <div className="left-shape"></div>
      <div className="right-shape"></div>
      <div className="container px-3">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {Title}
            </h1>
          </div>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            {customTrail ? (
              customTrail.map((item, index) => (
                <React.Fragment key={index}>
                  <li>{item.link ? <Link to={item.link}>{item.label}</Link> : item.label}</li>
                  {index < customTrail.length - 1 && (
                    <li>
                      <i className="bi bi-chevron-right"></i>
                    </li>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li>{Title}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
