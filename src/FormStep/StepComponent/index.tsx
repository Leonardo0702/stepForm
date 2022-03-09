import React from 'react';
import { IStepComponentProps } from '../types/formTypes';
import StepButtons from './StepButtons';
import StepContent from './StepContent';
import StepProgress from './StepProgress';

const StepComponent: React.FC<IStepComponentProps> = ({
  stepsComponents,
}) => {

  return (
    <div>
      <StepProgress stepsComponents={stepsComponents} />
      <StepContent stepsComponents={stepsComponents}/>
      <StepButtons stepsComponents={stepsComponents} />
    </div>
  );
}

export default StepComponent;