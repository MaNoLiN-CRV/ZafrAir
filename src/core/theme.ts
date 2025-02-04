import { DefaultTheme, shadow } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2f81fc',
    secondary: '#442ffc',
    shadow: 'rgb(5, 13, 255)',
    blurBackground1: 'rgba(100, 167, 254, 0.55)',
    blurBackground2: 'rgba(27, 12, 53, 0.48)',
    error: '#f13a59',
  },
};