import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Settings from './Settings';
import { theme } from '../core/theme';
import ACScreen from './ACScreen';


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ACs" component={ACScreen} />
        <Tab.Screen name="Settings" component={Settings} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;