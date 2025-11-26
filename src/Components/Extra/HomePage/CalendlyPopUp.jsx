import { Link } from 'react-router-dom';

const CalendlyPopup = () => {
    return (
        <Link to="/contact-us">
            <button
                className="hero-theme-btn-second"
                style={{ minWidth: '209px' }}
            >
                Let&#39;s Collaborate
            </button>
        </Link>
    );
};

export default CalendlyPopup;
