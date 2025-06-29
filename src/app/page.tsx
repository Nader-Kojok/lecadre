import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ProblemsSection } from '@/components/sections/ProblemsSection';
import { SpecialtiesSection } from '@/components/sections/SpecialtiesSection';
import { FormulasSection } from '@/components/sections/FormulasSection';
import { IndividualFormulasSection } from '@/components/sections/IndividualFormulasSection';
import { CTASection } from '@/components/sections/CTASection';
import { SupportSection } from '@/components/sections/SupportSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProblemsSection />
      <SpecialtiesSection />
      <FormulasSection />
      <IndividualFormulasSection />
      <SupportSection />
      <CTASection />
    </div>
  );
}
