import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Animated,TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [offest] = useState(new Animated.ValueXY({x: 0, y: 200}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offest.y, {
        toValue: 0,
        speed: 2,
        bounciness: 18,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      })
    ]).start();
  }, [])

  const navigation = useNavigation();

  function handleToNavigationLoginForm() {
    navigation.navigate('SignIn');
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('../../images/logo.png')} />
      </View>

      <Animated.View style={[styles.containerInput, {
        opacity: opacity,
        transform: [
          { translateY:  offest.y }
        ]
      }]}>
        <TextInput style={styles.inputBlock} placeholder="Nome" autoCorrect={false} onChangeText={() => {}}/>
        <TextInput style={styles.inputBlock} placeholder="Email" autoCorrect={false} onChangeText={() => {}}/>
        <View style={styles.containerInputPassword}>
          <TextInput style={styles.inputPassword} placeholder="Passoword" autoCorrect={false} onChangeText={() => {}}/>
          <TextInput style={styles.inputConfirmPassword} placeholder="Confirm Password" autoCorrect={false} onChangeText={() => {}}/>
        </View>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.TextSubmit}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnLogin} onPress={() => {handleToNavigationLoginForm()}}>
          <Text style={styles.TextLogin}>Já tem uma conta</Text>
        </TouchableOpacity>
      </Animated.View>

      <StatusBar style="inverted"/>
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
    width: 350,
    height: 45,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7
  },

  containerInputPassword: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350
  },

  inputPassword: {
    backgroundColor: '#fff',
    width: 160,
    height: 45,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7
  },

  inputConfirmPassword: {
    backgroundColor: '#fff',
    width: 160,
    height: 45,
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

  TextSubmit: {
    color: '#fff',
    fontSize: 18
  },

  btnLogin: {
    marginTop: 10,
  },

  TextLogin: {
    color: '#fff',
  }
});