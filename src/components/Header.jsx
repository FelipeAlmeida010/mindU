// src/components/Header.jsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ onProfilePress, onNotificationPress, notificationCount }) => (
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
      <TouchableOpacity style={styles.iconContainer} onPress={onNotificationPress}>
        <View style={styles.notificationContainer}>
          <Icon name="notifications" size={24} color="#483D8B" />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginLeft: 10,
    position: 'relative', // Para o badge de notificação
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Header;
