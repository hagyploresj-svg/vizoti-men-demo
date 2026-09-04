export type CategorySlug =
  | "jean"
  | "tshirt"
  | "gomlek"
  | "ceket"
  | "takim"
  | "alt-giyim";

export interface Category {
  slug: CategorySlug;
  name: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
  category: CategorySlug;
  color: string;
  colorName: string;
  sizes: string[];
  soldOutSizes: string[];
  isNew: boolean;
  isBestSeller: boolean;
  discount?: number;
  fabric: string;
  care: string;
}

export interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}
