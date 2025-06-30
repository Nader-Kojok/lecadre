'use client';

import { useEffect } from 'react';
import Head from 'next/head';

// Composant pour précharger les ressources critiques
export function CriticalResourcePreloader() {
  return (
    <Head>
      {/* Préchargement DNS pour les domaines externes */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      
      {/* Préconnexion pour les ressources critiques */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Préchargement des ressources critiques */}
      <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      <link rel="preload" href="/bg-img.jpg" as="image" type="image/jpeg" />
      
      {/* Préchargement des polices critiques */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
        as="style"
      />
      
      {/* Hints de ressources pour améliorer la navigation */}
      <link rel="prefetch" href="/menu" />
      <link rel="prefetch" href="/contact" />
      <link rel="prefetch" href="/devis" />
    </Head>
  );
}

// Hook pour optimiser le chargement des ressources
export function useResourceOptimization() {
  useEffect(() => {
    // Précharger les pages importantes au survol des liens
    const prefetchOnHover = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    };

    // Ajouter des écouteurs pour le préchargement au survol
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('#')) {
        link.addEventListener('mouseenter', () => prefetchOnHover(href), { once: true });
      }
    });

    // Optimiser les images avec Intersection Observer
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Observer toutes les images avec data-src
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Optimiser le chargement des scripts non-critiques
    const loadNonCriticalScripts = () => {
      // Charger Google Analytics de manière différée
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        script.async = true;
        document.head.appendChild(script);
      }
    };

    // Charger les scripts non-critiques après le chargement initial
    if (document.readyState === 'complete') {
      loadNonCriticalScripts();
    } else {
      window.addEventListener('load', loadNonCriticalScripts);
    }

    return () => {
      window.removeEventListener('load', loadNonCriticalScripts);
    };
  }, []);
}

// Composant pour optimiser les performances du viewport
export function ViewportOptimization() {
  useEffect(() => {
    // Optimiser le rendu avec requestIdleCallback
    if ('requestIdleCallback' in window) {
      const optimizeRendering = (deadline: IdleDeadline) => {
        while (deadline.timeRemaining() > 0) {
          // Effectuer des optimisations non-critiques
          const unusedElements = document.querySelectorAll('[data-optimize="true"]');
          if (unusedElements.length > 0) {
            unusedElements[0].removeAttribute('data-optimize');
            break;
          } else {
            break;
          }
        }
      };

      requestIdleCallback(optimizeRendering);
    }

    // Optimiser les animations avec will-change
    const animatedElements = document.querySelectorAll('.animate-in, .animate-fade-in, .animate-slide-up');
    animatedElements.forEach(element => {
      (element as HTMLElement).style.willChange = 'transform, opacity';
    });

    // Nettoyer will-change après les animations
    const cleanupWillChange = () => {
      animatedElements.forEach(element => {
        (element as HTMLElement).style.willChange = 'auto';
      });
    };

    setTimeout(cleanupWillChange, 3000);
  }, []);

  return null;
}

// Composant pour optimiser les Core Web Vitals
export function CoreWebVitalsOptimizer() {
  useEffect(() => {
    // Optimiser le LCP (Largest Contentful Paint)
    const optimizeLCP = () => {
      // Précharger l'image hero si elle existe
      const heroImage = document.querySelector('.hero-image img') as HTMLImageElement;
      if (heroImage && !heroImage.complete) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroImage.src;
        document.head.appendChild(link);
      }
    };

    // Optimiser le FID (First Input Delay)
    const optimizeFID = () => {
      // Différer les scripts non-critiques
      const nonCriticalScripts = document.querySelectorAll('script[data-defer="true"]');
      nonCriticalScripts.forEach(script => {
        script.setAttribute('defer', 'true');
      });
    };

    // Optimiser le CLS (Cumulative Layout Shift)
    const optimizeCLS = () => {
      // Ajouter des dimensions aux images sans taille définie
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const image = img as HTMLImageElement;
        if (image.naturalWidth && image.naturalHeight) {
          image.setAttribute('width', image.naturalWidth.toString());
          image.setAttribute('height', image.naturalHeight.toString());
        }
      });

      // Réserver l'espace pour les éléments dynamiques
      const dynamicElements = document.querySelectorAll('[data-dynamic="true"]');
      dynamicElements.forEach(element => {
        const el = element as HTMLElement;
        if (!el.style.minHeight) {
          el.style.minHeight = '100px'; // Hauteur minimale par défaut
        }
      });
    };

    optimizeLCP();
    optimizeFID();
    optimizeCLS();

    // Observer les changements de layout
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            console.warn('Layout shift detected:', entry);
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}

// Composant principal d'optimisation des ressources
export function ResourceOptimization() {
  useResourceOptimization();
  
  return (
    <>
      <CriticalResourcePreloader />
      <ViewportOptimization />
      <CoreWebVitalsOptimizer />
    </>
  );
}