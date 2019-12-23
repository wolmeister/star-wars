import React, { useState, useEffect } from 'react';

import { getCharacter } from '~/services/characters';
import Character from '~/models/Character';
import Loading from '~/components/Loading';
import {
  Details,
  DetailsItem,
  DetailsItemTitle,
  DetailsItemRow,
  DetailsItemLabel,
  DetailsItemValue,
} from '~/components/Details';
import { CharactersDetailsProps } from './types';

export default function CharactersDetails({ film }: CharactersDetailsProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCharacters() {
      const result = await Promise.all(film.characters.map(getCharacter));
      setCharacters(result);
      setLoading(false);
    }
    setLoading(true);
    loadCharacters();
  }, [film]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Details>
      {characters.map(c => (
        <DetailsItem key={c.url}>
          <DetailsItemTitle>{c.name}</DetailsItemTitle>
          <DetailsItemRow>
            <DetailsItemLabel>Gender: </DetailsItemLabel>
            <DetailsItemValue>{c.gender}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Height: </DetailsItemLabel>
            <DetailsItemValue>{c.height}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Mass: </DetailsItemLabel>
            <DetailsItemValue>{c.mass}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Birth year: </DetailsItemLabel>
            <DetailsItemValue>{c.birth_year}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Skin color: </DetailsItemLabel>
            <DetailsItemValue>{c.skin_color}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Hair color: </DetailsItemLabel>
            <DetailsItemValue>{c.hair_color}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Eye color: </DetailsItemLabel>
            <DetailsItemValue>{c.eye_color}</DetailsItemValue>
          </DetailsItemRow>
        </DetailsItem>
      ))}
    </Details>
  );
}
