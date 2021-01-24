import React from  'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={{width: 130, height: 155}} source={require('../images/logo.png')} />
      </View>
      <View style={styles.loadContainer}>
        <ActivityIndicator size={80} color="#518f79" />
      </View>
      <StatusBar style="inverted"/>
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
  },

  loadContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  }
});