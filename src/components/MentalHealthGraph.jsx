import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MentalHealthGraph = () => {
  const [filter, setFilter] = useState('week'); // Estado para controlar o filtro

  // Dados simulados para a semana e mês
  const weeklyData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [3, 4, 2, 5, 4, 3, 5], // Exemplo de dados
      },
    ],
  };

  const monthlyData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        data: [3, 2, 4, 5, 4, 3, 5, 6, 4, 5, 6, 5, 4, 3, 4, 5, 4, 3, 2, 5, 4, 3, 4, 5, 4, 3, 2, 5, 4, 3],
      },
    ],
  };

  // Seleciona os dados com base no filtro
  const dataToDisplay = filter === 'week' ? weeklyData : monthlyData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desempenho Mental</Text>

      {/* Botões de filtro */}
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'week' && styles.activeFilter]} 
          onPress={() => setFilter('week')}
        >
          <Text style={styles.filterText}>Semana</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'month' && styles.activeFilter]} 
          onPress={() => setFilter('month')}
        >
          <Text style={styles.filterText}>Mês</Text>
        </TouchableOpacity>
      </View>

      {/* Gráfico */}
      <LineChart
        data={dataToDisplay}
        width={350} // Ajuste conforme necessário
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  activeFilter: {
    backgroundColor: '#483D8B', // Cor para o filtro ativo
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MentalHealthGraph;
