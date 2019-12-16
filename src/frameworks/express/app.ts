import * as express from 'express';
import * as bodyParser from 'body-parser';
import { File } from '../storage/file';
import { UsersAdapter, ItemsAdapter, CartsAdapter } from '../../adapters';
import { addToCart } from '../../usecases';

const userStorage = new File('users.csv');
const itemStorage = new File('items.csv');
const cartStorage = new File('carts.csv');

const usersAdapter = new UsersAdapter(userStorage);
const itemsAdapter = new ItemsAdapter(itemStorage);
const cartsAdapter = new CartsAdapter(cartStorage);

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.post('/cart', (req, res) => {
  const cart = addToCart({
    userId: req.body.userId,
    itemId: req.body.itemId,
    getUser: usersAdapter.getUser,
    getItem: itemsAdapter.getItem,
    saveCart: cartsAdapter.saveCart,
  });
  res.json({ cart });
});

export default app;
