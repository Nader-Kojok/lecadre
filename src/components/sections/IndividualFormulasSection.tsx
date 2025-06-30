import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faCheck,
  faUtensils,
  faStar,
  faClock,
  faHeart,
  faGift,
  faTruck,
  faPhone,

} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const IndividualFormulasSection = () => {
  return (
    <section className="py-20 bg-[#006464] text-white relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
              <span className="text-white font-bold">
                FORMULES PARTICULIERS
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-lg text-gray-200 mt-6 max-w-2xl mx-auto">
            Des formules flexibles adaptées à votre rythme de vie et à vos envies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Formule Solo Flex */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faClock} className="h-10 w-10 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              FORMULE SOLO FLEX
            </h3>
            <p className="text-gray-300 mb-4">3 repas par semaine</p>
            <div className="bg-secondary text-[#006464] px-4 py-2 rounded-full font-bold text-lg mb-6">
              À partir de 27 000 FCFA/mois
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Idéal pour ceux qui veulent se faire plaisir quelques fois par semaine</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faUtensils} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Menu du jour varié livré chaud</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Commande simple via WhatsApp ou QR code</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faTruck} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Livraison flexible selon vos besoins</span>
              </li>
            </ul>
            
            <Link href="/contact">
              <Button className="w-full bg-secondary text-[#006464] hover:bg-accent font-bold transition-all duration-300 group-hover:scale-105">
                Choisir cette formule
              </Button>
            </Link>
          </div>
          
          {/* Formule Solo Midi */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-secondary text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-secondary text-[#006464] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                <FontAwesomeIcon icon={faStar} className="mr-1" /> POPULAIRE
              </span>
            </div>
            <div className="mt-4">
              <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FontAwesomeIcon icon={faUtensils} className="h-10 w-10 text-[#006464]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
                FORMULE SOLO MIDI
              </h3>
              <p className="text-gray-300 mb-4">5 repas par semaine</p>
              <div className="bg-secondary text-[#006464] px-4 py-2 rounded-full font-bold text-lg mb-6">
                À partir de 45 000 FCFA/mois
              </div>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Pour un déjeuner chaque midi de semaine</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faTruck} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Livraison offerte</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faHeart} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Suivi des préférences alimentaires</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Support client prioritaire</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faGift} className="text-secondary mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">1 dessert offert par semaine</span>
              </li>
            </ul>
            
            <Link href="/contact">
              <Button className="w-full bg-secondary text-[#006464] hover:bg-accent font-bold transition-all duration-300 group-hover:scale-105">
                Choisir cette formule
              </Button>
            </Link>
          </div>
          
          {/* Formule Solo Max */}
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-accent text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-[#006464] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                <FontAwesomeIcon icon={faStar} className="mr-1" /> Meilleure valeur
              </span>
            </div>
            <div className="mt-4">
              <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FontAwesomeIcon icon={faStar} className="h-10 w-10 text-[#006464]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-accent transition-colors">
                FORMULE SOLO MAX
              </h3>
              <p className="text-gray-300 mb-4">7 repas par semaine</p>
              <div className="bg-accent text-[#006464] px-4 py-2 rounded-full font-bold text-lg mb-6">
                À partir de 57 000 FCFA/mois
              </div>
            </div>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-accent mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Pour ceux qui mangent au bureau tous les jours</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faGift} className="text-accent mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">1 repas offert chaque semaine</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faTruck} className="text-accent mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Priorité sur les livraisons</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faHeart} className="text-accent mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Option "menu personnalisé" disponible</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-accent mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Support client VIP 24/7</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faUtensils} className="text-accent mr-3 mt-1 text-sm" />
                <span className="text-sm text-gray-200">Accès aux plats premium exclusifs</span>
              </li>
            </ul>
            
            <div className="text-center">
              <Link href="/contact">
                <Button className="w-full bg-accent text-[#006464] hover:bg-secondary font-bold transition-all duration-300 group-hover:scale-105">
                  Choisir cette formule
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Section informative finale */}
        <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-secondary">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-secondary">
              Pourquoi choisir nos formules individuelles ?
            </h3>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Nos formules sont conçues pour s'adapter à votre rythme de vie. Que vous soyez étudiant, professionnel ou retraité, 
              nous avons la solution parfaite pour vous garantir des repas savoureux et équilibrés.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center group">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faHeart} className="text-[#006464] text-2xl" />
              </div>
              <h4 className="font-bold mb-2 text-white">Cuisine Authentique</h4>
              <p className="text-sm text-gray-300">Des recettes traditionnelles préparées avec amour</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faTruck} className="text-[#006464] text-2xl" />
              </div>
              <h4 className="font-bold mb-2 text-white">Livraison Fiable</h4>
              <p className="text-sm text-gray-300">Ponctualité garantie pour vos repas chauds</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faPhone} className="text-[#006464] text-2xl" />
              </div>
              <h4 className="font-bold mb-2 text-white">Support Dédié</h4>
              <p className="text-sm text-gray-300">Une équipe à votre écoute 7j/7</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
               <Button className="bg-secondary text-[#006464] hover:bg-accent font-bold px-8 py-3 transition-all duration-300">
                 <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                 Choisir Ma Formule
               </Button>
             </Link>
            <Link href="tel:+33123456789">
              <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-[#006464] font-bold px-8 py-3 transition-all duration-300">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Appelez-nous
              </Button>
            </Link>
          </div>
        
        </div>
      </div>
    </section>
  );
};