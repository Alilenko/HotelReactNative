import {TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import RoomsContent from '../components/RoomsContent';
import { Ionicons } from '@expo/vector-icons';
import SafeArea from '../components/SafeArea';

export default function RoomScreen({route, navigation}) {
    const rooms = route.params

  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={20} color="black" />
        </TouchableOpacity>
      <RoomsContent rooms={rooms}/>
      </ScrollView>
    </SafeArea>
  ) 
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    back:{
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        top: 20,
        left: 20,
        zIndex: 2,
    }
})