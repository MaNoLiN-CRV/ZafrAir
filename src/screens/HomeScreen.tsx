import { View, Text } from 'react-native'
import React from 'react'
import AComponent, { ACStatsProps } from '../components/ACStatus';




const sampleData1  : ACStatsProps = {
  historicalData: [
    {
      time: new Date().toLocaleDateString(),
      temperature: 24,
      humidity: 50
    },
    {
      time: new Date().toLocaleDateString(),
      temperature: 22,
      humidity: 55
    },
    {
      time: new Date().toLocaleDateString(),
      temperature: 20,
      humidity: 60
    },
    {
      time: new Date().toLocaleDateString(),
      temperature: 18,
      humidity: 65
    },
    {
      time: new Date().toLocaleDateString(),
      temperature: 16,
      humidity: 70
    }
  ],
  currentTemp: 2,
  currentHumidity: 0,
  isRunning: true,
  mode: 'warm',
  targetTemp: 24
}



export default function HomeScreen() {
  const [sampleData, setSampleData] = React.useState<ACStatsProps>(sampleData1);

// simulation of data change
setInterval(() => {
  setSampleData({
    ...sampleData,
    currentTemp: Math.floor(Math.random() * 30),
    currentHumidity: Math.floor(Math.random() * 100)
  });
}, 5000);
  return (
    <View>
      <Text>HomeScreen</Text>
      <AComponent {...sampleData} />
    </View>
  )
}