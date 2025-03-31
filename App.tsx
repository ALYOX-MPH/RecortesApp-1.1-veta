import React from 'react'
import {  SafeAreaView, StyleSheet, } from 'react-native'
import Presentation from './src/Presentation';
import CreateAcont from './src/CreateAcont';
import  Login  from './src/Login';
import  Inicio  from './src/Inicio';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/*<CreateAcont/>*/}
    <Login/>
    {/*<Inicio/>*/}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})



export default App
