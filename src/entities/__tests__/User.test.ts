import { User } from '../User';

describe('User entity', () => {
  it('should initialise a user', () => {
    // Given
    const id = 1234;
    const name = 'Jon Snow';
    const email = 'jonsnow@got.com';
    const user = new User(id, name, email);
    // When
    const newUser = user.get();
    // Then
    expect(newUser.id).toEqual(id);
    expect(newUser.name).toEqual(name);
    expect(newUser.email).toEqual(email);
  });

  it('should throw an error if bad email', () => {
    // Given
    const id = 1234;
    const name = 'Jon Snow';
    const email = 'jonsnow.got.com';
    // When
    const func = () => new User(id, name, email);
    // Then
    expect(func).toThrowError('The provided email is not a valid email');
  });
});
