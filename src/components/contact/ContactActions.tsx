'use client';

import { FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';

interface ContactActionsProps {
  className?: string;
}

export function ContactActions({ className }: ContactActionsProps) {
  const handleCall = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+221771595352';
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://wa.me/221771234567?text=Bonjour,%20je%20souhaite%20obtenir%20des%20informations%20sur%20les%20services%20de%20Le%20Cadre%20!';
    }
  };

  const handleInstagram = () => {
    if (typeof window !== 'undefined') {
      window.open('https://instagram.com/lecadre_traiteur', '_blank');
    }
  };

  return (
    <div className={`flex gap-4 ${className || ''}`}>
      <button
        onClick={handleCall}
        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-comfortaa"
        aria-label="Appeler"
      >
        <FaPhone className="mr-2" />
        Appeler
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors font-comfortaa"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="mr-2" />
        WhatsApp
      </button>
      <button
        onClick={handleInstagram}
        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#E4405F] text-white rounded-lg hover:bg-[#E4405F]/90 transition-colors font-comfortaa"
        aria-label="Instagram"
      >
        <FaInstagram className="mr-2" />
        Instagram
      </button>
    </div>
  );
}