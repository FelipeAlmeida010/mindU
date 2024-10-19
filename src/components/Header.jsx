import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Certifique-se de que este pacote está instalado

const Header = ({ onProfilePress }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao mindU</Text>
    
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="search" size={24} color="#aaa" />
      </TouchableOpacity>
      <TextInput 
        style={styles.searchInput} 
        placeholder="Buscar..." 
        placeholderTextColor="#aaa" 
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="notifications" size={24} color="#483D8B" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={onProfilePress}>
        <Icon name="person" size={24} color="#483D8B" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    // Adicionando sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // Para Android
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default Header;
