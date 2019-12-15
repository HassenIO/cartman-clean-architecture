import { Cart } from '../Cart';
import { User } from '../User';
import { Item } from '../Item';

describe('Cart entity', () => {
  it('should initialise a cart', () => {
    // Given
    const user = new User(1234, 'Jon Snow', 'jonsnow@got.com');
    const item = new Item(1234, 'Sword');
    const cart = new Cart(user, item);
    // When
    const newCart = cart.get();
    // Then
    expect(newCart.user).toEqual(user);
    expect(newCart.item).toEqual(item);
  });
});
