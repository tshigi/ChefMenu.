import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { MenuContext } from './_layout';
import { useRouter } from 'expo-router';

export default function AddMenu() {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Main');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState('');
  const { addMenuItem } = useContext(MenuContext);
  const router = useRouter();

  const handleAdd = () => {
    let e:any = {};
    if(!dishName.trim()) e.dishName='Required';
    if(!description.trim() || description.length < 5) e.description='Min 5 chars required';
    if(!price.trim() || isNaN(Number(price))) e.price='Valid price required';
    setErrors(e);
    if(Object.keys(e).length>0){ Alert.alert('Fix errors'); return; }
    addMenuItem({ dishName, description, course, price: `R${price}` });
    setSuccess(`✅ "${dishName}" added successfully!`);
    Alert.alert('Success', `${dishName} added!`, [{text:'View Menu', onPress:()=>router.push('/menu')}]);
    setDishName(''); setDescription(''); setPrice('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>
      {success? <View style={styles.success}><Text style={styles.successText}>{success}</Text></View>:null}
      <Text style={styles.label}>Dish Name *</Text>
      <TextInput style={[styles.input, errors.dishName && styles.error]} value={dishName} onChangeText={setDishName} placeholder="e.g. Grilled Hake"/>
      <Text style={styles.label}>Description *</Text>
      <TextInput style={[styles.input, styles.area, errors.description && styles.error]} value={description} onChangeText={setDescription} placeholder="Describe" multiline/>
      <Text style={styles.label}>Course *</Text>
      <View style={styles.row}>{['Starter','Main','Dessert'].map(c=><TouchableOpacity key={c} style={[styles.cBtn, course===c && styles.cActive]} onPress={()=>setCourse(c)}><Text style={course===c?{color:'#fff'}:{}}>{c}</Text></TouchableOpacity>)}</View>
      <Text style={styles.label}>Price (R) *</Text>
      <TextInput style={[styles.input, errors.price && styles.error]} value={price} onChangeText={setPrice} placeholder="100" keyboardType="numeric"/>
      <TouchableOpacity style={styles.btn} onPress={handleAdd}><Text style={styles.btnText}>Add Menu Item</Text></TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#fff' },
  title: { fontSize:24, fontWeight:'bold', textAlign:'center', color:'#1e3a5f', marginVertical:15 },
  success: { backgroundColor:'#d1fae5', padding:12, borderRadius:8, marginBottom:10 },
  successText: { color:'#065f46', fontWeight:'bold', textAlign:'center' },
  label: { fontWeight:'bold', marginTop:10, color:'#1e3a5f' },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:8, padding:12, marginTop:5 },
  area: { height:80, textAlignVertical:'top' },
  error: { borderColor:'red', borderWidth:2 },
  row: { flexDirection:'row', marginTop:5 },
  cBtn: { flex:1, borderWidth:1, borderColor:'#1e3a5f', padding:10, borderRadius:8, marginHorizontal:4, alignItems:'center' },
  cActive: { backgroundColor:'#1e3a5f' },
  btn: { backgroundColor:'#1e3a5f', padding:16, borderRadius:12, alignItems:'center', marginTop:20 },
  btnText: { color:'#fff', fontWeight:'bold' },
});