import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts)
    .catch(error => console.error('Failed to fetch users:', error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}
