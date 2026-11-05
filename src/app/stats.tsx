import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function Stats() {
  const { menuList } = useContext(MenuContext);
  const router = useRouter();
  const totalItems = menuList.length;
  const totalPrice = menuList.reduce((sum: number, item: any) => sum + Number(item.price), 0);
  const averagePrice = totalItems > 0 ? (totalPrice / totalItems).toFixed(2) : '0';
  const starters = menuList.filter((item: any) => item.course === 'Starter').length;
  const mains = menuList.filter((item: any) => item.course === 'Main').length;
  const desserts = menuList.filter((item: any) => item.course === 'Dessert').length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        STATISTICS
      </Text>

      <Text style={styles.subTitle}>
        RESTAURANT ANALYTICS
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Total Dishes
        </Text>
        <Text style={styles.value}>
          {totalItems}
        </Text>
      </View>

      <View style={styles.cardGold}>
        <Text style={styles.labelGold}>
          Average Price
        </Text>
        <Text style={styles.valueBlack}>
          R{averagePrice}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Total Menu Value
        </Text>
        <Text style={styles.goldValue}>
          R{totalPrice}
        </Text>
      </View>

      <Text style={styles.subTitle2}>
        BY COURSE
      </Text>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.smallLabel}>
            STARTER
          </Text>
          <Text style={styles.bigValue}>
            {starters}
          </Text>
        </View>

        <View style={styles.smallCardGold}>
          <Text style={styles.smallLabelBlack}>
            MAIN
          </Text>
          <Text style={styles.bigValueBlack}>
            {mains}
          </Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.smallLabel}>
            DESSERT
          </Text>
          <Text style={styles.bigValue}>
            {desserts}
          </Text>
        </View>
      </View>

      <View style={styles.footerButtons}>
        <TouchableOpacity 
          style={styles.homeButton} 
          onPress={() => router.push('/menu')}
        >
          <Text style={styles.footerText}>
            MENU
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.outlineButton} 
          onPress={() => router.push('/')}
        >
          <Text style={styles.footerTextGold}>
            HOME
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  subTitle: {
    fontSize: 10,
    textAlign: 'center',
    color: '#D4AF37',
    marginBottom: 20,
  },
  subTitle2: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#D4AF37',
  },
  card: {
    backgroundColor: '#151515',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    width: '95%',
  },
  cardGold: {
    backgroundColor: '#D4AF37',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    width: '95%',
  },
  label: {
    fontSize: 12,
    color: '#888',
  },
  labelGold: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  valueBlack: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  goldValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D4AF37',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  smallCard: {
    backgroundColor: '#151515',
    padding: 14,
    borderRadius: 15,
    width: 100,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#222',
    marginRight: 10,
  },
  smallCardGold: {
    backgroundColor: '#D4AF37',
    padding: 14,
    borderRadius: 15,
    width: 100,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
    marginRight: 10,
  },
  smallLabel: {
    fontSize: 9,
    color: '#D4AF37',
    fontWeight: 'bold',
  },
  smallLabelBlack: {
    fontSize: 9,
    color: 'black',
    fontWeight: 'bold',
  },
  bigValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
  },
  bigValueBlack: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  homeButton: {
    backgroundColor: '#151515',
    borderRadius: 20,
    width: 120,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 15,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: 120,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4AF37',
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
  footerTextGold: {
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: 11,
  },
});