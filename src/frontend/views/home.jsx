import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'; // Ajuste o caminho conforme necessário

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header onProfilePress={() => navigation.navigate('Perfil')} />
      {/* O restante do seu conteúdo da tela Home */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Home;
