import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import HelloMessage from './src/components/HelloMessage';
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <HelloMessage />
      <LoginForm />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
