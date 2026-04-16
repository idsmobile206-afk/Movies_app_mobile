import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {DisplayMovies} from "./DisplayMovies"


const Home = () => {
  return (
    <View>
 

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    backgroundColor : 'yellow'
  } ,
  title : {
    fontWeight : 'bold' , 
    fontSize : 28 , 
  } ,
  links : {
    backgroundColor : 'pink' ,
    marginVertical : 20 , 
    padding : 20
  }
})