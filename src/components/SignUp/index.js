import React, { useContext, useState } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'
import userInput from '../../hooks/userInput'
import { Input, FormWrapper, Button } from './styles'

import { FirebaseContext } from '../../../FirebaseContext'

const SignUpForm = () => {
  const firebase = useContext(FirebaseContext)
  const auth = firebase.auth()
  const [fberror, setFberror] = useState()
  const [user, initialising, error] = useAuthState(auth)
  const email = userInput('')
  const password = userInput('')

  const handleLogout = () => {
    auth.signOut()
  }

  const handleSignUp = async () => {
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value)
    } catch (err) {
      setFberror(err.message)
    }
  }

  const Error = () => {
    return <Text>{fberror}</Text>
  }

  return (
    <FormWrapper>
      {initialising && <ActivityIndicator size="large" color="#0000ff" />}
      <Text>{email.value}</Text>
      <Input {...email} />
      <Input {...password} />
      <Button
        title="Login"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => handleSignUp()}
      />
      <Button
        title="Logout"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => handleLogout()}
      />
      {fberror && <Error />}
      {user && <Text>Current user: {user.email}</Text>}
    </FormWrapper>
  )
}

export default SignUpForm
