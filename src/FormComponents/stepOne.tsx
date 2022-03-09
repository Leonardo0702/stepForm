import React, { useState } from 'react'
import {Container, ContainerInput, Input, Label} from './styles'

const OneStep = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <Container>
      <div>
        <ContainerInput>
          <Label>Primeiro nome</Label>
          <Input
            placeholder='Primeiro Nome'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </ContainerInput>
      </div>
      <div>
        <ContainerInput>
          <Label>Último nome</Label>
          <Input
            placeholder='Último nome'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </ContainerInput>
      </div>
    </Container>
  )
}

export default OneStep;