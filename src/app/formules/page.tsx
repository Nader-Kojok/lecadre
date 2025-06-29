import { FormulasSection } from '@/components/sections/FormulasSection';
import { IndividualFormulasSection } from '@/components/sections/IndividualFormulasSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: "Nos Formules - Le Cadre Traiteur",
  description: "Découvrez nos formules entreprises et particuliers adaptées à vos besoins. Restauration professionnelle à Dakar.",
};

export default function FormulesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-fredoka mb-6">
            Nos Formules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Des solutions de restauration adaptées à vos besoins, que vous soyez une entreprise ou un particulier.
          </p>
        </div>
      </div>
      <FormulasSection />
      <IndividualFormulasSection />
      <CTASection />
    </div>
  );
}