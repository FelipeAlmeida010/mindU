// src/frontend/views/TherapyRoom.jsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MindUTherapistChat from '../../components/MindUTherapistChat';

const TherapyRoom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sala de Terapia mindU</Text>
      <MindUTherapistChat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#483D8B',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default TherapyRoom;
