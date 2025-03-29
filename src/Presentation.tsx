import React from 'react'
import { SafeAreaView, ImageBackground, View, Pressable, Alert, Text, StyleSheet } from 'react-native'

export const Presentation = () => {
  return (
    <SafeAreaView style={styles.container}>
          <ImageBackground source={ require('../img/fondo2.jpg')} resizeMode="cover" style={styles.imge}>
          <ImageBackground source={require('../img/logo.png')} style={styles.logo}></ImageBackground>
          <View>
            <Pressable style={styles.button} onPress={()=> Alert.alert('hola')}><Text style={styles.textButton}>Sing in</Text></Pressable>
          </View>
          <Pressable><Text style={styles.text}>Create Acount</Text></Pressable>
          </ImageBackground>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    

  },
  imge:{
    flex:1,
    shadowColor:"gray",
    shadowOffset:{width:100,height:5},
  },
  text:{
    textAlign:'center',
    fontSize:20,
    color:"white",
    fontFamily:"arial",
    paddingTop:60
  },
  textButton:{
    textAlign:'center',
    fontSize:20,
    color:"white",
    fontFamily:"arial",
    paddingTop:10,
    
  },
  button:{
    width:300,
    height:50,
    marginLeft:30,
    marginTop:200,
    borderRadius:10,
    backgroundColor: 'rgba(90, 90, 90, 0.8)',
    
  },
  
  fondoimg:{
    fontSize:50,
    paddingTop:90,
    
  
    
  },
  logo:{
    width:250,
    height:170,
    marginLeft:60,
    marginTop:80,
  }
})

export default Presentation



