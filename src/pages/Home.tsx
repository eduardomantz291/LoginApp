import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '../contexts/auth';

export default function Home() {
  const { signOut, user } = useAuth();

  function hanleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>Hello {user?.name}</Text>
      <Text>Hello {user?.email}</Text>
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