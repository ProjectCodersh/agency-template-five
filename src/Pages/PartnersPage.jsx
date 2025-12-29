import { useEffect, useState, useRef } from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import PartnersSectionDynamic from '../Components/Partners/PartnersSectionDynamic';
import SimpleLoader from '../Components/Loader/NormalLoader';
import { sanityClient, sanityClientRealtime } from '../sanityClient';

/**
 * PartnersPage - Dynamic Partners page (Sanity powered)
 * Fetches partners page structure from Sanity and renders sections dynamically
 * Supports real-time content updates via Sanity's listen API
 */

const PARTNERS_PAGE_QUERY = `
  *[_type == "partnersPage" && slug.current == "partners"][0]{
    title,
    "pageTitle": title,
    "breadcrumb": {
      "bgimg": coalesce(breadcrumb.bgimg.asset->url, "/assets/img/breadcrumb.jpg"),
      "title": coalesce(breadcrumb.title, title)
    },
    "sections": sections[]{
      title,
      subtitle,
      content,
      sectionBgColor,
      chipBgColor,
      "subsection1": {
        "title": subsection1.title,
        "partners": subsection1.partners[]{
          title,
          content,
          "logo": coalesce(logo.asset->url, logo),
          "alt": coalesce(logo.alt, title)
        }
      },
      "subsection2": {
        "title": subsection2.title,
        "partners": subsection2.partners[]{
          title,
          content,
          "logo": coalesce(logo.asset->url, logo),
          "alt": coalesce(logo.alt, title)
        }
      }
    }
  }
`;

function PartnersPage() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const subscriptionRef = useRef(null);
  const isRealtimeEnabled = import.meta.env.VITE_SANITY_REALTIME === 'true';

  // Initial fetch and real-time subscription
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Initial fetch using CDN client (faster)
        const data = await sanityClient.fetch(PARTNERS_PAGE_QUERY);

        if (!data) {
          setError(
            'Partners page not found in Sanity. Please create a partnersPage document with slug "partners".'
          );
          setPageData(null);
          setLoading(false);
          return;
        }

        setPageData(data);
        setLoading(false);

        // Set up real-time subscription if enabled
        if (isRealtimeEnabled && data?._id) {
          setupRealtimeSubscription(data._id);
        }
      } catch (err) {
        console.error('Failed to load Partners page data from Sanity', err);
        setError('Failed to load content. Please try again later.');
        setPageData(null);
        setLoading(false);
      }
    };

    fetchPageData();

    // Cleanup subscription on unmount
    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
    };
  }, [isRealtimeEnabled]);

  // Set up real-time subscription for live content updates
  const setupRealtimeSubscription = (documentId) => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
    }

    try {
      // Subscribe to changes for this specific page document
      subscriptionRef.current = sanityClientRealtime
        .listen(
          `*[_type == "partnersPage" && _id == $documentId][0]{
            title,
            "pageTitle": title,
            "breadcrumb": {
              "bgimg": coalesce(breadcrumb.bgimg.asset->url, "/assets/img/breadcrumb.jpg"),
              "title": coalesce(breadcrumb.title, title)
            },
            "sections": sections[]{
              title,
              subtitle,
              content,
              sectionBgColor,
              chipBgColor,
              "subsection1": {
                "title": subsection1.title,
                "partners": subsection1.partners[]{
                  title,
                  content,
                  "logo": coalesce(logo.asset->url, logo),
                  "alt": coalesce(logo.alt, title)
                }
              },
              "subsection2": {
                "title": subsection2.title,
                "partners": subsection2.partners[]{
                  title,
                  content,
                  "logo": coalesce(logo.asset->url, logo),
                  "alt": coalesce(logo.alt, title)
                }
              }
            }
          }`,
          { documentId },
          {
            includePreviousRevision: false,
          }
        )
        .subscribe((update) => {
          if (update.result) {
            // Update page data when content changes in Sanity
            setPageData(update.result);
            console.log('Partners page content updated in real-time');
          }
        });
    } catch (err) {
      console.error('Failed to set up real-time subscription', err);
      // Don't break the app if real-time fails, just log the error
    }
  };

  if (loading) {
    return <SimpleLoader />;
  }

  if (error || !pageData) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error Loading Partners Page</h4>
          <p>{error || 'Partners page data not found.'}</p>
          <hr />
          <p className="mb-0">
            Please ensure you have created a Partners Page document in Sanity with slug
            &quot;partners&quot;.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BreadCumb
        bgimg={pageData.breadcrumb?.bgimg || '/assets/img/breadcrumb.jpg'}
        Title={pageData.breadcrumb?.title || pageData.pageTitle || 'Partners'}
      />
      {pageData.sections?.map((section, index) => (
        <PartnersSectionDynamic key={index} data={section} />
      ))}
    </div>
  );
}

export default PartnersPage;
