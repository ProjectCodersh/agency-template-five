import { useEffect, useRef } from 'react';
import loadBackgroudImages from './loadBackgroudImages';
import { Link } from 'react-router-dom';
import React from 'react';

const BreadCumb = ({ Title, bgimg, customTrail = null, hasOverlay = false, className = '' }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current && bgimg) {
      wrapperRef.current.style.backgroundImage = `url('${bgimg}')`;
    }
    // Also call the original function for any other elements
    loadBackgroudImages();
  }, [bgimg]);

  return (
    <div
      ref={wrapperRef}
      className={`breadcrumb-wrapper bg-cover breadcrumb-wrapper-margin-top ${className}`}
      data-background={bgimg}
    >
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
