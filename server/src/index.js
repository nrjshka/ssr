import 'babel-polyfill';
import express from 'express';
import renderer from './helper/renderer';
import createStore from './helper/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  // Some logic to initialize and load data into the store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening to 3000');
});
