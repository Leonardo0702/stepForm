import React from 'react';
import { useFormStep } from '../hook/useFormStep';
import { IStepContentProps } from '../types/formTypes';
import { ContainerStepContent, MainStepContent } from './styles';

const StepContent: React.FC<IStepContentProps> = ({
    stepsComponents
}) => {
    const {currentStep} = useFormStep()
  return (
    <ContainerStepContent>
        {stepsComponents.map((step, index) => (
        <MainStepContent
            style={
            index !== currentStep
            ? {display: "none"} : {}
            }
        >
            {step.component}
        </MainStepContent>
        ))}
    </ContainerStepContent>
  );
}

export default StepContent;