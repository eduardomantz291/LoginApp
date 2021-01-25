import React from 'react';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, Button, Image, StyleSheet, Text, View, ImageBackgroundBase } from 'react-native';

import { useAuth } from '../contexts/auth';

export default function Home() {
  const { signOut, user } = useAuth();

  function hanleSignOut() {
    signOut();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../images/Background.png')} style={{width: '100%', height: '100%'}} >
        
         
      </ImageBackground>
      <StatusBar style="dark"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
})