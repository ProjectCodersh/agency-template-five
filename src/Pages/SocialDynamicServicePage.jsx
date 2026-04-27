/**
 * ServicePage.jsx
 *
 * A single dynamic page component that:
 *  1. Reads the :slug param from the URL
 *  2. Loads the matching JSON data file via serviceDataLoader
 *  3. Passes each section's data to its component
 *  4. Any section whose data is null/undefined is simply not rendered
 *
 * Route setup (React Router v6 example):
 *   <Route path="/services/:slug" element={<ServicePage />} />
 *
 * To add a new service page:
 *   1. Create  src/data/<your-slug>.json  following the shared schema
 *   2. Register it in  src/data/serviceDataLoader.js
 *   Done — no other changes needed.
 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SEO from '../Components/DynamicSEO/SEO';
import BreadcrumbSection from '../Components/SocialMediaServices/BreadcrumbSection';
import SectionOne from '../Components/SocialMediaServices/SectionOne';
import RightSideContentSection from '../Components/SocialMediaServices/RightSideContentSection';
import LeftSideContentSection from '../Components/SocialMediaServices/LeftSideContentSection';
import ProcessSection from '../Components/SocialMediaServices/ProcessSection';
import WhyChooseSection from '../Components/SocialMediaServices/WhyChooseSection';
import FaqSection from '../Components/SocialMediaServices/FaqSection';

import { getServiceData } from '../data/social-marketing-services/serviceDataLoader';

// ─── Loading skeleton ────────────────────────────────────────────────────────
const PageSkeleton = () => (
  <div
    style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <p>Loading…</p>
  </div>
);

// ─── 404 fallback ────────────────────────────────────────────────────────────
const NotFound = ({ slug }) => (
  <div
    style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
    }}
  >
    <h2>Page not found</h2>
    <p>
      No service page exists for <code>{slug}</code>.
    </p>
  </div>
);

// ─── Main component ──────────────────────────────────────────────────────────
const SocialDynamicServicePage = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(undefined); // undefined = loading, null = not found

  useEffect(() => {
    let cancelled = false;

    setPageData(undefined); // reset on slug change (show loading state)

    getServiceData(slug).then((data) => {
      if (!cancelled) setPageData(data ?? null);
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Still loading
  if (pageData === undefined) return <PageSkeleton />;

  // Slug not registered
  if (pageData === null) return <NotFound slug={slug} />;

  // Destructure — every key is optional; missing keys render nothing
  const {
    meta,
    breadcrumb,
    sectionOne,
    rightSideContent,
    leftSideContent,
    process,
    whyChoose,
    faq,
  } = pageData;

  return (
    <div>
      {/* ── SEO meta tags ── */}
      {meta && (
        <SEO
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
          url={meta.url}
        />
      )}

      {/* ── Sections — each guards itself with `if (!data) return null` ── */}
      <BreadcrumbSection data={breadcrumb} />
      <SectionOne data={sectionOne} />
      <RightSideContentSection data={rightSideContent} />
      <LeftSideContentSection data={leftSideContent} />
      <ProcessSection data={process} />
      <WhyChooseSection data={whyChoose} />
      <FaqSection data={faq} />
    </div>
  );
};

export default SocialDynamicServicePage;
