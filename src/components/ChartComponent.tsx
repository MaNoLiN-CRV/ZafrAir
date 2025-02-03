import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface DataPoint {
  time: string;
  temperature: number;
  humidity: number;
}

export interface ACStatsProps {
  historicalData: DataPoint[];
  currentTemp: number;
  currentHumidity: number;
  isRunning: boolean;
  mode: 'cool' | 'heat' | 'fan';
  targetTemp: number;
}

const AComponent = ({
  historicalData = [],
  currentTemp = 0,
  currentHumidity = 0,
  isRunning = false,
  mode = 'cool',
  targetTemp = 24
}: ACStatsProps) => {

  const getModeColor = () => {
    const colors = {
      cool: '#4ECDC4',
      heat: '#FF6B6B',
      fan: '#45B7D1'
    };
    return colors[mode] || '#666666';
  };

  if (historicalData.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No hay datos disponibles</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statsPanel}>
          <Text style={styles.panelTitle}>Estado Actual</Text>
          <View style={styles.statsContent}>
            <Text>Temperatura: {currentTemp}°C / Objetivo: {targetTemp}°C</Text>
            <Text>Humedad: {currentHumidity}%</Text>
            <Text>Estado: {isRunning ? 'Funcionando' : 'Apagado'}</Text>
            <Text>Modo: {mode}</Text>
          </View>
        </View>
        <View
          style={[
            styles.indicatorPanel,
            { backgroundColor: isRunning ? '#e6f7ef' : '#f5f5f5' }
          ]}
        >
          <Text
            style={[
              styles.currentTempText,
              { color: isRunning ? '#22c55e' : '#666666' }
            ]}
          >
            {currentTemp}°C
          </Text>
          <Text
            style={[
              styles.diffText,
              { color: isRunning ? '#16a34a' : '#666666' }
            ]}
          >
            {Math.abs(currentTemp - targetTemp).toFixed(1)}°C de diferencia
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  statsPanel: {
    flex: 1,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  statsContent: {
    gap: 8,
  },
  indicatorPanel: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentTempText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  diffText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default AComponent;