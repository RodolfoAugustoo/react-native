import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './src/componentes/Simples';
import ParImpar from './src/componentes/ParImpar';

const App = () => {
  return (
    <View style={styles.container}>
      <Simples texto="Flexível" />
      <ParImpar numero={33} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
