import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogType, ogImage }) => {
  const siteName = 'AVOMA Pharma';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Pharmaceutical Wholesale & Distribution`;
  const defaultDescription = 'AVOMA Pharma: Wholesale and distribution of pharmaceutical products, surgical equipment and medical consumables across Eswatini and Mozambique.';
  const siteUrl = 'https://avomagroup.com/pharma/';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AVOMA Pharma",
    "url": siteUrl,
    "logo": `${siteUrl}avoma-pharma-logo.png`,
    "description": defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 943, Mshini Rd, Sidwashini Industrial Site",
      "addressLocality": "Mbabane",
      "addressCountry": "Eswatini"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+268-2422-0013",
      "contactType": "customer service"
    }
  };
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical || siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType || 'website'} />
      <meta property="og:url" content={canonical || siteUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
