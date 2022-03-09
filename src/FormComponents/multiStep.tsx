import React, { useEffect, useState } from 'react'
// import { useFormStep } from '../hooks/useMultiStep';
import {ContainerMultiStep, Line, OrderLine, Todo, Doing, Done, Button} from './styles'

const handleGetStep = (defaultIndex: number, newIndex: any, length: number) => {
    if(newIndex <=  length){
        return newIndex;
    }
    return defaultIndex;
  }

const handleGetHeaderStyles = (index: any, length: number)=> {
  const styles = []
  for (let i = 0; i < length; i++) {
    if (i < index) {
      styles.push('done')
    } else if (i === index) {
      styles.push('doing')
    } else {
      styles.push('todo')
    }
  }
  console.log(styles)
  return styles
}

const handleGetButtonsState = (index: any, length: number) => {
  if (index > 0 && index < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    }
  } else if (index === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    }
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    }
  }
}

interface IMultiStrpProps {
  steps: {
    component?: JSX.Element;
  }[];
  activeStep: number;
  prevStyle: {
    background?: string;
  }
  nextStyle: {
    background?: string;
  }
  activeComponentClassName?: boolean;
  inactiveComponentClassName?: any;
  showNavigation?: any;
}

const MultiStep: React.FC<IMultiStrpProps> = ({
  activeStep,
  prevStyle,
  nextStyle,
  activeComponentClassName,
  inactiveComponentClassName,
  showNavigation,
  steps,
}) => {
  // const {
  //   handleNextForm, 
  //   handlePreviousForm, 
  //   handleGetButtonsState,
  //   handleGetStep,
  //   handleGetHeaderStyles,
  //   stateCurrentPage,
  //   setStateCurrentPage,
  // } = useFormStep();

  const [activeSteps] = useState(handleGetStep(0, activeStep,  steps.length));
  const [stateCurrentPage, setStateCurrentPage] = useState(activeSteps);
  const [stateStyles, setStateStyles] = useState(handleGetHeaderStyles(activeSteps, steps.length))
  const [stateButton, setStateButton] = useState(handleGetButtonsState(activeSteps, steps.length))
  const showNav = typeof showNavigation === 'undefined' ? true : showNavigation;

  useEffect(() => {
    console.log('Index changed: ', activeStep);
    setStepState(activeStep);
  }, [activeStep]);
    
   const setStepState = (pages: any) => {
    setStateStyles(handleGetHeaderStyles(pages, steps.length))
    setStateCurrentPage(pages < steps.length ? pages : stateCurrentPage)
    setStateButton(handleGetButtonsState(pages, steps.length))
  }

  console.log(stateCurrentPage)

  const handleNextForm = () => setStepState(stateCurrentPage + 1);
  const handlePreviousForm = () => setStepState(stateCurrentPage > 0 ? stateCurrentPage - 1 : stateCurrentPage);

    const handleOnClickSteps = () => {}
  
  const handleRenderSteps = () =>
    steps.map((component:any, index: number) => {
      if (stateStyles[index] === 'todo') {
        return (
          <Line
            className={Todo}
            onClick={handleOnClickSteps}
            key={index}
            value={index}
          >
            <span>{index + 1}</span>
          </Line>
        )
      } else if (stateStyles[index] === 'doing') {
        return (
          <Line
            className={Doing}
            onClick={handleOnClickSteps}
            key={index}
            value={index}
          >
            <span>{index + 1}</span>
          </Line>
        )
      } else {
        return (
          <Line
            className={Done}
            onClick={handleOnClickSteps}
            key={index}
            value={index}
          >
            <span>{index + 1}</span>
          </Line>
        )
      }
    })

  // Condição para exibir ou não o botão, caso não haja próximo por exemplo, não será exibido.
  const handleNavigation = (show: JSX.Element) =>
    show && (
      <div style={{display: 'flex', justifyContent: 'space-between', maxWidth:'50%', margin: '0 auto'}}>
        <Button
          style={stateButton.showPreviousBtn ? prevStyle : { display: 'none' }}
          onClick={handlePreviousForm}
        >
          Voltar
        </Button>
  
        <Button
          style={stateButton.showNextBtn ? nextStyle : { display: 'none' }}
          onClick={handleNextForm}
        >
          Próximo
        </Button>
      </div>
    );

  return (
    <ContainerMultiStep>
      <OrderLine>{handleRenderSteps()}</OrderLine>
      {inactiveComponentClassName
        ? steps.map((step: any, index: any) => {
            const className = index === stateCurrentPage ? activeComponentClassName : inactiveComponentClassName
            return (<div className={className} key={index}>{step.component}</div>)
          })
        : <div>{steps[stateCurrentPage].component}</div>}
      <div>{handleNavigation(showNav)}</div>
    </ContainerMultiStep>
    );
};

  export default MultiStep;