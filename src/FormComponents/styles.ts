import styled, { css } from 'styled-components';

interface IlineProps {
  className?: any;
}

export const Todo = css`
    &:before {
    content: "\u039F";
    color: silver;
    background-color: white;
  }
`
export const Doing = css`
    &:before {
    content: "\u2022";
    color: white;
    background-color: #33C3F0;  
  }
`
export const Done = css`
    &:before {
    content: "\u2713";
    color: white;
    background-color: #33C3F0;  
  }
`
export const ContainerFormStep = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  background-color: #c5c5c5;
  max-width: 50%;
`;

export const ContainerMultiStep = styled.div`
`;

export const Line = styled.li<IlineProps>`
  ${props => props.className}
  display: inline-block;
  text-align: center;
  line-height: 4.8rem;
  padding: 0 0.7rem;
  cursor: pointer;
  color: silver;
  border-bottom: 2px solid silver;
  &:hover,
  &:before {
    color: #0FA0CE;
  }
  &:after {
    content: "\\00a0\\00a0";
  }   
  span {
    padding: 0 1.5rem;
  }
  &:before {
    position: relative;
    float: left;
    left: 50%;
    width: 1.2em;
    line-height: 1.4em;
    border-radius: 0;
    bottom: -3.99rem;
  }
`;

export const OrderLine = styled.ol`
  margin: 0;
  padding-bottom: 2.2rem;
  list-style-type: none;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px 30px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 18px;
  margin: 10px;
`;

export const Button = styled.button`
  margin: 20px;
  padding: 5px 10px;
  color: white;
  font-size: 18px;
`;

export const LineAcept = styled.li`
  list-style-type: none;
  font-size: 18px;
`;
