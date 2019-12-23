import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-flow: column;
`;

export const DetailsItem = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 20px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const DetailsItemTitle = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

export const DetailsItemRow = styled.div`
  font-size: 20px;
`;

export const DetailsItemLabel = styled.span`
  font-style: italic;
  display: inline-block;
  width: 200px;
`;

export const DetailsItemValue = styled.span``;
