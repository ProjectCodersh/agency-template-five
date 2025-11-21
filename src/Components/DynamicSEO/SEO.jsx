import { Title, Meta, Link } from 'react-head';

export default function SEO({ title, description, keywords, url, image }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      {description && <Meta name="description" content={description} />}
      {keywords && <Meta name="keywords" content={keywords} />}

      {/* Open Graph tags */}
      {title && <Meta property="og:title" content={title} />}
      {description && <Meta property="og:description" content={description} />}
      <Meta property="og:type" content="website" />
      {url && <Meta property="og:url" content={url} />}
      {image && <Meta property="og:image" content="https://iili.io/FZm7GQ1.png" />}

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />

      {/* Canonical link */}
      {url && <Link rel="canonical" href={url} />}
    </>
  );
}
