import React from 'react';
import { useFormStep } from '../hook/useFormStep';
import { IStepButtonsProps } from '../types/formTypes';

// import { Container } from './styles';

const StepButtons: React.FC<IStepButtonsProps> = ({
  stepsComponents
}) => {
    const {currentStep, setCurrentStep} = useFormStep()

    const handleNextStepActive = () => {
      const validateLastComponent = stepsComponents.length - 1 === currentStep;
  
      if (!validateLastComponent) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handlePreviewStepActive = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleShowNext = stepsComponents.length - 1 !== currentStep;
    const handleShowPreview = currentStep > 0;

    console.log(stepsComponents.length -1)
    console.log(currentStep)

  return (
    <div>
      {handleShowPreview &&
        <button onClick={handlePreviewStepActive}>
          Voltar
        </button> 
      }
      {handleShowNext &&
        <button onClick={handleNextStepActive}>
          Próximo
        </button>
      }
    </div>
  );
}

export default StepButtons;