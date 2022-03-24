import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import HotelScreen from '../screens/HotelScreen';
import RoomScreen from '../screens/RoomScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
export function StackScreenNavigations() {
  return(
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Hotel" component={HotelScreen} />
        <Stack.Screen name="Room" component={RoomScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
  </Stack.Navigator>
  )
}
