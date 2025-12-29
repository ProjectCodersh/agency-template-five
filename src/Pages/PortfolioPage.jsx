import { useEffect } from 'react';
import { motion } from 'framer-motion';
import BreadCumb from '../Components/Common/BreadCumb';
import VerticalImageSlider from '../Components/Portfolio/VerticalImageSlider';
import loadBackgroudImages from '../Components/Common/loadBackgroudImages';

const PortfolioPage = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Page load animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Portfolio" />
      <motion.section className="section-padding fix" variants={sectionVariants}>
        <div className="container-fluid px-3">
          <VerticalImageSlider columns={4} speed={10} />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default PortfolioPage;
