import React from 'react';
import gmailLogo from '/assets/img/tools/thumbnails/gmail-thumbnail.webp';
import asanaLogo from '/assets/img/tools/thumbnails/asana-thumbnail.webp';
import loomLogo from '/assets/img/tools/thumbnails/loom-thumbnail.webp';
import zoomLogo from '/assets/img/tools/thumbnails/zoom-thumbnail.webp';
import clickupLogo from '/assets/img/tools/thumbnails/clickup-thumbnail.webp';
import trelloLogo from '/assets/img/tools/thumbnails/trello-thumbnail.webp';
import jiraLogo from '/assets/img/tools/thumbnails/jira-thumbnail.webp';
import githubLogo from '/assets/img/tools/thumbnails/github-thumbnail.webp';

const chooseHeading = {
  subtitle: 'Our Services',
  title: 'Project Management & Communication Tools',
  content: '',
  plantitle1: 'We recommend For you',
  plantitle2: 'We are Also compatible with',
};

// Updated data format
const recommended = [
  {
    iconclass: 'fa-brands fa-google',
    title: 'Gmail',
    content: 'Email and communication tool',
    logo: gmailLogo,
  },
  {
    iconclass: 'fa-solid fa-list-check',
    title: 'Asana',
    content: 'Task and project management',
    logo: asanaLogo,
  },
  {
    iconclass: 'fa-solid fa-video',
    title: 'Loom',
    content: 'Video messaging platform',
    logo: loomLogo,
  },
  {
    iconclass: 'fa-solid fa-video',
    title: 'Zoom',
    content: 'Online meeting platform',
    logo: zoomLogo,
  },
];

const compatible = [
  {
    iconclass: 'fa-solid fa-diagram-project',
    title: 'ClickUp',
    content: 'All-in-one productivity tool',
    logo: clickupLogo,
  },
  {
    iconclass: 'fa-brands fa-trello',
    title: 'Trello',
    content: 'Kanban-based project tracking',
    logo: trelloLogo,
  },
  {
    iconclass: 'fa-brands fa-jira',
    title: 'Jira',
    content: 'Agile project management',
    logo: jiraLogo,
  },
  {
    iconclass: 'fa-brands fa-github',
    title: 'GitHub',
    content: 'Code hosting & collaboration',
    logo: githubLogo,
  },
];

// New ToolGrid based on your provided structure
const ToolGrid = ({ tools }) => (
  <div className="row gy-4">
    {Array.isArray(tools) &&
      tools.map((item, i) => (
        <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="service-box-items text-center flex-column brandsection-box brandsection-box-mb">
            <div className="d-flex justify-content-center justify-content-md-start service-box-items-icon">
              <div
                className="d-flex justify-content-center align-items-center w-100"
                style={{ fontSize: '40px', color: '#6a47ed', gap: '20px' }}
              >
                <img className="brandsection-img" src={item.logo} alt={item.title} />
                <h3 className="text-center text-md-start">{item.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
);

const Brandsection4 = () => {
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

        {/* Recommended Section */}
        <div className="mb-4">
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
              <span>{chooseHeading.plantitle1}</span>
            </div>
          </div>
          <ToolGrid tools={recommended} />
        </div>

        {/* Compatible Section */}
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

export default React.memo(Brandsection4);
