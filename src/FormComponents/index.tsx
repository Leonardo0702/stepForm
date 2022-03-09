import React from 'react'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import StepFour from './stepFour'

import {ContainerFormStep} from './styles'
import { FormStepProvider } from '../FormStep/hook/useFormStep'
import MultiFormStep from '../FormStep'


const stepsComponents = [
  { 
    title: "Name",
    component: <StepOne /> 
  },
  { 
    title: "Email",
    component: <StepTwo /> 
  },
  { 
    title: "Password",
    component: <StepThree /> 
  },
  { 
    title: "Submit",
    component: <StepFour />
  },
]

const FormStep: React.FC = () => {
  return (
    <>
    <FormStepProvider>
      <ContainerFormStep>
       <MultiFormStep stepsComponents={stepsComponents}/>
        <div>
          <h4>Pressione 'Enter' ou clique na barra de progresso para acionar a próxima etapa.</h4>
        </div>
      </ContainerFormStep>
    </FormStepProvider>
    <FormStepProvider>
      <ContainerFormStep>
       <MultiFormStep stepsComponents={stepsComponents}/>
        <div>
          <h4>Pressione 'Enter' ou clique na barra de progresso para acionar a próxima etapa.</h4>
        </div>
      </ContainerFormStep>
    </FormStepProvider>
    </>
  ) 
};

export default FormStep;