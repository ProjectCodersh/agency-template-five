import { Link } from "react-router-dom";
import team from "/assets/img/team/team1.webp";

function ThankyouPage() {
    return (
        <div className="thankyou-wrapper">
            {/* TOP SPACING */}
            <div className="Brand-breadcrumb">
                <div className="container">
                    <br /><br /><br />
                </div>
            </div>

            {/* MAIN SECTION */}
            <div className="section thanku-section-padding">
                <div className="container text-center">

                    <h2 className="thank-title mt-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                        Thank You <br /> for Reaching Out!
                    </h2>

                    <p className="thank-subtitle">
                        Your message has been successfully received. We appreciate your interest in Codersh
                        Web Services and are excited to learn more about how we can help elevate your
                        digital presence.
                    </p>

                    <div className="row align-items-center thank-row">

                        <div className="col-md-5 col-lg-5 d-flex justify-content-center">
                            <img src={team} alt="Team" className="team-img" />
                        </div>

                        <div className="col-md-7 col-lg-7 text-start">
                            <h2 className="why-title mt-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 text-center text-md-start">Why Choose Codersh?</h2>
                            <ul className="why-list">
                                <li>
                                    <span className="bold">Innovative Designs:</span>
                                    <p>We craft visually appealing, user-centric websites that resonate with your brand.</p>
                                </li>
                                <li>
                                    <span className="bold">Comprehensive Services:</span>
                                    <p>From Shopify and WordPress to mobile app development, we cover all digital needs.</p>
                                </li>
                                <li>
                                    <span className="bold">Client-First Approach:</span>
                                    <p>Your success is our priority. We deliver high-quality, tailored solutions.</p>
                                </li>
                            </ul>

                            <div className="main-button wow fadeInUp mt-4 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0" data-wow-delay=".3s">
                                <Link to="/">
                                    <span className="theme-btn">Return To Homepage </span>
                                    <span className="arrow-btn">
                                        <i className="bi bi-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ThankyouPage;
