# ChefMenu - MAST5112 Final POE
GitHub: https://github.com/tshigi/ChefMenu


## Change Log 

### . Manage Menu Items 
- Implemented Edit existing menu item - taps edit, pre-fills form
- Implemented Update menu item information - saves immediately
- Implemented Delete menu item - removes and updates UI instantly
- <img width="1600" height="900" alt="mast5" src="https://github.com/user-attachments/assets/f62fdadd-76d9-49fd-9f6f-ae134bc6420e" />


### . Search and Filter 
- Search for menu item by name - TextInput with live search
- Filter by course (Starter, Main Course, Dessert)
- Clear search/filter to display all items again
- <img width="1600" height="897" alt="mast4" src="https://github.com/user-attachments/assets/9963c38b-cf45-4bb0-8944-b33a93e08127" />


### . Display Menu Statistics 
- Total number of menu items
- Average price of all items
- Number of items per course (Starter/Main/Dessert)
- Displayed in clear, easy-to-read cards on stats.tsx
- <img width="1600" height="900" alt="mast6" src="https://github.com/user-attachments/assets/0457331f-8a14-465a-a6bf-57dab9a50c44" />

- 

### . Enhance Application 
- Improved layout: Fixed background to #1A1A1A in _layout.tsx
- Reusable components: outlineButton { width:200, height:48, borderRadius:30, borderColor:#E8C88A }
- Reusable functions: calculateTotal(), calculateAverage(), filterByCourse()
- Improved code organisation: All styles in StyleSheet.create, removed inline styles
- Meaningful names: menuItems, filteredItems, handleEdit, handleDelete
- Improved validation: Checks empty fields, price validation, user feedback with Alerts
- Consistent user-friendly experience across index.tsx, menu.tsx, explore.tsx, stats.tsx
- <img width="1600" height="897" alt="mast1" src="https://github.com/user-attachments/assets/79af9b65-07f3-41a0-9205-a05e7d04b11d" />


### . User Experience 
- Easy to use, clear navigation via Expo Router
- Meaningful success/error messages
- Validates input appropriately
- Consistent look and feel #1A1A1A + gold #E8C88A
- 

## Video Demonstration
YouTube Link: 

## How to Run
npm install
npx expo start

