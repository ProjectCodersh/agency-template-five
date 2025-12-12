import { Link, useLocation } from 'react-router-dom';
import DropDown from './DropDown';

const Nav = ({ setMobileToggle, headerType }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path) => (currentPath === path ? `active ${headerType}-active` : '');

  return (
    <>
      <ul className={`cs_nav_list`}>
        <li className="menu-item-has-children">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className={
              getActiveClass('/') || getActiveClass('/unlimited-shopify')
                ? 'active ${headerType}-active'
                : ''
            }
          >
            Section
          </a>
          <DropDown>
            <ul>
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
            </ul>
          </DropDown>
        </li>

        <li>
          <Link
            to="/work"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/work')}
          >
            Work
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
            to="/partners"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/partners')}
          >
            Partners
          </Link>
        </li>

        {/* <li>
          <Link
            to="/pricing"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/pricing')}
          >
            Pricing
          </Link>
        </li> */}

        <div className="main-button d-flex d-xl-none">
          <a
            href="https://calendly.com/codersh-web-services/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="theme-btn-contact">Free Consultation</span>
          </a>
        </div>
      </ul>
    </>
  );
};

export default Nav;
