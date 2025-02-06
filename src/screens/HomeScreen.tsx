import React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import { useTheme } from '../providers/ThemeProvider';
import { createStyles } from './styles/HomeScreenStyles';



export default function HomeScreen() {
  const {currentTheme} = useTheme();
  const styles = createStyles(currentTheme);
  
  return (
    <ImageBackground source={require('../../assets/b1.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/izv.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to ZafrAir</Text>  
      </View>
    </ImageBackground>
  );
}


