import { CartsAdapter } from '../CartsAdapter';
import { StorageInterface } from '../definitions/StorageInterface';
import { Cart, User, Item } from '../../entities';

class CartsStorage implements StorageInterface {
  getAll = (): Array<Array<any>> => [[]]; // Already one element

  get = (cartId: number): Array<any> => [];

  set = (id: number, data: [number, number]) => {};
  save = () => {};
}

describe('CartsAdapter', () => {
  let cartsStorage: CartsStorage;

  beforeAll(() => {
    cartsStorage = new CartsStorage();
  });

  it('getUser', () => {
    // Given
    const user = new User(0, 'Jon Snow', 'jonsnow@got.com');
    const item = new Item(0, 'Sword');
    const cart = new Cart(user, item);
    const cartsAdapter = new CartsAdapter(cartsStorage);
    // When
    const newCartId = cartsAdapter.saveCart(cart);
    // Then
    expect(newCartId).toEqual(1);
  });
});
