'use client';

import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
  id: string;
  navigationType: string;
}

function sendToAnalytics(metric: Metric) {
  // En production, vous pouvez envoyer ces métriques à Google Analytics, Vercel Analytics, etc.
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Core Web Vitals:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
    });
  }

  // Exemple d'envoi vers Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Exemple d'envoi vers Vercel Analytics
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('track', 'Web Vitals', {
      metric: metric.name,
      value: metric.value,
      rating: metric.rating,
    });
  }
}

export function WebVitals() {
  useEffect(() => {
    // Mesurer les Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);

  return null; // Ce composant ne rend rien visuellement
}

// Hook personnalisé pour utiliser les métriques dans d'autres composants
export function useWebVitals() {
  useEffect(() => {
    const vitals: Record<string, number> = {};

    const handleMetric = (metric: Metric) => {
      vitals[metric.name] = metric.value;
      sendToAnalytics(metric);
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    return () => {
      // Cleanup si nécessaire
    };
  }, []);
}

// Composant pour afficher les métriques en mode développement
export function WebVitalsDebug() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const vitals: Record<string, Metric> = {};

    const handleMetric = (metric: Metric) => {
      vitals[metric.name] = metric;
      
      // Afficher un résumé des performances
      console.group('🚀 Performance Metrics');
      Object.entries(vitals).forEach(([name, m]) => {
        const emoji = m.rating === 'good' ? '✅' : m.rating === 'needs-improvement' ? '⚠️' : '❌';
        console.log(`${emoji} ${name}: ${m.value.toFixed(2)} (${m.rating})`);
      });
      console.groupEnd();
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
      📊 Web Vitals Debug Mode
    </div>
  );
}