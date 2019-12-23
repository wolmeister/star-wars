import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Film from '~/models/Film';
import { getFilms } from '~/services/films';
import Timeline from '~/components/Timeline';
import FilmDetails from '~/components/FilmContent';
import {
  StyledFilm,
  FilmWrapper,
  AnimatedFilm,
  Content,
  Logo,
  TimelineWrapper,
} from './styles';

import logoSrc from '~/assets/logo.svg';

export default function() {
  const { filmId } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState<Film[]>([]);
  const [currentFilm, setCurrentFilm] = useState<Film | null>(null);

  useEffect(() => {
    getFilms().then(allFilms => {
      setFilms(
        allFilms.sort((a, b) => {
          return (
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
          );
        })
      );
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const film = films.find(f => f.url.endsWith(`${filmId}/`));
    if (film) {
      setCurrentFilm(film);
    }
  }, [filmId, films]);

  function onChangeFilm(film: Film) {
    // scheme: https://swapi.co/api/films/1/
    const parts = film.url.split('/');
    const id = parts[parts.length - 2];
    history.push(`/films/${id}`);
  }

  return (
    <StyledFilm>
      <FilmWrapper>
        <AnimatedFilm animate={!loading ? 'open' : 'closed'} initial="closed">
          <Logo src={logoSrc} />
          <Content>{currentFilm && <FilmDetails film={currentFilm} />}</Content>
          <TimelineWrapper>
            <Timeline
              items={films}
              currentItem={currentFilm}
              onChange={onChangeFilm}
            />
          </TimelineWrapper>
        </AnimatedFilm>
      </FilmWrapper>
    </StyledFilm>
  );
}
