export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export enum Categories {
  INITIAL = 'INITIAL',
  MEN_CLOTHING = "men's clothing",
  JEWELERY = 'jewelery',
  ELECTRONICS = 'electronics',
  WOMEN_CLOTHINS = "women's clothing",
}
