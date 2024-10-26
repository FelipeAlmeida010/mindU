// src/frontend/components/PerformanceMonitor.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // ou a biblioteca que você estiver usando

const PerformanceMonitor = () => {
  return (
    <View style={styles.container}>
      {/* Bonequinho representando o progresso */}
      <Icon name="directions-walk" size={100} color="#483D8B" />
      
      {/* Ícone representando o circuito ou progresso */}
      <Icon name="show-chart" size={100} color="#483D8B" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PerformanceMonitor;
