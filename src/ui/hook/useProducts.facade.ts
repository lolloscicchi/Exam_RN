import { useCallback, useState } from 'react';
import { CategoryType, Product, SortingType } from '../models/product.model';
import { FAVORITE_PRODUCTS } from '../../core/storage/types';
import { storage } from '../../core/storage/storage';

export const useProducts = () => {
  const apiAllProducts = 'https://fakestoreapi.com/products';
  const apiProductCategories = 'https://fakestoreapi.com/products/categories';
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [category, setCategory] = useState<CategoryType>(CategoryType.INITIAL);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [ratingSorting, setRatingSorting] = useState<SortingType>(SortingType.INITIAL);

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
  const refreshCategories = useCallback(async () => {
    try {
      const response = await fetch(apiProductCategories);
      const data: CategoryType[] = await response.json();
      setCategories([...data]);
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

  const onCategoriesFilterApply = useCallback(
    (categorySelected: CategoryType) => {
      if (categorySelected === category) {
        setProducts([...initialProducts]);
        setCategory(CategoryType.INITIAL);
        return;
      }
      setCategory(categorySelected);

      const filteredProducts: Product[] = [...initialProducts].filter((products: Product) => {
        return products.category === categorySelected;
      });

      setProducts([...filteredProducts]);
      console.log(filteredProducts);
    },
    [category, initialProducts]
  );

  const onRatingSortingApply = useCallback(
    (sortingType: SortingType) => {
      if (sortingType === SortingType.INITIAL) {
        setProducts([...initialProducts]);
        setRatingSorting(SortingType.INITIAL);
        return;
      }
      console.log(products.at(2).rating.rate);
      const sortedProducts: Product[] = [...products].sort((a: Product, b: Product) => {
        setRatingSorting(sortingType);
        if (sortingType === SortingType.ASCENDENT) {
          return a.rating.rate - b.rating.rate;
        }
        console.log(a.rating.rate, ' : ', b.rating.rate);
        return b.rating.rate - a.rating.rate;
      });
      setProducts(sortedProducts);
    },
    [initialProducts, products]
  );

  return {
    products,
    setProducts,
    favoriteIds,
    setFavoriteIds,
    category,
    setCategory,
    categories,
    setCategories,
    ratingSorting,
    setRatingSorting,
    refreshProducts,
    refreshCategories,
    loadFavorites,
    updateFavoriteIds,
    onCategoriesFilterApply,
    onRatingSortingApply,
  };
};
