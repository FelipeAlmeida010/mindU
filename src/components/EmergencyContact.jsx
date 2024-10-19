import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const EmergencyContact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato de Emergência</Text>
      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Número" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default EmergencyContact;
