import React, { useState } from 'react'
import {Container, ContainerInput, Input, Label, LineAcept} from './styles'


const FourStep: React.FC = () => {
  const [checked, setChecked] = useState<any>(false)

  return (
    <Container>
      <div>
        <ContainerInput>
          <span>Ao clicar em "Aceitar", concordo que:</span>
          <ul>
            <LineAcept>
              Li e aceito o <a href='/'>User Agreement</a>
            </LineAcept>
            <LineAcept>
              Li e aceito o <a href='/'>Privacy Policy</a>
            </LineAcept>
            <LineAcept>Eu tenho mais de 18 anos!</LineAcept>
          </ul>
          <Label>
            <Input
              type='checkbox'
              checked={checked}
              onChange={e => setChecked(e.target.value)}
              autoFocus
            />
            <span>Aceitar</span>{' '}
          </Label>
          <button
            type='submit'
            style={{padding: '10px 20px', margin: '10px'}}
          >
            Enviar
          </button>
        </ContainerInput>
      </div>
    </Container>
  )
}

export default FourStep;