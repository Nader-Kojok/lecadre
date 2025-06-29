import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faGoogle,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPhone,
  faEnvelope,
  faStar,
  faUsers,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';

export const SupportSection = () => {
  return (
    <section className="py-20 bg-[#006464] text-white relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-8">
            <h2 className="text-4xl md:text-6xl font-fredoka leading-tight">
              <span className="text-secondary font-bold">
                REJOIGNEZ LA
              </span>
              <br/>
              <span className="text-white font-bold">
                COMMUNAUTÉ
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Connectez-vous avec nous et rejoignez une communauté d'entreprises satisfaites !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Direct */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faPhone} className="h-8 w-8 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa">Contact Direct</h3>
            <p className="text-gray-200 text-sm mb-6">
              Appelez-nous directement pour un service personnalisé et des conseils sur mesure.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+221771234567"
                className="block text-secondary hover:text-accent transition-colors font-bold"
              >
                📞 +221 77 123 45 67
              </a>
              <a
                href="mailto:contact@lecadre-traiteur.sn"
                className="block text-secondary hover:text-accent transition-colors font-bold"
              >
                ✉️ contact@lecadre-traiteur.sn
              </a>
            </div>
          </div>

          {/* Avis Google */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faGoogle} className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa">Laissez un Avis</h3>
            <p className="text-gray-200 text-sm mb-6">
              Votre avis aide d'autres entreprises à découvrir nos services. Partagez votre expérience !
            </p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="h-5 w-5 text-yellow-400 mx-1" />
              ))}
            </div>
            <a
              href="https://g.page/r/lecadre-traiteur-dakar/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                className="bg-secondary hover:bg-accent text-[#006464] font-comfortaa font-bold transition-all duration-300"
              >
                Donner votre avis ⭐
              </Button>
            </a>
          </div>

          {/* Réseaux Sociaux */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa">Suivez-nous</h3>
            <p className="text-gray-200 text-sm mb-6">
              Restez informé de nos nouveaux menus et formules spéciales !
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://facebook.com/lecadre.traiteur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#1877F2] hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Suivez-nous sur Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/lecadre_traiteur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4405F]/20 hover:bg-[#E4405F] text-[#E4405F] hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Suivez-nous sur Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/221771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/lecadre-traiteur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5]/20 hover:bg-[#0077B5] text-[#0077B5] hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Testimonial section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center">
          <FontAwesomeIcon icon={faHeart} className="h-12 w-12 text-red-400 mx-auto mb-6" />
          <blockquote className="text-xl italic text-gray-200 mb-6 max-w-3xl mx-auto">
            "Le Cadre a transformé nos pauses déjeuner ! Des repas délicieux, une livraison ponctuelle et un service client exceptionnel. Nous recommandons vivement !"
          </blockquote>
          <div className="flex justify-center items-center space-x-2">
            <div className="text-lg font-bold">— Directeur RH, Entreprise Partenaire</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-yellow-400 ml-1" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};