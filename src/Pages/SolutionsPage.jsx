import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BreadCumb from '../Components/Common/BreadCumb';
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';
import Error404Page from './Error404Page';

// Lazy load sections
const SolutionSlider = React.lazy(() => import('../Components/Solutions/SolutionSlider'));
const SolutionWhychoose = React.lazy(() => import('../Components/Solutions/SolutionWhy'));
const SolutionFeatures = React.lazy(() => import('../Components/Solutions/SolutionKeyFeatures'));

function SolutionsPage() {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutionData = async () => {
      try {
        const response = await axios.get(`/assets/data/solutions/${slug}.json`, {
          responseType: 'json',
          validateStatus: (status) => status === 200,
        });

        if (typeof response.data !== 'object') {
          throw new Error('Invalid JSON');
        }

        setPageData(response.data);
      } catch (error) {
        console.error('Error fetching solution data:', error);
        setPageData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutionData();
  }, [slug]);

  const sliderMemo = useMemo(() => pageData?.slider || [], [pageData]);
  const whyChooseMemo = useMemo(() => pageData?.whyChoose || null, [pageData]);
  const featuresMemo = useMemo(() => pageData?.features || null, [pageData]);

  if (loading) return <div className="p-4">Loading...</div>;
  // if (!data) return <div className="p-4">No data available for `{slug}`.</div>;
  if (!pageData) return <Error404Page />;

  return (
    <>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title={pageData.title} />

      <React.Suspense fallback={<div>Loading Data </div>}>
        <SolutionSlider data={sliderMemo} />
        {whyChooseMemo && <SolutionWhychoose data={whyChooseMemo} />}
        {featuresMemo && <SolutionFeatures data={featuresMemo} />}
        <VideoTestimonialSlickSecond />
      </React.Suspense>
    </>
  );
}

export default SolutionsPage;
