import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "../global.css"

const _layouts = () => {
  return (
    <View>
      <Text>_layouts</Text>
      <Stack>
            <Stack.Screen name='index' options={{ title : 'home' }}/>
            <Stack.Screen name='about' options={{ title : 'about' }}/>
            <Stack.Screen name='contact' options={{ title : 'contact' }}/>
            <Stack.Screen name='DisplayMovies' options={{ title : 'DisplayMovies' }}/>
      </Stack>
    </View>
  )
}

export default _layouts

const styles = StyleSheet.create({})