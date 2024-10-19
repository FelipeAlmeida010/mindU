import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Notificações</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Notifications;
