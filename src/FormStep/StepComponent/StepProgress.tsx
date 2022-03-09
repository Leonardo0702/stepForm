import React from "react";
import { useFormStep } from "../hook/useFormStep";
import { IStepProgressProps } from "../types/formTypes";
import { ContainerStepProgress, 
  MainStepProgress, 
  OrderLine, 
  Line,
  Todo, 
  Doing, 
  Done, 
} from "./styles";

const StepProgress: React.FC<IStepProgressProps> = ({ stepsComponents }) => {
  const { currentStep, setCurrentStep } = useFormStep();
  // console.log(active)

  const handleProgressLine = (index: number) => {
      if (currentStep === index) {
        return (
          <Line
            className={Doing}
          >
            <span>{index + 1}</span>
          </Line>
        )
      } else if (currentStep > index){
        return (
          <Line
            className={Done}
          >
            <span>{index + 1}</span>
          </Line>
        )
      } else {
        return (
          <Line
            className={Todo}
          >
            <span>{index + 1}</span>
          </Line>
        )
      }
    }


  return (
    <ContainerStepProgress>
      {stepsComponents.map((step, index) => (
        <div
        onClick={() => setCurrentStep(index)}
        >
          <MainStepProgress>
            {step.title}
            <OrderLine>{handleProgressLine(index)}</OrderLine>
          </MainStepProgress>
        </div>
      ))}
    </ContainerStepProgress>
  );
};

export default StepProgress;