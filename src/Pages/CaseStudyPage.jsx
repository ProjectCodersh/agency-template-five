import { lazy, Suspense, memo } from 'react';
import SEO from '../Components/DynamicSEO/SEO';

const BreadCumb = lazy(() => import('../Components/Common/BreadCumb'));
const CaseStudy4 = lazy(() => import('../Components/CaseStudy/CaseStudy4'));

const CaseStudyPage = () => {
  return (
    <main role="main">
      <SEO
        title="Case Studies | Successful WordPress & Shopify Projects - Codersh"
        description="Explore Codersh’s case studies showcasing successful WordPress and Shopify projects. See how our web design and development expertise helps businesses grow."
        keywords="WordPress case studies, Shopify case studies, web design portfolio, eCommerce success stories, Codersh projects"
        url="https://uk.codersh.com/case-study"
      />

      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Case studies" />
        <CaseStudy4 />
      </Suspense>
    </main>
  );
};

export default memo(CaseStudyPage);
