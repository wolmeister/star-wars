import http from './http';

import Planet from '~/models/Planet';

export async function getPlanet(url: string): Promise<Planet> {
  const { data } = await http.get(url);
  return data;
}
