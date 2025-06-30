import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ClientNeeds } from '../types/ClientNeedsTypes';
import { CUISINE_PREFERENCES, DIETARY_RESTRICTIONS } from '../constants/ClientNeedsConstants';
import { handleArrayToggle } from '../utils/ClientNeedsUtils';

interface PreferencesStepProps {
  clientNeeds: ClientNeeds;
  setClientNeeds: (needs: ClientNeeds) => void;
  onArrayToggle: (field: keyof ClientNeeds, value: string) => void;
  errors: Record<string, string>;
}

export default function PreferencesStep({ clientNeeds, setClientNeeds, onArrayToggle, errors }: PreferencesStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Label className="text-lg font-semibold text-gray-800">Vos préférences culinaires 🍽️</Label>
        <p className="text-sm text-gray-600 mt-1">Aidez-nous à personnaliser vos repas</p>
      </div>

      <div className="space-y-4">
        <Label className="text-base font-medium text-gray-700">Types de cuisine préférés (sélection multiple)</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CUISINE_PREFERENCES.map((cuisine) => (
            <Card
              key={cuisine.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                clientNeeds.cuisinePreferences.includes(cuisine.id)
                  ? 'border-[#006464] bg-[#006464]/5 shadow-md'
                  : 'border-gray-200 hover:border-[#006464]/50'
              }`}
              onClick={() => onArrayToggle('cuisinePreferences', cuisine.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{cuisine.icon}</div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-sm mb-1 ${
                      clientNeeds.cuisinePreferences.includes(cuisine.id) ? 'text-[#006464]' : 'text-gray-800'
                    }`}>
                      {cuisine.name}
                    </h3>
                    <p className="text-xs text-gray-600">{cuisine.description}</p>
                  </div>
                  <Checkbox
                    checked={clientNeeds.cuisinePreferences.includes(cuisine.id)}
                    onChange={() => {}}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {errors.cuisinePreferences && (
          <p className="text-red-500 text-sm text-center">⚠️ {errors.cuisinePreferences}</p>
        )}
      </div>

      <div className="space-y-4">
        <Label className="text-base font-medium text-gray-700">Restrictions alimentaires (optionnel)</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {DIETARY_RESTRICTIONS.map((restriction) => (
            <div
              key={restriction.id}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-sm ${
                clientNeeds.dietaryRestrictions.includes(restriction.id)
                  ? 'border-[#006464] bg-[#006464]/5 text-[#006464]'
                  : 'border-gray-200 hover:border-[#006464]/50'
              }`}
              onClick={() => onArrayToggle('dietaryRestrictions', restriction.id)}
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={clientNeeds.dietaryRestrictions.includes(restriction.id)}
                  onChange={() => {}}
                />
                <span className="text-sm font-medium">{restriction.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="allergies" className="text-base font-medium text-gray-700">
          Allergies alimentaires spécifiques (optionnel) 🚨
        </Label>
        <Input
          id="allergies"
          value={clientNeeds.allergies}
          onChange={(e) => setClientNeeds({ ...clientNeeds, allergies: e.target.value })}
          placeholder="Ex: Arachides, fruits de mer, etc."
          className="h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] border-gray-300"
        />
        <p className="text-xs text-gray-500">
          Précisez toute allergie importante pour que nous puissions adapter nos plats
        </p>
      </div>
    </div>
  );
}