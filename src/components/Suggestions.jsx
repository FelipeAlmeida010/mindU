import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const suggestionsData = [
  { id: '1', title: 'Atividade Física: Caminhada de 30 minutos' },
  { id: '2', title: 'Leitura: "O Poder do Agora"' },
  { id: '3', title: 'Meditação: 10 minutos de respiração' },
];

const Suggestions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugestões</Text>
      <FlatList
        data={suggestionsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.suggestionItem}>
            <Text style={styles.suggestionText}>{item.title}</Text>
          </View>
        )}
      />
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
  suggestionItem: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  suggestionText: {
    fontSize: 16,
  },
});

export default Suggestions;
