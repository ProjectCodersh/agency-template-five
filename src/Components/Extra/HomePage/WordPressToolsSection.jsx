const toolRows = [
  ['GeneratePress', 'Divi', 'Astra', 'Kadence WP'],
  ['Breakdance', 'Elementor', 'Bricks', 'Beaver Builder'],
  ['Gravity Forms', 'Perfmatters', 'LiteSpeed', 'WP Rocket'],
  ['Rocket.net', 'HostWP', 'Hostinger', 'Cloudways'],
  ['LifterLMS', 'WooCommerce', 'FluentCRM', 'WS Form'],
];

const WordPressToolsSection = () => {
  return (
    <section className="wp-tools-section section-padding">
      <div className="container px-3">
        <div className="wp-tools-header text-center">
          <h2 className="wp-tools-title">
            Unlock The Full Potential of WordPress
          </h2>
          <p className="wp-tools-subtitle">
            We&apos;re masters of popular WordPress products to craft your dream website.
          </p>
        </div>

        <div className="wp-tools-grid">
          {toolRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`wp-tools-row ${
                rowIndex === 1 || rowIndex === 3 ? 'wp-tools-row-offset' : ''
              }`}
            >
              {row.map((tool) => (
                <div key={tool} className="wp-tool-card">
                  <span className="wp-tool-name">{tool}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Local styles to closely match the reference section */}
      <style>
        {`
          .wp-tools-section {
            background-color: #f8f7ff;
          }

          .wp-tools-header {
            margin-bottom: 40px;
          }

          .wp-tools-title {
            font-size: 2.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #111827;
          }

          .wp-tools-subtitle {
            font-size: 1.02rem;
            color: #6b7280;
            max-width: 560px;
            margin: 0 auto;
          }

          .wp-tools-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }

          .wp-tools-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px 32px;
            width: 100%;
          }

          .wp-tool-card {
            background-color: #ffffff;
            border-radius: 999px;
            padding: 10px 24px;
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 52px;
            width: 46%;
            max-width: 230px;
          }

          .wp-tool-name {
            font-weight: 600;
            font-size: 0.98rem;
            color: #111827;
            text-align: center;
          }

          @media (min-width: 768px) {
            .wp-tools-title {
              font-size: 2.8rem;
            }

            .wp-tool-card {
              width: auto;
            }

            .wp-tools-row-offset {
              transform: translateX(40px);
            }
          }

          @media (min-width: 1200px) {
            .wp-tools-row-offset {
              transform: translateX(80px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default WordPressToolsSection;


