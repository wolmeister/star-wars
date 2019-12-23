import http from './http';

import Starship from '~/models/Starship';

export async function getStarship(url: string): Promise<Starship> {
  const { data } = await http.get(url);
  return data;
}
