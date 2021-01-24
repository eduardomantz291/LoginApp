import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Image, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '../contexts/auth';

export default function Home() {
  const { signOut, user } = useAuth();

  function hanleSignOut() {
    signOut();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.frame}>
          <Image style={{width: 500, height: 450}} source={require('../images/frame.png')} />
        </View>
        <View style={styles.imageAvatar}>
          <Image style={styles.avatar} source={require('../images/userAvatar.png')} />
        </View>
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },  

  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -589,
  },

  frame: {
  
  },

  imageAvatar: {
    marginTop: -275,
    marginLeft: 143,
  },

  avatar: {
    width: 205, 
    height: 205, 
    borderRadius: 100,
    borderColor: '#191919',
    borderWidth: 9,
    
  }

})