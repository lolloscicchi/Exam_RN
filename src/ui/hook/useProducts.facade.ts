import { useCallback, useState } from 'react';
import { Product } from '../models/product.model';
import { FAVORITE_PRODUCTS } from '../../core/storage/types';
import { storage } from '../../core/storage/storage';

export const useProducts = () => {
  const apiAllProducts = 'https://fakestoreapi.com/products';
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const refreshProducts = useCallback(async () => {
    try {
      const response = await fetch(apiAllProducts);
      const data: Product[] = await response.json();
      setInitialProducts([...data]);
      setProducts([...data]);
    } catch (error) {
      console.error('Error fetching carts:', error);
    }
  }, []);

  const loadFavorites = useCallback(async () => {
    try {
      const storedFavorites = await storage.getItem(FAVORITE_PRODUCTS);
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavoriteIds(parsedFavorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, []);

  const updateFavoriteIds = useCallback(
    async (item: Product) => {
      const updatedFavorites = favoriteIds.includes(item.id)
        ? favoriteIds.filter((id) => id !== item.id)
        : [...favoriteIds, item.id];

      setFavoriteIds(updatedFavorites);
      storage.setItem(FAVORITE_PRODUCTS, JSON.stringify(updatedFavorites));
    },
    [favoriteIds]
  );

  return {
    products,
    setProducts,
    favoriteIds,
    setFavoriteIds,
    refreshProducts,
    loadFavorites,
    updateFavoriteIds,
  };
};
