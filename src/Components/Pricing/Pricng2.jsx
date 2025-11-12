import PricingCard from '../Card/PricingCard';

const Pricng2 = () => {
  return (
    <section className="pricing-section fix section-padding pb-0">
      <div className="container px-3 px-md-0">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title bg-color-2 wow fadeInUp">
              <span>Choose Your Plan</span>
            </div>
            <h2 className="wow fadeInUp mb-3 mb-md-0" data-wow-delay=".3s">
              Our awesome <br /> Pricing Plan
            </h2>
          </div>
        </div>

        <div className="row g-4 ">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <PricingCard
              addclass="pricing-box-items third-card"
              title="Starter Plans"
              timing="1-2 Hours Daily"
              price="$747"
              month="Month"
              description="Not decided yet?"
              FeatureList={[' ', ' ', ' ']}
              btnurl="https://calendly.com/codersh-web-services/15min"
              btnname="Schedule Your Consultation"
              showCollabLink={true}
              hideIcons={true}
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <PricingCard
              addclass="pricing-box-items style-2"
              title="Pro Plan"
              timing="2-3 Hours Daily"
              price="$1,497"
              month="Month"
              description="How we work?"
              FeatureList={[
                'Your Project Management Tool',
                'Live Chat / Instant Messaging',
                'Dedicated Project Manager',
                '24-48 Hours Turn-around Time',
                '14-Day Money Back Guarantee',
              ]}
              btnurl="https://calendly.com/codersh-web-services/15min"
              btnname="Schedule Your Consultation"
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <PricingCard
              addclass="pricing-box-items"
              title="Business Plans"
              timing="5-6 Hours Daily"
              price="$2,997"
              month="Month"
              description="What's included in all plans"
              FeatureList={[
                'Unlimited Tasks',
                'New Site Development',
                'Unlimited Sites',
                'WordPress',
                'SEO',
              ]}
              btnurl="https://calendly.com/codersh-web-services/15min"
              btnname="Schedule Your Consultation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricng2;
