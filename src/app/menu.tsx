import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function Menu() {
  const router = useRouter();
  const { menuList } = useContext(MenuContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Chef Menu List
      </Text>

      <FlatList
        data={menuList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>
              {item.dishName}
            </Text>

            <Text style={styles.course}>
              Course: {item.course}
            </Text>

            <Text style={styles.desc}>
              {item.description}
            </Text>

            <Text style={styles.price}>
              Price: R{item.price}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push('/')}
      >
        <Text style={styles.buttonText}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  course: {
    fontSize: 14,
    color: 'blue',
    marginTop: 3,
  },
  desc: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'green',
  },
  homeButton: {
    backgroundColor: '#1e3a5f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});