import React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import { styles } from './styles/HomeScreenStyles';


export default function HomeScreen() {
 
  return (
    <ImageBackground source={require('../../assets/b1.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/izv.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to ZafrAir</Text>  
      </View>
    </ImageBackground>
  );
}


