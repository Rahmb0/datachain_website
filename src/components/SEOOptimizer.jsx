import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../utils/constants';

export function SEOOptimizer({ 
  title, 
  description, 
  image, 
  article = false 
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${seoConfig.siteUrl}${pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${title} | ${seoConfig.siteName}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || seoConfig.defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || seoConfig.defaultImage} />

      {/* Additional SEO */}
      <meta name="keywords" content={seoConfig.keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={seoConfig.author} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": seoConfig.siteName,
          "url": seoConfig.siteUrl,
          "logo": seoConfig.logo,
          "sameAs": [
            seoConfig.socialLinks.github,
            seoConfig.socialLinks.twitter,
            seoConfig.socialLinks.discord
          ]
        })}
      </script>
    </Helmet>
  );
} 