import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  interpolateColor
} from 'react-native-reanimated';
import { styles } from './styles/ACStatusStyle';
import ACStatus from '../entities/ACStatus';


export const COLORS = {
  cool: '#2196F3',
  warm: '#FF9800',
  background: '#ffffff',
  text: '#333333',
  subtext: '#6b7280',
  border: '#e5e7eb',
};

const { width } = Dimensions.get('window');
const warmTemp = 20;

const AComponent = ({
  historicalData = [],
  currentTemp = 0,
  currentHumidity = 0,
  isRunning = false,
  mode = 'cool',
  targetTemp = 24
}: ACStatus) => {
  const animationConfig = {
    duration: 3000,
  };

  const runningValue = useSharedValue(isRunning ? 1 : 0);
  const tempDiff = Math.abs(currentTemp - targetTemp);

  useEffect(() => {
    runningValue.value = withTiming(isRunning ? 1 : 0, animationConfig);
  }, [isRunning]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      runningValue.value,
      [0, 1],
      ['#ffffff', mode === 'cool' ? '#f0f7ff' : '#fff7f0']
    )
  }));

  const calculateColorCurrentTemp = (value: number) => {
    'worklet';
    if (value < warmTemp) {
      return COLORS.cool;
    }
    return COLORS.warm;
  };

  const tempAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ 
      scale: withTiming(1 + (tempDiff * 0.02), animationConfig)
    }],
    color: calculateColorCurrentTemp(currentTemp)
  
  }));

  const isCompactMode = width < 375;
  const modeColor = mode === 'cool' ? COLORS.cool : COLORS.warm;

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <View style={[
        styles.statsPanel, 
        { width: isCompactMode ? '100%' : '60%' }
      ]}>
        <Text style={styles.panelTitle}>Estado Actual</Text>
        <View style={styles.statsContent}>
          <StatRow label="Temperatura" 
            value={`${currentTemp}°C`} />
          <StatRow label="Objetivo"
            value={`${targetTemp}°C`} />
          <StatRow label="Humedad" 
            value={`${currentHumidity}%`} />
          <StatRow label="Estado" 
            value={isRunning ? 'Funcionando' : 'Apagado'} />
          <StatRow label="Modo" 
            value={mode.charAt(0).toUpperCase() + mode.slice(1)}
            valueColor={modeColor} />
        </View>
      </View>

      <Animated.View style={[
        styles.indicatorPanel,
        { borderColor: modeColor }
      ]}>
        <Animated.Text style={[styles.currentTempText, tempAnimatedStyle]}>
          {currentTemp}°C
        </Animated.Text>
        <Text style={[styles.diffText, { color: modeColor }]}>
          {tempDiff.toFixed(1)}°C de diferencia
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

const StatRow = ({ label, value, valueColor }: { 
  label: string; 
  value: string; 
  valueColor?: string;
}) => (
  <View style={styles.statRow}>
    <Text style={styles.statLabel}>{label}:</Text>
    <Text style={[styles.statValue, valueColor && { color: valueColor }]}>
      {value}
    </Text>
  </View>
);

export default AComponent;