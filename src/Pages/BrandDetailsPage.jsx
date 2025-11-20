import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { brandList } from '../Components/BrandsDetail/BrandList';
import SimpleLoader from '../Components/Loader/NormalLoader';
import BreadCumb from '../Components/Common/BreadCumb';
import SEO from '../Components/DynamicSEO/SEO';
import Error404Page from './Error404Page';
import axios from 'axios';

const Section1 = lazy(() => import('../Components/BrandsDetail/Section1'));
const Section2 = lazy(() => import('../Components/BrandsDetail/Section2'));
const Content = lazy(() => import('../Components/BrandsDetail/Content'));
const Section3 = lazy(() => import('../Components/BrandsDetail/Section3'));

const VideoTestimonialSlickSecond = lazy(
  () => import('../Components/Testimonial/VideoTestimonialTwo')
);

const BrandDetailsPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchBrandData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/assets/data/brands/${slug}.json`, {
          responseType: 'json',
          validateStatus: (status) => status === 200,
        });

        if (!response.data || typeof response.data !== 'object') {
          throw new Error('Invalid brand data');
        }

        setData(Array.isArray(response.data) ? response.data[0] : response.data);
      } catch (err) {
        console.error('Failed to load brand data', err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();

  }, [slug]);

  if (loading) return <SimpleLoader />;
  if (!data) return <Error404Page />;

  const brandFromList = brandList.find((item) => item.slug === slug);
  const dynamicTitle = brandFromList?.title || 'Brand Details';

  return (
    <>
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={data.seoKeywords}
        url={data.seoUrl}
      />

      <BreadCumb
        bgimg={brandFromList?.BgImg || '/assets/img/breadcrumb.jpg'}
        Title={dynamicTitle}
        hasOverlay={true}
        customTrail={[{ label: 'Brands', link: '/brands' }, { label: dynamicTitle }]}
      />

      <Suspense fallback={<SimpleLoader />}>
        <Section1 data={data} />
        <Section2 data={data.video} />
        <Content challenge={data.challenge} solution={data.solution} />
        <Section3 images={data.images} />
        <VideoTestimonialSlickSecond />
      </Suspense>
    </>
  );
};

export default BrandDetailsPage;
