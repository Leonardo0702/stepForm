import React, { useState } from 'react'
import {Container, ContainerInput, Input, Label} from './styles'


const ThreeStep = () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <Container>
      <div>
        <ContainerInput>
          <Label>Senha</Label>
          <Input
            placeholder='Senha'
            type='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
            autoFocus
          />
        </ContainerInput>
      </div>
      <div>
        <ContainerInput>
          <Label>Confirme sua senha</Label>
          <Input
            placeholder='Confirme sua senha'
            type='password'
            onChange={e => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />
        </ContainerInput>
      </div>
    </Container>
  )
}

export default ThreeStep;