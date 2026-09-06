import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MenuContext } from './_layout';
import { useRouter } from 'expo-router';

export default function ViewMenu() {
  const { menuList } = useContext(MenuContext);
  const [filter, setFilter] = useState('All');
  const router = useRouter();

  const filtered = filter === 'All' ? menuList : menuList.filter((i:any)=> i.course === filter);
  const total = filtered.length;
  const sum = filtered.reduce((s:number, i:any)=> s + Number(i.price.replace('R','')), 0);
  const avg = total > 0 ? (sum/total).toFixed(2) : '0';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Menu 🍽️</Text>
      <Text style={styles.stats}>Total: {total} | Avg: R{avg}</Text>

      <View style={styles.filterRow}>
        {['All','Starter','Main','Dessert'].map(c=>(
          <TouchableOpacity key={c} style={[styles.filterBtn, filter===c && styles.filterActive]} onPress={()=>setFilter(c)}>
            <Text style={[styles.filterText, filter===c && styles.filterTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item:any)=> item.id}
        renderItem={({item})=>(
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <View style={styles.tag}><Text style={styles.tagText}>{item.course}</Text></View>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.blueBtn} onPress={()=>router.push('/explore')}>
        <Text style={styles.white}>Add New Dish + Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.greyBtn} onPress={()=>router.push('/')}>
        <Text style={styles.white}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:15, backgroundColor:'#fff' },
  title:{ fontSize:24, fontWeight:'bold', color:'#1e3a5f' },
  stats:{ color:'#666', marginBottom:10 },
  filterRow:{ flexDirection:'row', marginBottom:10 },
  filterBtn:{ padding:8, paddingHorizontal:15, borderRadius:20, backgroundColor:'#eee', marginRight:8 },
  filterActive:{ backgroundColor:'#1e3a5f' },
  filterText:{ color:'#333' },
  filterTextActive:{ color:'#fff', fontWeight:'bold' },
  card:{ backgroundColor:'#f8f9fa', padding:15, borderRadius:10, marginBottom:10, borderLeftWidth:4, borderLeftColor:'#1e3a5f' },
  dishName:{ fontSize:18, fontWeight:'bold', color:'#000' },
  tag:{ backgroundColor:'#dbeafe', alignSelf:'flex-start', paddingHorizontal:8, borderRadius:5, marginVertical:4 },
  tagText:{ fontSize:11, color:'#1e3a5f', fontWeight:'bold' },
  desc:{ color:'#555' },
  price:{ color:'#16a34a', fontWeight:'bold', marginTop:5, fontSize:16 },
  blueBtn:{ backgroundColor:'#2f5d8f', padding:15, borderRadius:10, alignItems:'center', marginTop:10 },
  greyBtn:{ backgroundColor:'#9ca3af', padding:15, borderRadius:10, alignItems:'center', marginTop:8, marginBottom:20 },
  white:{ color:'#fff', fontWeight:'bold' },
});