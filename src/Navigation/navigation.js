import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from '../screens/LoginScreen';
import TabScreenNavigations from './TabScreenNavigation';
import { useAuth } from '../hooks/useAuth';

const Stack = createStackNavigator();
function RootNavigation() {

  const {isAuth} = useAuth();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        {
          isAuth ? null
          : <Stack.Screen name="Login" component={LoginScreen}/>
        }
        <Stack.Screen name="App" component={TabScreenNavigations} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default RootNavigation