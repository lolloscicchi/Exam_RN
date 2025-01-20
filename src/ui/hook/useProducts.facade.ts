import { useCallback, useState } from 'react';
import { Product } from '../models/product.model';

export const useProducts = () => {
  const apiAllProducts = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState<Product[]>([]);

  const refreshProducts = useCallback(async () => {
    try {
      const response = await fetch(apiAllProducts);
      const data: Product[] = await response.json();
      setProducts([...data]);
    } catch (error) {
      console.error('Error fetching carts:', error);
    }
  }, []);

  return {
    products,
    setProducts,
    refreshProducts,
  };
};
