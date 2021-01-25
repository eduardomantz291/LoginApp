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
        <View style={styles.UserContainer}>
          <View style={styles.FrameContainer}>
            <Image style={styles.frame} source={require('../images/frame.png')}/>
          </View>
          <View style={styles.UserDatail}>
            <Image style={styles.UserAvatar} source={require('../images/userAvatar.png')}/>
            <Text style={styles.UserName}>{user?.name}</Text>
            <Text style={styles.UserEmail}>{user?.email}</Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="dark"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
  },

  UserContainer: {

  },

  FrameContainer: {

  },

  frame: {
    width: '100%',
  },

  UserDatail: {

  },
  
  UserAvatar: {

  },

  UserName: {

  },

  UserEmail: {

  }
})