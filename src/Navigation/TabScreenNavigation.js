import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import { StackScreenNavigations } from './StackScreenNavigation';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

function TabScreenNavigations() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {...styles.container },
        title: ''}}>
          <Tab.Screen name="Main" component={StackScreenNavigations} options={{tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <FontAwesome style={ styles.icon, {color: focused ? '#316400' : 'gray'}} name="home" size={24} />
              <Text style={{color: focused ? '#316400' : 'gray'}}>Home</Text>
            </View>
        )}}/>
          <Tab.Screen name="User" component={UserScreen} options={{tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <FontAwesome style={ styles.icon, {color: focused ? '#316400' : 'gray'}} name="user-circle-o" size={24}/>
              <Text style={{color: focused ? '#316400' : 'gray'}}>User</Text>
            </View>
        )}}/>
        </Tab.Navigator>
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    item: {
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 20,
     
    },
    icon: { 
      width: 22,
      height: 22,
      tintColor: '#333',
      
    }
  })

  export default TabScreenNavigations