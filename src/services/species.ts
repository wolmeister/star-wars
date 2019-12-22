import Specie from '~/models/Specie';

import species from '~/_mocks/species';

export async function getSpecies(urls?: string): Promise<Specie[]> {
  if (!urls) {
    return species;
  }
  return species.filter(s => urls.indexOf(s.url) >= -1);
}

export async function getSpecie(url: string): Promise<Specie | null> {
  return species.find(s => s.url === url) || null;
}
