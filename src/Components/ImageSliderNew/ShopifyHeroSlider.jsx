import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ShopifyHeroSlider() {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    fetch('/assets/data/shopify-sections/ShopifySectionsData.json')
      .then((res) => res.json())
      .then((data) => {
        // Extract images from ShopifySectionsCard array
        if (data.ShopifySectionsPage && data.ShopifySectionsPage[0]?.ShopifySectionsCard) {
          const cards = data.ShopifySectionsPage[0].ShopifySectionsCard;
          // Map to extract img and sectiontitle for each card
          const images = cards.map((card) => ({
            img: card.img,
            title: card.sectiontitle,
            id: card.id,
          }));
          setSectionData(images);
        }
      })
      .catch((error) => {
        console.error('Error fetching Shopify sections data:', error);
      });
  }, []);

  if (sectionData.length === 0) {
    return null; // or a loading state
  }

  return (
    <div
      className=""
      style={{
        background: '#f6f3fe',
        borderRadius: '24px',
        border: '3px solid #f6f3fe',
      }}
    >
      <div
        className="container"
        style={{
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          padding: '60px 0',
          background: '#f6f3fe',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg,rgb(246, 243, 254) 0%, rgba(106, 71, 237,0) 10%, rgba(106, 71, 237,0) 90%,rgb(246, 243, 254) 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {[...sectionData, ...sectionData].map((section, index) => (
            <div
              key={`${section.id}-${index}`}
              style={{
                flex: '0 0 auto',
                width: '350px',
                height: '100%',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  maxHeight: '350px',
                  overflow: 'hidden',
                  borderRadius: '0px 0px 11px 11px',
                  borderBottom: '10px solid #000',
                }}
              >
                <img
                  src={section.img}
                  alt={section.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div className="p-2 d-flex flex-row align-items-center justify-content-center gap-2">
                <p
                  style={{
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginTop: '10px',
                    textAlign: 'center',
                  }}
                >
                  {section.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
