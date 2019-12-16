import { StorageInterface } from './definitions/StorageInterface';
import { User } from '../entities';

export class UsersAdapter {
  private userStorage: StorageInterface;

  constructor(userStorage: StorageInterface) {
    this.userStorage = userStorage;
  }

  getUser = (userId: number): User => {
    const [id, name, email] = this.userStorage.get(userId);
    return new User(parseInt(id), name, email);
  };
}
