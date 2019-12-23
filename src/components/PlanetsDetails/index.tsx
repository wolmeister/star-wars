import React, { useState, useEffect } from 'react';

import { getPlanet } from '~/services/planets';
import Planet from '~/models/Planet';
import Loading from '~/components/Loading';
import {
  Details,
  DetailsItem,
  DetailsItemTitle,
  DetailsItemRow,
  DetailsItemLabel,
  DetailsItemValue,
} from '~/components/Details';
import { PlanetsDetailsProps } from './types';

export default function PlanetsDetails({ film }: PlanetsDetailsProps) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPlanets() {
      const result = await Promise.all(film.planets.map(getPlanet));
      setPlanets(result);
      setLoading(false);
    }
    setLoading(true);
    loadPlanets();
  }, [film]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Details>
      {planets.map(p => (
        <DetailsItem key={p.url}>
          <DetailsItemTitle>{p.name}</DetailsItemTitle>
          <DetailsItemRow>
            <DetailsItemLabel>Rotation period: </DetailsItemLabel>
            <DetailsItemValue>{p.rotation_period}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Orbital period: </DetailsItemLabel>
            <DetailsItemValue>{p.orbital_period}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Diameter: </DetailsItemLabel>
            <DetailsItemValue>{p.diameter}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Climate: </DetailsItemLabel>
            <DetailsItemValue>{p.climate}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Gravity: </DetailsItemLabel>
            <DetailsItemValue>{p.gravity}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Terrain: </DetailsItemLabel>
            <DetailsItemValue>{p.terrain}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Surface water: </DetailsItemLabel>
            <DetailsItemValue>{p.surface_water}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Population: </DetailsItemLabel>
            <DetailsItemValue>{p.population}</DetailsItemValue>
          </DetailsItemRow>
        </DetailsItem>
      ))}
    </Details>
  );
}
