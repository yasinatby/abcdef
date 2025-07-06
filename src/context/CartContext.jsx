import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.product.name === product.name);
      if (existing) {
        return prevCart.map(item =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeOneFromCart = (product) => {
    setCart((prevCart) => {
      return prevCart.flatMap(item => {
        if (item.product.name === product.name) {
          if (item.quantity > 1) {
            return [{ ...item, quantity: item.quantity - 1 }];
          } else {
            return []; // remove completely
          }
        }
        return [item];
      });
    });
  };

  const removeAllFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.product.name !== product.name));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeOneFromCart, removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
