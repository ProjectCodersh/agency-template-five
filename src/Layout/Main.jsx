import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import ScrollToTop from '../Components/Common/ScrollToTop';
import WhatsAppButton from '../Components/Common/WhatsAppButton';

const Main = () => {
  return (
    <div className="main-page-area">
      <ScrollToTop />
      <Header1></Header1>
      <Outlet></Outlet>
      <Footer1></Footer1>
      <WhatsAppButton />
    </div>
  );
};

export default Main;
