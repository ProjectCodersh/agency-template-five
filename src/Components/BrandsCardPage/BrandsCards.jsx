import { Link } from 'react-router-dom';

const BrandsCards = () => {
  const chooseContent = [
    {
      slug: 'bergbat',
      title: 'Bergbat',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/bergbat-brand.webp',
    },
    {
      slug: 'elevation-107',
      title: 'Elevation 107',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/elevation-107-brand.webp',
    },
    {
      slug: 'vault-studio',
      title: 'Vault Studio',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/vault-studio-brand.webp',
    },
    {
      slug: 'kick-ash-basket',
      title: 'Kick Ash Basket',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/kick-ash-brand.webp',
    },
    {
      slug: 'texas-fowlers',
      title: 'Texas Fowlers',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/texas-fowlers-brand.webp',
    },
    {
      slug: 'aubi-&-ramsa',
      title: 'Aubi N Ramsa',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/aubi-n-ramsa-brand.webp',
    },
    {
      slug: 'cool-out',
      title: 'Cool Out',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/cool-out-brand.webp',
    },
    {
      slug: 'obvi-protein',
      title: 'Obvi Protein',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/obvi-protein-brand.webp',
    },
    {
      slug: 'liberation-cocktails',
      title: 'Liberation Cocktails',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/liberation-cocktails-brand.webp',
    },
    {
      slug: 'bone-idyll',
      title: 'Bone Idyll',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/bone-idyll-brand.webp',
    },
    {
      slug: 'moth-drinks',
      title: 'Moth Drinks',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/moth-drink-brand.webp',
    },
    {
      slug: 'artisan-drinks',
      title: 'Artisan Drinks',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/artisan-drink-brand.webp',
    },
    {
      slug: 'fuel-10k',
      title: 'Fuel 10K',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/fuel-10k-brand.webp',
    },
    {
      slug: 'geon-alps',
      title: 'Geon Alps',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/geon-alps-brand.webp',
    },
    {
      slug: 'vidl-life',
      title: 'Vidl Life',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/vidl-life-brand.webp',
    },
    {
      slug: 'queen-v',
      title: 'Queen V',
      subtitle: '',
      description: '',
      img: '/assets/img/brandscards/queen-v-brand.webp',
    },
  ];

  return (
    <section className="case-studies-section-4 fix section-padding pb-0">
      <div className="container">
        <div className="row g-4">
          {chooseContent.map((item, i) => (
            <div key={i} className="col-xl-6 col-lg-6 col-md-6 mb-5">
              <div className="case-studies-card-items mt-0">
                <div className="thumb case-studies-card-items-imgbox">
                  <img
                    src={item.img}
                    alt={
                      item.img
                        ? item.img.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
                        : 'case study image'
                    }
                    className="case-studies-card-items-coverimg"
                  />
                </div>
                <div className="content">
                  <div className="title">
                    <h3>
                      <Link to={`/brands/${item.slug}`}> {item.title}</Link>
                    </h3>
                    <p>{item.subtitle}</p>
                    <p className="clamp-2-lines">{item.description}</p>
                  </div>
                  <Link
                    to={`/brands/${item.slug}`}
                    className="icon"
                    style={{ minWidth: '52px', height: '52px' }}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCards;
