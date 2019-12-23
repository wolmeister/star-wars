import React, { useState, useEffect } from 'react';

import { getVehicle } from '~/services/vehicles';
import Vehicle from '~/models/Vehicle';
import Loading from '~/components/Loading';
import {
  Details,
  DetailsItem,
  DetailsItemTitle,
  DetailsItemRow,
  DetailsItemLabel,
  DetailsItemValue,
} from '~/components/Details';
import { VehiclesDetailsProps } from './types';

export default function VehiclesDetails({ film }: VehiclesDetailsProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadVehicles() {
      const result = await Promise.all(film.vehicles.map(getVehicle));
      setVehicles(result);
      setLoading(false);
    }
    setLoading(true);
    loadVehicles();
  }, [film]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Details>
      {vehicles.map(v => (
        <DetailsItem key={v.url}>
          <DetailsItemTitle>{v.name}</DetailsItemTitle>
          <DetailsItemRow>
            <DetailsItemLabel>Model: </DetailsItemLabel>
            <DetailsItemValue>{v.model}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Manufacturer: </DetailsItemLabel>
            <DetailsItemValue>{v.manufacturer}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Cost: </DetailsItemLabel>
            <DetailsItemValue>{v.cost_in_credits}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Length: </DetailsItemLabel>
            <DetailsItemValue>{v.length}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Max speed: </DetailsItemLabel>
            <DetailsItemValue>{v.max_atmosphering_speed}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Crew: </DetailsItemLabel>
            <DetailsItemValue>{v.crew}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Passengers: </DetailsItemLabel>
            <DetailsItemValue>{v.passengers}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Cargo capacity: </DetailsItemLabel>
            <DetailsItemValue>{v.cargo_capacity}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Consumables: </DetailsItemLabel>
            <DetailsItemValue>{v.consumables}</DetailsItemValue>
          </DetailsItemRow>
          <DetailsItemRow>
            <DetailsItemLabel>Vehicle class: </DetailsItemLabel>
            <DetailsItemValue>{v.vehicle_class}</DetailsItemValue>
          </DetailsItemRow>
        </DetailsItem>
      ))}
    </Details>
  );
}
