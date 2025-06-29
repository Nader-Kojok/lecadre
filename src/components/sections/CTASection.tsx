import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faPhone, 
  faUtensils,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#006464] text-white relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-8">
            <h2 className="text-4xl md:text-6xl font-fredoka leading-tight">
              <span className="text-secondary font-bold">
                PRÊT À RÉVOLUTIONNER
              </span>
              <br/>
              <span className="text-white font-bold">
                VOS REPAS ?
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises qui ont déjà fait confiance à Le Cadre pour leurs repas d'équipe !
          </p>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-gray-200">Repas livrés par mois</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-gray-200">Entreprises satisfaites</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">4.8/5</div>
            <div className="text-gray-200">Note de satisfaction</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/formules" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-accent text-[#006464] text-lg w-full sm:w-auto px-8 py-4 font-comfortaa font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FontAwesomeIcon icon={faUtensils} className="mr-2" />
              Découvrir Nos Formules
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-lg hover:bg-white hover:text-[#006464] text-lg w-full sm:w-auto px-8 py-4 border-2 border-white/30 hover:border-white text-white transition-all duration-300 font-comfortaa font-bold"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Devis Gratuit
            </Button>
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">Ils nous font confiance :</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">🏢 ENTREPRISE A</div>
            <div className="text-2xl font-bold">🏢 ENTREPRISE B</div>
            <div className="text-2xl font-bold">🏢 ENTREPRISE C</div>
          </div>
        </div>
      </div>
    </section>
  );
};