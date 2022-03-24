import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, {useContext, useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import {HotelContext} from '../services/HotelContext'
import {useDispatch, useSelector} from 'react-redux'
import {addFavorites} from '../app/UserSlice'

export default function HotelsList({navigation}) {
    const hotelContext = useContext(HotelContext)

  return (
      <FlatList
      keyExtractor={(item) => item.id}
      data={hotelContext}
      renderItem={({item}) => (
        <HotelItem hotel={item} navigation={navigation}/>
      )}
      />
  )
}
const HotelItem = ({hotel, navigation}) => {
    return (
    <TouchableOpacity onPress={() => navigation.navigate('Hotel', hotel)}>
        <View style={styles.itemContainer}>
            <HotelImage hotel={hotel}/>
            <HotelInfo item={hotel}/>
        </View>
        </TouchableOpacity> 
)}

const HotelImage = ({hotel}) => {
    const [favorites, setFavorites] = useState(false)
    const [activeFavorites, setActiveFavorites] = useState(false)
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)


    const change = (hotel) => {
        setFavorites(!favorites)
        if(!favorites){
            dispatch(addFavorites(hotel.name))
            changeActive()
        }
    }
const changeActive = () => {
    if(currentUser.favorites !== [] ){
        setActiveFavorites(true)
    } else {
        setActiveFavorites(false)
    }
}

return (
    <View>
    <Image source={{uri: hotel.url}} style={styles.image}/>
    <TouchableOpacity style={styles.likebutton} onPress={() => change(hotel)}>
        {activeFavorites
        ? <AntDesign name="heart" size={20} color="#c60000" /> 
        : <AntDesign name="hearto" size={20} color="#fff" />}
    </TouchableOpacity>
    </View>
 )}


 const HotelInfo = ({item}) => (
     <View style={styles.infoContainer}>
         <View>
             <Text style={styles.infoName}>{item.name}</Text>
             <Text style={styles.city}>{item.city}</Text>
         </View>
         <View style={styles.rating}>
            <AntDesign name="star" size={18} color="#FFCC33" />
            <Text style={styles.ratingText}>{item.rating}</Text>
         </View>
     </View>
 )

 const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 10, 
        padding: 15, 
        backgroundColor: 'white'
    },
    image: {
        width: '100%', 
        height: 180
    },
    likebutton: {
        position: 'absolute', 
        top: 0, 
        right: 0,
        padding: 10
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 5
    },
    infoName: {
        fontWeight: '700', 
        fontSize: 15,
    },
    city: {
        fontSize: 13, 
        color: 'gray'
    },
    rating:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    ratingText: {
        marginLeft: 5
    }
})