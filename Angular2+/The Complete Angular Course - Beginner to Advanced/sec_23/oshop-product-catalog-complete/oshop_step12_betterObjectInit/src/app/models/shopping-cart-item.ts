import { Product } from './product';

export class ShoppingCartItem {
  // product: Product;
  // quantity: number;
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  constructor(intit?: Partial<ShoppingCartItem>) {}

  get totalPrice() {
  	return this.price * this.quantity;
  }
}