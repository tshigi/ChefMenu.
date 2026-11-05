import React, { useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function App() {
  const { menuList } = useContext(MenuContext);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

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
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  line: {
    color: '#E8C88A',
    textAlign: 'center',
    marginTop: 5,
  },
  subTitle: {
    fontSize: 11,
    textAlign: 'center',
    color: '#E8C88A',
    marginBottom: 35,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  welcomeBox: {
    backgroundColor: '#252525',
    padding: 25,
    borderRadius: 20,
    marginBottom: 35,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C5A880',
    width: '90%',
  },
  welcome: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  welcomeGold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E8C88A',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8C88A',
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
    color: '#FFFFFF',
  },
  countLabel: {
    fontSize: 10,
    color: '#EAEAEA',
    marginTop: 3,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  goldButton: {
    backgroundColor: '#E8C88A',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  blackButton: {
    backgroundColor: '#252525',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3A3A3A',
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
    borderColor: '#E8C88A',
    marginTop: 12,
  },
  blackText: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  goldText: {
    color: '#E8C88A',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  whiteText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});