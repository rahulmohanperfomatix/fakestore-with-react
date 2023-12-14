export type ProductRating = {
    rate: number;
    count: number;
  }
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
  }

export type ProductDetails = Product;

export enum ActionType {
  FETCH_PRODUCT_LIST = "Fetch product list",
  FETCH_CATEGORIES = "Fetch category list",
  FETCH_PRODUCT_DETAILS = "Fetch product details"
}