import http from './http';

import Specie from '~/models/Specie';

export async function getSpecie(url: string): Promise<Specie> {
  const { data } = await http.get(url);
  return data;
}
