import { useState, useEffect, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveSectionLoader from '../Components/Loader/InteractiveSectionLoader';
import '../assets/ShopifySectionPopup.css';
import { getCPTBySlug } from '../Api/wpapi';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

/**
 * Recursive component to render the File/Folder tree sidebar
 * Matches the Shadcn Studio aesthetic from image_99fc18.png
 */

const FileTreeItem = ({ item, onSelect, selectedFile, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen || false);
  const isFolder = item.type === 'folder';
  // Active state is determined by the file name matching the selection
  const isActive = selectedFile?.name === item.name;

  const handleClick = (e) => {
    e.stopPropagation();
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      onSelect(item);
    }
  };

  return (
    <div className="tree-node-wrapper" style={{ color: '#ffffffb3' }}>
      <div
        className={`tree-item ${isActive ? 'active' : ''} ${isFolder ? 'is-folder' : 'is-file'}`}
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
        onClick={handleClick}
      >
        <div className="tree-icon">
          {isFolder ? (
            <i
              className={`bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'} small-chevron`}
            ></i>
          ) : (
            <i className="bi bi-file-earmark-code me-2"></i>
          )}
        </div>
        {isFolder && <i className={`bi ${isOpen ? 'bi-folder2-open' : 'bi-folder2'} me-2`}></i>}
        <span className="tree-label">{item.name}</span>
      </div>

      {isFolder && isOpen && item.children && (
        <div className="tree-children">
          {item.children.map((child, idx) => (
            <FileTreeItem
              key={idx}
              item={child}
              onSelect={onSelect}
              selectedFile={selectedFile}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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

  const handleDownloadAllFiles = async () => {
    if (!pageData?.codeFiles?.length) return;

    const zip = new JSZip();

    // Add each file to the zip
    pageData.codeFiles.forEach((file) => {
      zip.file(file.name, file.content || '');
    });

    // Generate the zip file
    const content = await zip.generateAsync({ type: 'blob' });

    // Trigger the download
    saveAs(content, `${slug || 'shopify-section'}.zip`);
  };

  // New state for file explorer
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);

        if (!slug) {
          setError('No section specified.');
          return;
        }

        const data = await getCPTBySlug(slug);

        if (!data) {
          setError('Section not found.');
          return;
        }

        //  Map WordPress data to your existing structure
        const formattedData = {
          appShowcase: {
            title: data.title?.rendered || '',
            previews: [
              {
                image: data._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
              },
            ],
            features:
              typeof data.acf?.features === 'string' && data.acf.features.trim() !== ''
                ? data.acf.features.split('\n').filter(Boolean)
                : [
                    'Fully responsive on all devices',
                    'Clean and optimized Liquid structure',
                    'Easy to customize and extend',
                    'No external dependencies',
                  ],
          },
          codeFiles: [
            {
              type: 'file',
              name: `${slug}.liquid`,
              content: data.acf?.liquid_code || '// No Liquid code provided.',
            },
            {
              type: 'file',
              name: `${slug}.css`,
              content: data.acf?.css_code || '/* No CSS provided. */',
            },
            {
              type: 'file',
              name: `${slug}.js`,
              content: data.acf?.js_code || '// No JavaScript provided.',
            },
          ],
        };

        setPageData(formattedData);

        // Auto select first file
        if (formattedData.codeFiles.length > 0) {
          setSelectedFile(formattedData.codeFiles[0]);
        }
      } catch (err) {
        console.error('Error fetching section:', err);
        setError('Failed to load section.');
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email');
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoadingOtp(true);
    setErrorMsg('');

    try {
      const res = await fetch('https://dedicated.codersh.com/cms/wp-json/custom/v1/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await res.json();

      if (data.success) {
        setStep('otp');
      } else {
        setErrorMsg(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setErrorMsg('Something went wrong');
    }

    setLoadingOtp(false);
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await fetch('https://dedicated.codersh.com/cms/wp-json/custom/v1/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailInput,
          otp: otp,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsEmailVerified(true);
        setActiveTab('code');
      } else {
        setErrorMsg(data.message || 'Invalid code');
      }
    } catch (err) {
      setErrorMsg('Verification failed');
    }
  };

  const handleCopyCode = () => {
    const contentToCopy = selectedFile?.content || '';
    navigator.clipboard.writeText(contentToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading) {
    return (
      <div
        className="section-padding"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <InteractiveSectionLoader />
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div
        className="section-padding text-center"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
      <section
        className="hero-section shopify-hero-retrieval"
        style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-content"
              >
                <h1 className="fw-extrabold section-title mb-3" style={{ color: '#17012c' }}>
                  Download <span className="text-theme">Liquid Snippets</span> for{' '}
                  {sectionData?.title}
                </h1>
                <p className="mb-4 text-muted mx-auto lead" style={{ maxWidth: '750px' }}>
                  {sectionData?.description ||
                    'Get high-quality liquid code and step-by-step instructions to add this section to your Shopify store.'}
                </p>
                <div className="hero-button mt-4 d-flex justify-content-center align-items-center gap-4">
                  <div className="main-button">
                    <button
                      onClick={() => navigate(-1)}
                      className="theme-btn"
                      style={{ background: '#000' }}
                    >
                      <i className="bi bi-arrow-left"></i> Back
                    </button>
                  </div>
                  {!isEmailVerified && (
                    <div className="main-button">
                      <button
                        onClick={() => {
                          document
                            .getElementById('email-gate-area')
                            ?.scrollIntoView({ behavior: 'smooth' });
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
      </section>

      <section className="section-padding bg-white pt-50" id="code-retrieval-main">
        <div className="container">
          <div className="row justify-content-center mt-negative-80">
            <div className="col-12">
              <div className="code-content-main border shadow-sm rounded-4 bg-white overflow-hidden">
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
                    <i className="bi bi-code-slash"></i> Code Snippet{' '}
                    {!isEmailVerified && <i className="bi bi-lock-fill ms-2 small"></i>}
                  </button>
                  <button
                    className={`tab-btn-v2 ${activeTab === 'installation' ? 'active' : ''}`}
                    onClick={() => setActiveTab('installation')}
                  >
                    <i className="bi bi-journal-text"></i> Installation Guide{' '}
                    {!isEmailVerified && <i className="bi bi-lock-fill ms-2 small"></i>}
                  </button>
                </div>

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
                                <div
                                  className="dot"
                                  style={{
                                    width: '10px',
                                    height: '10px',
                                    background: '#ccc',
                                    borderRadius: '50%',
                                  }}
                                ></div>
                                <div
                                  className="dot"
                                  style={{
                                    width: '10px',
                                    height: '10px',
                                    background: '#ccc',
                                    borderRadius: '50%',
                                  }}
                                ></div>
                                <div
                                  className="dot"
                                  style={{
                                    width: '10px',
                                    height: '10px',
                                    background: '#ccc',
                                    borderRadius: '50%',
                                  }}
                                ></div>
                              </div>
                              <img
                                src={
                                  sectionData?.previews?.[0]?.image ||
                                  '/assets/img/shopify-sections/section-23.png'
                                }
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
                                {(sectionData?.features || []).map((feature, idx) => (
                                  <li key={idx} className="d-flex align-items-start gap-2 mb-3">
                                    <i
                                      className="bi bi-check-circle-fill text-theme"
                                      style={{ marginTop: '2px' }}
                                    ></i>
                                    <span className="small fw-semibold">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="main-button mt-4">
                                <button
                                  onClick={() => setActiveTab('code')}
                                  className="theme-btn w-100 text-center"
                                >
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
                        <div
                          className="email-card-v2 mx-auto p-4 p-md-5 rounded-4 bg-light border"
                          style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.05)' }}
                        >
                          <div className="gate-icon mb-4">
                            <div className="bg-white p-4 rounded-circle shadow-sm d-inline-block text-theme">
                              <i className="bi bi-shield-lock display-3"></i>
                            </div>
                          </div>
                          <h2 className="fw-bold mb-3 h3">Instant Download</h2>
                          <p
                            className="text-muted mb-4 lead"
                            style={{ fontSize: '1rem', maxWidth: '576px', margin: 'auto' }}
                          >
                            Enter your email to unlock the Liquid snippet and step-by-step
                            installation instructions for this Shopify section.
                          </p>
                          {step === 'email' && (
                            <form
                              onSubmit={handleEmailSubmit}
                              style={{ maxWidth: '576px', margin: 'auto' }}
                            >
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
                                <button
                                  type="submit"
                                  className="theme-btn w-100 py-3 justify-content-center"
                                >
                                  {loadingOtp ? 'Sending...' : 'Unlock Section Now'}
                                </button>
                              </div>
                            </form>
                          )}

                          {step === 'otp' && (
                            <form
                              onSubmit={handleOtpSubmit}
                              style={{ maxWidth: '576px', margin: 'auto' }}
                            >
                              <div className="form-group mb-3">
                                <div className="otp-wrapper mb-4">
                                  <div className="otp-inputs d-flex justify-content-center gap-2">
                                    {[...Array(6)].map((_, index) => (
                                      <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        className="otp-box"
                                        value={otp[index] || ''}
                                        onChange={(e) => {
                                          const value = e.target.value.replace(/[^0-9]/g, '');
                                          if (!value) return;

                                          const newOtp =
                                            otp.substring(0, index) +
                                            value +
                                            otp.substring(index + 1);
                                          setOtp(newOtp);

                                          // Auto focus next
                                          const next = e.target.nextElementSibling;
                                          if (next) next.focus();
                                        }}
                                        onKeyDown={(e) => {
                                          if (e.key === 'Backspace') {
                                            const newOtp =
                                              otp.substring(0, index) + otp.substring(index + 1);
                                            setOtp(newOtp);

                                            const prev = e.target.previousElementSibling;
                                            if (prev) prev.focus();
                                          }
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="main-button">
                                <button
                                  type="submit"
                                  className="theme-btn w-100 py-3 justify-content-center"
                                >
                                  Verify & Unlock
                                </button>
                              </div>
                            </form>
                          )}

                          {errorMsg && <p className="text-danger mt-3">{errorMsg}</p>}
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
                            <h3 className="h4 fw-bold mb-1">Code Explorer</h3>
                            <p className="text-muted small mb-0">
                              Navigate the folder structure and copy individual file snippets.
                            </p>
                          </div>
                          <div className="d-flex gap-2 main-button">
                            <button
                              onClick={handleCopyCode}
                              className={`btn ${isCopied ? 'btn-success' : 'theme-btn py-3'} rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2`}
                            >
                              {isCopied ? (
                                <>
                                  <i className="bi bi-check-lg"></i> Copied
                                </>
                              ) : (
                                <>
                                  <i className="bi bi-clipboard2"></i> Copy Snippet
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* NEW SHADCN-STYLE CODE EXPLORER LAYOUT */}
                        <div className="code-explorer-container rounded-4 border overflow-hidden d-flex">
                          {/* Sidebar: File Structure */}
                          <div
                            className="explorer-sidebar d-none d-md-block"
                            style={{
                              width: '260px',
                              minHeight: '550px',
                              background: '#161616',
                              borderRight: '2px solid #ffffff1a',
                            }}
                          >
                            <div
                              className="p-3 bg-white-5"
                              style={{ borderBottom: '2px solid #ffffff1a' }}
                            >
                              <span
                                className="text-uppercase small fw-bold"
                                style={{ color: '#ffffffb3' }}
                              >
                                Files
                              </span>
                            </div>
                            <div
                              className="file-tree-container py-2"
                              style={{ color: '#ffffffb3' }}
                            >
                              {pageData?.codeFiles ? (
                                pageData.codeFiles.map((node, i) => (
                                  <FileTreeItem
                                    key={i}
                                    item={node}
                                    onSelect={setSelectedFile}
                                    selectedFile={selectedFile}
                                  />
                                ))
                              ) : (
                                <div className="p-3 small italic" style={{ color: '#ffffffb3' }}>
                                  No code files available.
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Main Editor Area */}
                          <div
                            className="flex-grow-1 overflow-hidden"
                            style={{ background: '#161616' }}
                          >
                            <div
                              className="code-header p-3 bg-white-5 d-flex justify-content-between align-items-center"
                              style={{ borderBottom: '2px solid #ffffff1a' }}
                            >
                              <span
                                className=" small font-monospace"
                                style={{ color: '#ffffffb3' }}
                              >
                                {selectedFile?.name || 'select-file.liquid'}
                              </span>
                              <span className="badge bg-theme px-3 py-1 rounded-pill small">
                                {selectedFile?.name?.split('.').pop()?.toUpperCase() || 'CODE'}
                              </span>
                            </div>
                            <div
                              className="code-editor-content d-flex"
                              style={{ maxHeight: '550px', overflowY: 'auto' }}
                            >
                              <div
                                className="line-numbers text-white-50 p-3 text-end"
                                style={{
                                  minWidth: '55px',
                                  fontSize: '12px',
                                  borderRight: '1px solid#ffffff2a',
                                }}
                              >
                                {(selectedFile?.content || '').split('\n').map((_, i) => (
                                  <div key={i}>{i + 1}</div>
                                ))}
                              </div>
                              <pre
                                className="p-3 m-0 text-white font-monospace w-100"
                                style={{ fontSize: '13px', lineHeight: '1.7', whiteSpace: 'pre' }}
                              >
                                {selectedFile?.content ||
                                  '// Click a file on the left to view its contents.'}
                              </pre>
                            </div>
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
                            <h3 className="h4 fw-bold mb-4">Download Section Assets</h3>
                            <div className="download-card rounded-4 border p-4 p-md-5 bg-light text-center">
                              <div className="bg-white p-4 rounded-circle shadow-sm d-inline-block text-theme mb-4">
                                <i className="bi bi-file-earmark-zip display-4"></i>
                              </div>
                              <h4 className="fw-bold mb-2">Ready to Install?</h4>
                              <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '400px' }}>
                                Download the ready-to-use liquid files and assets for{' '}
                                <b>{sectionData?.title}</b>.
                              </p>
                              <div className="email-badge mb-4 px-3 py-2 rounded-pill bg-white border d-inline-flex align-items-center gap-2 small fw-semibold text-muted">
                                <i className="bi bi-envelope-check text-success"></i>
                                {emailInput}
                              </div>
                              <div className="main-button justify-content-center">
                                {/* <button className="theme-btn px-5 py-3">
                                    Download All Files (.ZIP) <i className="bi bi-download ms-2"></i>
                                  </button> */}
                                <button
                                  onClick={handleDownloadAllFiles}
                                  className="theme-btn px-5 py-3"
                                >
                                  Download All Files (.ZIP) <i className="bi bi-download ms-2"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <h3 className="h4 fw-bold mb-4">Installation Steps</h3>
                            <div className="installer-timeline">
                              <div className="timeline-item d-flex gap-3 mb-4">
                                <div
                                  className="timeline-marker bg-theme text-white fw-bold rounded-circle d-flex align-items-center justify-content-center"
                                  style={{ width: '38px', height: '38px', flexShrink: 0 }}
                                >
                                  1
                                </div>
                                <div className="timeline-info border-bottom pb-4 w-100">
                                  <h5 className="h6 fw-bold mb-2">Create File</h5>
                                  <p className="text-muted small mb-0">
                                    In Shopify admin, go to <b>Themes &gt; Edit Code</b>. Create a
                                    new file in <b>Sections</b> folder.
                                  </p>
                                </div>
                              </div>
                              <div className="timeline-item d-flex gap-3 mb-4">
                                <div
                                  className="timeline-marker bg-theme text-white fw-bold rounded-circle d-flex align-items-center justify-content-center"
                                  style={{ width: '38px', height: '38px', flexShrink: 0 }}
                                >
                                  2
                                </div>
                                <div className="timeline-info border-bottom pb-4 w-100">
                                  <h5 className="h6 fw-bold mb-2">Paste Snippet</h5>
                                  <p className="text-muted small mb-0">
                                    Copy the code from the <b>Code Snippet</b> tab and paste it into
                                    your new file.
                                  </p>
                                </div>
                              </div>
                              <div className="timeline-item d-flex gap-3">
                                <div
                                  className="timeline-marker bg-theme text-white fw-bold rounded-circle d-flex align-items-center justify-content-center"
                                  style={{ width: '38px', height: '38px', flexShrink: 0 }}
                                >
                                  3
                                </div>
                                <div className="timeline-info w-100">
                                  <h5 className="h6 fw-bold mb-2">Configure Section</h5>
                                  <p className="text-muted small mb-0">
                                    Open the <b>Theme Customizer,</b> click Add Section, find your
                                    new section, and start adding your images and text.
                                  </p>
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
