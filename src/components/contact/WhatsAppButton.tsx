'use client';

import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function WhatsAppButton({ children, className }: WhatsAppButtonProps) {
  const handleWhatsApp = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://wa.me/221771234567?text=Bonjour,%20je%20souhaite%20obtenir%20des%20informations%20sur%20les%20services%20de%20Le%20Cadre%20!';
    }
  };

  return (
    <Button 
      size="lg" 
      variant="outline" 
      className={className}
      onClick={handleWhatsApp}
    >
      {children}
    </Button>
  );
}