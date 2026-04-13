# 🛒 Amazon Clone — Full Project

## 📁 Folder Structure

```
amazon-full/
│
├── amazon.html
│
├── styles/
│   ├── shared/
│   │   ├── general.css          ← Variables, reset, modals, footer
│   │   └── amazon-header.css    ← Header, search, navbar
│   └── pages/
│       └── amazon.css           ← Hero, filters, products, cart, modals
│
├── scripts/
│   ├── data.js       ← Products array + countries list
│   ├── state.js      ← Global state + helper functions
│   ├── auth.js       ← Sign in / Register / Sign out
│   ├── location.js   ← Delivery location picker
│   ├── cart.js       ← Cart drawer + checkout + orders
│   ├── products.js   ← Render, filter, sort, search, modal
│   ├── ui.js         ← Hero slider + toast + nav extras
│   └── main.js       ← Entry point (initializes everything)
│
└── images/           ← Drop your product images here
    ├── products/
    ├── icons/
    └── ratings/
```

## 🚀 How to Run

1. Extract this zip
2. Open the folder in **VS Code**
3. Right-click `amazon.html` → **Open with Live Server**

## ✨ Features

### 👤 Auth System
- Sign In with email + password (2-step flow)
- Create Account (with validation)
- Sign Out
- Dropdown account menu in header

### 📍 Delivery Location
- Choose from 16 countries worldwide
- Custom city / pincode input
- Shows delivery date on every product

### 🛒 Cart System
- Add/remove items with quantity selector
- Unique tracking ID per cart item
- Live subtotal calculation
- Estimated delivery date per item
- Checkout creates a real order record

### 📦 Order Tracking
- Orders stored in session with order ID
- Tracking ID (e.g. AMZ-XXXX-XXXX-XXXX)
- Tracking progress bar
- View all orders from Account dropdown

### 🔍 Search & Filter
- Search by name, brand, category, description
- Filter chips by category
- Sort by price, rating, newest
- Clear search button

### 🎠 Hero Banner
- 3-slide auto-rotating hero slider
- Prev/next controls + dot indicators

### ❤️ Wishlist
- Save/unsave any product
- Wishlist count in account dropdown

### 🏷️ Product Cards
- Stock level indicator
- Tracking ID badge
- Savings percentage
- Prime delivery badge
- Click for full detail modal

## 🛠️ Tech Stack
- HTML5, CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+, no frameworks)
- Google Fonts (Nunito)
