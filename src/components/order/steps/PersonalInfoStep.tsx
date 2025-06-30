import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClientNeeds } from '../types/ClientNeedsTypes';

interface PersonalInfoStepProps {
  clientNeeds: ClientNeeds;
  setClientNeeds: (needs: ClientNeeds) => void;
  errors: Record<string, string>;
}

export default function PersonalInfoStep({ clientNeeds, setClientNeeds, errors }: PersonalInfoStepProps) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-gray-600">Quelques informations pour mieux vous connaître</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-medium text-gray-700">Comment vous appelez-vous ? 😊</Label>
          <Input
            id="name"
            value={clientNeeds.name}
            onChange={(e) => setClientNeeds({ ...clientNeeds, name: e.target.value })}
            placeholder="Votre nom complet"
            className={`h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm flex items-center gap-1">⚠️ {errors.name}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium text-gray-700">Votre adresse email 📧</Label>
          <Input
            id="email"
            type="email"
            value={clientNeeds.email}
            onChange={(e) => setClientNeeds({ ...clientNeeds, email: e.target.value })}
            placeholder="votre@email.com"
            className={`h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm flex items-center gap-1">⚠️ {errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-medium text-gray-700">Votre numéro de téléphone 📱</Label>
          <Input
            id="phone"
            value={clientNeeds.phone}
            onChange={(e) => setClientNeeds({ ...clientNeeds, phone: e.target.value })}
            placeholder="+221 XX XXX XX XX"
            className={`h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#006464] ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm flex items-center gap-1">⚠️ {errors.phone}</p>}
        </div>
      </div>
    </div>
  );
}