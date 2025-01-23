import { useCallback, useState } from 'react';
import { CategoryType, Product, SortingType } from '../models/product.model';
import { FAVORITE_PRODUCTS } from '../../core/storage/types';
import { storage } from '../../core/storage/storage';

export const useProducts = () => {
  const apiAllProducts = 'https://fakestoreapi.com/products';
  const apiProductCategories = 'https://fakestoreapi.com/products/categories';
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
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
      setFilteredProducts([...data]);
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
      const storedFavorites = storage.getItem(FAVORITE_PRODUCTS);
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
      let filteredProducts: Product[];

      if (categorySelected === category) {
        filteredProducts = [...initialProducts];
        setCategory(CategoryType.INITIAL);
      } else {
        setCategory(categorySelected);
        filteredProducts = initialProducts.filter((product: Product) => {
          return product.category === categorySelected;
        });
      }

      if (ratingSorting !== SortingType.INITIAL) {
        filteredProducts.sort((a: Product, b: Product) => {
          if (ratingSorting === SortingType.ASCENDENT) {
            return a.rating.rate - b.rating.rate;
          }
          return b.rating.rate - a.rating.rate;
        });
      }

      // Aggiorna lo stato dei prodotti
      setProducts([...filteredProducts]);
      setFilteredProducts([...filteredProducts]);
    },
    [category, initialProducts, ratingSorting] // Aggiungi ratingSorting alle dipendenze
  );

  const onRatingSortingApply = useCallback(
    (sortingType: SortingType) => {
      if (sortingType === SortingType.INITIAL) {
        setProducts([...initialProducts]);
        setRatingSorting(SortingType.INITIAL);
        return;
      }
      const sortedProducts: Product[] = [...products].sort((a: Product, b: Product) => {
        setRatingSorting(sortingType);
        if (sortingType === SortingType.ASCENDENT) {
          return a.rating.rate - b.rating.rate;
        }
        return b.rating.rate - a.rating.rate;
      });
      setProducts(sortedProducts);
    },
    [initialProducts, products]
  );

  const onSearch = useCallback(
    (text: string) => {
      console.log('"', text, '"');
      console.log(!text);

      if (!text) {
        setProducts(filteredProducts);
        return;
      }
      const finalFilteredProducts = [...filteredProducts].filter((product: Product) => {
        return (
          product.title.toLowerCase().includes(text) ||
          product.description.toLowerCase().includes(text)
        );
      });
      console.log(finalFilteredProducts);
      setProducts(finalFilteredProducts);
    },
    [filteredProducts]
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
    onSearch,
  };
};
