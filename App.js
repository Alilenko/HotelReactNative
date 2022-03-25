import React from 'react';
import { StyleSheet} from 'react-native';
import RootNavigation from './src/Navigation/navigation';
import 'react-native-gesture-handler';
import {HotelContextProvider} from './src/services/HotelContext';
import { UserContextProvider} from './src/services/UserContext'
import { store } from './src/app/store';
import { Provider } from 'react-redux';

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
