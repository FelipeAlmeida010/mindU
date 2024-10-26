// src/frontend/components/Suggestions.jsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const suggestionsData = [
  "Pratique exercícios físicos regularmente.",
  "Tire um tempo para meditar ou respirar profundamente.",
  "Mantenha uma alimentação saudável e balanceada.",
  "Durma bem e respeite seu ciclo de sono.",
  "Estabeleça metas e prioridades diárias.",
  "Conecte-se com amigos e familiares.",
  "Dedique tempo a atividades que você ama.",
  "Evite comparações com os outros.",
  "Aprenda a dizer não quando necessário.",
  "Busque ajuda profissional se necessário.",
];

const Suggestions = () => {
  return (
    <View style={styles.container}>
      {suggestionsData.map((suggestion, index) => (
        <View key={index} style={styles.bubble}>
          <Text style={styles.bubbleText}>{suggestion}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  bubble: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 1,
  },
  bubbleText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Suggestions;
