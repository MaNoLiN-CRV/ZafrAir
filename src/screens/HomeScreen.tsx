import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import { theme } from '../core/theme';
import Floor from '../entities/Floor';
import RunningAcs from '../components/RunningAcs';

export default function HomeScreen() {
 
  return (
    <ImageBackground source={require('../../assets/background1.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/izv.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to ZafrAir</Text>  
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 6, 60, 0.67)',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    filter : `drop-shadow(0 0 10px ${theme.colors.shadow})`,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    filter: `drop-shadow(0 0 10px ${theme.colors.shadow})`,
  },
  runningACsContainer: {
    paddingVertical: 10,
  },
  runningAC: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: theme.colors.surface,
    borderRadius: 10,
    marginHorizontal: 5,
    color: theme.colors.primary,
  },
});

