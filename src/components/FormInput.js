import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


const FormInput = ({value, setValue, placeholder, security}) => {
  return (
    <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={security}
        autoCapitalize='none' 
    />
  )
}
const styles = StyleSheet.create({
    input:{
        width: '80%',
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    }
})

export default FormInput