import React from 'react'
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'



export const CreateAcont = () => {
    const [text, onChangeText] = React.useState('');
    
  
    return (
   <SafeAreaView style={styles.container}>
    <ImageBackground source={ require('../img/fondo2.jpg')} resizeMode="cover" style={styles.fondoimg}>
    <ImageBackground source={require('../img/logoSin.png')} style={styles.logo}/>
    <Text style={styles.text}>Registrate</Text>
    <View>
    
    <TextInput style={styles.input}  onChangeText={onChangeText}
          value={text}
          placeholder="Name"
          />
    <TextInput style={styles.input}  onChangeText={onChangeText}
          value={text}
          placeholder="Gmail"
          keyboardType="numeric"/>
    <TextInput style={styles.input}  onChangeText={onChangeText}
          value={text}
          placeholder="Password"
          keyboardType="numeric"/>
    
    <Pressable style={styles.button}><Text style={styles.textButton}>Login</Text> </Pressable>
    </View>
    <Text style={styles.textWhit}>Registrate con</Text>
    </ImageBackground>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    fondoimg:{
        flex:1,
        shadowColor:"gray",
        shadowOffset:{width:100,height:5},
      },
      
      logo:{
        width:250,
        height:170,
        marginLeft:60,
        marginTop:60,
      },
      text:{
        textAlign:'center',
        fontSize:30,
        color:"white",

      },
    input:{
        marginLeft:30,
        width:300,
        height:40,
        borderWidth:1,
        padding:10,
        backgroundColor:'rgba(104, 103, 103, 1)',
        color :'rgba(0, 0, 0, 1)',
        fontSize:16,
        marginTop:40,
        borderRadius:10,
    },
    textButton:{
        textAlign:'center',
        fontSize:20,
        color:"white",
        fontFamily:"arial",
        marginTop:10,
        
        
    },

    button:{
        backgroundColor:'rgba(104, 103, 103, 1)',
        width:150,
        height:50,
        borderRadius:30,
        marginLeft:100,
        marginTop:50,
    },
    textWhit:{
        textAlign:'center',
        fontSize:20,
        color:'white',
        marginTop:25
    }                                       
})

/*  Faltantes:
    -Agregar las Fuentes
    -Poner funciones de los botones (Login y Registrate)
    -Arreglar los inputs (Todo lo que se escribe en uno se visualiza en todos )
    -Poner los iconos 
    -poner los enlaces
    -poner funcion de Registrarte con Google y Apple
 */ 



 export default CreateAcont



