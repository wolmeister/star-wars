import Character from '~/models/Character';

import characters from '~/_mocks/characters';

export async function getCharacters(urls?: string): Promise<Character[]> {
  if (!urls) {
    return characters;
  }
  return characters.filter(c => urls.indexOf(c.url) >= -1);
}

export async function getPeople(url: string): Promise<Character | null> {
  return characters.find(c => c.url === url) || null;
}
