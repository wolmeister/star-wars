import Film from '~/models/Film';

import films from '~/_mocks/films';

export async function getFilms(urls?: string): Promise<Film[]> {
  if (!urls) {
    return films;
  }
  return films.filter(f => urls.indexOf(f.url) >= -1);
}

export async function getFilm(url: string): Promise<Film | null> {
  return films.find(f => f.url === url) || null;
}
