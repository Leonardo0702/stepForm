interface IStepsComponentsProps {
    stepsComponents: {
      title: string;
      component: JSX.Element;
    }[];
}

// MultiForm
export interface IMultiFormStepProps extends IStepsComponentsProps {}

// Component
export interface IStepComponentProps extends IStepsComponentsProps {}

// Header
export interface IStepProgressProps extends IStepsComponentsProps{}

// Content
export interface IStepContentProps extends IStepsComponentsProps{}

//Footer
export interface IStepButtonsProps extends IStepsComponentsProps{}
  