import React from 'react'
import HotelsList from '../components/HotelsList'
import SafeArea from '../components/SafeArea'

export default function HomeScreen({navigation}) {
  return (
    <SafeArea >
      <HotelsList navigation={navigation}/>
    </SafeArea>
  )
}   
