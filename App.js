import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'

import HelloMessage from './src/components/HelloMessage'
import SignUpPage from './src/components/SignUp'

import Firebase, { FirebaseContext } from './src/components/Firebase'

function Application() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <HelloMessage />
      <SignUpPage />
    </KeyboardAvoidingView>
  )
}

export default function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Application />
    </FirebaseContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
