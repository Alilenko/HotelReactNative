import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";


const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      zIndex: 3
    },
})
  

export default Loading