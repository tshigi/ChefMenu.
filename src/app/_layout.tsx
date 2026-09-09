import { Stack } from 'expo-router';
import React, { createContext, useState } from 'react';

export const MenuContext = createContext<any>(null);

export default function Layout() {
  const [menuList, setMenuList] = useState<any[]>([
    { id: '1', dishName: 'Tomato Soup', description: 'Fresh tomato soup with basil', course: 'Starter', price: 'R45' },
    { id: '2', dishName: 'Caesar Salad', description: 'Crispy lettuce with parmesan', course: 'Starter', price: 'R60' },
    { id: '3', dishName: 'Grilled pork', description: 'Juicy pork steak with pap', course: 'Main', price: 'R180' },
    { id: '4', dishName: 'Chicken Pasta', description: 'Creamy pasta with grilled chicken', course: 'Main', price: 'R120' },
    { id: '5', dishName: 'Vannila Cake', description: 'Rich vannila cake with ice cream', course: 'Dessert', price: 'R55' },
    { id: '6', dishName: 'Fruit Salad', description: 'Fresh seasonal fruits', course: 'Dessert', price: 'R40' },
    { id: '7', dishName: 'Mogodu', description: 'Full plate mogodu traditional', course: 'Main', price: 'R100' },
    { id: '8', dishName: 'Grilled Lamb', description: 'Fresh lamb with lemon side', course: 'Main', price: 'R130' },
    { id: '9', dishName: 'Fish & Chips', description: 'Battered fish with chips and tartar', course: 'Main', price: 'R95' },
  ]);

  const addMenuItem = (item: any) => {
    setMenuList([...menuList, { id: Date.now().toString(), ...item }]);
  };
  
  return (
    <MenuContext.Provider value={{ menuList, addMenuItem, setMenuList }}>
      <Stack screenOptions={{ headerStyle: { backgroundColor: '#1e3a5f' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="index" options={{ title: "  Home" }} />
        <Stack.Screen name="explore" options={{ title: "Add Menu Item" }} />
        <Stack.Screen name="menu" options={{ title: "View Menu" }} />
      </Stack>
    </MenuContext.Provider>
  );

}