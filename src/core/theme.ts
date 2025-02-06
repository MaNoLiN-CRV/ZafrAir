import { DefaultTheme, shadow } from 'react-native-paper';



const normal = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6482AD',
    secondary: '#7FA1C3',
    third : '#E2DAD6',
    background: 'rgb(255, 255, 255)',
    shadow: 'rgb(19, 19, 19)',
    text: 'rgb(0, 0, 0)',
    error: '#f13a59',
  },
};


const sky = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#45b3fa',
    secondary: '#e9eaec',
    third : '#f6f6f6',
    background: 'rgb(255, 255, 255)',
    shadow: 'rgb(19, 19, 19)',
    text: 'rgb(0, 0, 0)',
    error: '#f13a59',
  },
};


const fire = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff5722',
    secondary: '#ffc107',
    third : '#455a64',
    background: 'rgb(255, 255, 255)',
    shadow: 'rgb(19, 19, 19)',
    text: 'rgb(0, 0, 0)',
    error: '#f13a59',
  },
};

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(86, 19, 136)',
    secondary: 'rgb(57, 19, 118)',
    third : 'rgb(17, 5, 36)',
    background: 'rgb(26, 26, 26)',
    shadow: 'rgb(73, 0, 244)',
    text: 'rgb(255, 255, 255)',
    error: '#f13a59',
  },
};


const themes = {
  normal,
  sky,
  fire,
  darkTheme,
};


export default themes;

