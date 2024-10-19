import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ExternalContent = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conteúdos Externos</Text>
      <TouchableOpacity onPress={() => handleLinkPress('https://www.youtube.com')}>
        <Text style={styles.link}>Vídeos sobre Saúde Mental</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkPress('https://www.podcast.com')}>
        <Text style={styles.link}>Podcasts recomendados</Text>
      </TouchableOpacity>
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
  link: {
    color: '#00bfff',
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ExternalContent;
