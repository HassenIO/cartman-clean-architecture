import { ItemsAdapter } from '../ItemsAdapter';
import { StorageInterface } from '../definitions/StorageInterface';
import { Item } from '../../entities';

const sword = ['0', 'Sword'];

class ItemsStorage implements StorageInterface {
  getAll = (): Array<Array<any>> => [sword];

  get = (itemId: number): Array<any> => sword;

  set = (id: number, data: any) => {};
  save = () => {};
}

describe('ItemsAdapter', () => {
  let itemsStorage: ItemsStorage;

  beforeAll(() => {
    itemsStorage = new ItemsStorage();
  });

  it('getItem', () => {
    // Given
    const itemId = 0;
    const itemsAdapter = new ItemsAdapter(itemsStorage);
    // When
    const item = itemsAdapter.getItem(itemId);
    // Then
    expect(item).toEqual(new Item(0, 'Sword'));
  });
});
