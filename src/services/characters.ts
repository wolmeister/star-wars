import http from './http';

import Character from '~/models/Character';

export async function getCharacter(url: string): Promise<Character> {
  const { data } = await http.get(url);
  return data;
}
