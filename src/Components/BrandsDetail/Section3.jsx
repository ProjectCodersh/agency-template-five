const Section3 = ({ images }) => (
  <section className="fix section-padding">
    <div className="container">
      <div className="row g-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`${idx < 2 ? 'col-12 col-md-6' : 'col-12'} d-flex align-items-stretch`}
          >
            <div className="w-100 h-100">
              <img
                src={src}
                // alt={`brand-${idx}`}
                alt={
                  src ? src.split('/').pop().split('.')[0].replace(/[-_]/g, ' ') : `brand-${idx}`
                }
                className="img-fluid w-100 h-100 rounded-4"
                style={{
                  objectFit: idx === 2 ? 'contain' : 'cover',
                  border: idx === 2 ? '1px solid #ddd' : 'none',
                  borderRadius: '20px',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Section3;
