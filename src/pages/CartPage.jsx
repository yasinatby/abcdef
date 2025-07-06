// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cart, addToCart, removeOneFromCart, removeAllFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.product.price || 0),
    0
  );

  // Leitet nur zum Checkout weiter, erzeugt noch keine Bestellung
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Warenkorb ist leer.');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <h1 className="text-2xl font-bold mb-6">🛒 Dein Warenkorb</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Dein Warenkorb ist leer.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(({ product, quantity }) => (
            <div
              key={product._id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <div>
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">Einzelpreis: € {product.price}</p>
                <p className="text-sm">Menge: {quantity}</p>
                <p className="text-sm font-medium">
                  Gesamt: € {(quantity * product.price).toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <div className="flex gap-2">
                  <button
                    onClick={() => removeOneFromCart(product)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    −
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeAllFromCart(product)}
                  className="text-xs text-gray-500 underline mt-2"
                >
                  Alle entfernen
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4 font-bold text-xl">
            Gesamtbetrag: € {total.toFixed(2)}
          </div>

          <div className="text-right mt-6">
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Jetzt kaufen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
