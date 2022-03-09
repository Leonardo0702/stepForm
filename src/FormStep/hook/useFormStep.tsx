import { createContext, useContext, useState } from 'react';

interface IFormStepContextProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    disableNext: boolean;
    setDisableNext: React.Dispatch<React.SetStateAction<boolean>>;
    disablePreview: boolean;
    setDisablePreview: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormStepContext = createContext<IFormStepContextProps>(
    {} as IFormStepContextProps
);

const FormStepProvider: React.FC = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [disableNext, setDisableNext] = useState(false);
    const [disablePreview, setDisablePreview] = useState(false);
    return (
      <FormStepContext.Provider
        value={{
          currentStep,
          disableNext,
          disablePreview,
          setCurrentStep,
          setDisableNext,
          setDisablePreview,
        }}
      >
        {children}
      </FormStepContext.Provider>
    );
  };
  
  const useFormStep = () => {
    const context = useContext(FormStepContext);
  
    return context;
  };
  
  export { useFormStep, FormStepProvider };