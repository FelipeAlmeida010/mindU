// Home.jsx

import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import MentalHealthGraph from '../../components/MentalHealthGraph';
import ExternalContent from '../../components/ExternalContent';
import Suggestions from '../../components/Suggestions';
import PerformanceMonitor from '../../components/PerformanceMonitor';

const Home = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('graph');
  const [notificationCount, setNotificationCount] = useState(3); // Exemplo fixo, pode ser dinâmico

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.2, duration: 500, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]).start(() => animate());
    };
    animate();
  }, [scaleAnim]);

  const animatedStyle = { transform: [{ scale: scaleAnim }] };

  return (
    <View style={styles.container}>
      <Header
        onProfilePress={() => navigation.navigate('Profile')}
        onNotificationPress={() => navigation.navigate('Notification')}
        notificationCount={notificationCount}
      />

      {/* Abas */}
      <View style={styles.tabContainer}>
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'graph' && styles.activeTab]}
            onPress={() => setActiveTab('graph')}
          >
            <Text style={styles.tabText}>Desempenho Mental</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'external' && styles.activeTab]}
            onPress={() => setActiveTab('external')}
          >
            <Text style={styles.tabText}>Conteúdo Externo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'performance' && styles.activeTab]}
            onPress={() => setActiveTab('performance')}
          >
            <Text style={styles.tabText}>Performance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'suggestions' && styles.activeTab]}
            onPress={() => setActiveTab('suggestions')}
          >
            <Text style={styles.tabText}>Sugestões</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdo das Abas */}
      {activeTab === 'graph' && (
        <View style={styles.contentContainer}>
          <MentalHealthGraph />
          {/* Ícone e nome "mindU Terapeuta" com navegação */}
          <TouchableOpacity
            style={styles.therapistContainer}
            onPress={() => navigation.navigate('TherapyRoom')}
          >
            <Icon name="psychology" size={24} color="#483D8B" />
            <Animated.Text style={[styles.therapistText, animatedStyle]}>
              mindU Terapeuta
            </Animated.Text>
          </TouchableOpacity>
        </View>
      )}
      {activeTab === 'external' && <ExternalContent />}
      {activeTab === 'performance' && <PerformanceMonitor />}
      {activeTab === 'suggestions' && <Suggestions />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  tabContainer: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#483D8B',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#483D8B',
  },
  therapistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  therapistText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#483D8B',
  },
});

export default Home;
