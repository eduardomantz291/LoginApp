import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ImageBackground, SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';

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
            <TouchableOpacity style={styles.btnLogout} onPress={() => {hanleSignOut()}}>
              <Text style={styles.textLogout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="light"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
  },

  UserContainer: {},

  FrameContainer: {
    marginTop: -55,
  },

  frame: {
    width: '100%',
  },

  UserDatail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 120,
  },
  
  UserAvatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },

  UserName: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 10,
  },

  UserEmail: {  
    color: '#fff',
    fontSize: 15,
    paddingTop: 5,
  },

  btnLogout: {
    backgroundColor: '#04D361',
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:  7,
    marginTop: 80,
  },

  textLogout: {
    color: '#fff',
  }
});