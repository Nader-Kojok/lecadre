import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FormulasSection } from '@/components/sections/FormulasSection';
import { IndividualFormulasSection } from '@/components/sections/IndividualFormulasSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: "Nos Formules - Le Cadre",
  description: "Découvrez nos formules entreprises et particuliers adaptées à vos besoins. Restauration professionnelle à Dakar.",
};

export default function FormulesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 z-0 pt-16">
          <Image
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445"
            alt="Nos Formules - Le Cadre"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-fredoka mb-4">
                Nos Formules
              </h1>
              <h2 className="text-2xl md:text-3xl font-comfortaa mb-6 text-orange-300">
                Solutions Sur Mesure
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Des solutions de restauration adaptées à vos besoins, que vous soyez une entreprise ou un particulier. 
                Découvrez nos formules flexibles et économiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#entreprises" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-base w-full sm:w-[240px] h-[60px] border-2 border-white hover:border-gray-200 flex items-center justify-center font-comfortaa font-bold px-4">
                    Entreprises 🏢
                  </Button>
                </Link>
                <Link href="#particuliers" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-secondary/5 backdrop-blur-sm hover:bg-secondary/20 text-base w-full sm:w-[240px] h-[60px] border-2 border-white hover:border-white text-white hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 font-comfortaa px-4"
                  >
                     Particuliers 👤
                   </Button>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="entreprises">
        <FormulasSection />
      </div>
      <div id="particuliers">
        <IndividualFormulasSection />
      </div>
      <CTASection />
    </div>
  );
}