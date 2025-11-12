// import React, { useState } from "react";
// import DropDown from "./DropDown";
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ setMobileToggle, headerType }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path) => (currentPath === path ? `active ${headerType}-active` : '');

  return (
    <>
      <ul className={`cs_nav_list`}>
        <li>
          <Link to="/" onClick={() => setMobileToggle(false)} className={getActiveClass('/')}>
            Unlimited Wordpress
          </Link>
        </li>
        <li>
          <Link
            to="/unlimited-shopify"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/unlimited-shopify')}
          >
            Unlimited Shopify
          </Link>
        </li>
        <li>
          <Link
            to="/case-study"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/case-study')}
          >
            Case Study
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/pricing')}
          >
            Pricing
          </Link>
        </li>
        <div className="main-button d-flex d-xl-none">
          <Link to="/contact-us" className="px-2">
            {' '}
            <span className="theme-btn-contact"> Contact Us </span>
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Nav;
