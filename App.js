import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Style from './Style/styles';
import DashboardScreen from './Screens/dashboard';
import DevicesScreen from './Screens/allDevices';
import SettingsScreen from './Screens/settings';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator name = "mainDashboard"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerShadowVisible: false,
          headerTitleStyle: Style.headerTitle,
          headerTintColor: '#111111',
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Smart Home', 
          headerShown: false,
          tabBarIcon:({color,size}) => (
          <Ionicons name = "thermometer-outline" color={color} size={size}/>
          ) }}
        />
        <Tab.Screen
          name="Devices"
          component={DevicesScreen}
          options={{ title: 'My Devices',
          headerShown: false,
          tabBarIcon:({color,size}) => (
          <Ionicons name= "phone-portrait-outline" color={color} size={size}/>
          )
           }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings',
          headerShown: false, 
          tabBarIcon:({color, size}) => (
            <Ionicons name= "settings-outline" color={color} size={size}/>
          )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




