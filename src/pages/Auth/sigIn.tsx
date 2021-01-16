import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
          source={require('../../images/logo.png')}
        />
      </View>
      <View style={styles.containerInput}> 
        <TextInput style={styles.inputBlock} placeholder="Email" autoCorrect={false} onChangeText={() => {}} />
        <TextInput style={styles.inputBlock} placeholder="Password" autoCorrect={false} onChangeText={() => {}} />
        
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.TextRegister}>Criar conta</Text>
        </TouchableOpacity>
      
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },

  containerInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },

  inputBlock: {
    backgroundColor: '#fff',
    width: '90%',
    height: '14%',
    paddingLeft: 10,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7
  },

  btnSubmit: {
    backgroundColor: '#36aaff',
    width: 350,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  btnText: {
    color: '#fff',
    fontSize: 18
  },

  btnRegister: {
    marginTop: 10,
  },

  TextRegister: {
    color: '#fff'
  }
});