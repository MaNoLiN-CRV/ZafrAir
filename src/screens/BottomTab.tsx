import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Floors" component={FloorScreen} />
        <Tab.Screen name="Settings" component={Settings} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;