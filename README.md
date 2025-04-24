# 📘 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit web application that simulates real-time updates for cryptocurrency prices, inspired by platforms like CoinMarketCap.

---

## 🎯 Objective

Track live crypto prices using simulated WebSocket data, Redux for global state management, and a dynamic, color-coded table UI.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite/CRA)
- **State Management:** Redux Toolkit
- **Styling:** CSS Modules / Tailwind (optional)
- **Charts:** Static SVG for 7D visualization
- **Utilities:** setInterval for simulating WebSocket updates

---

## 📊 Features

- 📈 Responsive table displaying:
  - Logo, Name, Symbol
  - Price, 1h %, 24h %, 7d %
  - Market Cap, 24h Volume
  - Circulating/Max Supply
  - 7-Day static chart (SVG)
- 🔁 Simulated real-time updates every 1–2 seconds
- ✅ Color-coded percentage changes:
  - Green: positive
  - Red: negative
- 🧠 Fully Redux-managed state
- 📱 Mobile-friendly, responsive layout

---

## 🧠 Architecture Overview

- `src/redux/`: Redux slices and store configuration
- `src/features/`: Components that interact with Redux
- `src/components/`: Reusable UI components (e.g., table rows, charts)
- `src/utils/`: Utility functions (e.g., mock data updates)
- `setInterval`: Triggers Redux dispatch to simulate real-time changes

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   cd crypto-price-tracker
2. **Install dependencies**
  ```bash
  npm install
 ```

3. **Run the app**
 ```bash
npm start
 ```

## 🌟 Bonus Features (Optional)
WebSocket integration with Binance API

Sorting/filtering (e.g., Top Gainers)

Persistent state via localStorage

Unit tests for reducers and selectors

TypeScript support

## 🧾 License
MIT

## 👨‍💻 Author
Your Name – @Pratikp4912

Let me know if you want this customized with your name, GitHub repo URL, or if you'd like help creating the demo GIF/video!


