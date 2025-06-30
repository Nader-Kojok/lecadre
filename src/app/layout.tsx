import type { Metadata } from "next";
import { Inter, Comfortaa, Fredoka } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { StatusModal } from '@/components/restaurant-status/StatusModal';
import { WebVitals, WebVitalsDebug } from '@/components/performance/WebVitals';
import { FontOptimization } from '@/components/performance/FontOptimization';
import { ResourceOptimization } from '@/components/performance/ResourceOptimization';

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lecadre-traiteur.com'),
  title: {
    default: "Le Cadre - Traiteur Professionnel à Dakar",
    template: "%s | Le Cadre"
  },
  description: "Traiteur professionnel à Dakar 🍽️ | Formules entreprises & événements sur mesure 🎯 | Livraison et service personnalisé 📍",
  keywords: ["traiteur", "Dakar", "entreprise", "événements", "livraison", "restauration", "formules", "Le Cadre", "catering"],
  authors: [{ name: "Le Cadre" }],
  creator: "Le Cadre",
  publisher: "Le Cadre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Le Cadre - Traiteur Professionnel à Dakar",
    description: "Traiteur professionnel à Dakar 🍽️ | Formules entreprises & événements sur mesure 🎯 | Livraison et service personnalisé 📍",
    url: 'https://lecadre-traiteur.com',
    siteName: 'Le Cadre',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Le Cadre - Traiteur professionnel à Dakar',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Le Cadre - Traiteur Professionnel à Dakar",
    description: "Traiteur professionnel 🍽️ | Formules entreprises & événements 🎉 | Service sur Dakar 📍",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Le Cadre - Traiteur professionnel à Dakar',
      type: 'image/jpeg',
    }],
    creator: "@lecadre_traiteur",
    site: "@lecadre_traiteur",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-de-verification-google',
  },
  alternates: {
    canonical: 'https://lecadre-traiteur.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${comfortaa.variable} ${fredoka.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
              "name": "Le Cadre",
              "alternateName": "Le Cadre Traiteur",
              "image": [
                "https://lecadre-traiteur.com/og-image.jpg",
                "https://lecadre-traiteur.com/logo.svg"
              ],
              "description": "Traiteur professionnel à Dakar spécialisé dans les formules entreprises et événements sur mesure. Service de livraison et restauration personnalisée.",
              "@id": "https://lecadre-traiteur.com",
              "url": "https://lecadre-traiteur.com",
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
              "servesCuisine": [
                "Cuisine d'entreprise",
                "Traiteur",
                "Événementiel",
                "Cuisine sénégalaise",
                "Cuisine internationale"
              ],
              "priceRange": "$$",
              "currenciesAccepted": "XOF",
              "paymentAccepted": ["Cash", "Credit Card", "Mobile Payment"],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "22:00"
                }
              ],
              "menu": "https://lecadre-traiteur.com/menu",
              "hasMenu": {
                "@type": "Menu",
                "name": "Menu Le Cadre",
                "description": "Formules traiteur pour entreprises et événements",
                "url": "https://lecadre-traiteur.com/menu"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Service traiteur entreprise",
                    "description": "Formules repas pour entreprises avec livraison"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Traiteur événementiel",
                    "description": "Service traiteur pour événements privés et professionnels"
                  }
                }
              ],
              "areaServed": {
                "@type": "City",
                "name": "Dakar",
                "addressCountry": "SN"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 14.6937,
                  "longitude": -17.4441
                },
                "geoRadius": "50000"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.facebook.com/lecadretraiteur",
                "https://www.instagram.com/lecadre_traiteur",
                "https://www.linkedin.com/company/lecadre-traiteur"
              ],
              "founder": {
                "@type": "Person",
                "name": "Le Cadre Team"
              },
              "foundingDate": "2020",
              "slogan": "Votre partenaire culinaire de confiance à Dakar",
              "keywords": "traiteur Dakar, livraison repas entreprise, événementiel Sénégal, catering Dakar"
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow pt-16 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <StatusModal />
        <WebVitals />
        <WebVitalsDebug />
        <FontOptimization />
        <ResourceOptimization />
      </body>
    </html>
  );
}
