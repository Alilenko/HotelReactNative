import { View,StyleSheet} from 'react-native'
import React, { useState} from 'react'
import FormInput from '../components/FormInput'
import ButtonColor from '../components/ButtonColor'
import SafeArea from '../components/SafeArea';
import {useDispatch} from 'react-redux'
import { setUser} from '../app/UserSlice'
import ButtonTransparent from '../components/ButtonTransparent'
import Loading from '../components/Loading';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth }from '../services/authorization'

const LoginScreen = ({navigation}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
 
    const dispatch = useDispatch();

    const dispatchUser = (user) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        balance: 0,
        favorites: []
    }));
    navigation.navigate('App')
    }

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if(currentUser){
        dispatchUser(currentUser)
      }
    })

    const register = async () => {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, login, password)
        .then(({user}) => {
          dispatchUser(user)
          setLogin('')
          setPassword('')
      })
      .catch(console.error)
      setLoading(false)
    }

    const singIn = async () => {
      setLoading(true)
        await signInWithEmailAndPassword(auth, login, password)
        .then(({user}) => {
          dispatchUser(user)
          setLogin('')
          setPassword('')
      })
      .catch(console.error)
      setLoading(false)
    }

  return (
    <SafeArea >
      <View style={styles.container}>
        {loading ? <Loading/> : null}
        <FormInput value={login} setValue={setLogin} placeholder='Имя пользователя'/>
        <FormInput value={password} setValue={setPassword} placeholder='Пароль' security/>
        <ButtonColor children='Войти' onPress={singIn} />
        <ButtonTransparent children='Зарегистрироваться' onPress={register}/>
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
})

export default LoginScreen