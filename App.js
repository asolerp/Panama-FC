import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HelloMessage from './src/components/HelloMessage';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
