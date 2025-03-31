import React from 'react'
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

export const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [text2, onChangePassword] = React.useState('');

    return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={ require('../img/fondo2.jpg')} resizeMode="cover" style={styles.fondoimg}>
        <ImageBackground source={require('../img/logoSin.png')} style={styles.logo}></ImageBackground>
        </ImageBackground>
        <View style={styles.children}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subTitle}>Regitrate con tu usuario</Text>

            <TextInput style={styles.input}  onChangeText={onChangeText}
                      value={text}
                      placeholder="Usuario"
                      />

                <TextInput style={styles.input}  onChangeText={onChangePassword}
                      value={text2}
                      placeholder="Contraseña"
                      keyboardType="numeric"/>

                
                <Pressable><Text style={styles.subTitleButton}>Crear Usuario</Text> </Pressable>
                <Pressable style={styles.button}><Text style={styles.textButton}>Login</Text> </Pressable>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    fondoimg:{
        flex:1,

    },
    logo:{
        width:250,
        height:170,
        marginLeft:60,
        marginTop:115,
    },
    title:{
        textAlign:'center',
        fontSize:40,
        color:"black",
        marginLeft:65,
        fontFamily:"arial",

    },
    subTitle:{
        textAlign:'center',
        fontSize:15,
        color:"black",
        marginLeft:60,

    },
    children:{
        flex:1,
        width:300,
        height:400,
        color:"rgba(217, 217, 217, 1)",
    },
    input:{
        marginLeft:30,
        width:300,
        height:40,
        borderWidth:1,
        padding:10,
        backgroundColor:'rgba(90, 90, 90, 0.78)',
        color :'black',
        fontSize:16,
        marginTop:30,
        borderRadius:10,},

        button:{
            backgroundColor:'rgba(23, 23, 23, 1)',
            width:200,
            height:40,
            borderRadius:30,
            marginLeft:80,
            marginTop:30,
        },
    textButton:{
        textAlign:'center',
        fontSize:19,
        color:"white",
        fontFamily:"arial",
        marginTop:5,
        
        
    }, 
    subTitleButton:{
        marginTop:10,
        textAlign:'center',
        fontSize:15,
        color:"black",
        marginLeft:60,
    }   
    
    /*  Faltantes:
    -Poner la figura 
    -Agregar las Fuentes
    -Poner funciones de los botones (Login y Registrate)
    -Arreglar los inputs (Todo lo que se escribe en uno se visualiza en todos )
    -Poner los iconos (Usuario y contraseña, fleche de regreso, mirar contraseña, check de usuaro )
    -poner los enlaces
    
 */ 

})

export default Login