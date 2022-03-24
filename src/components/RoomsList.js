import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react/cjs/react.development';

export default function RoomsList({rooms}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={rooms}
        horizontal
        keyExtractor={rooms => rooms.id}
        renderItem={({item}) => (
            <RoomsItemMini rooms={item}/>
        )}
      />
    </View>
  )
}

const RoomsItemMini = ({rooms}) => {
    const navigation = useNavigation();
    const [available, setAvailable] = useState(false)
    const {currentUser} = useSelector(state => state.user)

    useEffect(() => {
        if(currentUser.balance >= rooms.price){
            setAvailable(true)
        } else {
            setAvailable(false)
        }
    }, [currentUser.balance])

    return(
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Room", rooms)}>
            <View style={styles.available}>
                <Text style={{backgroundColor: available ? '#316400' : '#c60000', padding: 5, fontSize: 12, color: '#fff'}}>{available ? 'Доступен' : 'Недоступен'}</Text>
            </View>
            <Image style={styles.image} source={{uri: rooms.img[0].url}}/>
            <View style={styles.info}>
                <Text style={styles.type}>{rooms.type}</Text>
                <Text style={styles.price}>{rooms.price}$</Text>
            </View>
        </TouchableOpacity>
    )}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    item: {
        position: 'relative',
        marginRight: 10,
        minHeight: 220
    },
    image: {
        width: 150,
        height: 220,
        borderRadius: 10
    },
    info: {
        position: 'absolute',
        bottom: 3,
        left: 10,
        width: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    },
    type: {
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center'
    },
    price: {
        color: 'gray',
        alignSelf: 'center'
    },
    available: {
        position: 'absolute',
        top: 10,
        right: 0,
        zIndex: 2,
    }
})