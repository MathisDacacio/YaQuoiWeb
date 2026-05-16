import { Helmet } from 'react-helmet-async'

export function useHelmet({title, description, image, url}) {
  return (
    <Helmet>
      {/* Titres et descriptions */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Open Graph pour Facebook, LinkedIn, etc */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL (évite les contenus dupliqués) */}
      <link rel="canonical" href={url} />
      
      {/* Langues alternatives */}
      <link rel="alternate" hrefLang="fr" href={url} />
    </Helmet>
  )
}

