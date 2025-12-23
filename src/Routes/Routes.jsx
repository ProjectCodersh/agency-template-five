import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout2 from '../Layout/Layout2';
import Main from '../Layout/Main';
import ContactPage from '../Pages/ContactPage';
import Home4 from '../Pages/Home4';
import ServicesNewPage from '../Pages/ServicesNewPage';
import ServicesNewCards from '../Pages/ServicesNewCardsPage';
import SolutionsPage from '../Pages/SolutionsPage';
import CaseStudyPageNew from '../Pages/CaseStudyPageNew';
import CaseStudyPage from '../Pages/CaseStudyPage';
import PricingPage from '../Pages/PricingPage';
import BrandDetailsPage from '../Pages/BrandDetailsPage';
import BrandsCardpage from '../Pages/BrandsCardpage';
import Error404Page from '../Pages/Error404Page';
import TeamPage from '../Pages/TeamPage';
import AboutPage from '../Pages/AboutPage';
import FaqPage from '../Pages/FaqPage';
import ThankyouPage from '../Components/Thankyou/ThankyouPage';
import Work from '../Components/Work/Work';
import PartnersPage from '../Pages/PartnersPage';
import NewServicesPage from '../Pages/NewServicesPage';
import NewSingleServicePage from '../Pages/NewSingleServicePage';
import WhiteLabelServicePage from '../Pages/WhiteLabelServicePage';
import ShopifyMigratioPage from '../Pages/ShopifyMigratioPage';
// import Team1 from '../Components/Team/Team1';
// import Testimonials from "../Pages/Testimonials";
// import Casestudies from "../Pages/CaseStudyPageNew";
// import Solutions from "../Pages/Solutions";
import ServicesPage from '../Pages/ServicesPage';
import ServiceDetailsPage from '../Pages/ServiceDetailsPage';
// import Home2 from "../Pages/Home2";
// import Home3 from "../Pages/Home3";
import TeamDetailsPage from '../Pages/TeamDetailsPage';
import ShopifySubscriptions from '../Pages/ShopifySubscriptions';
import ShopifyB2BWholeSale from '../Pages/ShopifyB2BWholeSale';
import ShopifyDynamicServices from '../Pages/ShopifyDynamicServices';
// import CaseStudyDetailsPage from "../Pages/CaseStudyDetailsPage";
// import BlogRightSidebar from "../Pages/BlogRightSidebar";
// import BlogPage from "../Pages/BlogPage";
// import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout2 />,
    children: [
      {
        path: '/team/team-details',
        element: <TeamDetailsPage></TeamDetailsPage>,
      },
      {
        path: '/service',
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: '/service/service-details',
        element: <ServiceDetailsPage></ServiceDetailsPage>,
      },
      // {
      //   path: "/project/project-details",
      //   element: <CaseStudyDetailsPage></CaseStudyDetailsPage>,
      // },
      // {
      //   path: "/blog-sidebar",
      //   element: <BlogRightSidebar></BlogRightSidebar>,
      // },
      // {
      //   path: "/blog",
      //   element: <BlogPage></BlogPage>,
      // },
      // {
      //   path: "/blog/blog-details",
      //   element: <BlogDetailsPage></BlogDetailsPage>,
      // },
      // {
      //   path: "/client-testimonial",
      //   element: <Testimonials></Testimonials>,
      // },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/faq',
        element: <FaqPage />,
      },
      {
        path: '/our-team',
        element: <TeamPage />,
      },
      {
        path: '/contact-us',
        element: <ContactPage />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
      },
      {
        path: '/case-study',
        element: <CaseStudyPage />,
      },
      {
        path: '/case-study/:slug',
        element: <CaseStudyPageNew />,
      },
      {
        path: '/services',
        element: <ServicesNewCards />,
      },
      {
        path: '/solutions/:slug',
        element: <SolutionsPage />,
      },
      {
        path: '/brands',
        element: <BrandsCardpage />,
      },
      {
        path: '/brands/:slug',
        element: <BrandDetailsPage />,
      },
      {
        path: '*',
        element: <Error404Page />,
      },
      {
        path: '/thank-you',
        element: <ThankyouPage />,
      },
      {
        path: '/work',
        element: <Work />,
      },
      {
        path: '/partners',
        element: <PartnersPage />,
      },
      // .ca services pages
      {
        path: '/new-services',
        element: <NewServicesPage />,
      },
      {
        path: '/new-services/single-service',
        element: <NewSingleServicePage />,
      },
      {
        path: '/new-services/white-label-service',
        element: <WhiteLabelServicePage />,
      },
      // dynamic page builder routes
      {
        path: '/new-services/shopify-migration',
        element: <ShopifyMigratioPage />,
      },
      {
        path: '/new-services/shopify-subscriptions',
        element: <ShopifySubscriptions />,
      },
      {
        path: '/new-services/shopify-b2b-wholesale',
        element: <ShopifyB2BWholeSale />,
      },
      {
        path: '/new-services/shopify-dynamic-services',
        element: <ShopifyDynamicServices />,
      },
      {
        path: '/new-services/cms/:slug',
        element: <ShopifyDynamicServices />,
      },
    ],
  },
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/services/:slug',
        element: <ServicesNewPage />,
      },
    ],
  },
  {
    path: 'unlimited-shopify',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home4 />,
      },
    ],
  },
]);
