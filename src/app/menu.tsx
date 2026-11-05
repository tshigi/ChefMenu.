
import React, { useContext, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Alert, 
  Modal 
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
      <Text style={styles.title}>
        OUR MENU
      </Text>
      <Text style={styles.counter}>
        {filteredList.length} DISHES
      </Text>

      <TextInput 
        style={styles.searchInput} 
        placeholder="Search..." 
        placeholderTextColor="#666" 
        value={search} 
        onChangeText={setSearch} 
      />

      <View style={styles.row}>
        <TouchableOpacity 
          onPress={() => setFilter('All')} 
          style={[styles.filterBtn, filter === 'All' && styles.activeFilter]}
        >
          <Text style={filter === 'All' ? styles.activeText : styles.filterText}>
            ALL
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setFilter('Starter')} 
          style={[styles.filterBtn, filter === 'Starter' && styles.activeFilter]}
        >
          <Text style={filter === 'Starter' ? styles.activeText : styles.filterText}>
            STARTER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setFilter('Main')} 
          style={[styles.filterBtn, filter === 'Main' && styles.activeFilter]}
        >
          <Text style={filter === 'Main' ? styles.activeText : styles.filterText}>
            MAIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setFilter('Dessert')} 
          style={[styles.filterBtn, filter === 'Dessert' && styles.activeFilter]}
        >
          <Text style={filter === 'Dessert' ? styles.activeText : styles.filterText}>
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
                <Text style={styles.smallButtonText}>
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
              placeholderTextColor="#666" 
            />

            <TextInput 
              style={styles.input} 
              value={editDesc} 
              onChangeText={setEditDesc} 
              placeholder="Desc" 
              placeholderTextColor="#666" 
            />

            <TextInput 
              style={styles.input} 
              value={editPrice} 
              onChangeText={setEditPrice} 
              placeholder="Price" 
              keyboardType="numeric" 
              placeholderTextColor="#666" 
            />

            <View style={styles.bottomRow}>
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

      <View style={styles.footerButtons}>
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
    backgroundColor: '#0a0a0a',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  counter: {
    fontSize: 10,
    textAlign: 'center',
    color: '#D4AF37',
    marginBottom: 15,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 30,
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#151515',
    color: 'white',
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
    borderColor: '#333',
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#151515',
    height: 34,
    justifyContent: 'center',
  },
  activeFilter: {
    backgroundColor: '#D4AF37',
    borderColor: '#D4AF37',
  },
  filterText: {
    fontSize: 10,
    color: '#888',
  },
  activeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
  },
  card: {
    backgroundColor: '#151515',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#222',
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  course: {
    fontSize: 10,
    color: '#D4AF37',
    marginTop: 3,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#D4AF37',
  },
  manageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  editButton: {
    backgroundColor: '#222',
    borderRadius: 20,
    width: 85,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4AF37',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#D4AF37',
    borderRadius: 20,
    width: 85,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    padding: 20,
  },
  modalBox: {
    backgroundColor: '#151515',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D4AF37',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    backgroundColor: '#0a0a0a',
    color: 'white',
    height: 44,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  saveButton: {
    backgroundColor: '#D4AF37',
    borderRadius: 20,
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#222',
    borderRadius: 20,
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  btnTextBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
  },
  btnTextWhite: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  homeButton: {
    backgroundColor: '#151515',
    borderRadius: 20,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 15,
  },
  goldHomeButton: {
    backgroundColor: '#D4AF37',
    borderRadius: 20,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
  footerTextBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
  },
});