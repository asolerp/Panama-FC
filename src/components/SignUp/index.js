import React from 'react'
import { Text } from 'react-native'
import userInput from '../../hooks/userInput'
import { Input, FormWrapper, Button } from './styles'

// import { withFirebase } from '../Firebase'

// function SignUpPage() {
//   return <SignUpForm />
// }

export default function SignUpFormBase() {
  const email = userInput('')
  const password = userInput('')
  return (
    <FormWrapper>
      <Text>{email.value}</Text>
      <Input {...email} />
      <Input {...password} />
      <Button title="Registrarse" accessibilityLabel="Learn more about this purple button" />
    </FormWrapper>
  )
}

// const SignUpForm = withFirebase(SignUpFormBase)
