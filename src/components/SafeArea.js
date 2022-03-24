import React from "react";
import {SafeAreaView, StatusBar} from 'react-native'
import {StatusBar as ExpoStatusBar} from 'expo-status-bar'


const SafeArea = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        {children}
        <ExpoStatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default SafeArea