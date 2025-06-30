'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight,
  faArrowLeft,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

// Import types and constants
import { ClientNeedsFormProps, ClientNeeds, Step } from './types/ClientNeedsTypes';
import { defaultClientNeeds } from './constants/ClientNeedsConstants';
import { validateStep, formatWhatsAppMessage } from './utils/ClientNeedsUtils';

// Import step components
import PersonalInfoStep from './steps/PersonalInfoStep';
import ServiceTypeStep from './steps/ServiceTypeStep';
import DetailsStep from './steps/DetailsStep';
import PreferencesStep from './steps/PreferencesStep';
import ServicesStep from './steps/ServicesStep';
import AdditionalInfoStep from './steps/AdditionalInfoStep';
import SummaryStep from './steps/SummaryStep';

const STEPS: Step[] = [
  { id: '1', title: 'Informations personnelles', icon: '👤' },
  { id: '2', title: 'Type de service', icon: '🍽️' },
  { id: '3', title: 'Détails spécifiques', icon: '📋' },
  { id: '4', title: 'Préférences culinaires', icon: '❤️' },
  { id: '5', title: 'Services et budget', icon: '⭐' },
  { id: '6', title: 'Informations supplémentaires', icon: '💬' },
  { id: '7', title: 'Récapitulatif', icon: '✅' }
];

export default function ClientNeedsForm({ isOpen, onClose }: ClientNeedsFormProps) {
  const [currentStep, setCurrentStep] = useState('1');
  const [clientNeeds, setClientNeeds] = useState<ClientNeeds>(defaultClientNeeds);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep('1');
      setClientNeeds(defaultClientNeeds);
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleArrayToggle = (field: keyof ClientNeeds, value: string) => {
    setClientNeeds(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const nextStep = () => {
    const stepErrors = validateStep(parseInt(currentStep) - 1, clientNeeds);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    
    setErrors({});
    const currentStepNum = parseInt(currentStep);
    if (currentStepNum < STEPS.length) {
      setCurrentStep((currentStepNum + 1).toString());
    }
  };

  const prevStep = () => {
    const currentStepNum = parseInt(currentStep);
    if (currentStepNum > 1) {
      setCurrentStep((currentStepNum - 1).toString());
      setErrors({});
    }
  };

  const handleClose = () => {
    setCurrentStep('1');
    setClientNeeds(defaultClientNeeds);
    setErrors({});
    setIsSubmitting(false);
    onClose();
  };

  const handleSubmit = async () => {
    const stepErrors = validateStep(parseInt(currentStep) - 1, clientNeeds);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const message = formatWhatsAppMessage(clientNeeds);
      const whatsappUrl = `https://wa.me/+221771595352?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case '1':
        return (
          <PersonalInfoStep
            clientNeeds={clientNeeds}
            setClientNeeds={setClientNeeds}
            errors={errors}
          />
        );
      case '2':
        return (
          <ServiceTypeStep
            clientNeeds={clientNeeds}
            setClientNeeds={setClientNeeds}
            errors={errors}
          />
        );
      case '3':
        return (
          <DetailsStep
            clientNeeds={clientNeeds}
            setClientNeeds={setClientNeeds}
            errors={errors}
          />
        );
      case '4':
        return (
          <PreferencesStep
            clientNeeds={clientNeeds}
            setClientNeeds={setClientNeeds}
            onArrayToggle={handleArrayToggle}
            errors={errors}
          />
        );
      case '5':
        return (
          <ServicesStep
            clientNeeds={clientNeeds}
            setClientNeeds={setClientNeeds}
            onArrayToggle={handleArrayToggle}
            errors={errors}
          />
        );
      case '6':
        return (
          <AdditionalInfoStep
            clientNeeds={clientNeeds}
            setClientNeeds={setClientNeeds}
            errors={errors}
          />
        );
      case '7':
        return <SummaryStep clientNeeds={clientNeeds} />;
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    const step = STEPS.find(s => s.id === currentStep);
    return step ? `${step.icon} ${step.title}` : '';
  };

  const isLastStep = parseInt(currentStep) === STEPS.length;
  const isFirstStep = currentStep === '1';

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#006464]">
            {getStepTitle()}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
           <div className="flex justify-between items-center mb-2">
             <span className="text-sm text-gray-600">Étape {currentStep} sur {STEPS.length}</span>
             <span className="text-sm text-gray-600">{Math.round((parseInt(currentStep) / STEPS.length) * 100)}%</span>
           </div>
           <div className="w-full bg-gray-200 rounded-full h-2">
             <div 
               className="bg-gradient-to-r from-[#006464] to-[#008080] h-2 rounded-full transition-all duration-300 ease-out"
               style={{ width: `${(parseInt(currentStep) / STEPS.length) * 100}%` }}
             />
           </div>
         </div>

        {/* Step Content */}
        <div className="min-h-[400px]">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6 border-t">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={isFirstStep}
            className="flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Précédent
          </Button>

          <div className="flex gap-2">
             {STEPS.map((step) => (
               <div
                 key={step.id}
                 className={`w-3 h-3 rounded-full transition-all duration-200 ${
                   step.id === currentStep
                     ? 'bg-[#006464] scale-125'
                     : parseInt(step.id) < parseInt(currentStep)
                     ? 'bg-[#008080]'
                     : 'bg-gray-300'
                 }`}
               />
             ))}
           </div>

          {isLastStep ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Envoi...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCheck} />
                  Envoyer la demande
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-[#006464] hover:bg-[#005454] text-white flex items-center gap-2"
            >
              Suivant
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}