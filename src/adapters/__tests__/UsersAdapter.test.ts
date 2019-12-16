import { UsersAdapter } from '../UsersAdapter';
import { StorageInterface } from '../definitions/StorageInterface';
import { User } from '../../entities';

const jonSnow = ['0', 'Jon Snow', 'jonsnow@got.com'];

class UsersStorage implements StorageInterface {
  getAll = (): Array<Array<any>> => [jonSnow];

  get = (userId: number): Array<any> => jonSnow;

  set = (id: number, data: any) => {};
  save = () => {};
}

describe('UsersAdapter', () => {
  let usersStorage: UsersStorage;

  beforeAll(() => {
    usersStorage = new UsersStorage();
  });

  it('getUser', () => {
    // Given
    const userId = 0;
    const usersAdapter = new UsersAdapter(usersStorage);
    // When
    const user = usersAdapter.getUser(userId);
    // Then
    expect(user).toEqual(new User(0, 'Jon Snow', 'jonsnow@got.com'));
  });
});
