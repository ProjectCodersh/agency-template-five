// === ServicesCards.jsx ===
import { useEffect, useState, memo, useCallback } from 'react';
import axios from 'axios';
import ServiceCard from './ServicesCard';

const ServicesCardsContainer = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = useCallback(async () => {
    try {
      const response = await axios.get('/assets/data/services/ServiceCardData.json');
      const servicesData = response.data.ServicePage.find((section) => section.OurServicesCard);
      if (servicesData?.OurServicesCard) {
        setServices(servicesData.OurServicesCard);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  if (loading) return <div className="text-center py-5">Loading services...</div>;
  if (services.length === 0) return <div className="text-center py-5">No services found.</div>;

  return (
    <section className="section-padding fix " aria-label="Services">
      <div className="container-fluid container-lg px-3 px-lg-0">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-xl-4 my-5 d-flex" key={index}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesCardsContainer);
