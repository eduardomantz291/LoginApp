import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import AuthContext from '../contexts/auth';

export default function Home() {
  const { signOut } = useContext(AuthContext);

  function hanleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>Hello Worlds</Text>
      <Button title="Logout" onPress={() => hanleSignOut()}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },  
})