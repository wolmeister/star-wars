import React from 'react';

import { StyledLoading, Spinner, BounceA, BounceB } from './styles';

export default function Loading() {
  return (
    <StyledLoading>
      <Spinner>
        <BounceA />
        <BounceB />
      </Spinner>
    </StyledLoading>
  );
}
