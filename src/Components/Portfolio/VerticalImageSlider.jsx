import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo, useCallback, useRef, memo } from 'react';

// Skeleton loader component
const SkeletonCard = memo(() => {
  const cardHeight = 700;
  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        height: `${cardHeight}px`,
        borderRadius: '20px',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
        }}
      />
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
});
SkeletonCard.displayName = 'SkeletonCard';

// Optimized Portfolio Card Component
const PortfolioCard = memo(
  ({ project, index, isHovered, onHover, cardHeight, imageHeight, speed, isVisible }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);
    const cardRef = useRef(null);

    // Track when card comes into view for scroll animations (works both directions)
    useEffect(() => {
      if (!cardRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Animate when entering viewport (both scrolling up and down)
            if (entry.isIntersecting) {
              setIsInView(true);
            }
          });
        },
        { threshold: 0.1, rootMargin: '100px' }
      );

      observer.observe(cardRef.current);
      return () => observer.disconnect();
    }, []);

    // Get image path - use img if available, otherwise construct from image field
    const imagePath = useMemo(() => {
      if (project.img) return project.img;
      if (project.image) {
        return `/assets/img/portfolio/${project.image}.webp`;
      }
      return '';
    }, [project.img, project.image]);

    // Preload image when visible
    useEffect(() => {
      if (isVisible && !imageLoaded && !error && imagePath) {
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {
          // Small delay for smoother transition
          setTimeout(() => {
            setImageLoaded(true);
          }, 100);
        };
        img.onerror = () => setError(true);
      }
    }, [isVisible, imagePath, imageLoaded, error]);

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : { opacity: 0, y: 40, scale: 0.96 }
        }
        transition={{
          duration: 0.7,
          delay: Math.min(index * 0.04, 0.3),
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        style={{
          overflow: 'hidden',
          position: 'relative',
          height: `${cardHeight}px`,
          borderRadius: '20px',
          boxShadow: isHovered ? '0 8px 30px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
          cursor: 'pointer',
          backgroundColor: '#fff',
          contain: 'layout style paint',
        }}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
      >
        <AnimatePresence mode="wait">
          {!imageLoaded && !error && (
            <motion.div
              key="skeleton"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f0f0f0',
                zIndex: 1,
                borderRadius: '20px',
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {imageLoaded && (
            <motion.div
              key="image-container"
              initial={{
                opacity: 0,
                scale: 1.03,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                width: '100%',
                height: `${imageHeight * 2}px`,
                position: 'relative',
                willChange: isHovered ? 'transform' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                contain: 'layout style paint',
              }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: `${imageHeight * 2}px`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
                initial={{ y: 0 }}
                animate={{
                  y: isHovered ? -imageHeight : 0,
                }}
                transition={{
                  duration: isHovered ? speed : 0.5,
                  ease: isHovered ? 'linear' : 'easeOut',
                  repeat: isHovered ? Infinity : 0,
                  repeatType: 'loop',
                }}
              >
                <motion.img
                  ref={imgRef}
                  src={imagePath}
                  alt={project.name || `Portfolio ${index + 1}`}
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    width: '100%',
                    height: `${imageHeight}px`,
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    flexShrink: 0,
                    contentVisibility: 'auto',
                  }}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index < 4 ? 'high' : 'low'}
                />
                <motion.img
                  src={imagePath}
                  alt=""
                  aria-hidden="true"
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    width: '100%',
                    height: `${imageHeight}px`,
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    flexShrink: 0,
                    contentVisibility: 'auto',
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5',
              color: '#999',
            }}
          >
            Failed to load image
          </motion.div>
        )}
      </motion.div>
    );
  }
);
PortfolioCard.displayName = 'PortfolioCard';

const VerticalImageSlider = ({ data = [], columns = 4, speed = 20 }) => {
  const [projectData, setProjectData] = useState([]);
  const [responsiveColumns, setResponsiveColumns] = useState(columns);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  // Fetch portfolio data
  useEffect(() => {
    if (data && data.length > 0) {
      setProjectData(data);
      setIsLoading(false);
    } else {
      fetch('/assets/data/portfolio/portfolio.json')
        .then((res) => res.json())
        .then((data) => {
          setProjectData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Failed to load portfolio data:', err);
          setIsLoading(false);
        });
    }
  }, [data]);

  // Get unique industries from project data
  const industries = useMemo(() => {
    if (!projectData || projectData.length === 0) return ['All'];
    const uniqueIndustries = Array.from(
      new Set(
        projectData
          .map((item) => item.industry)
          .filter((industry) => industry && industry.trim() !== '')
      )
    ).sort();
    return ['All', ...uniqueIndustries];
  }, [projectData]);

  // Filter projects by industry
  const filteredProjectData = useMemo(() => {
    if (!projectData || projectData.length === 0) return [];
    if (selectedIndustry === 'All') return projectData;
    return projectData.filter((item) => item.industry === selectedIndustry);
  }, [projectData, selectedIndustry]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Responsive columns with debounce
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        if (window.innerWidth < 768) {
          setResponsiveColumns(2);
        } else if (window.innerWidth < 1024) {
          setResponsiveColumns(3);
        } else if (window.innerWidth < 1400) {
          setResponsiveColumns(4);
        } else {
          setResponsiveColumns(Math.max(columns, 4));
        }
      }, 150);
    };

    // Initial calculation
    if (window.innerWidth < 768) {
      setResponsiveColumns(2);
    } else if (window.innerWidth < 1024) {
      setResponsiveColumns(3);
    } else if (window.innerWidth < 1400) {
      setResponsiveColumns(4);
    } else {
      setResponsiveColumns(Math.max(columns, 4));
    }

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [columns]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current || filteredProjectData.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      setVisibleIndices((prevVisibleIndices) => {
        const newVisibleIndices = new Set(prevVisibleIndices);
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            newVisibleIndices.add(index);
          }
        });
        return newVisibleIndices;
      });
    }, observerOptions);

    const cards = containerRef.current.querySelectorAll('[data-index]');
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredProjectData.length]);

  // Memoized hover handler
  const handleHover = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  // Memoized constants
  const cardHeight = useMemo(() => 700, []);
  const imageHeight = useMemo(() => 1200, []);

  if (isLoading) {
    return (
      <div
        className="portfolio-vertical-slider"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          className="container-fluid px-3"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${responsiveColumns}, 1fr)`,
            gap: '20px',
            position: 'relative',
            maxWidth: '100%',
          }}
        >
          {Array.from({ length: responsiveColumns * 2 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (!projectData || projectData.length === 0) {
    return null;
  }

  return (
    <div
      className="portfolio-vertical-slider"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Title and Filter Section */}
      <div className="container-fluid px-3 mb-4">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>Our Portfolio</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Portfolio Showcase
            </h2>
          </div>
          <div className="work-filter wow fadeInUp" data-wow-delay=".5s">
            <span className="work-filter-label">Industry</span>
            <div className={`work-filter-dropdown ${isFilterOpen ? 'open' : ''}`} ref={dropdownRef}>
              <button
                type="button"
                className="work-filter-toggle"
                onClick={() => setIsFilterOpen((prev) => !prev)}
              >
                <span className="work-filter-selected">
                  {selectedIndustry === 'All' ? 'All industries' : selectedIndustry}
                </span>
                <span className="work-filter-toggle-icon">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </button>
              <ul className="work-filter-menu">
                {industries.map((industry) => (
                  <li key={industry}>
                    <button
                      type="button"
                      className={`dropdown-menu-link ${
                        selectedIndustry === industry ? 'active' : ''
                      }`}
                      onClick={() => {
                        setSelectedIndustry(industry);
                        setIsFilterOpen(false);
                      }}
                    >
                      {industry}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div
        ref={containerRef}
        className="container-fluid px-3"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${responsiveColumns}, 1fr)`,
          gap: '20px',
          position: 'relative',
          maxWidth: '100%',
        }}
      >
        {filteredProjectData.map((project, index) => (
          <div key={project.id || index} data-index={index}>
            <PortfolioCard
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={handleHover}
              cardHeight={cardHeight}
              imageHeight={imageHeight}
              speed={speed}
              isVisible={visibleIndices.has(index) || index < responsiveColumns * 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(VerticalImageSlider);
