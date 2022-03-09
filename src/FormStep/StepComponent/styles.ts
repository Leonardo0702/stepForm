import styled, { css } from 'styled-components';

// StepContent
export const ContainerStepContent = styled.div`
`;

export const MainStepContent = styled.div`
`;

// StepProgress
interface IlineProps {
    className?: any;
}

export const Todo = css`
    &:before {
    content: "?";
    color: white;
    background-color: #ADD8E6;
  }
`
export const Doing = css`
    &:before {
    content: "!"; 
    color: white;
    background-color: #FFD700;  
  }
`
export const Done = css`
    &:before {
    content: "\u2713";
    color: white;
    background-color: #32CD32;  
  }
`

export const ContainerStepProgress = styled.div`
    display: flex;
    justify-content: center;
`;

export const MainStepProgress = styled.div`
    padding-left: 15px;
    font-size: 18px;
    font-weight: bold;
`;

export const OrderLine = styled.div`
    margin: 0;
    list-style-type: none;
    margin-bottom: 1rem;
`;

export const Line = styled.li<IlineProps>`
  ${props => props.className}
  cursor: pointer;
  &:before {
    position: relative;
    float: left;
    left: 50%;
    width: 1.2em;
    border-radius: 50%;
  }
`;

// export const LineDone = styled.li<IlineProps>`
//     ${props => props.className}
//     display: inline-block;
//     background: #F5F5DC;
//     height: 20px;
//     width: 20px;
//     cursor: pointer;
//     color: #363636;
//     font-weight: bold;
//     border-radius: 50%;
// `;

