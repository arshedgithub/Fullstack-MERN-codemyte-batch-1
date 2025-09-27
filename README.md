## File Architecture

src/
├── api/                # Firebase API calls (auth, firestore, storage, etc.)
│   ├── auth.js
│   ├── products.js
│   ├── orders.js
│   └── firebaseConfig.js
│
├── components/         # Reusable UI components
│   ├── Navbar/
│   ├── Footer/
│   ├── ProductCard/
│   └── CartItem/
│
├── context/            # Global state with React Context (Auth, Cart, etc.)
│   ├── AuthContext.jsx
│   └── CartContext.jsx
│
├── hooks/              # Custom React hooks
│   ├── useAuth.js
│   └── useCart.js
│
├── pages/              # Page-level components (route targets)
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Orders.jsx
│   └── Login.jsx
│
├── routes/             # Centralized route definitions
│   └── AppRoutes.jsx
│
├── utils/              # Helpers & constants
│   ├── formatPrice.js
│   └── validators.js
│
├── App.jsx             # Root component
├── main.jsx            # Entry point (Vite)
└── index.css           # Global styles
