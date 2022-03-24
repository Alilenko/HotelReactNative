import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import RoomsList from '../components/RoomsList';
import SafeArea from '../components/SafeArea';

export default function HotelScreen({ route, navigation}) {
    const hotel = route.params

  return (
    <SafeArea >
        <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={20} color="black" />
        </TouchableOpacity>
        <Image style={styles.image} source={{uri: hotel.url}} />
        <ScrollView >
            <Text style={styles.name}>{hotel.name}</Text>
            <View style={styles.block}>
                <Ionicons name="location-sharp" size={16} color="#c60000" />
                <Text style={styles.city}>{hotel.city}</Text>
            </View>
            <View style={styles.block}>
                <Ionicons name="star" size={16} color="#FFCC33" />
                <Text style={styles.rating}>{hotel.rating} ({hotel.reviews} reviews)</Text>
            </View>
            <Text style={styles.subtext}>{hotel.description}</Text>
        </ScrollView>
        <RoomsList rooms={hotel.rooms}/>
        </View>
    </SafeArea>

  )
}

const styles = StyleSheet.create({
    color: {
        minHeight: 220
    },
    container: {
        flex: 1,
        position: 'relative',
    },
    block:{
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    back:{
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        top:  20 ,
        left: 20,
        zIndex: 2,
    },
    image: {
        height: '30%',
        margin: 10,
        borderRadius: 20,
        position: 'relative'
    },
    name:{
        paddingHorizontal: 10,
        paddingBottom: 10,
        fontSize: 22,
        fontWeight: '600'
    },
    subtext: {
        color: 'gray',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    city: {
        paddingLeft: 10,
        color: 'gray'
    },
    rating: {
        paddingLeft: 10,
        color: 'gray'
    },

})

