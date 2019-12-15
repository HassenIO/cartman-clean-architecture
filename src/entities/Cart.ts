import { User } from './User';
import { Item } from './Item';

export class Cart {
  private user: User;
  private item: Item;

  constructor(user: User, item: Item) {
    this.user = user;
    this.item = item;
  }

  get() {
    return {
      user: this.user,
      item: this.item,
    };
  }
}
