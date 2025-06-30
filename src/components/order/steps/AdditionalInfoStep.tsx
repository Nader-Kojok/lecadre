import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ClientNeeds } from '../types/ClientNeedsTypes';

interface AdditionalInfoStepProps {
  clientNeeds: ClientNeeds;
  setClientNeeds: (needs: ClientNeeds) => void;
  errors: Record<string, string>;
}

export default function AdditionalInfoStep({ clientNeeds, setClientNeeds, errors }: AdditionalInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Label className="text-lg font-semibold text-gray-800">Informations supplémentaires 💬</Label>
        <p className="text-sm text-gray-600 mt-1">Aidez-nous à mieux vous servir avec ces derniers détails</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialRequests" className="text-base font-medium text-gray-700">
          Demandes spéciales ou commentaires (optionnel) ✨
        </Label>
        <textarea
          id="specialRequests"
          value={clientNeeds.specialRequests}
          onChange={(e) => setClientNeeds({ ...clientNeeds, specialRequests: e.target.value })}
          placeholder="Décrivez toute demande particulière, thème spécial, contraintes logistiques, etc."
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] focus:border-[#006464] resize-none"
        />
        <p className="text-xs text-gray-500">
          Exemple: "Thème tropical", "Accès difficile pour livraison", "Invités avec mobilité réduite", etc.
        </p>
      </div>

      <div className="space-y-4">
        <Label className="text-base font-medium text-gray-700">Expérience avec Le Cadre</Label>
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Checkbox
            id="previousExperience"
            checked={clientNeeds.previousExperience}
            onCheckedChange={(checked) => 
              setClientNeeds({ ...clientNeeds, previousExperience: checked as boolean })
            }
          />
          <Label htmlFor="previousExperience" className="text-sm cursor-pointer">
            J'ai déjà fait appel aux services du Cadre auparavant 🤝
          </Label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="referralSource" className="text-base font-medium text-gray-700">
          Comment avez-vous entendu parler de nous ? (optionnel) 📢
        </Label>
        <Input
          id="referralSource"
          value={clientNeeds.referralSource}
          onChange={(e) => setClientNeeds({ ...clientNeeds, referralSource: e.target.value })}
          placeholder="Ex: Recommandation d'un ami, réseaux sociaux, Google, etc."
          className="h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] border-gray-300"
        />
        <p className="text-xs text-gray-500">
          Cette information nous aide à améliorer notre communication et à remercier ceux qui nous recommandent
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-1">Conseil</h3>
            <p className="text-sm text-blue-700">
              Plus vous nous donnez de détails, mieux nous pourrons personnaliser notre proposition 
              et vous offrir une expérience exceptionnelle !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}