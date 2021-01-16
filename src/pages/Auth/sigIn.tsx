import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 100}));
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}));

  useEffect(() => {
   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 85,
        duration: 100,
        useNativeDriver: false
      }),

      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
        useNativeDriver: false
      }),

      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image 
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../images/logo.png')}
        />
      </View>

      <Animated.View style={[styles.containerInput, {
        opacity: opacity,
        transform: [
          { translateY: offset.y }
        ]
      }]}> 
        <TextInput style={styles.inputBlock} placeholder="Email" autoCorrect={false} onChangeText={() => {}} />
        <TextInput style={styles.inputBlock} placeholder="Password" autoCorrect={false} onChangeText={() => {}} />
        
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.TextRegister}>Criar conta</Text>
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