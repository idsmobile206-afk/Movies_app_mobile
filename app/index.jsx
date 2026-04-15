import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Home page</Text>
      <Text>Lorem ipsum dolor sit amet consectetur.</Text>
      <Link style={styles.links} href="/about">About Page</Link>
      <Link style={styles.links} href="/contact">contact Page</Link>
      <Link style={styles.links} href="/DisplayMovies"> DisplayMovies</Link>
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