import React from 'react';

import {
  Details,
  DetailsItem,
  DetailsItemRow,
  DetailsItemLabel,
  DetailsItemValue,
} from '~/components/Details';
import { FilmDetailsProps } from './types';

export default function FilmDetails({ film }: FilmDetailsProps) {
  return (
    <Details>
      <DetailsItem>
        <DetailsItemRow>
          <DetailsItemLabel>Director: </DetailsItemLabel>
          <DetailsItemValue>{film.director}</DetailsItemValue>
        </DetailsItemRow>
        <DetailsItemRow>
          <DetailsItemLabel>Producer(s): </DetailsItemLabel>
          <DetailsItemValue>{film.producer}</DetailsItemValue>
        </DetailsItemRow>
        <DetailsItemRow>
          <DetailsItemLabel>Release date: </DetailsItemLabel>
          <DetailsItemValue>
            {new Date(film.release_date).toLocaleDateString('en-US')}
          </DetailsItemValue>
        </DetailsItemRow>
      </DetailsItem>
    </Details>
  );
}
