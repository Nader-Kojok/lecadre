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
      alt: 'Mrs Waffles - Gaufres gourmandes et délicieuses à Dakar',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mrs Waffles - Gaufres Gourmandes à Dakar",
    description: "Gaufres maison 🧇 | 100% plaisir & gourmandise 😋 | Livraison sur Dakar 📍",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Mrs Waffles - Gaufres gourmandes et délicieuses à Dakar',
      type: 'image/jpeg',
    }],
    creator: "@mrswaffles",
    site: "@mrswaffles",
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
    canonical: 'https://mrswaffles.sn',
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
              "name": "Mrs Waffles",
              "image": "https://mrswaffles.sn/og-image.jpg",
              "description": "Gaufres maison 🧇 | 100% plaisir & gourmandise 😋 | Livraison sur Dakar 📍",
              "@id": "https://mrswaffles.sn",
              "url": "https://mrswaffles.sn",
              "telephone": "+221771595352",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dakar",
                "addressCountry": "SN"
              },
              "servesCuisine": ["Desserts", "Gaufres", "Waffles"],
              "priceRange": "$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "22:00"
                }
              ],
              "menu": "https://mrswaffles.sn/menu",
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
