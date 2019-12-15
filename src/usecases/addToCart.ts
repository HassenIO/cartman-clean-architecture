import { Cart } from '../entities';
import { AddToCartInterface } from './definitions/AddToCartInterface';

export function addToCart(inputs: AddToCartInterface) {
  const { userId, itemId, getUser, getItem, saveCart } = inputs;
  try {
    const user = getUser(userId);
    const item = getItem(itemId);
    const cart = new Cart(user, item);
    const cartId = saveCart(cart);
    return { id: cartId };
  } catch (error) {
    throw new Error(error);
  }
}
