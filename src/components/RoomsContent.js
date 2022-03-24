import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import ButtonColor from './ButtonColor';
import {useSelector} from 'react-redux'

const { width } = Dimensions.get('screen');

export default function RoomsContent({rooms}) {
  return (
    <View >
      <RoomsItem item={rooms}/>
    </View>
  )
}

const RoomsItem = ({item}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const topImage = useRef()
    const thumbImage = useRef() 
    const [available, setAvailable] = useState(false)
    const {currentUser} = useSelector(state => state.user)

    useEffect(() => {
        if(currentUser.balance >= item.price){
            setAvailable(true)
        } else {
            setAvailable(false)
        }
    }, [currentUser.balance])

    const scrollToActiveIndex = (index) => {
        setActiveIndex(index)
        topImage?.current?.scrollToOffset({
            offset: index * width,
            animated: true
        })
    }

    return(
        <View >
            <FlatList
                ref={topImage}
                style={styles.block}
                horizontal
                data={item.img}
                onMomentumScrollEnd={ev => {
                    scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/width))
                }}
                keyExtractor={(item) => item.url}
                renderItem={({item}) => (
                    <View style={styles.imageBlock}>
                        <Image style={styles.image} source={{uri: item.url}}/>
                    </View>
                )}
            />
            <FlatList
                ref={thumbImage}
                horizontal
                data={item.img}
                keyExtractor={(item) => item.url}
                renderItem={({item, index}) => (
                    <TouchableOpacity style={styles.miniBlock} onPress={() => scrollToActiveIndex(index)}>
                        <Image style={{height: 100, width: 100, borderRadius: 5, marginVertical: 5,
                            marginLeft: 5, borderWidth: 1, borderColor: activeIndex === index ? 'black' : 'transparent'}} source={{uri: item.url}} />
                    </TouchableOpacity>
                )}
            />
            <View style={styles.content}>
                <Text style={styles.text}>{item.type}</Text>
                <View style={styles.row}>
                    <Ionicons name="person" size={16} color="black" />
                    <Text> x {item.guests}</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.text}>Price: {item.price}$</Text>
                    <ButtonColor children='Reserve' onPress={available ? () => console.log('Click') : () => Alert.alert('Недостаточно денег на счету')} available={!available} />
                </View>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: '600'
    },
    block: {
        height: 355,
        overflow: 'hidden',
        
    },
    imageBlock: {
        width: width - 10,
        height: 350,
        margin: 5,
        borderRadius: 5,

    },
    image: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 5,
    },
    miniBlock: {
        
    },
    miniImage: {
        height: 100,
        width: 100,
        borderRadius: 5,
        marginVertical: 5,
        marginLeft: 5,
    },
    content: {
        margin: 5,
    },
    row:{
        flexDirection: 'row'
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})