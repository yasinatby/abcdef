// src/pages/ProductList.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map(p => (
        <Link
          key={p._id}
          to={`/products/${p._id}`}
          className="border rounded-xl p-4 hover:shadow-lg transition"
        >
          <img src={p.image} alt={p.name} className="h-40 object-cover w-full mb-2 rounded-lg" />
          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-sm text-gray-600">{p.price} €</p>
        </Link>
      ))}
    </div>
  );
}
