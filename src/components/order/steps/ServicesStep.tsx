import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ClientNeeds } from '../types/ClientNeedsTypes';
import { SERVICES, BUDGET_RANGES } from '../constants/ClientNeedsConstants';
import { handleArrayToggle } from '../utils/ClientNeedsUtils';

interface ServicesStepProps {
  clientNeeds: ClientNeeds;
  setClientNeeds: (needs: ClientNeeds) => void;
  onArrayToggle: (field: keyof ClientNeeds, value: string) => void;
  errors: Record<string, string>;
}

export default function ServicesStep({ clientNeeds, setClientNeeds, onArrayToggle, errors }: ServicesStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Label className="text-lg font-semibold text-gray-800">Services additionnels ⭐</Label>
        <p className="text-sm text-gray-600 mt-1">Personnalisez votre expérience avec nos services complémentaires</p>
      </div>

      <div className="space-y-4">
        <Label className="text-base font-medium text-gray-700">Services souhaités (sélection multiple)</Label>
        <div className="grid grid-cols-1 gap-3">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-md border-2 relative ${
                clientNeeds.services.includes(service.id)
                  ? 'border-[#006464] bg-[#006464]/5 shadow-md'
                  : 'border-gray-200 hover:border-[#006464]/50'
              }`}
              onClick={() => onArrayToggle('services', service.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-semibold ${
                        clientNeeds.services.includes(service.id) ? 'text-[#006464]' : 'text-gray-800'
                      }`}>
                        {service.name}
                      </h3>
                      {service.popular && (
                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                          Populaire
                        </span>
                      )}
                      {service.premium && (
                        <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                  <Checkbox
                    checked={clientNeeds.services.includes(service.id)}
                    onChange={() => {}}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-base font-medium text-gray-700">Budget approximatif 💰</Label>
        <div className="grid grid-cols-1 gap-3">
          {BUDGET_RANGES.map((budget) => (
            <Card
              key={budget.id}
              className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                clientNeeds.budget === budget.id
                  ? 'border-[#006464] bg-[#006464]/5 shadow-md'
                  : 'border-gray-200 hover:border-[#006464]/50'
              }`}
              onClick={() => setClientNeeds({ ...clientNeeds, budget: budget.id })}
            >
              <div className="flex items-center justify-between">
                <span className={`font-medium ${
                  clientNeeds.budget === budget.id ? 'text-[#006464]' : 'text-gray-800'
                }`}>
                  {budget.name}
                </span>
                {clientNeeds.budget === budget.id && (
                  <div className="w-4 h-4 bg-[#006464] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        {errors.budget && <p className="text-red-500 text-sm text-center">⚠️ {errors.budget}</p>}
        <p className="text-xs text-gray-500 text-center">
          Ce budget nous aide à vous proposer les meilleures options adaptées à vos moyens
        </p>
      </div>
    </div>
  );
}