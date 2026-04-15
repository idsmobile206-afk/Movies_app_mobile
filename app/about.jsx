import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
      <Link style={styles.links} href="/">index Page</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    backgroundColor : 'pink'
  } ,
  title : {
    fontWeight : 'bold' , 
    fontSize : 18 , 
  } ,
  links : {
    backgroundColor : 'yellow' ,
    marginVertical : 20 , 
    padding : 20
  }
})