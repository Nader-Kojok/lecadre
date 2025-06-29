import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
export const HeroSection = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center">
      <div className="absolute inset-0 z-0 pt-16">
        <Image
          src="/bg-img.jpg"
          alt="Le Cadre - Traiteur professionnel"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold font-fredoka mb-6 text-center lg:text-left">
              Le Cadre
            </h1>
            <h2 className="text-3xl md:text-4xl font-comfortaa mb-4 text-center lg:text-left text-secondary">
              Traiteur Professionnel
            </h2>
            <p className="text-xl mb-8 text-center lg:text-left leading-relaxed">
              Solutions de restauration sur mesure 🍽️<br/>
              Formules entreprises & événements 🎯<br/>
              Service personnalisé à Dakar 📍
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/formules" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg w-full sm:w-[200px] h-[60px] border-2 border-white hover:border-gray-200 flex items-center justify-center font-comfortaa font-bold">
                  Nos Formules 🍽️
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-secondary/5 backdrop-blur-sm hover:bg-secondary/20 text-lg w-full sm:w-[200px] h-[60px] border-2 border-white hover:border-white text-white hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 font-comfortaa"
                >
                   Devis Personnalisé
                 </Button>
               </Link>
            </div>
            <div className="mt-6 flex justify-center lg:justify-start">
              <a 
                href="https://instagram.com/lecadre_traiteur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors flex items-center gap-2 font-comfortaa"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                Suivez-nous sur Instagram
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};