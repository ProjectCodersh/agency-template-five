import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const DarkSection = () => {
  const benefitsContent = [
    {
      title: 'Enhancing Customer Experience',
      content:
        'Adding subscriptions to your Shopify store creates a seamless shopping experience, making it easier for customers to access products while fostering loyalty and repeat purchases. Subscriptions simplify reordering, improve customer retention, and increase lifetime value (LTV) by streamlining the entire shopping process.',
    },
    {
      title: 'Driving Predictable Revenue',
      content:
        'Subscriptions provide a reliable and predictable revenue stream, offering stability for better inventory management, cash flow control, and long-term strategic planning. With recurring revenue, your Shopify store can focus on business growth and goal achievement without worrying about fluctuations in sales.',
    },
    {
      title: 'Boosting Customer Loyalty',
      content:
        'Subscriptions often encourage higher financial commitment than one-time purchases, helping to turn casual shoppers into loyal customers. Regular deliveries eliminate the need for re-engagement with the checkout process, offering a hassle-free experience that keeps customers coming back.',
    },
    {
      title: 'Leveraging Data-Driven Insights',
      content:
        'Subscriptions offer invaluable data on customer behavior, churn rates, and revenue trends. This data helps businesses forecast growth, improve marketing strategies, and optimize customer retention. By tracking metrics like churn rate (typically 6-10% depending on the industry), businesses can fine-tune their offerings and retention strategies.',
    },
  ];

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="case-studies-section-2 fix section-padding bg-cover"
      data-background="/assets/img/case-studies/bg.jpg"
    >
      <div className="container px-3">
        <div className="section-title-area w-full d-flex justify-content-center align-items-center text-center">
          <div className="section-title">
            <div className="sub-title wow fadeInUp text-white">
              <span>SHOPIFY SUBSCRIPTIONS</span>
            </div>
            <h2 className="wow fadeInUp text-white" data-wow-delay=".3s">
              Benefits of Adding Subscriptions to Your Shopify Store
            </h2>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {benefitsContent.map((item, i) => (
            <div
              key={i}
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + i * 0.1}s`}
            >
              <div className="case-studies-items bor-top bor-bottom h-100">
                <div className="content p-4">
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-white-50">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
