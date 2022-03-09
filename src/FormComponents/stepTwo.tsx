import React, { useState } from 'react'
import {Container, ContainerInput, Input, Label} from './styles'

const TwoStep = () => {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  return (
    <Container>
      <div>
        <ContainerInput>
          <Label>Email</Label>
          <Input
            placeholder='test@mailbox.com'
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoFocus
          />
        </ContainerInput>
      </div>
      <div>
        <ContainerInput>
          <Label>Confirme seu e-mail</Label>
          <Input
            placeholder='Confirme seu e-mail'
            type='email'
            onChange={e => setEmailConfirm(e.target.value)}
            value={emailConfirm}
          />
        </ContainerInput>
      </div>
    </Container>
  )
}

export default TwoStep;