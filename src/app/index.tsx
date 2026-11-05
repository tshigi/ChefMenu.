import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function App() {
  const { menuList } = useContext(MenuContext);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        CHRISTOFFEL'S
      </Text>
      <Text style={styles.line}>
        ━━━━━
      </Text>
      <Text style={styles.subTitle}>
        LUXURY DINING
      </Text>

      <View style={styles.welcomeBox}>
        <Text style={styles.welcome}>
          Welcome, Chef
        </Text>
        <Text style={styles.welcomeGold}>
          Christoffel!
        </Text>
        <View style={styles.divider} />
        <View style={styles.countBox}>
          <Text style={styles.count}>
            {menuList.length}
          </Text>
          <Text style={styles.countLabel}>
            Signature Dishes
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.goldButton} 
          onPress={() => router.push('/menu')}
        >
          <Text style={styles.blackText}>
            VIEW MENU
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.blackButton} 
          onPress={() => router.push('/explore')}
        >
          <Text style={styles.goldText}>
            ADD NEW DISH
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.outlineButton} 
          onPress={() => router.push('/stats')}
        >
          <Text style={styles.whiteText}>
            STATISTICS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  line: {
    color: '#D4AF37',
    textAlign: 'center',
    marginTop: 5,
  },
  subTitle: {
    fontSize: 11,
    textAlign: 'center',
    color: '#D4AF37',
    marginBottom: 35,
    fontWeight: 'bold',
  },
  welcomeBox: {
    backgroundColor: '#151515',
    padding: 25,
    borderRadius: 20,
    marginBottom: 35,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D4AF37',
    width: '90%',
  },
  welcome: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  welcomeGold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D4AF37',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#D4AF37',
    width: 60,
    marginTop: 15,
    marginBottom: 15,
  },
  countBox: {
    alignItems: 'center',
  },
  count: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  countLabel: {
    fontSize: 10,
    color: '#888',
    marginTop: 3,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  goldButton: {
    backgroundColor: '#D4AF37',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  blackButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 12,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4AF37',
    marginTop: 12,
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  goldText: {
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: 12,
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});