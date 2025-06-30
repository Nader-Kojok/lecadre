'use client';

import Head from 'next/head';

// Données structurées pour les avis clients
export function ReviewsStructuredData() {
  const reviewsData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": "https://lecadre-traiteur.com#reviews",
    "itemReviewed": {
      "@type": "Restaurant",
      "name": "Le Cadre",
      "url": "https://lecadre-traiteur.com"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Clients Le Cadre"
    },
    "reviewBody": "Service traiteur exceptionnel à Dakar. Qualité des plats remarquable et service client irréprochable.",
    "datePublished": "2024-01-15"
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsData)
        }}
      />
    </Head>
  );
}

// Données structurées pour les services
export function ServicesStructuredData() {
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://lecadre-traiteur.com#services",
    "name": "Services Traiteur Le Cadre",
    "description": "Services de traiteur professionnel pour entreprises et événements à Dakar",
    "provider": {
      "@type": "Restaurant",
      "name": "Le Cadre",
      "url": "https://lecadre-traiteur.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dakar",
      "addressCountry": "SN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Formules Traiteur",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formule Entreprise",
            "description": "Livraison de repas pour entreprises avec menu varié"
          },
          "price": "À partir de 3500 FCFA",
          "priceCurrency": "XOF"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Événementiel",
            "description": "Service traiteur complet pour événements privés et professionnels"
          },
          "price": "Sur devis",
          "priceCurrency": "XOF"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Livraison Express",
            "description": "Livraison rapide de repas individuels"
          },
          "price": "À partir de 2500 FCFA",
          "priceCurrency": "XOF"
        }
      ]
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesData)
        }}
      />
    </Head>
  );
}

// Données structurées pour les événements
export function EventsStructuredData() {
  const eventsData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": "https://lecadre-traiteur.com#events",
    "name": "Services Événementiels Le Cadre",
    "description": "Organisation et service traiteur pour tous types d'événements à Dakar",
    "startDate": "2024-01-01",
    "endDate": "2024-12-31",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Dakar et environs",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dakar",
        "addressCountry": "SN"
      }
    },
    "organizer": {
      "@type": "Restaurant",
      "name": "Le Cadre",
      "url": "https://lecadre-traiteur.com",
      "telephone": "+221771595352"
    },
    "offers": {
      "@type": "Offer",
      "description": "Services traiteur personnalisés pour événements",
      "price": "Sur devis",
      "priceCurrency": "XOF",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventsData)
        }}
      />
    </Head>
  );
}

// Données structurées pour les FAQ
export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://lecadre-traiteur.com#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels sont vos horaires de livraison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous livrons du lundi au vendredi de 8h à 18h, et le weekend de 9h à 22h sur Dakar et environs."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous des formules pour entreprises ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous proposons des formules spécialement conçues pour les entreprises avec livraison quotidienne et menus variés."
        }
      },
      {
        "@type": "Question",
        "name": "Comment passer commande ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous pouvez passer commande par téléphone au +221771595352, via notre site web ou nous contacter pour un devis personnalisé."
        }
      },
      {
        "@type": "Question",
        "name": "Organisez-vous des événements ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous organisons et fournissons le service traiteur pour tous types d'événements : mariages, séminaires, fêtes privées, etc."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont vos zones de livraison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous livrons principalement sur Dakar et ses environs dans un rayon de 50km. Contactez-nous pour vérifier si votre zone est couverte."
        }
      }
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
    </Head>
  );
}

// Données structurées pour l'organisation
export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://lecadre-traiteur.com#organization",
    "name": "Le Cadre",
    "alternateName": "Le Cadre Traiteur",
    "url": "https://lecadre-traiteur.com",
    "logo": "https://lecadre-traiteur.com/logo.svg",
    "image": "https://lecadre-traiteur.com/og-image.jpg",
    "description": "Traiteur professionnel à Dakar spécialisé dans les services aux entreprises et l'événementiel",
    "telephone": "+221771595352",
    "email": "contact@lecadre-traiteur.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dakar",
      "addressRegion": "Dakar",
      "addressCountry": "SN",
      "postalCode": "10000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.6937,
      "longitude": -17.4441
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "slogan": "Votre partenaire culinaire de confiance à Dakar",
    "knowsAbout": [
      "Traiteur",
      "Restauration d'entreprise",
      "Événementiel",
      "Livraison de repas",
      "Cuisine sénégalaise",
      "Cuisine internationale"
    ],
    "sameAs": [
      "https://www.facebook.com/lecadretraiteur",
      "https://www.instagram.com/lecadre_traiteur",
      "https://www.linkedin.com/company/lecadre-traiteur"
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
    </Head>
  );
}

// Composant principal pour toutes les données structurées
export function AllStructuredData() {
  return (
    <>
      <ReviewsStructuredData />
      <ServicesStructuredData />
      <EventsStructuredData />
      <FAQStructuredData />
      <OrganizationStructuredData />
    </>
  );
}