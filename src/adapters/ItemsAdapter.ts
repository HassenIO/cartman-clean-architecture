import { StorageInterface } from './definitions/StorageInterface';
import { Item } from '../entities';

export class ItemsAdapter {
  private itemStorage: StorageInterface;

  constructor(itemStorage: StorageInterface) {
    this.itemStorage = itemStorage;
  }

  getItem = (itemId: number): Item => {
    const [id, name] = this.itemStorage.get(itemId);
    return new Item(parseInt(id), name);
  };
}
