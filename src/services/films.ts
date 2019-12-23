import http from './http';

import Film from '~/models/Film';

export async function getFilms(): Promise<Film[]> {
  const { data } = await http.get('/films');
  return data.results;
}

export async function getFilm(url: string): Promise<Film | null> {
  const { data } = await http.get(url);
  return data;
}
