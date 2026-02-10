import { useState, useEffect, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import InteractiveSectionLoader from '../Components/Loader/InteractiveSectionLoader';
import '../assets/ShopifySectionPopup.css';

const ShopifySectionCode = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('preview');
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const mockLiquidCode = `
{% schema %}
{
  "name": "Video with Text",
  "settings": [
    {
      "type": "video_url",
      "id": "video_url",
      "label": "Video link",
      "accept": ["youtube", "vimeo"]
    }
  ]
}
{% endschema %}

<div class="video-section">
  <h2>{{ section.settings.heading }}</h2>
</div>
  `.trim();

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                setLoading(true);
                if (!slug) {
                    setError('No section specified.');
                    setLoading(false);
                    return;
                }

                const response = await axios.get(`/assets/data/shopify-sections/${slug}.json`);
                if (response.data) {
                    setPageData(response.data);
                } else {
                    setError('Section data not found.');
                }
            } catch (err) {
                console.error('Error fetching section data:', err);
                setError(`Failed to load section data for "${slug}".`);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, [slug]);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (emailInput.trim() !== '') {
            setIsEmailVerified(true);
            setActiveTab('code');
            // Smooth scroll to top of content after entering email
            document.getElementById('code-retrieval-main')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(mockLiquidCode);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    if (loading) {
        return (
            <div className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <InteractiveSectionLoader />
            </div>
        );
    }

    if (error || !pageData) {
        return (
            <div className="section-padding text-center" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container">
                    <div className="p-5 bg-white rounded-4 shadow-sm border border-danger border-opacity-25">
                        <i className="bi bi-exclamation-triangle-fill text-danger display-4 mb-3"></i>
                        <p className="text-danger h5">{error || 'Something went wrong.'}</p>
                        <div className="main-button mt-4 d-flex justify-content-center">
                            <button onClick={() => navigate(-1)} className="theme-btn">
                                <i className="bi bi-arrow-left me-2"></i> Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const sectionData = pageData.appShowcase;

    return (
        <div className="shopify-section-code-page">
            {/* HERO SECTION - Matching Project Style */}
            <section className="hero-section shopify-hero-retrieval " style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="hero-content"
                            >
                                {/* <div className="section-title mb-4">
                                    <div className="sub-title d-inline-block" style={{ backgroundColor: 'rgba(106, 71, 237, 0.1)', padding: '8px 20px', borderRadius: '50px' }}>
                                        <span className="text-theme fw-bold">
                                            <i className="bi bi-code-square me-2"></i>
                                            Developer Assets
                                        </span>
                                    </div>
                                </div> */}
                                <h1 className="fw-extrabold section-title mb-3" style={{ color: "#17012c" }}>
                                    Download <span className="text-theme">Liquid Snippets</span> for {sectionData?.title}
                                </h1>
                                <p className="mb-4 text-muted mx-auto lead" style={{ maxWidth: '750px' }}>
                                    {sectionData?.description || 'Get high-quality liquid code and step-by-step instructions to add this section to your Shopify store.'}
                                </p>

                                <div className="hero-button mt-4 d-flex justify-content-center align-items-center gap-4">
                                    <div className="main-button">
                                        <button onClick={() => navigate(-1)} className="theme-btn" style={{ background: '#000' }}>
                                            <i className="bi bi-arrow-left"></i> Back
                                        </button>
                                    </div>
                                    {!isEmailVerified && (
                                        <div className="main-button">
                                            <button
                                                onClick={() => {
                                                    document.getElementById('email-gate-area')?.scrollIntoView({ behavior: 'smooth' });
                                                    setActiveTab('code');
                                                }}
                                                className="theme-btn"
                                            >
                                                Unlock Section <i className="bi bi-unlock ms-2"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="hero-shape-1" style={{ position: 'absolute', top: '-50px', right: '-50px', background: 'radial-gradient(circle, rgba(106, 71, 237, 0.1) 0%, transparent 70%)', width: '300px', height: '300px', borderRadius: '50%', zIndex: 0 }}></div>
                <div className="hero-shape-2" style={{ position: 'absolute', bottom: '-50px', left: '-50px', background: 'radial-gradient(circle, rgba(106, 71, 237, 0.05) 0%, transparent 70%)', width: '250px', height: '250px', borderRadius: '50%', zIndex: 0 }}></div>
            </section>

            {/* DASHBOARD CONTENT AREA */}
            <section className="section-padding bg-white pt-50" id="code-retrieval-main">
                <div className="container">
                    <div className="row justify-content-center mt-negative-80">
                        <div className="col-12">
                            <div className="code-content-main border shadow-sm rounded-4 bg-white overflow-hidden">
                                {/* Tab Navigation */}
                                <div className="tab-navigation-wrapper bg-light px-4 border-bottom d-flex align-items-center overflow-auto no-scrollbar">
                                    <button
                                        className={`tab-btn-v2 ${activeTab === 'preview' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('preview')}
                                    >
                                        <i className="bi bi-eye"></i> Preview
                                    </button>
                                    <button
                                        className={`tab-btn-v2 ${activeTab === 'code' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('code')}
                                    >
                                        <i className="bi bi-code-slash"></i> Code Snippet {!isEmailVerified && <i className="bi bi-lock-fill ms-2 small"></i>}
                                    </button>
                                    <button
                                        className={`tab-btn-v2 ${activeTab === 'installation' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('installation')}
                                    >
                                        <i className="bi bi-journal-text"></i> Installation Guide {!isEmailVerified && <i className="bi bi-lock-fill ms-2 small"></i>}
                                    </button>
                                </div>

                                {/* Content Tabs */}
                                <div className="tab-pane-container p-4 p-lg-5">
                                    <AnimatePresence mode="wait">
                                        {activeTab === 'preview' && (
                                            <motion.div
                                                key="preview-tab"
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -15 }}
                                                className="tab-panel-v2"
                                            >
                                                <div className="row g-5 align-items-center">
                                                    <div className="col-lg-8">
                                                        <div className="preview-window shadow-sm rounded-4 border overflow-hidden">
                                                            <div className="preview-header bg-white border-bottom p-3 d-flex gap-2">
                                                                <div className="dot" style={{ width: '10px', height: '10px', background: '#ccc', borderRadius: '50%' }}></div>
                                                                <div className="dot" style={{ width: '10px', height: '10px', background: '#ccc', borderRadius: '50%' }}></div>
                                                                <div className="dot" style={{ width: '10px', height: '10px', background: '#ccc', borderRadius: '50%' }}></div>
                                                            </div>
                                                            <img
                                                                src={sectionData?.previews?.[0]?.image || '/assets/img/shopify-sections/section-23.png'}
                                                                alt="Section Preview"
                                                                className="img-fluid w-100"
                                                                style={{ minHeight: '400px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="p-4 rounded-4 h-100 bg-light-purple border border-primary border-opacity-10">
                                                            <h4 className="fw-bold mb-4">Core Benefits</h4>
                                                            <ul className="list-unstyled mb-0">
                                                                {(pageData.appShowcase.features || []).map((feature, idx) => (
                                                                    <li key={idx} className="d-flex align-items-start gap-2 mb-3">
                                                                        <i className="bi bi-check-circle-fill text-theme" style={{ marginTop: '2px' }}></i>
                                                                        <span className="small fw-semibold">{feature}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div className="main-button mt-4">
                                                                <button onClick={() => setActiveTab('code')} className="theme-btn w-100 text-center">
                                                                    Get Section Code
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {(activeTab === 'code' || activeTab === 'installation') && !isEmailVerified && (
                                            <motion.div
                                                key="locked-gate"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                id="email-gate-area"
                                                className="text-center"
                                            >
                                                <div className="email-card-v2 mx-auto p-4 p-md-5 rounded-4 bg-light border" style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.05)' }}>
                                                    <div className="gate-icon mb-4">
                                                        <div className="bg-white p-4 rounded-circle shadow-sm d-inline-block text-theme">
                                                            <i className="bi bi-shield-lock display-3"></i>
                                                        </div>
                                                    </div>
                                                    <h2 className="fw-bold mb-3 h3">Instant Download</h2>
                                                    <p className="text-muted mb-4 lead" style={{ fontSize: '1rem', maxWidth: "576px", margin: "auto" }}>Enter your email to unlock the Liquid snippet and step-by-step installation instructions for this Shopify section.</p>

                                                    <form onSubmit={handleEmailSubmit} style={{ maxWidth: "576px", margin: "auto" }}>
                                                        <div className="form-group mb-3">
                                                            <input
                                                                type="email"
                                                                className="form-control form-control-lg rounded-pill px-4 py-3"
                                                                placeholder="yourname@business.com"
                                                                required
                                                                value={emailInput}
                                                                onChange={(e) => setEmailInput(e.target.value)}
                                                                style={{ fontSize: '15px' }}
                                                            />
                                                        </div>
                                                        <div className="main-button">
                                                            <button type="submit" className="theme-btn w-100 py-3 justify-content-center">
                                                                {/* Unlock Section Now <i className="bi bi-magic ms-2"></i> */}
                                                                Unlock Section Now
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <p className="mt-4 small text-muted d-flex align-items-center justify-content-center gap-2">
                                                        <i className="bi bi-shield-check text-success"></i> No Spam. Your privacy is our priority.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'code' && isEmailVerified && (
                                            <motion.div
                                                key="code-view"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                            >
                                                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                                                    <div>
                                                        <h3 className="h4 fw-bold mb-1">Liquid Template Code</h3>
                                                        <p className="text-muted small mb-0">Copy this code and paste it into your new theme section.</p>
                                                    </div>
                                                    <div className="d-flex gap-2 main-button">
                                                        <button onClick={handleCopyCode} className={`btn ${isCopied ? 'btn-success' : 'theme-btn py-3'} rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2`}>
                                                            {isCopied ? <><i className="bi bi-check-lg"></i> Copied</> : <><i className="bi bi-clipboard2"></i> Copy Snippet</>}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="code-editor-v2 rounded-4 border overflow-hidden" style={{ background: "#1d1d1d" }}>
                                                    <div className="code-header p-3 bg-white-5 border-bottom border-white-10 d-flex justify-content-between align-items-center">
                                                        <span className="text-white-50 small font-monospace">shopify-section-v2.liquid</span>
                                                        <span className="badge bg-theme px-3 py-2 rounded-pill small">Liquid Snippet</span>
                                                    </div>
                                                    <div className="code-editor-content d-flex" style={{ maxHeight: '550px', overflowY: 'auto' }}>
                                                        <div className="line-numbers text-white-20 p-3 text-end border-end border-white-5" style={{ minWidth: '55px', fontSize: '12px' }}>
                                                            {mockLiquidCode.split('\n').map((_, i) => (
                                                                <div key={i}>{i + 1}</div>
                                                            ))}
                                                        </div>
                                                        <pre className="p-3 m-0 text-white font-monospace w-100" style={{ fontSize: '13px', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
                                                            {mockLiquidCode}
                                                        </pre>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'installation' && isEmailVerified && (
                                            <motion.div
                                                key="install-view"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                            >
                                                <div className="row g-5">
                                                    <div className="col-lg-7">
                                                        {/* Commented out video walkthrough for now */}
                                                        {/* <h3 className="h4 fw-bold mb-4">Video Walkthrough</h3>
                                                        <div className="tut-video-card rounded-4 border overflow-hidden bg-light position-relative" style={{ minHeight: '380px' }}>
                                                            <div className="absolute-full d-flex align-items-center justify-content-center z-index-2">
                                                                <button className="play-button-custom bg-theme text-white border-0 rounded-circle shadow-lg d-flex align-items-center justify-content-center">
                                                                    <i className="bi bi-play-fill display-4" style={{ marginLeft: '5px' }}></i>
                                                                </button>
                                                            </div>
                                                            <img src={sectionData?.previews?.[0]?.image} className="absolute-full object-fit-cover opacity-20 blur-sm" alt="Thumbnail" />
                                                        </div> */}

                                                        <h3 className="h4 fw-bold mb-4">Download Section Assets</h3>
                                                        <div className="download-card rounded-4 border p-4 p-md-5 bg-light position-relative overflow-hidden" style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                                            <div className="download-icon-box mb-4">
                                                                <div className="bg-white p-4 rounded-circle shadow-sm d-inline-block text-theme" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <i className="bi bi-file-earmark-zip display-4"></i>
                                                                </div>
                                                            </div>
                                                            <h4 className="fw-bold mb-2">Ready to Install?</h4>
                                                            <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '400px' }}>
                                                                Download the ready-to-use liquid files and assets for <b>{sectionData?.title}</b>. We&apos;ve also sent a copy to your email.
                                                            </p>

                                                            <div className="email-badge mb-4 px-3 py-2 rounded-pill bg-white border d-inline-flex align-items-center gap-2 small fw-semibold text-muted">
                                                                <i className="bi bi-envelope-check text-success"></i>
                                                                {emailInput}
                                                            </div>

                                                            <div className="main-button">
                                                                <button className="theme-btn px-5 py-3">
                                                                    Download All Files (.ZIP) <i className="bi bi-download ms-2"></i>
                                                                </button>
                                                            </div>

                                                            {/* Background blur decorative element */}
                                                            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'var(--theme)', opacity: '0.05', filter: 'blur(50px)', borderRadius: '50%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <h3 className="h4 fw-bold mb-4">Installation Steps</h3>
                                                        <div className="installer-timeline">
                                                            <div className="timeline-item d-flex gap-3 mb-4">
                                                                <div className="timeline-marker bg-theme text-white fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px', flexShrink: 0 }}>1</div>
                                                                <div className="timeline-info border-bottom pb-4 w-100">
                                                                    <h5 className="h6 fw-bold mb-2">Create File</h5>
                                                                    <p className="text-muted small mb-0">In Shopify admin, go to <b>Themes &gt; Edit Code</b>. Create a new file in the <b>Sections</b> folder named <code>custom-section.liquid</code>.</p>
                                                                </div>
                                                            </div>
                                                            <div className="timeline-item d-flex gap-3 mb-4">
                                                                <div className="timeline-marker bg-theme text-white fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px', flexShrink: 0 }}>2</div>
                                                                <div className="timeline-info border-bottom pb-4 w-100">
                                                                    <h5 className="h6 fw-bold mb-2">Paste Snippet</h5>
                                                                    <p className="text-muted small mb-0">Copy the code from the <b>Code Snippet</b> tab and paste it into your new file. Save the file immediately.</p>
                                                                </div>
                                                            </div>
                                                            <div className="timeline-item d-flex gap-3">
                                                                <div className="timeline-marker bg-theme text-white fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px', flexShrink: 0 }}>3</div>
                                                                <div className="timeline-info w-100">
                                                                    <h5 className="h6 fw-bold mb-2">Configure Section</h5>
                                                                    <p className="text-muted small mb-0">Open the <b>Theme Customizer</b>, click &quot;Add Section&quot;, find your new section, and start adding your images and text.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default memo(ShopifySectionCode);
