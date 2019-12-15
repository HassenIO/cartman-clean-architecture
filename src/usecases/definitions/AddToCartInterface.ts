import { Item, User, Cart } from '../../entities';

export interface AddToCartInterface {
  userId: number;
  itemId: number;
  getItem(itemId: number): Item;
  getUser(userId: number): User;
  saveCart(cart: Cart): number;
}
