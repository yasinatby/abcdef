// src/store/CartContext.jsx
import { createContext, useState } from 'react';
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems(prev => [...prev, product]);
  };

  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}
