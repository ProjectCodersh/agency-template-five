import { lazy, Suspense, memo } from 'react';
import { motion } from 'framer-motion';
// import BreadCumb from '../Components/Common/BreadCumb';
import ShopifySectionsContainer from '../Components/ShopifySections/ShopifySectionsContainer';

const VideoTestimonialSlickSecond = lazy(
  () => import('../Components/Testimonial/VideoTestimonialTwo')
);

const ShopifyHeroSection = lazy(() => import('../Components/ShopifySections/ShopifyHeroSection'));

// Animation variants for smooth page load
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// const MemoizedBreadCumb = memo(function BreadCumbWrapper() {
//   return <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Shopify Sections" />;
// });

function ShopifySections() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ width: '100%' }}
    >
      {/* <MemoizedBreadCumb /> */}
      <motion.div variants={sectionVariants}>
        <ShopifyHeroSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ShopifySectionsContainer />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Suspense fallback={<div className="loading">Loading testimonials...</div>}>
          <VideoTestimonialSlickSecond />
        </Suspense>
      </motion.div>
    </motion.main>
  );
}

export default memo(ShopifySections);
