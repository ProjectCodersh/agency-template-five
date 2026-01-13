import { Outlet } from 'react-router-dom';
import Header2 from '../Components/Header/Header2';
import ScrollToTop from '../Components/Common/ScrollToTop';
import WhatsAppButton from '../Components/Common/WhatsAppButton';
import Footer1 from '../Components/Footer/Footer1';

const Layout2 = () => {
  return (
    <div className="main-page-area2">
      <ScrollToTop />
      <Header2 />
      <Outlet />
      <Footer1 />
      <WhatsAppButton />
    </div>
  );
};

export default Layout2;
