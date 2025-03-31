import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export const Inicio = () => {
  return (
    <SafeAreaView style={styles.conteiner}>
        <ImageBackground source={ require('../img/fondo2.jpg')} resizeMode="cover" style={styles.fondoimg}>
        <Text style={styles.text}>Inicio</Text>
        
        <Icon name ="logo-apple" color={"white"} size={50} />
        </ImageBackground>
        <View style={styles.menu}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
    },
    fondoimg:{
        flex:1,
        shadowOffset:{width:100,height:5},
    },
    text:{
        textAlign:'center',
        fontSize:40,
        color:'white',
        marginTop:150,
    },
    menu:{
        width:370,
        height:90,
        backgroundColor:'rgba(49, 49, 49, 1)',
    }
})

export default Inicio
