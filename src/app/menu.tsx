import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MenuContext } from './_layout';
import { useRouter } from 'expo-router';

type MenuItem = {
  id: string;
  dishName: string;
  description: string;
  price: string;
  course: string;
};

export default function ViewMenu() {
  const { menuList } = useContext(MenuContext);
  const [filter, setFilter] = useState<string>('All');
  const router = useRouter();

  const filtered: MenuItem[] = filter === 'All' 
    ? menuList 
    : menuList.filter((item: MenuItem) => item.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Menu</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setFilter('All')} style={styles.btn}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Starter')} style={styles.btn}>
          <Text>Starter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Main')} style={styles.btn}>
          <Text>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Dessert')} style={styles.btn}>
          <Text>Dessert</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.dishName}</Text>
            <Text>{item.course}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.blueBtn} onPress={() => router.push('/explore')}>
        <Text style={styles.white}>Add New Dish + Filter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.greyBtn} onPress={() => router.push('/')}>
        <Text style={styles.white}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold' },
  row: { flexDirection: 'row', marginTop: 10, marginBottom: 10 },
  btn: { padding: 8, backgroundColor: '#eee', marginRight: 8, borderRadius: 5 },
  card: { backgroundColor: '#f5f5f5', padding: 10, marginBottom: 8, borderRadius: 5 },
  name: { fontSize: 16, fontWeight: 'bold' },
  blueBtn: { backgroundColor: 'blue', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  greyBtn: { backgroundColor: 'gray', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 8 },
  white: { color: 'white', fontWeight: 'bold' }
});