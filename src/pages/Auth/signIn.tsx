import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { TouchableOpacity, Keyboard, StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

export default function SignIn() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 100}));
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}));
  const [offesetLogo] = useState(new Animated.ValueXY({x: 0, y: -100}));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  async function handleLoginForm() {
    if (email && password) {
      const emailData = email;
      const passwordData = password;

    await signIn({
        "email": `${emailData}`,
        "password": `${passwordData}`
      });
    } else {
      alert("coloque o email e a senha");
    }
  }

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
      }),
      Animated.spring(offesetLogo.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
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

  function hadleToNavigateSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Animated.View style={[styles.containerLogo , {
        transform: [
          { translateY: offesetLogo.y, }
        ]
      }]}>
        <Animated.Image 
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../images/logo.png')}
        />
      </Animated.View>

      <Animated.View style={[styles.containerInput, {
        opacity: opacity,
        transform: [
          { translateY: offset.y }
        ]
      }]}> 
        <TextInput style={styles.inputBlock} placeholder="Email" autoCorrect={false} onChangeText={setEmail} />
        <TextInput style={styles.inputBlock} placeholder="Password" secureTextEntry={true} autoCorrect={false} onChangeText={setPassword} />
        
        <TouchableOpacity style={styles.btnSubmit} onPress={() => {handleLoginForm()}}>
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnRegister} onPress={() => {hadleToNavigateSignUp()}}>
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