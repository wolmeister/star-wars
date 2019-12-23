import React, { useState, useEffect } from 'react';

import { getStarship } from '~/services/starships';
import Starship from '~/models/Starship';
import Loading from '~/components/Loading';
import {
  Details,
  DetailsItem,
  DetailsItemTitle,
  DetailsItemRow,
  DetailsItemLabel,
  DetailsItemValue,
} from '~/components/Details';
import { StarshipsDetailsProps } from './types';

export default function StarshipsDetails({ film }: StarshipsDetailsProps) {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStarships() {
      const result = await Promise.all(film.starships.map(getStarship));
      setStarships(result);
      setLoading(false);
    }
    setLoading(true);
    loadStarships();
  }, [film]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Details>
      {starships.map(s => (
        <DetailsItem key={s.url}>
          <DetailsItemTitle>{s.name}</DetailsItemTitle>
          <DetailsItemRow>
            <DetailsItemLabel>Model: </DetailsItemLabel>
            <DetailsItemValue>{s.model}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Manufacturer: </DetailsItemLabel>
            <DetailsItemValue>{s.manufacturer}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Cost: </DetailsItemLabel>
            <DetailsItemValue>{s.cost_in_credits}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Length: </DetailsItemLabel>
            <DetailsItemValue>{s.length}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Max speed: </DetailsItemLabel>
            <DetailsItemValue>{s.max_atmosphering_speed}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Crew: </DetailsItemLabel>
            <DetailsItemValue>{s.crew}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Passengers: </DetailsItemLabel>
            <DetailsItemValue>{s.passengers}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Cargo capacity: </DetailsItemLabel>
            <DetailsItemValue>{s.cargo_capacity}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Consumables: </DetailsItemLabel>
            <DetailsItemValue>{s.consumables}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Hyperdrive rating: </DetailsItemLabel>
            <DetailsItemValue>{s.hyperdrive_rating}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>MGLT: </DetailsItemLabel>
            <DetailsItemValue>{s.MGLT}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Starship class: </DetailsItemLabel>
            <DetailsItemValue>{s.starship_class}</DetailsItemValue>
          </DetailsItemRow>
        </DetailsItem>
      ))}
    </Details>
  );
}
