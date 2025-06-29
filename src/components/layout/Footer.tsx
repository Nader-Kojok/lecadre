import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faLocationDot, 
  faClock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-secondary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Le Cadre Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Le Cadre vous propose des solutions de restauration sur mesure pour vos entreprises et événements. Service personnalisé et professionnel à Dakar. 🍽️
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/lecadre.traiteur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/lecadre_traiteur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Suivez-nous sur Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/221771234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Commandez sur WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 font-comfortaa">Navigation</h3>
            <nav className="space-y-3">
              <Link 
                href="/"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/about"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                À Propos
              </Link>
              <Link 
                href="/formules"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                Formules
              </Link>
              <Link 
                href="/contact"
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 font-comfortaa">Contact & Commandes</h3>
            <div className="space-y-3">
              <a 
                href="tel:+221771234567"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-3" />
                +221 77 123 45 67
              </a>
              <a 
                href="https://wa.me/221771234567"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 mr-3" />
                Contacter
              </a>
              <a 
                href="mailto:contact@lecadre-traiteur.sn"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-3" />
                contact@lecadre-traiteur.sn
              </a>
              <p className="flex items-start text-gray-600">
                <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 mr-3 mt-1" />
                <span>Service sur tout Dakar<br />Sénégal 🇸🇳</span>
              </p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 font-comfortaa">Horaires de Service</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-3" />
                <div>
                  <p className="font-medium">Lundi - Vendredi</p>
                  <p>08h00 - 18h00</p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-3" />
                <div>
                  <p className="font-medium">Samedi</p>
                  <p>09h00 - 16h00</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  📱 Devis personnalisés sur demande
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary/10">
          <div className="text-center text-gray-500 space-y-2">
            <p>
              © {currentYear} Le Cadre Traiteur. Tous droits réservés.
            </p>
            <p className="text-sm">
              Développé avec 🍽️ & ❤️ par <a href="https://agencearcane.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90">Agence Arcane</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
  };

export default Footer;