import parse from 'html-react-parser';

/**
 * ContentSection
 * * Refactored to use a "Masonry-style" 2-column layout.
 * This prevents tall items in one column from creating gaps in the other.
 */

const ContentSection = ({ data }) => {
  if (!data) return null;

  const { bg, heading = {}, overview, columns = [] } = data;
  const { subtitle, title } = heading;

  const hasHeading = subtitle || title;
  const hasOverview = overview && overview.trim();
  const hasColumns = Array.isArray(columns) && columns.length > 0;

  if (!hasHeading && !hasOverview && !hasColumns) return null;

  const backgroundImage = bg === true ? '/assets/img/team/team-bg.jpg' : '';

  // 1. Split data into Left (even indices) and Right (odd indices)
  // This creates two independent stacks of content.
  const leftColumnItems = columns.filter((_, i) => i % 2 === 0);
  const rightColumnItems = columns.filter((_, i) => i % 2 !== 0);

  // Helper function to render an individual card
  // We pass 'originalIndex' to ensure the numbering (01, 02...) remains correct
  const renderItem = (col, localIdx, originalIndex) => {
    const hasHighlights = Array.isArray(col.highlights) && col.highlights.length > 0;

    const isIconImage =
      col.icon &&
      typeof col.icon === 'string' &&
      (col.icon.startsWith('http') || col.icon.startsWith('/'));

    const defaultIconNumber = col.subtitle
      ? col.subtitle.match(/^\d+/)?.[0] || String(originalIndex + 1).padStart(2, '0')
      : String(originalIndex + 1).padStart(2, '0');

    return (
      <div key={col.subtitle || localIdx} className="">
        <div className="mb-4">
          {/* Heading */}
          {col.subtitle && (
            <h4
              className="fw-bold mb-2 d-flex align-items-center"
              style={{ textTransform: 'none' }}
            >
              {isIconImage ? (
                <span
                  className="d-inline-flex align-items-center justify-content-center me-2 mb-2"
                  style={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#6A47ED',
                  }}
                >
                  <img
                    src={col.icon}
                    alt={col.iconAlt || 'Icon'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const badge = e.target.parentElement;
                      badge.style.display = 'flex';
                      badge.style.color = '#fff';
                      badge.style.fontWeight = '700';
                      badge.style.fontSize = '16px';
                      badge.textContent = defaultIconNumber;
                    }}
                  />
                </span>
              ) : (
                <span
                  className="d-inline-flex align-items-center justify-content-center me-2 mb-2"
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#6A47ED',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 16,
                    flexShrink: 0,
                    borderRadius: '8px',
                    lineHeight: 1,
                  }}
                >
                  {defaultIconNumber}
                </span>
              )}
              {parse(col.subtitle)}
            </h4>
          )}

          {/* Content Paragraph */}
          {col.content && (
            <div className="mb-3" style={{ color: '#17012c' }}>
              {parse(col.content)}
            </div>
          )}

          {/* Highlights List */}
          {hasHighlights && (
            <ul className="list-items flex-column align-items-start">
              {col.highlights.map((point, i) => (
                <li key={`${point}-${i}`} style={{ textTransform: 'none' }}>
                  <span style={{ textTransform: 'none' }}>{parse(point)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      className="project-details-section fix section-padding"
      data-background={backgroundImage}
    >
      <div className="container px-3">
        <div className="project-details-wrapper">
          {/* Section Title */}
          {hasHeading && (
            <div className="section-title-area w-full">
              <div className="section-title">
                {subtitle && (
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>{subtitle}</span>
                  </div>
                )}
                {title && (
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {parse(title)}
                  </h2>
                )}
              </div>
            </div>
          )}

          {/* Overview */}
          {hasOverview && (
            <div className="project-details-content">
              <h3>Overview</h3>
              <p>{parse(overview)}</p>
            </div>
          )}

          {/* Main Content Grid (Split into two independent columns) */}
          {hasColumns && (
            <div className="project-details-content mt-5">
              <div className="row g-5">
                {/* Left Column Stack */}
                <div className="col-lg-6">
                  {leftColumnItems.map((col, idx) =>
                    // Calculate original index: Even numbers (0, 2, 4...)
                    renderItem(col, idx, idx * 2)
                  )}
                </div>

                {/* Right Column Stack */}
                <div className="col-lg-6">
                  {rightColumnItems.map((col, idx) =>
                    // Calculate original index: Odd numbers (1, 3, 5...)
                    renderItem(col, idx, idx * 2 + 1)
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;