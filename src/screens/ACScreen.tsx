import { View, Text } from 'react-native'
import React from 'react'
import Floor from '../entities/Floor'
import AComponent from '../components/ACStatus'
import RunningAcs from '../components/RunningAcs'


const fakeFloors : Floor[] = [
  {
    id: '1',
    name: 'Floor 1',
    Acs: [
      {
        id: '1',
        name: 'Fujitsu AC',
        location: 'Despacho raul',
        status: {
           isRunning: true ,
           historicalData: [
             
           ],
           currentTemp: 25,
           currentHumidity: 50,
           mode: 'cool',
           targetTemp: 24

          }
      },
      {
        id: '2',
        name: 'AC 2',
        location: 'Room 2',
        status: { 
          isRunning: true,
          historicalData: [
          ],
          currentTemp: 25,
          currentHumidity: 50,
          mode: 'cool',
          targetTemp: 24
        }
      },
      {
        id: '3',
        name: 'AC 3',
        location: 'Room 3',
        status: {
          isRunning: true,
          historicalData: [
          ],
          currentTemp: 25,
          currentHumidity: 50,
          mode: 'cool',
          targetTemp: 24
        }
      },
      {
        id: '4',
        name: 'AC 4',
        location: 'Room 4',
        status: {
          isRunning: true,
          historicalData: [
          ],
          currentTemp: 25,
          currentHumidity: 50,
          mode: 'cool',
          targetTemp: 24
        }
      },
      {
        id: '5',
        name: 'AC 5',
        location: 'Room 5',
        status: {
          isRunning: true,
          historicalData: [
          ],
          currentTemp: 25,
          currentHumidity: 50,
          mode: 'cool',
          targetTemp: 24
        }
      }
    ]
  }
] 

export default function ACScreen() {
  return (
    <View>
      <RunningAcs floors={fakeFloors} />
    </View>
  )
}