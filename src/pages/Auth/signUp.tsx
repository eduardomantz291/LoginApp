import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignUp() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('../../images/logo.png')} />
      </View>

      <View style={styles.containerInput}>
        <TextInput style={styles.inputBlock} placeholder="Nome" autoCorrect={false} onChangeText={() => {}}/>
        <TextInput style={styles.inputBlock} placeholder="Email" autoCorrect={false} onChangeText={() => {}}/>
        <TextInput style={styles.inputBlock} placeholder="Passoword" autoCorrect={false} onChangeText={() => {}}/>
        <TextInput style={styles.inputBlock} placeholder="Confirm Password" autoCorrect={false} onChangeText={() => {}}/>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.TextSubmit}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.TextLogin}>Já tem uma conta</Text>
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

  },

  containerInput: {

  },

  inputBlock: {

  },

  btnSubmit: {

  },
  
  TextSubmit: {

  },

  btnLogin: {

  }, 

  TextLogin: {

  }
});