import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import Settings from './Settings';
import { useTheme } from '../providers/ThemeProvider';
import FloorScreen from './FloorScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { currentTheme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: currentTheme.colors.primary,
          tabBarInactiveTintColor: currentTheme.colors.text,
          tabBarStyle: {
            backgroundColor: currentTheme.colors.background,
            borderTopColor: currentTheme.colors.primary,
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
            height: 60
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
                name="home" 
                color={color} 
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Floors" 
          component={FloorScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
                name="layers" 
                color={color} 
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
                name="cog" 
                color={color} 
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;