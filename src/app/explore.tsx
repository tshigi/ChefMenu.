import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function AddMenu() {
  const router = useRouter();
  const { addMenuItem } = useContext(MenuContext);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Starter');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleAdd = () => {
    setErrorMsg('');
    setSuccessMsg('');

    if (dishName.trim() === '' || description.trim() === '' || price.trim() === '') {
      setErrorMsg('Fill all fields');
      return;
    }

    addMenuItem({ dishName, description, price, course });
    setSuccessMsg(dishName + ' added!');
    setDishName('');
    setDescription('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ADD DISH
      </Text>

      <Text style={styles.subTitle}>
        CREATE SIGNATURE
      </Text>

      {errorMsg !== '' && (
        <Text style={styles.error}>
          {errorMsg}
        </Text>
      )}

      {successMsg !== '' && (
        <Text style={styles.success}>
          {successMsg}
        </Text>
      )}

      <Text style={styles.label}>
        DISH NAME
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="e.g. Truffle Pasta" 
        placeholderTextColor="#555" 
        value={dishName} 
        onChangeText={setDishName} 
      />

      <Text style={styles.label}>
        DESCRIPTION
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="Fresh ingredients..." 
        placeholderTextColor="#555" 
        value={description} 
        onChangeText={setDescription} 
      />

      <Text style={styles.label}>
        PRICE (R)
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="120" 
        placeholderTextColor="#555" 
        value={price} 
        onChangeText={setPrice} 
        keyboardType="numeric" 
      />

      <Text style={styles.label}>
        COURSE
      </Text>

      <View style={styles.row}>
        <TouchableOpacity 
          onPress={() => setCourse('Starter')} 
          style={[styles.courseBtn, course === 'Starter' && styles.active]}
        >
          <Text style={course === 'Starter' ? styles.activeText : styles.courseText}>
            STARTER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setCourse('Main')} 
          style={[styles.courseBtn, course === 'Main' && styles.active]}
        >
          <Text style={course === 'Main' ? styles.activeText : styles.courseText}>
            MAIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setCourse('Dessert')} 
          style={[styles.courseBtn, course === 'Dessert' && styles.active]}
        >
          <Text style={course === 'Dessert' ? styles.activeText : styles.courseText}>
            DESSERT
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerButtons}>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleAdd}
        >
          <Text style={styles.blackText}>
            ADD
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.push('/')}
        >
          <Text style={styles.whiteText}>
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
  label: {
    fontSize: 10,
    marginTop: 14,
    fontWeight: 'bold',
    color: '#D4AF37',
  },
  input: {
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 12,
    padding: 14,
    marginTop: 6,
    backgroundColor: '#151515',
    color: 'white',
    height: 46,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  courseBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#151515',
    height: 36,
    justifyContent: 'center',
  },
  courseText: {
    fontSize: 10,
    color: '#888',
  },
  active: {
    backgroundColor: '#D4AF37',
    borderColor: '#D4AF37',
  },
  activeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
  },
  error: {
    backgroundColor: '#2a0a0a',
    color: '#ff5555',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ff000033',
  },
  success: {
    backgroundColor: '#0a2a0a',
    color: '#D4AF37',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#D4AF3733',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  addButton: {
    backgroundColor: '#D4AF37',
    borderRadius: 20,
    width: 120,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  backButton: {
    backgroundColor: '#151515',
    borderRadius: 20,
    width: 120,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
});