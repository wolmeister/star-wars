import Planet from '~/models/Planet';

import planets from '~/_mocks/planets';

export async function getPlanets(urls?: string): Promise<Planet[]> {
  if (!urls) {
    return planets;
  }
  return planets.filter(p => urls.indexOf(p.url) >= -1);
}

export async function getPlanet(url: string): Promise<Planet | null> {
  return planets.find(p => p.url === url) || null;
}
