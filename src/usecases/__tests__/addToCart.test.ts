import { User, Item, Cart } from '../../entities';
import { addToCart } from '../addToCart';

describe('addToCart Use Case', () => {
  let itemId: number;
  let userId: number;

  beforeAll(() => {
    itemId = 1234;
    userId = 1234;
  });

  it('should return a cart id when everything is OK', () => {
    // Given
    const getUser = (id: number) => new User(id, 'Jon Snow', 'jonsnow@got.com');
    const getItem = (id: number) => new Item(id, 'Sword');
    const saveCart = (cart: Cart) => 999;
    // When
    const result = addToCart({ itemId, userId, getUser, getItem, saveCart });
    // Then
    expect(result).toEqual({ id: 999 });
  });

  it('should throw an error when failed to extract user', () => {
    // Given
    const getUser = (id: number) => {
      throw new Error('User not found');
    };
    const getItem = (id: number) => new Item(id, 'Sword');
    const saveCart = (cart: Cart) => 999;
    // When
    const result = () =>
      addToCart({ itemId, userId, getUser, getItem, saveCart });
    // Then
    expect(result).toThrowError('User not found');
  });

  it('should throw an error when failed to extract item', () => {
    // Given
    const getUser = (id: number) => new User(id, 'Jon Snow', 'jonsnow@got.com');
    const getItem = (id: number) => {
      throw new Error('Item not found');
    };
    const saveCart = (cart: Cart) => 999;
    // When
    const result = () =>
      addToCart({ itemId, userId, getUser, getItem, saveCart });
    // Then
    expect(result).toThrowError('Item not found');
  });

  it('should throw an error when failed to save cart', () => {
    // Given
    const getUser = (id: number) => new User(id, 'Jon Snow', 'jonsnow@got.com');
    const getItem = (id: number) => new Item(id, 'Phone');
    const saveCart = (cart: Cart) => {
      throw new Error("Can't save cart");
    };
    // When
    const result = () =>
      addToCart({ itemId, userId, getUser, getItem, saveCart });
    // Then
    expect(result).toThrowError("Can't save cart");
  });
});
