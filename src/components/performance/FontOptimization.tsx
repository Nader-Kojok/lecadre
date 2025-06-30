'use client';

import { useEffect } from 'react';

// Composant pour précharger les polices critiques
export function FontPreloader() {
  useEffect(() => {
    // Précharger les polices Google Fonts utilisées
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });

    // Précharger les icônes FontAwesome critiques
    const faLink = document.createElement('link');
    faLink.rel = 'preload';
    faLink.as = 'style';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    faLink.crossOrigin = 'anonymous';
    document.head.appendChild(faLink);
  }, []);

  return null;
}

// Hook pour optimiser le chargement des polices
export function useFontOptimization() {
  useEffect(() => {
    // Utiliser l'API Font Loading pour optimiser le chargement
    if ('fonts' in document) {
      const fontFaces = [
        new FontFace('Inter', 'url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)', {
          weight: '400',
          style: 'normal',
          display: 'swap'
        }),
        new FontFace('Comfortaa', 'url(https://fonts.gstatic.com/s/comfortaa/v45/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2)', {
          weight: '400',
          style: 'normal',
          display: 'swap'
        }),
        new FontFace('Fredoka', 'url(https://fonts.gstatic.com/s/fredoka/v14/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B8BRmgf.woff2)', {
          weight: '400',
          style: 'normal',
          display: 'swap'
        })
      ];

      // Charger les polices de manière asynchrone
      fontFaces.forEach(fontFace => {
        fontFace.load().then(loadedFace => {
          document.fonts.add(loadedFace);
        }).catch(error => {
          console.warn('Font loading failed:', error);
        });
      });
    }
  }, []);
}

// Composant pour réduire le CLS avec des fallbacks de polices
export function FontFallbackCSS() {
  return (
    <style jsx global>{`
      /* Optimisation des fallbacks de polices pour réduire le CLS */
      .font-inter {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
        font-variation-settings: normal;
      }
      
      .font-comfortaa {
        font-family: 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-feature-settings: normal;
      }
      
      .font-fredoka {
        font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-feature-settings: normal;
      }
      
      /* Optimisation pour éviter le FOIT (Flash of Invisible Text) */
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: local('Inter');
      }
      
      @font-face {
        font-family: 'Comfortaa';
        font-display: swap;
        src: local('Comfortaa');
      }
      
      @font-face {
        font-family: 'Fredoka';
        font-display: swap;
        src: local('Fredoka');
      }
      
      /* Préchargement des caractères critiques */
      .text-preload {
        font-kerning: auto;
        font-variant-ligatures: common-ligatures;
        text-rendering: optimizeSpeed;
      }
      
      /* Optimisation pour les animations de texte */
      .text-animate {
        will-change: transform;
        backface-visibility: hidden;
        perspective: 1000px;
      }
      
      /* Réduction du CLS pour les icônes */
      .icon-placeholder {
        display: inline-block;
        width: 1em;
        height: 1em;
        background-color: transparent;
        vertical-align: -0.125em;
      }
      
      /* Optimisation pour les polices variables */
      @supports (font-variation-settings: normal) {
        .font-inter {
          font-family: 'InterVariable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      }
    `}</style>
  );
}

// Composant principal d'optimisation des polices
export function FontOptimization() {
  useFontOptimization();
  
  return (
    <>
      <FontPreloader />
      <FontFallbackCSS />
    </>
  );
}