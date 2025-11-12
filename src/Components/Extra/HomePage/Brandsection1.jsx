import React from 'react';
import gmailLogo from '/assets/img/tools/gmail-logo.webp';
import asanaLogo from '/assets/img/tools/asana-logo.webp';
import loomLogo from '/assets/img/tools/loom-logo.webp';
import zoomLogo from '/assets/img/tools/zoom-logo.webp';
import clickupLogo from '/assets/img/tools/clickup-logo.webp';
import trelloLogo from '/assets/img/tools/trello-logo.webp';
import jiraLogo from '/assets/img/tools/jira-logo.webp';
import githubLogo from '/assets/img/tools/github-logo.webp';

const chooseHeading = {
  subtitle: 'Our Services',
  title: 'Project Management & Communication Tools',
  content: '',
  plantitle1: 'We recommend For you',
  plantitle2: 'We are Also compatible with',
};

const recommended = [
  { name: 'Gmail', logo: gmailLogo },
  { name: 'Asana', logo: asanaLogo },
  { name: 'Loom', logo: loomLogo },
  { name: 'Zoom', logo: zoomLogo },
];

const compatible = [
  { name: 'ClickUp', logo: clickupLogo },
  { name: 'Trello', logo: trelloLogo },
  { name: 'Jira', logo: jiraLogo },
  { name: 'GitHub', logo: githubLogo },
];

const ToolGrid = ({ tools }) => (
  <div className="row gy-4 mx-2 mx-md-0">
    {tools.map((tool) => (
      <div
        key={tool.name}
        className="col-6 col-sm-4 col-md-4 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column"
      >
        <img
          src={tool.logo}
          alt={tool.name}
          loading="lazy"
          className="img-fluid mb-2 brandsection-brands"
        />
      </div>
    ))}
  </div>
);

const Brandsection1 = () => {
  return (
    <section className="section-padding brand-section fix" style={{ backgroundColor: '#f6f3fe' }}>
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {chooseHeading.title}
            </h2>
          </div>
        </div>

        <div className="mb-4">
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
              <span>{chooseHeading.plantitle1}</span>
            </div>
          </div>
          <ToolGrid tools={recommended} />
        </div>

        <div>
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
              <span>{chooseHeading.plantitle2}</span>
            </div>
          </div>
          <ToolGrid tools={compatible} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brandsection1);
