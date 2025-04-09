import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Aftab Khan</Text>
      <Text style={styles.bio}>A passionate developer 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  avatar: {
    width: 100, height: 100, borderRadius: 50, marginBottom: 10
  },
  name: {
    fontSize: 20, fontWeight: 'bold'
  },
  bio: {
    fontSize: 16, color: 'gray', marginTop: 4
  }
});
