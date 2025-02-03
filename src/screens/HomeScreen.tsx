import { View, Text } from 'react-native'
import React from 'react'
import AComponent, { ACStatsProps } from '../components/ChartComponent.tsx';

const sampleData : ACStatsProps = {
  historicalData: [
    {
      time: new Date().toLocaleDateString(),
      temperature: 24,
      humidity: 50
    }
  ],
  currentTemp: 20,
  currentHumidity: 0,
  isRunning: true,
  mode: 'cool',
  targetTemp: 24
}

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <AComponent {...sampleData} />
    </View>
  )
}