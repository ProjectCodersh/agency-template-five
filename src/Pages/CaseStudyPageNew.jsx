import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadCumb from '../Components/Common/BreadCumb';
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';
import { caseStudiesList } from '../Components/CaseStudyDetailsNew/CaseStudiesList';
import SEO from '../Components/DynamicSEO/SEO';
import Error404Page from './Error404Page';
import SimpleLoader from '../Components/Loader/NormalLoader';

const CaseStudyDetails = lazy(
  () => import('../Components/CaseStudyDetailsNew/CaseStudyDetailsNew')
);
const CaseStudyDetailsSecond = lazy(
  () => import('../Components/CaseStudyDetailsNew/CaseStudyDetailsSecondTemplate')
);
const CaseStudyDetailsThird = lazy(
  () => import('../Components/CaseStudyDetailsNew/CaseStudyDetailsThree')
);
const JCCSiteDetails = lazy(() => import('../Components/CaseStudyDetailsNew/JccSiteDetails'));

function CaseStudyDetailsPage() {
  const { slug } = useParams();
  const [caseStudyData, setCaseStudyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    if (slug === 'jcc-site') {
      setCaseStudyData({ slug });
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`/assets/data/casestudy/${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((json) => setCaseStudyData({ ...json, slug }))
      .catch((err) => {
        console.error(err);
        setCaseStudyData(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <SimpleLoader />;
  // if (!caseStudyData) return <div style={{ padding: '2rem' }}>Case study not found.</div>;
  if (!caseStudyData) return <Error404Page />;

  const caseStudyFromList = caseStudiesList.find((item) => item.slug === slug);
  const dynamicTitle = caseStudyFromList?.title || caseStudyData?.title || 'Case Study Details';

  return (
    <>
      <SEO
        title={caseStudyData.seo?.title}
        description={caseStudyData.seo?.description}
        keywords={caseStudyData.seo?.keywords}
        url={caseStudyData.seo?.url}
      />
      <BreadCumb
        bgimg={caseStudyFromList?.BgImg || '/assets/img/breadcrumb.jpg'}
        Title={dynamicTitle}
        hasOverlay={true}
        customTrail={[{ label: 'Case Study', link: '/case-study' }, { label: dynamicTitle }]}
      />
      <Suspense fallback={<SimpleLoader />}>
        {slug === 'jcc-site' ? (
          <JCCSiteDetails />
        ) : caseStudyData?.template === 'old' ? (
          <CaseStudyDetailsSecond data={caseStudyData} list={caseStudiesList} />
        ) : caseStudyData?.template === 'third' ? (
          <CaseStudyDetailsThird data={caseStudyData} list={caseStudiesList} />
        ) : (
          <CaseStudyDetails data={caseStudyData} list={caseStudiesList} />
        )}

        <VideoTestimonialSlickSecond />
      </Suspense>
    </>
  );
}

export default React.memo(CaseStudyDetailsPage);
