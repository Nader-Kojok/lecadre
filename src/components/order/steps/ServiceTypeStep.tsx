import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ClientNeeds } from '../types/ClientNeedsTypes';
import { SERVICE_TYPES } from '../constants/ClientNeedsConstants';

interface ServiceTypeStepProps {
  clientNeeds: ClientNeeds;
  setClientNeeds: (needs: ClientNeeds) => void;
  errors: Record<string, string>;
}

export default function ServiceTypeStep({ clientNeeds, setClientNeeds, errors }: ServiceTypeStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Label className="text-lg font-semibold text-gray-800">Quel type de service recherchez-vous ? 🎯</Label>
        <p className="text-sm text-gray-600 mt-1">Sélectionnez l'option qui correspond à vos besoins</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {SERVICE_TYPES.map((service) => (
          <Card 
            key={service.id}
            className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
              clientNeeds.serviceType === service.id 
                ? 'border-[#006464] bg-[#006464]/5 shadow-lg transform scale-[1.02]' 
                : 'border-gray-200 hover:border-[#006464]/50'
            }`}
            onClick={() => setClientNeeds({ ...clientNeeds, serviceType: service.id })}
          >
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{service.icon}</div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                  clientNeeds.serviceType === service.id ? 'text-[#006464]' : 'text-gray-800'
                }`}>
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              {clientNeeds.serviceType === service.id && (
                <div className="text-[#006464]">
                  <FontAwesomeIcon icon={faCheck} className="text-xl" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      {errors.serviceType && <p className="text-red-500 text-sm text-center">⚠️ {errors.serviceType}</p>}
    </div>
  );
}