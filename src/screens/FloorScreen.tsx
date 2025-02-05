import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Floor from '../entities/Floor'
import AComponent from '../components/AComponent'
import RunningAcs, { CardData } from '../components/VerticalCards'
import AC from '../entities/AC'
import { theme } from '../core/theme'
import FloorsComponent from '../components/FloorsComponent'


const fakeFloors : Floor[] = [
  {
    id: '1',
    name: 'Planta 3',
    Acs: [
      {
        id: '1',
        name: 'Fujitsu AC',
        location: 'Despacho raul',
        status: {
           isRunning: true ,
           historicalData: [
             
           ],
           currentTemp: 12,
           currentHumidity: 57,
           mode: 'warm',
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
          currentTemp: 22,
          currentHumidity: 92,
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
          currentTemp: 32,
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
          currentTemp: 15,
          currentHumidity: 50,
          mode: 'warm',
          targetTemp: 24
        }
      }
    ]
  },
  {
    id: '2',
    name: 'Planta 2',
    Acs: [
      {
        id: '6',
        name: 'AC 6',
        location: 'Room 6',
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
  },
  {
    id: '3',
    name: 'Planta 1',
    Acs: [
      {
        id: '7',
        name: 'AC 7',
        location: 'Room 7',
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

export default function ACScreen({navigation} : any) {
  return (
    <View style={styles.container}>
        <FloorsComponent floors={fakeFloors} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      container: {
        backgroundColor: theme.colors.background,
      },
})
