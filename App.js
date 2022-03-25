<<<<<<< HEAD
import React from 'react';
import { StyleSheet } from 'react-native';
=======
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> eb465ebbcb4776f94d001fe88042652bf5eb5e21
import RootNavigation from './src/Navigation/navigation';
import 'react-native-gesture-handler';
import {HotelContextProvider} from './src/services/HotelContext';
import { UserContextProvider} from './src/services/UserContext'
import { store } from './src/app/store';
import { Provider } from 'react-redux';
<<<<<<< HEAD
=======
import {onAuthStateChanged } from "firebase/auth";
import {auth }from './src/services/authorization'
>>>>>>> eb465ebbcb4776f94d001fe88042652bf5eb5e21

export default function App() {

  return (
    <>
      <HotelContextProvider>
        <UserContextProvider>
          <Provider store={store}>
          <RootNavigation/>
          </Provider>
        </UserContextProvider>
      </HotelContextProvider>
   </>
  );
}

const styles = StyleSheet.create({
 
});
