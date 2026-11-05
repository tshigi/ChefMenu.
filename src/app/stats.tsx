import React, { useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';
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
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

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

        <View style={styles.buttonContainer}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 10,
    textAlign: 'center',
    color: '#E8C88A',
    marginBottom: 20,
    letterSpacing: 2,
  },
  subTitle2: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#E8C88A',
    letterSpacing: 2,
  },
  card: {
    backgroundColor: '#252525',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    width: '95%',
  },
  cardGold: {
    backgroundColor: '#E8C88A',
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
    color: '#9E9E9E',
  },
  labelGold: {
    fontSize: 12,
    color: '#1A1A1A',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  valueBlack: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  goldValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8C88A',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  smallCard: {
    backgroundColor: '#252525',
    padding: 14,
    borderRadius: 15,
    width: 100,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3A3A3A',
    marginRight: 10,
  },
  smallCardGold: {
    backgroundColor: '#E8C88A',
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
    color: '#E8C88A',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  smallLabelBlack: {
    fontSize: 9,
    color: '#1A1A1A',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  bigValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#FFFFFF',
  },
  bigValueBlack: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#1A1A1A',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  homeButton: {
    backgroundColor: '#252525',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3A3A3A',
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
  footerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  footerTextGold: {
    color: '#E8C88A',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});