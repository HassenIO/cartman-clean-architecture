import { Item } from '../Item';

describe('Item entity', () => {
  it('should initialise an item', () => {
    // Given
    const id = 1234;
    const name = 'Sword';
    const item = new Item(id, name);
    // When
    const newItem = item.get();
    // Then
    expect(newItem.id).toEqual(id);
    expect(newItem.name).toEqual(name);
  });
});
