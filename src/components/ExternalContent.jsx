import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

// Lista de vídeos do YouTube e e-books
const content = {
  videos: [
    { id: '1', title: 'Relaxamento Guiado para Mente', url: 'https://www.youtube.com/watch?v=example1' },
    { id: '2', title: 'Meditação para Ansiedade', url: 'https://www.youtube.com/watch?v=example2' },
    { id: '3', title: 'Exercício de Respiração', url: 'https://www.youtube.com/watch?v=example3' },
  ],
  ebooks: [
    { id: '1', title: 'E-book de Meditação para Iniciantes', url: 'https://www.example.com/ebook1' },
    { id: '2', title: 'Mindfulness para o Dia a Dia', url: 'https://www.example.com/ebook2' },
    { id: '3', title: 'Reduza o Estresse com Simples Práticas', url: 'https://www.example.com/ebook3' },
  ],
};

// Função para abrir links
const openLink = (url) => {
  Linking.openURL(url);
};

const ExternalContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Vídeos Recomendados</Text>
      <FlatList
        data={content.videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openLink(item.url)} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.headerText}>E-books Recomendados</Text>
      <FlatList
        data={content.ebooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openLink(item.url)} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  itemText: {
    color: '#483D8B',
    fontSize: 16,
  },
});

export default ExternalContent;
