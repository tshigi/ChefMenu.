import React, { useContext, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Alert, 
  Modal,
  StatusBar
} from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function Menu() {
  const router = useRouter();
  const { menuList, deleteMenuItem, updateMenuItem } = useContext(MenuContext);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [editModal, setEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editName, setEditName] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const filteredList = menuList.filter((item: any) => {
    return item.dishName.toLowerCase().includes(search.toLowerCase()) && 
    (filter === 'All' || item.course === filter);
  });

  const startEdit = (item: any) => {
    setEditingItem(item);
    setEditName(item.dishName);
    setEditDesc(item.description);
    setEditPrice(item.price);
    setEditModal(true);
  };

  const saveEdit = () => {
    if (editName.trim() === '' || editPrice.trim() === '') {
      Alert.alert('Error', 'Fill all');
      return;
    }
    updateMenuItem(editingItem.id, { 
      dishName: editName, 
      description: editDesc, 
      price: editPrice, 
      course: editingItem.course 
    });
    setEditModal(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>
        OUR MENU
      </Text>

      <Text style={styles.counter}>
        {filteredList.length} DISHES
      </Text>

      <TextInput 
        style={styles.searchInput} 
        placeholder="Search..." 
        placeholderTextColor="#9E9E9E" 
        value={search} 
        onChangeText={setSearch} 
      />

      <View style={styles.row}>
        <TouchableOpacity 
          onPress={() => setFilter('All')} 
          style={[
            styles.filterBtn, 
            filter === 'All' && styles.activeFilter
          ]}
        >
          <Text 
            style={
              filter === 'All' 
                ? styles.activeText 
                : styles.filterText
            }
          >
            ALL
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setFilter('Starter')} 
          style={[
            styles.filterBtn, 
            filter === 'Starter' && styles.activeFilter
          ]}
        >
          <Text 
            style={
              filter === 'Starter' 
                ? styles.activeText 
                : styles.filterText
            }
          >
            STARTER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setFilter('Main')} 
          style={[
            styles.filterBtn, 
            filter === 'Main' && styles.activeFilter
          ]}
        >
          <Text 
            style={
              filter === 'Main' 
                ? styles.activeText 
                : styles.filterText
            }
          >
            MAIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setFilter('Dessert')} 
          style={[
            styles.filterBtn, 
            filter === 'Dessert' && styles.activeFilter
          ]}
        >
          <Text 
            style={
              filter === 'Dessert' 
                ? styles.activeText 
                : styles.filterText
            }
          >
            DESSERT
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>
              {item.dishName}
            </Text>

            <Text style={styles.course}>
              {item.course}
            </Text>

            <Text style={styles.desc}>
              {item.description}
            </Text>

            <Text style={styles.price}>
              R{item.price}
            </Text>

            <View style={styles.manageRow}>
              <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => startEdit(item)}
              >
                <Text style={styles.smallButtonText}>
                  EDIT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => deleteMenuItem(item.id)}
              >
                <Text style={styles.smallButtonTextBlack}>
                  DELETE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal visible={editModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              EDIT DISH
            </Text>

            <TextInput 
              style={styles.input} 
              value={editName} 
              onChangeText={setEditName} 
              placeholder="Name" 
              placeholderTextColor="#9E9E9E" 
            />

            <TextInput 
              style={styles.input} 
              value={editDesc} 
              onChangeText={setEditDesc} 
              placeholder="Desc" 
              placeholderTextColor="#9E9E9E" 
            />

            <TextInput 
              style={styles.input} 
              value={editPrice} 
              onChangeText={setEditPrice} 
              placeholder="Price" 
              keyboardType="numeric" 
              placeholderTextColor="#9E9E9E" 
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.saveButton} 
                onPress={saveEdit}
              >
                <Text style={styles.btnTextBlack}>
                  UPDATE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.cancelButton} 
                onPress={() => setEditModal(false)}
              >
                <Text style={styles.btnTextWhite}>
                  CANCEL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.homeButton} 
          onPress={() => router.push('/')}
        >
          <Text style={styles.footerText}>
            HOME
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.goldHomeButton} 
          onPress={() => router.push('/stats')}
        >
          <Text style={styles.footerTextBlack}>
            STATS
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
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  counter: {
    fontSize: 10,
    textAlign: 'center',
    color: '#E8C88A',
    marginBottom: 15,
    letterSpacing: 2,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 30,
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#252525',
    color: '#FFFFFF',
    height: 46,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#252525',
    height: 34,
    justifyContent: 'center',
  },
  activeFilter: {
    backgroundColor: '#E8C88A',
    borderColor: '#E8C88A',
  },
  filterText: {
    fontSize: 10,
    color: '#9E9E9E',
  },
  activeText: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 10,
  },
  card: {
    backgroundColor: '#252525',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  course: {
    fontSize: 10,
    color: '#E8C88A',
    marginTop: 3,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  desc: {
    fontSize: 12,
    color: '#EAEAEA',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#E8C88A',
  },
  manageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  editButton: {
    backgroundColor: '#252525',
    borderRadius: 20,
    width: 85,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8C88A',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#E8C88A',
    borderRadius: 20,
    width: 85,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  smallButtonTextBlack: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    padding: 20,
  },
  modalBox: {
    backgroundColor: '#252525',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8C88A',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    height: 44,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  saveButton: {
    backgroundColor: '#E8C88A',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
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
  btnTextBlack: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  btnTextWhite: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  homeButton: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8C88A',
  },
  goldHomeButton: {
    backgroundColor: '#E8C88A',
    borderRadius: 30,
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  footerText: {
    color: '#E8C88A',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  footerTextBlack: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});