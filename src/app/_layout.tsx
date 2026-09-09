import { Stack } from 'expo-router';
import React, { createContext, useState } from 'react';

export const MenuContext = createContext(null as any);

export default function Layout() {
  const [menuList, setMenuList] = useState([
    { id: '1', dishName: 'Tomato Soup', description: 'Fresh tomato soup with basil', course: 'Starter', price: '45' },
    { id: '2', dishName: 'Caesar Salad', description: 'Crispy lettuce with parmesan', course: 'Starter', price: '60' },
    { id: '3', dishName: 'Grilled pork', description: 'Juicy pork steak with pap', course: 'Main', price: '180' },
    { id: '4', dishName: 'Chicken Pasta', description: 'Creamy pasta with grilled chicken', course: 'Main', price: '120' },
    { id: '5', dishName: 'Vannila Cake', description: 'Rich vannila cake with ice cream', course: 'Dessert', price: '55' },
    { id: '6', dishName: 'Fruit Salad', description: 'Fresh seasonal fruits', course: 'Dessert', price: '40' },
    { id: '7', dishName: 'Mogodu', description: 'Full plate mogodu traditional', course: 'Main', price: '100' },
    { id: '8', dishName: 'Grilled Lamb', description: 'Fresh lamb with lemon side', course: 'Main', price: '130' },
    { id: '9', dishName: 'Fish & Chips', description: 'Battered fish with chips and tartar', course: 'Main', price: '95' },
  ]);

  const addMenuItem = (item: any) => {
    setMenuList([...menuList, { id: Date.now().toString(), ...item }]);
  };

  return (
    <MenuContext.Provider value={{ menuList, addMenuItem }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e3a5f',
          },
          headerTintColor: '#fff',
          headerBackVisible: false,
          headerLeft: () => null,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="menu" options={{ title: 'View Menu' }} />
        <Stack.Screen name="explore" options={{ title: 'Add Menu Item' }} />
      </Stack>
    </MenuContext.Provider>
  );
}