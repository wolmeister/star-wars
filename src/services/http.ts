import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 60 * 60 * 1000,
});

export default axios.create({
  baseURL: 'https://swapi.co/api/',
  adapter: cache.adapter,
});
