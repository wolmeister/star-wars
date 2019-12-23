import React, { useState, useEffect } from 'react';

import { getSpecie } from '~/services/species';
import Specie from '~/models/Specie';
import Loading from '~/components/Loading';
import {
  Details,
  DetailsItem,
  DetailsItemTitle,
  DetailsItemRow,
  DetailsItemLabel,
  DetailsItemValue,
} from '~/components/Details';
import { SpeciesDetailsProps } from './types';

export default function SpeciesDetails({ film }: SpeciesDetailsProps) {
  const [species, setSpecies] = useState<Specie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSpecies() {
      const result = await Promise.all(film.species.map(getSpecie));
      setSpecies(result);
      setLoading(false);
    }
    setLoading(true);
    loadSpecies();
  }, [film]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Details>
      {species.map(s => (
        <DetailsItem key={s.url}>
          <DetailsItemTitle>{s.name}</DetailsItemTitle>
          <DetailsItemRow>
            <DetailsItemLabel>Classification: </DetailsItemLabel>
            <DetailsItemValue>{s.classification}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Designation: </DetailsItemLabel>
            <DetailsItemValue>{s.designation}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Language: </DetailsItemLabel>
            <DetailsItemValue>{s.language}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Average height: </DetailsItemLabel>
            <DetailsItemValue>{s.average_height}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Average lifespan: </DetailsItemLabel>
            <DetailsItemValue>{s.average_lifespan}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Skin colors: </DetailsItemLabel>
            <DetailsItemValue>{s.skin_colors}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Hair colors: </DetailsItemLabel>
            <DetailsItemValue>{s.hair_colors}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Eye colors: </DetailsItemLabel>
            <DetailsItemValue>{s.eye_colors}</DetailsItemValue>
          </DetailsItemRow>
        </DetailsItem>
      ))}
    </Details>
  );
}
