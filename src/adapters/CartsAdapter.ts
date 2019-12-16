import { StorageInterface } from './definitions/StorageInterface';
import { Cart } from '../entities';

export class CartsAdapter {
  private cartStorage: StorageInterface;

  constructor(cartStorage: StorageInterface) {
    this.cartStorage = cartStorage;
  }

  saveCart = (cart: Cart): number => {
    const previousCart = this.cartStorage.getAll();
    const id = previousCart.length;
    const { user, item } = cart.get();
    this.cartStorage.set(id, [user.get().id, item.get().id]);
    this.cartStorage.save();
    return id;
  };
}
