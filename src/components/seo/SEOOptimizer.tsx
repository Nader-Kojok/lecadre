'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
  canonical?: string;
  structuredData?: object;
}

export function SEOOptimizer({
  title,
  description,
  keywords = [],
  image,
  noindex = false,
  canonical,
  structuredData
}: SEOProps) {
  const pathname = usePathname();
  const baseUrl = 'https://lecadre-traiteur.com';
  
  // Titre par défaut basé sur la page
  const getDefaultTitle = () => {
    const pageTitles: Record<string, string> = {
      '/': 'Le Cadre - Traiteur Professionnel à Dakar',
      '/about': 'À Propos - Le Cadre Traiteur',
      '/menu': 'Notre Menu - Le Cadre Traiteur',
      '/formules': 'Nos Formules - Le Cadre Traiteur',
      '/contact': 'Contact - Le Cadre Traiteur',
      '/devis': 'Demande de Devis - Le Cadre Traiteur'
    };
    return pageTitles[pathname] || 'Le Cadre - Traiteur Professionnel';
  };

  // Description par défaut basée sur la page
  const getDefaultDescription = () => {
    const pageDescriptions: Record<string, string> = {
      '/': 'Traiteur professionnel à Dakar 🍽️ | Formules entreprises & événements sur mesure 🎯 | Livraison et service personnalisé 📍',
      '/about': 'Découvrez Le Cadre, votre traiteur de confiance à Dakar. Notre histoire, nos valeurs et notre engagement pour une restauration d\'excellence.',
      '/menu': 'Découvrez notre menu varié : cuisine sénégalaise authentique et plats internationaux. Fraîcheur et qualité garanties.',
      '/formules': 'Nos formules traiteur adaptées à vos besoins : entreprises, événements, livraison express. Solutions sur mesure à Dakar.',
      '/contact': 'Contactez Le Cadre pour vos besoins en traiteur à Dakar. Devis gratuit, conseil personnalisé et service de qualité.',
      '/devis': 'Demandez votre devis gratuit pour nos services traiteur. Formules personnalisées pour entreprises et événements à Dakar.'
    };
    return pageDescriptions[pathname] || 'Le Cadre - Votre traiteur professionnel à Dakar';
  };

  // Mots-clés par défaut basés sur la page
  const getDefaultKeywords = () => {
    const baseKeywords = ['traiteur', 'Dakar', 'Le Cadre', 'restauration', 'livraison'];
    const pageKeywords: Record<string, string[]> = {
      '/': ['entreprise', 'événements', 'catering', 'professionnel'],
      '/about': ['histoire', 'équipe', 'valeurs', 'expérience'],
      '/menu': ['cuisine sénégalaise', 'plats', 'menu', 'spécialités'],
      '/formules': ['formules', 'tarifs', 'packages', 'offres'],
      '/contact': ['contact', 'téléphone', 'adresse', 'horaires'],
      '/devis': ['devis', 'gratuit', 'estimation', 'prix']
    };
    return [...baseKeywords, ...(pageKeywords[pathname] || [])];
  };

  const finalTitle = title || getDefaultTitle();
  const finalDescription = description || getDefaultDescription();
  const finalKeywords = keywords.length > 0 ? keywords : getDefaultKeywords();
  const finalCanonical = canonical || `${baseUrl}${pathname}`;
  const finalImage = image || `${baseUrl}/og-image.jpg`;

  useEffect(() => {
    // Optimisations SEO côté client
    
    // Ajouter des métadonnées dynamiques
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1, shrink-to-fit=no';
      document.head.appendChild(viewport);
    }

    // Ajouter le thème color
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      const theme = document.createElement('meta');
      theme.name = 'theme-color';
      theme.content = '#D97706'; // Couleur principale du site
      document.head.appendChild(theme);
    }

    // Optimiser les liens internes pour le SEO
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    internalLinks.forEach(link => {
      if (!link.getAttribute('title')) {
        const href = link.getAttribute('href');
        const linkTitles: Record<string, string> = {
          '/': 'Accueil - Le Cadre Traiteur',
          '/about': 'À propos de Le Cadre',
          '/menu': 'Voir notre menu',
          '/formules': 'Découvrir nos formules',
          '/contact': 'Nous contacter',
          '/devis': 'Demander un devis'
        };
        if (href && linkTitles[href]) {
          link.setAttribute('title', linkTitles[href]);
        }
      }
    });

    // Ajouter des attributs alt manquants aux images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      const src = img.getAttribute('src') || '';
      if (src.includes('logo')) {
        img.setAttribute('alt', 'Logo Le Cadre Traiteur');
      } else if (src.includes('hero') || src.includes('bg-img')) {
        img.setAttribute('alt', 'Le Cadre - Service traiteur professionnel à Dakar');
      } else {
        img.setAttribute('alt', `Image Le Cadre ${index + 1}`);
      }
    });

    // Optimiser les headings pour la hiérarchie SEO
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let h1Count = 0;
    headings.forEach(heading => {
      if (heading.tagName === 'H1') {
        h1Count++;
        if (h1Count > 1) {
          console.warn('Multiple H1 tags detected. Consider using H2 for better SEO.');
        }
      }
    });
  }, [pathname]);

  return (
    <Head>
      {/* Titre et description */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Le Cadre" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content="@lecadre_traiteur" />
      
      {/* Métadonnées supplémentaires */}
      <meta name="author" content="Le Cadre" />
      <meta name="publisher" content="Le Cadre" />
      <meta name="copyright" content="© 2024 Le Cadre. Tous droits réservés." />
      <meta name="language" content="fr" />
      <meta name="geo.region" content="SN-DK" />
      <meta name="geo.placename" content="Dakar" />
      <meta name="geo.position" content="14.6937;-17.4441" />
      <meta name="ICBM" content="14.6937, -17.4441" />
      
      {/* Données structurées personnalisées */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Préchargement des ressources critiques */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      
      {/* DNS Prefetch pour les domaines externes */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      
      {/* Manifest et icônes */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Métadonnées pour les réseaux sociaux locaux */}
      <meta property="business:contact_data:street_address" content="Dakar" />
      <meta property="business:contact_data:locality" content="Dakar" />
      <meta property="business:contact_data:region" content="Dakar" />
      <meta property="business:contact_data:postal_code" content="10000" />
      <meta property="business:contact_data:country_name" content="Sénégal" />
      <meta property="business:contact_data:phone_number" content="+221771595352" />
      <meta property="business:contact_data:website" content="https://lecadre-traiteur.com" />
    </Head>
  );
}

// Hook pour optimiser le SEO de manière dynamique
export function useSEOOptimization() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Envoyer des événements de page vue pour le SEO
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Optimiser les performances pour le SEO
    const optimizeForSEO = () => {
      // Marquer les images comme chargées pour éviter le CLS
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.complete) {
          imageElement.classList.add('loaded');
        }
      });

      // Optimiser les liens externes
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="lecadre-traiteur.com"])');
      externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
      });
    };

    // Exécuter les optimisations après le chargement
    if (document.readyState === 'complete') {
      optimizeForSEO();
    } else {
      window.addEventListener('load', optimizeForSEO);
    }

    return () => {
      window.removeEventListener('load', optimizeForSEO);
    };
  }, [pathname]);
}