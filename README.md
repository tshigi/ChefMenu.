# ChefMenu - MAST5112 Final POE
GitHub: https://github.com/tshigi/ChefMenu


## Change Log 

### 1. Manage Menu Items 
- Implemented Edit existing menu item - taps edit, pre-fills form
- Implemented Update menu item information - saves immediately
- Implemented Delete menu item - removes and updates UI instantly

### 2. Search and Filter (20 Marks)
- Search for menu item by name - TextInput with live search
- Filter by course (Starter, Main Course, Dessert)
- Clear search/filter to display all items again

### 3. Display Menu Statistics 
- Total number of menu items
- Average price of all items
- Number of items per course (Starter/Main/Dessert)
- Displayed in clear, easy-to-read cards on stats.tsx

### 4. Enhance Application (20 Marks) - REFACTORING
- Improved layout: Fixed background to #1A1A1A in _layout.tsx
- Reusable components: outlineButton { width:200, height:48, borderRadius:30, borderColor:#E8C88A }
- Reusable functions: calculateTotal(), calculateAverage(), filterByCourse()
- Improved code organisation: All styles in StyleSheet.create, removed inline styles
- Meaningful names: menuItems, filteredItems, handleEdit, handleDelete
- Improved validation: Checks empty fields, price validation, user feedback with Alerts
- Consistent user-friendly experience across index.tsx, menu.tsx, explore.tsx, stats.tsx

### 5. User Experience 
- Easy to use, clear navigation via Expo Router
- Meaningful success/error messages
- Validates input appropriately
- Consistent look and feel #1A1A1A + gold #E8C88A

## Video Demonstration
YouTube Link: 

## How to Run
npm install
npx expo start

