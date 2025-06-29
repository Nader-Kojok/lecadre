import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faUsers,
  faClock,
  faLeaf,
  faShieldAlt,
  faTruck
} from '@fortawesome/free-solid-svg-icons';

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#006464] text-white relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-fredoka leading-tight mb-4">
              <span className="text-white font-bold">
                NOS SOLUTIONS
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-lg text-gray-200 mt-6 max-w-2xl mx-auto">
            Des solutions culinaires pensées pour votre bien-être et votre satisfaction 🍴
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faUtensils} className="h-10 w-10 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Repas Équilibrés
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Des menus variés et équilibrés, préparés avec des ingrédients frais et de qualité pour maintenir votre énergie tout au long de la journée.
            </p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faLeaf} className="h-10 w-10 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Ingrédients Frais
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Nous privilégions les produits locaux et de saison pour vous offrir des repas savoureux et nutritifs, préparés le jour même.
            </p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faTruck} className="h-10 w-10 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Livraison Fiable
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Service de livraison ponctuel et professionnel pour que vos repas arrivent chauds et à l'heure, directement sur votre lieu de travail.
            </p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Formules Flexibles
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Des formules adaptées à tous : particuliers, petites équipes ou grandes entreprises, avec des tarifs dégressifs selon vos besoins.
            </p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faShieldAlt} className="h-10 w-10 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Qualité Garantie
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Respect strict des normes d'hygiène et de sécurité alimentaire pour vous garantir des repas sains et de qualité supérieure.
            </p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FontAwesomeIcon icon={faClock} className="h-10 w-10 text-[#006464]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-comfortaa text-white group-hover:text-secondary transition-colors">
              Gain de Temps
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Fini les déplacements et les files d'attente ! Concentrez-vous sur votre travail pendant que nous nous occupons de vos repas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};