import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';
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
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

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
          placeholderTextColor="#9E9E9E" 
          value={dishName} 
          onChangeText={setDishName} 
        />

        <Text style={styles.label}>
          DESCRIPTION
        </Text>

        <TextInput 
          style={styles.input} 
          placeholder="Fresh ingredients..." 
          placeholderTextColor="#9E9E9E" 
          value={description} 
          onChangeText={setDescription} 
        />

        <Text style={styles.label}>
          PRICE (R)
        </Text>

        <TextInput 
          style={styles.input} 
          placeholder="120" 
          placeholderTextColor="#9E9E9E" 
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
            style={[
              styles.courseBtn, 
              course === 'Starter' && styles.active
            ]}
          >
            <Text 
              style={
                course === 'Starter' 
                  ? styles.activeText 
                  : styles.courseText
              }
            >
              STARTER
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setCourse('Main')} 
            style={[
              styles.courseBtn, 
              course === 'Main' && styles.active
            ]}
          >
            <Text 
              style={
                course === 'Main' 
                  ? styles.activeText 
                  : styles.courseText
              }
            >
              MAIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setCourse('Dessert')} 
            style={[
              styles.courseBtn, 
              course === 'Dessert' && styles.active
            ]}
          >
            <Text 
              style={
                course === 'Dessert' 
                  ? styles.activeText 
                  : styles.courseText
              }
            >
              DESSERT
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
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
  label: {
    fontSize: 10,
    marginTop: 14,
    fontWeight: 'bold',
    color: '#E8C88A',
    width: '90%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 12,
    padding: 14,
    marginTop: 6,
    backgroundColor: '#252525',
    color: '#FFFFFF',
    height: 46,
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
    width: '90%',
  },
  courseBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#252525',
    height: 36,
    justifyContent: 'center',
  },
  courseText: {
    fontSize: 10,
    color: '#9E9E9E',
  },
  active: {
    backgroundColor: '#E8C88A',
    borderColor: '#E8C88A',
  },
  activeText: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 10,
  },
  error: {
    backgroundColor: '#2A0A0A',
    color: '#FF5555',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FF000033',
    width: '90%',
  },
  success: {
    backgroundColor: '#0A2A0A',
    color: '#E8C88A',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#E8C88A33',
    width: '90%',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  addButton: {
    backgroundColor: '#E8C88A',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
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
  whiteText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});