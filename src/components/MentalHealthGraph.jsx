import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MentalHealthGraph = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saúde Mental do Usuário</Text>
      <Text style={styles.graphPlaceholder}>[Gráfico de Saúde Mental Aqui]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  graphPlaceholder: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default MentalHealthGraph;
