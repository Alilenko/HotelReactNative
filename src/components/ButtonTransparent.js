import { Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export default function ButtonTransparent({children, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
        color: '#316400',
        textTransform: 'uppercase',
    }
})