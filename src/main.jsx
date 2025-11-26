import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { router } from './Routes/Routes.jsx';

import 'slick-carousel/slick/slick.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import './assets/servicecards.css';
import './assets/ShopifyPartnerHero.css';
import './assets/style.css';
import './assets/WhatsAppButton.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadProvider>
      <RouterProvider router={router} />
    </HeadProvider>
  </StrictMode>
);
