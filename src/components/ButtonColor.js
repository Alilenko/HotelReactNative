import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export default function ButtonColor({children, onPress, available}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: available ? 'gray' : '#316400'}]} onPress={onPress} >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        shadowColor: '#333',
        shadowRadius: 8,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        margin: 10,
        minWidth: 150,
        borderRadius: 10,
        alignItems: 'center'
    },
    text:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#fff',
        textTransform: 'uppercase',
    }
})