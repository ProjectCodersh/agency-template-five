import { useEffect, useRef } from 'react';
import loadBackgroudImages from './loadBackgroudImages';
import { Link } from 'react-router-dom';
import React from 'react';

const BreadCumb = ({ Title, bgimg, customTrail = null, hasOverlay = false, className = '' }) => {
  const wrapperRef = useRef(null);

  // Default breadcrumb background image if none provided
  const DEFAULT_BREADCRUMB_BG = '/assets/img/breadcrumb.jpg';

  // Ensure bgimg is always a string URL (handle object case and null/undefined)
  const getBackgroundImage = () => {
    if (!bgimg) return DEFAULT_BREADCRUMB_BG;
    // If bgimg is an object (shouldn't happen with proper GROQ, but safety check)
    if (typeof bgimg === 'object' && bgimg !== null) {
      return bgimg.asset?.url || DEFAULT_BREADCRUMB_BG;
    }
    // If bgimg is a string URL, use it
    if (typeof bgimg === 'string' && bgimg.trim()) {
      return bgimg;
    }
    return DEFAULT_BREADCRUMB_BG;
  };

  const backgroundImage = getBackgroundImage();

  useEffect(() => {
    if (wrapperRef.current && backgroundImage) {
      wrapperRef.current.style.backgroundImage = `url('${backgroundImage}')`;
    }
    // Also call the original function for any other elements
    loadBackgroudImages();
  }, [backgroundImage]);

  return (
    <div
      ref={wrapperRef}
      className={`breadcrumb-wrapper bg-cover breadcrumb-wrapper-margin-top ${className}`}
      data-background={backgroundImage}
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
