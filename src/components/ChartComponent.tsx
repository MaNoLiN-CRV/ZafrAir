
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
  interpolateColor, 
  Easing
} from 'react-native-reanimated';

export interface ACStatsProps {
  historicalData: Data[];
  currentTemp: number;
  currentHumidity: number;
  isRunning: boolean;
  mode: 'cool' | 'warm';
  targetTemp: number;
}
interface Data {
  time: string;
  temperature: number;
  humidity: number;
}

const { width } = Dimensions.get('window');

const AComponent = ({
  historicalData = [],
  currentTemp = 0,
  currentHumidity = 0,
  isRunning = false,
  mode = 'cool',
  targetTemp = 24
}: ACStatsProps) => {
 
  const tempValue = useSharedValue(currentTemp);
  const runningValue = useSharedValue(isRunning ? 1 : 0);
  const containerScaleValue = useSharedValue(1);

  useEffect(() => {

    tempValue.value = withTiming(currentTemp, {
      duration: 3000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1)
    });

    runningValue.value = withTiming(isRunning ? 1 : 0, {
      duration: 3000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1)
    });

    containerScaleValue.value = withTiming(1.1, {
      duration: 2000,
      easing: Easing.elastic(1.2)
    }, () => {
      containerScaleValue.value = withTiming(1, {
        duration: 2000,
        easing: Easing.elastic(1.2)
      });
    });
  }, [currentTemp, isRunning]);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        runningValue.value,
        [0, 1],
        ['#f5f5f5', '#e6f7ef']
      ),
      transform: [
        { 
          scale: containerScaleValue.value
        }
      ]
    };
  });

  const tempAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          scale: withTiming(1 + Math.abs(currentTemp - targetTemp) * 0.05, {
            duration: 3000,
            easing: Easing.elastic(1)
          })
        }
      ],
      color: interpolateColor(
        runningValue.value,
        [0, 1],
        ['#666666', '#22c55e']
      )
    };
  });

  
  if (historicalData.length === 0) {
    return (
      <Animated.View style={[styles.container, styles.centeredContainer]}>
        <Text style={styles.noDataText}>No hay datos disponibles</Text>
      </Animated.View>
    );
  }

  const isCompactMode = width < 375;
  const modeColor = mode === 'cool' ? '#2196F3' : '#666666';

  return (
    <Animated.View 
      style={[
        styles.container, 
        containerAnimatedStyle,
        {
          width: '95%',
          alignSelf: 'center',
          flexDirection: isCompactMode ? 'column' : 'row'
        }
      ]}
    >
      <View 
        style={[
          styles.statsPanel, 
          { 
            width: isCompactMode ? '100%' : '60%',
            marginBottom: isCompactMode ? 10 : 0
          }
        ]}
      >
        <Text style={styles.panelTitle}>Estado Actual</Text>
        <View style={styles.statsContent}>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Temperatura:</Text>
            <Text style={styles.statValue}>
              {currentTemp}°C / Objetivo: {targetTemp}°C
            </Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Humedad:</Text>
            <Text style={styles.statValue}>{currentHumidity}%</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Estado:</Text>
            <Text style={styles.statValue}>
              {isRunning ? 'Funcionando' : 'Apagado'}
            </Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Modo:</Text>
            <Text style={[styles.statValue, { color: modeColor }]}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Text>
          </View>
        </View>
      </View>

      <Animated.View 
        style={[
          styles.indicatorPanel, 
          { 
            borderColor: modeColor, 
            borderWidth: 2,
            width: isCompactMode ? '100%' : '35%'
          }
        ]}
      >
        <Animated.Text 
          style={[
            styles.currentTempText,
            tempAnimatedStyle
          ]}
        >
          {currentTemp}°C
        </Animated.Text>
        <Text
          style={[
            styles.diffText,
            { color: modeColor }
          ]}
        >
          {Math.abs(currentTemp - targetTemp).toFixed(1)}°C de diferencia
        </Text>
      </Animated.View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    margin: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    flexDirection: 'row', 
    alignItems: 'stretch', 
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsPanel: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },
  statsContent: {
    gap: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  statValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  indicatorPanel: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  currentTempText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  diffText: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '500',
  },
  noDataText: {
    fontSize: 16,
    color: '#6b7280',
  }
});

export default AComponent;