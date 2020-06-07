import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './src/componentes/Simples';
import ParImpar from './src/componentes/ParImpar';
import { Inverter, MegaSena } from './src/componentes/Multi';

const App = () => {
  return (
    <View style={styles.container}>
      <Simples texto="Flexível" />
      <ParImpar numero={36} />
      <Inverter texto='Rodolfo Augusto' />
      <MegaSena numeros={5} />
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
