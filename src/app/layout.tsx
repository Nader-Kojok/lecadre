import type { Metadata } from "next";
import { Inter, Comfortaa, Fredoka } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { StatusModal } from '@/components/restaurant-status/StatusModal';

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
              "@type": "Restaurant",
              "name": "Le Cadre",
              "image": "https://lecadre-traiteur.com/og-image.jpg",
              "description": "Traiteur professionnel 🍽️ | Formules entreprises & événements 🎉 | Service sur Dakar 📍",
              "@id": "https://lecadre-traiteur.com",
              "url": "https://lecadre-traiteur.com",
              "telephone": "+221771595352",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dakar",
                "addressCountry": "SN"
              },
              "servesCuisine": ["Cuisine d'entreprise", "Traiteur", "Événementiel"],
              "priceRange": "$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "22:00"
                }
              ],
              "menu": "https://lecadre-traiteur.com/menu",
              "deliveryService": "True"
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
      </body>
    </html>
  );
}
