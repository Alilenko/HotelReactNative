import { View, StyleSheet, Text } from 'react-native'
import React, { useState} from 'react'
import ButtonColor from '../components/ButtonColor';
import ButtonTransparent from '../components/ButtonTransparent';
import NumericInput from 'react-native-numeric-input'
import SafeArea from '../components/SafeArea';
import {useDispatch, useSelector} from 'react-redux'
import { signOut } from "firebase/auth";
import {auth} from '../services/authorization'
import { useAuth } from '../hooks/useAuth';
import {changeBalance} from '../app/UserSlice'

const UserScreen = ({navigation}) => {
    const [balance, setBalance] = useState(0)
    const [input, setInput] = useState(0)
    const {users, currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch();

    const {id} = useAuth();

    const logout = async () => {
      await signOut(auth)
      navigation.navigate('Login')
    }

    const handleBalance = () => {
        const newBalance = Number(balance) + Number(input)
        setBalance(newBalance)
        dispatch(changeBalance(newBalance))
    }

  return (
    <SafeArea >
      <View style={styles.container}>
        <Text style={styles.text}>На вашем счету: {balance}$</Text>
      <NumericInput value={input} onChange={setInput} step={10}/>
      <ButtonColor children='Пополнить счет' onPress={handleBalance}/>
      <ButtonTransparent children='Выйти' onPress={logout}/>
      </View>
    </SafeArea>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 10,
        fontSize: 16
    }
})

export default UserScreen