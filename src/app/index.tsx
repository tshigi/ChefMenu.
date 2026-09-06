import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function App() {
  const { menuList } = useContext(MenuContext);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/chef.jpg')} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>Christoffel's Menu</Text>
      <Text style={styles.subTitle}>Chef Management App</Text>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcome}>Welcome, Chef Christoffel! 👨‍🍳</Text>
        <Text style={styles.count}>Menu has {menuList.length} dishes</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => router.push('/explore')}>
        <Text style={styles.buttonText}>Add Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#fff' },
  image: { width: 130, height: 130, alignSelf: 'center', marginBottom: 15, borderRadius: 65 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#1e3a5f' },
  subTitle: { fontSize: 12, textAlign: 'center', color: '#888', marginBottom: 20, letterSpacing: 2 },
  welcomeBox: { backgroundColor: '#f0f6ff', padding: 15, borderRadius: 12, marginBottom: 20, alignItems: 'center' },
  welcome: { fontSize: 18, fontWeight: 'bold', color: '#1e3a5f', textAlign: 'center' },
  count: { fontSize: 14, color: '#666', marginTop: 5 },
  button: { backgroundColor: '#1e3a5f', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  addButton: { backgroundColor: '#666' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});