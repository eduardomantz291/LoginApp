import React from  'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Animated, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/Background.png')} style={{width: '100%', height: '100%'}}>

      <Animated.View style={[styles.containerLogo, {
        transform: [
          { translateY: -100 }
        ]
      }]}>
        <Image style={{width: 130, height: 155}} source={require('../images/logo.png')} />
      </Animated.View>
      <View style={styles.loadContainer}>
        <ActivityIndicator size={80} color="#518f79" />
      </View>
      <StatusBar style="inverted"/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  }
});