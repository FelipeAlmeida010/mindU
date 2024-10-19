import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function Index({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Adicionando a imagem da logomarca com o caminho atualizado */}
      <Image source={require('../../../src/assets/Logo-02.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao mindU</Text>
      <ActivityIndicator size="large" color="#00bfff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150, // Ajuste a largura da imagem conforme necessário
    height: 150, // Ajuste a altura da imagem conforme necessário
    marginBottom: 20, // Espaço entre a logomarca e o texto
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
