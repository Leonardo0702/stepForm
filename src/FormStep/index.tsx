import React from "react";
import StepComponent from "./StepComponent";

import { IMultiFormStepProps } from "./types/formTypes";

// O MultiFormStep deve estar envolto em um Provider = FormStepProvider.

const MultiFormStep: React.FC<IMultiFormStepProps> = ({ stepsComponents }) => {
  return <StepComponent stepsComponents={stepsComponents} />;
};

export default MultiFormStep;
