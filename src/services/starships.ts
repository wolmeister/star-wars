import Starship from '~/models/Starship';

import starships from '~/_mocks/starships';

export async function getStarships(urls?: string): Promise<Starship[]> {
  if (!urls) {
    return starships;
  }
  return starships.filter(s => urls.indexOf(s.url) >= -1);
}

export async function getStarship(url: string): Promise<Starship | null> {
  return starships.find(s => s.url === url) || null;
}
