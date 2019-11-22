import React from 'react'
import { Alert, Text } from 'react-native'
import userInput from '../../hooks/userInput'
import { Input, FormWrapper, Button } from './styles'

import { withFirebase } from '../Firebase'

const SignUpFormBase = props => {
  console.log(props)
  const email = userInput('')
  const password = userInput('')

  const {
    firebase: { doCreateUserWithEmailAndPassword },
  } = props

  const onSubmit = () => doCreateUserWithEmailAndPassword(email.value, password.value)

  return (
    <FormWrapper>
      <Text>{email.value}</Text>
      <Input {...email} />
      <Input {...password} />
      <Button
        title="Registrarse"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => onSubmit()}
      />
    </FormWrapper>
  )
}

const SignUpForm = withFirebase(SignUpFormBase)

export default function SignUpPage() {
  return <SignUpForm />
}
