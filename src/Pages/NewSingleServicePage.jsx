import { useEffect, useState } from 'react';
import ContentBoxOne from '../Components/NewSingleServiceSection/ContentBoxOne';
import ContentBoxTwo from '../Components/NewSingleServiceSection/ContentBoxTwo';
import BreadCumb from '../Components/Common/BreadCumb';

function NewSingleServicePage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await fetch('/assets/data/newsingleservice/newsingleservice.json');
        const json = await res.json();
        setSections(json.singleServiceSections || []);
      } catch (error) {
        console.error('Failed to load single service sections', error);
        setSections([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '200px 0 100px', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!sections.length) {
    return (
      <div style={{ padding: '200px 0 100px', textAlign: 'center' }}>
        <p>No content available.</p>
      </div>
    );
  }

  return (
    <div>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Single Service" />

      {sections.map((section, index) => {
        if (section.type === 'boxOne') {
          return <ContentBoxOne key={index} data={section} />;
        }

        if (section.type === 'boxTwo') {
          return <ContentBoxTwo key={index} data={section} />;
        }

        return null;
      })}
    </div>
  );
}

export default NewSingleServicePage;
