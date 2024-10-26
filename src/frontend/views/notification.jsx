// src/frontend/views/Notification.jsx
import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

const Notification = ({ navigation }) => {
  const notifications = [
    "Você teve um ótimo desempenho na última semana!",
    "Tente meditar 10 minutos por dia para melhorar seu bem-estar.",
    "Lembre-se de fazer pausas regulares durante os estudos.",
    // Adicione mais notificações conforme necessário
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
      <ScrollView>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationBox}>
            <Text style={styles.notificationText}>{notification}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  notificationBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  notificationText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#483D8B',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Notification;
