import React from 'react'
import { Alert, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export const CreateAcont = () => {
    const [text, onChangeName] = React.useState('');
    const [text2, onChangeGmail] = React.useState('');
    const [text3, onChangePassword] = React.useState('');
  
    return (
   <SafeAreaView style={styles.container}>
    <ImageBackground source={ require('../img/fondo2.jpg')} resizeMode="cover" style={styles.fondoimg}>
    <ImageBackground source={require('../img/logoSin.png')} style={styles.logo}/>
    <Text style={styles.text}>Registrate</Text>
    <View>
    
    <TextInput style={styles.input}  onChangeText={onChangeName}
          value={text}
          placeholder="Name"
          />
    <TextInput style={styles.input}  onChangeText={onChangeGmail}
          value={text2}
          placeholder="Gmail"
          keyboardType="numeric"/>
    <TextInput style={styles.input}  onChangeText={onChangePassword}
          value={text3}
          placeholder="Password"
          keyboardType="numeric"/>
    
    <Pressable style={styles.button}><Text style={styles.textButton}>Login</Text> </Pressable>
    </View>
    <Text style={styles.textWhit}>Registrate con</Text>
    <Pressable onPress={()=>Alert.alert("Google")}><Icon name="logo-google" style={styles.iconGoogle}></Icon></Pressable>
    <Pressable onPress={()=> Alert.alert("Apple")}><Icon name="logo-apple" style={styles.iconApple}></Icon></Pressable>
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
    },
    iconApple:{
        marginLeft:240,
        color:'white',
        fontSize:85,
        marginTop:-85

        
    },
iconGoogle:{
    marginTop:10,
    marginLeft:40,
    color:'white',
    fontSize:70,
}                                  
})

/*  Faltantes:
    -Agregar las Fuentes
    -Poner funciones de los botones (Login y Registrate)
    -Arreglar los inputs (Todo lo que se escribe en uno se visualiza en todos )//(Listo)
    -Poner los iconos/////(Listo)
    -poner los enlaces
    -poner funcion de Registrarte con Google y Apple
    -Solicionar el error (sale un alert de los textos)
 */ 



 export default CreateAcont



