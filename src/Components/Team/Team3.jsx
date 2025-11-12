import { Link } from 'react-router-dom';

const Team3 = () => {
  const teamContent = [
    {
      img: '/assets/img/team/team1.webp',
      name: 'Harsh Shah',
      content: 'CEO And Founder',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/team/team2.webp',
      name: 'Kinjal Shah',
      content: 'HR Manager',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/team/team3.webp',
      name: 'Vishwas Shah',
      content: 'QA Tester',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/team/team8.webp',
      name: 'Sweta Parmar',
      content: 'Sr.Wordpress Developer',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/team/team5.webp',
      name: 'Neer Lashkari',
      content: 'Wordpress Developer',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/team/team4.webp',
      name: 'Maitri Gandhi',
      content: 'Frontend Developer',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      img: '/assets/img/team/team6.webp',
      name: 'Bhavik Hadiyel',
      content: 'Frontend Developer',
      instagram: '#',
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
    // { img: '/assets/img/team/01.jpg', name: 'Aditya Mistry', content: 'FullStack Developer', instagram: '#', facebook: '#', twitter: '#', linkedin: '#' },
  ];

  return (
    <section className="team-section-3 fix section-padding">
      <div className="container-fluid">
        <div className="row g-4">
          {teamContent.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="team-card-items mt-0">
                <div className="team-image">
                  <img src={item.img} alt="img" />
                </div>
                <div className="team-content">
                  <h3>
                    <Link to="/team/team-details">{item.name}</Link>
                  </h3>
                  <p>{item.content}</p>
                </div>
                <div className="icon-shape">
                  <img src="/assets/img/team/icon-shape-2.png" alt="img" />
                  {/* <div className="social-profile">
                                        <ul>
                                            <li><Link to={item.content}><i className="bi bi-instagram"></i></Link></li>
                                            <li><Link to={item.content}><i className="bi bi-facebook"></i></Link></li>
                                            <li><Link to={item.content}><i className="bi bi-twitter-x"></i></Link></li>
                                            <li><Link to={item.content}><i className="bi bi-linkedin"></i></Link></li>
                                        </ul>
                                        <span className="plus-btn"><div><img src="/assets/img/team/team-company-icon.png" alt="Comapny Logo" className="teams-card-logo" /></div></span>
                                    </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team3;
