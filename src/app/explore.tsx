import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddMenu() {
  const router = useRouter();
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [course, setCourse] = useState<string>('Starter');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');

  const handleAdd = (): void => {
    setErrorMsg(''); setSuccessMsg('');
    if (dishName.trim() === '' || description.trim() === '' || price.trim() === '') {
      setErrorMsg('Error: Please fill in all fields'); return;
    }
    setSuccessMsg('Success: ' + dishName + ' (' + course + ') added! Price: R' + price);
    setDishName(''); setDescription(''); setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>
      {errorMsg !== '' && <Text style={styles.error}>{errorMsg}</Text>}
      {successMsg !== '' && <Text style={styles.success}>{successMsg}</Text>}

      <Text style={styles.label}>Dish Name</Text>
      <TextInput style={styles.input} placeholder="Enter dish name" value={dishName} onChangeText={setDishName} />
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} placeholder="Enter description" value={description} onChangeText={setDescription} />
      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} placeholder="Enter price" value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Text style={styles.label}>Course</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setCourse('Starter')} style={[styles.courseBtn, course === 'Starter' && styles.active]}><Text style={course === 'Starter' ? styles.activeText : undefined}>Starter</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCourse('Main')} style={[styles.courseBtn, course === 'Main' && styles.active]}><Text style={course === 'Main' ? styles.activeText : undefined}>Main</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCourse('Dessert')} style={[styles.courseBtn, course === 'Dessert' && styles.active]}><Text style={course === 'Dessert' ? styles.activeText : undefined}>Dessert</Text></TouchableOpacity>
      </View>

      {/* TWO BUTTONS NEXT TO EACH OTHER AT BOTTOM */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  label: { fontSize: 16, marginTop: 10 },
  input: { borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginTop: 5 },
  row: { flexDirection: 'row', marginTop: 5 },
  courseBtn: { padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginRight: 10 },
  active: { backgroundColor: 'blue' },
  activeText: { color: 'white', fontWeight: 'bold' as const },
  error: { backgroundColor: '#ffdddd', color: 'red', padding: 10, borderRadius: 5, marginBottom: 10, fontWeight: 'bold' as const },
  success: { backgroundColor: '#ddffdd', color: 'green', padding: 10, borderRadius: 5, marginBottom: 10, fontWeight: 'bold' as const },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  addButton: { backgroundColor: 'blue', padding: 15, borderRadius: 5, width: '48%', alignItems: 'center' },
  backButton: { backgroundColor: 'gray', padding: 15, borderRadius: 5, width: '48%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' as const }
});